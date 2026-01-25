import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { user } from "./user";

export const session = sqliteTable("session", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => Bun.randomUUIDv7()),
  userId: text("userId")
    .notNull()
    .references(() => user.id),
  token: text("token").notNull(),
  expiresAt: integer("expiresAt", {
    mode: "timestamp",
  }).notNull(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
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
