import { Elysia } from "elysia";
import "dotenv/config";
import { auth } from "./modules/auth";
import { getSession } from "./utils/session";
import { db } from "./db";
import { usersTable } from "./schema";
import { eq } from "drizzle-orm";

import { cors } from "@elysiajs/cors";

const app = new Elysia()
  .use(auth)
  .use(cors())
  .get("/auth/me", async ({ cookie }) => {
    const sessionId = cookie.session?.value;
    if (!sessionId) return null;

    const session = await getSession(sessionId);
    if (!session) return null;

    const [user] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, session.userId));

    return user;
  })
  .get("/", () => "Hello Elysia")
  .listen(3000);

console.log(`Server is running at ${app.server?.url}`);

export type App = typeof app;
