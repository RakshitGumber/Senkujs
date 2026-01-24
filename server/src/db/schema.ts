import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  username: text().notNull(),
  github_id: int().notNull().unique(),
  avatar_url: text(),
  email: text().notNull().unique(),
});
