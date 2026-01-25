import type { Context } from "elysia";
import { Elysia } from "elysia";

import { auth } from "@/libs/better-auth/server";

const betterAuthView = (context: Context & { request: Request }) => {
  const BETTER_AUTH_ACCEPT_METHODS = ["POST", "GET"];

  if (BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)) {
    return auth.handler(context.request);
  } else {
    return (context.set.status = 405);
  }
};

const authService = new Elysia().all("/api/auth/*", betterAuthView);

export { authService };
