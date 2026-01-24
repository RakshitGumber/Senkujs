import { Elysia } from "elysia";
import { SignJWT } from "jose";
import { randomUUID } from "crypto";

import { db } from "@/db";
import { usersTable } from "@/schema";
import { eq } from "drizzle-orm";
import { createSession } from "@/utils/session";

const encoder = new TextEncoder();
const jwtSecret = encoder.encode(process.env.JWT_SECRET!);

export const auth = new Elysia({ prefix: "/auth" })
  .get("/github", ({ redirect }) => {
    const params = new URLSearchParams({
      client_id: process.env.GITHUB_CLIENT_ID!,
      scope: "read:user user:email",
    });

    return redirect(`https://github.com/login/oauth/authorize?${params}`);
  })
  .get("/github/callback", async ({ query, set, redirect }) => {
    const code = query.code as string;

    if (!code) {
      set.status = 400;
      return "Missing code";
    }

    const tokenRes = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new URLSearchParams({
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        }),
      },
    );

    const { access_token } = await tokenRes.json();

    const userRes = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const ghUser = await userRes.json();

    let [user]: any = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.githubId, ghUser.id));

    if (!user) {
      const id = randomUUID();

      await db.insert(usersTable).values({
        id,
        githubId: ghUser.id,
        username: ghUser.login,
        avatarUrl: ghUser.avatar_url,
      });

      user = { id };
    }

    const session = await createSession(user.id);

    set.cookie = {
      session: {
        value: session.id,
        httpOnly: true,
        path: "/",
        expires: session.expiresAt,
      },
    };

    return redirect("http://localhost:5173/dashboard");
  });
