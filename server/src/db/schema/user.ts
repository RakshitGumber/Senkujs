import { relations } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { project } from "./project";

export const user = sqliteTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => Bun.randomUUIDv7()),
  username: text().notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("emailVerified", {
    mode: "boolean",
  }).notNull(),
  avatarUrl: text(),
  createdAt: integer("createdAt", {
    mode: "timestamp",
  })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer("updatedAt", {
    mode: "timestamp",
  })
    .notNull()
    .$onUpdateFn(() => new Date()),
});

export type User = typeof user.$inferSelect;
export type NewUser = typeof user.$inferInsert;

export const usersRelations = relations(user, ({ many }) => ({
  projects: many(project),
  //   messages: many(message),
}));
