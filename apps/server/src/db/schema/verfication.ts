import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const verification = sqliteTable("verification", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => Bun.randomUUIDv7()),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: integer("expiresAt", {
    mode: "timestamp",
  }).notNull(),
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
