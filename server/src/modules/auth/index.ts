import { Elysia } from "elysia";
import { SignJWT } from "jose";

import { db } from "../../db";
import { eq } from "drizzle-orm";
import { usersTable } from "../../schema";

const encoder = new TextEncoder();
const jwtSecret = encoder.encode(process.env.JWT_SECRET!);

export const auth = new Elysia({ prefix: "/auth" })
  .get("/github", ({ set }) => {
    const params = new URLSearchParams({
      client_id: process.env.GITHUB_CLIENT_ID!,
      scope: "read:user user:email",
    });

    set.redirect = `https://github.com/login/oauth/authorize?${params}`;
  })
  .get("/github/callback", async ({ query, set, cookie }) => {
    const code = query.code as string;

    if (!code) {
      set.status = 400;
      return "Missing code";
    }

    // Exchange code → access_token
    const tokenRes = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new URLSearchParams({
          client_id: process.env.GITHUB_CLIENT_ID!,
          client_secret: process.env.GITHUB_CLIENT_SECRET!,
          code,
        }),
      },
    );

    const { access_token } = await tokenRes.json();

    // Fetch GitHub user
    const userRes = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "User-Agent": "bun-app",
      },
    });

    const ghUser = await userRes.json();

    // Upsert user in DB
    await db.insert(usersTable).values({
      github_id: ghUser.id,
      username: ghUser.login,
      avatar_url: ghUser.avatar_url,
      email: ghUser.email,
    });
    const user = await db.query.usersTable.findFirst({
      where: (u, q) => q.eq(u.github_id, ghUser.id),
    });

    if (!user) {
      return (set.redirect = `${process.env.FRONTEND_URL}/auth/failed`);
    }
    // Create JWT
    const jwt = await new SignJWT({
      sub: String(user.id),
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(jwtSecret);

    // Set cookie
    cookie.auth.set({
      value: jwt,
      httpOnly: true,
      path: "/",
      sameSite: "lax",
    });

    // Redirect to frontend
    set.redirect = `${process.env.FRONTEND_URL}/auth/success`;
  });
