import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
export const usersTable = sqliteTable("users_table", {
  id: text("id").primaryKey(),
  username: text().notNull(),
  githubId: int().notNull().unique(),
  avatarUrl: text(),
  createdAt: int("created_at", { mode: "timestamp" }).defaultNow(),
});

export const sessions = sqliteTable("sessions", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull(),
  expiresAt: int("expires_at", { mode: "timestamp" }),
});
