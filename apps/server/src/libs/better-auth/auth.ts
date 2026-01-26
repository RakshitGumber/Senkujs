import { db } from "@/db";
import { betterAuth } from "better-auth";

import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
  // emailAndPassword: {
  //   enabled: true,
  //   password: {
  //     hash: (input: string) => Bun.password.hash(input),
  //     verify: ({ password, hash }) => Bun.password.verify(password, hash),
  //   },
  // },
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  },

  trustedOrigins: ["http://localhost:5173"],
  advanced: {
    useSecureCookies: true,
    defaultCookieAttributes: {
      sameSite: "none",
      httpOnly: true,
    },
  },
});
