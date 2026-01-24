import { randomUUID } from "crypto";
import { db } from "@/db";
import { sessions } from "@/schema";
import { eq } from "drizzle-orm";

export async function createSession(userId: string) {
  const id = randomUUID();
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  await db.insert(sessions).values({
    id,
    userId,
    expiresAt,
  });

  return { id, expiresAt };
}

export async function getSession(sessionId: string) {
  const [session] = await db
    .select()
    .from(sessions)
    .where(eq(sessions.id, sessionId));

  return session;
}
