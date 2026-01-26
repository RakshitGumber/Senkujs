import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations, sql } from "drizzle-orm";

import { user } from "./user";

export const project = sqliteTable("projects", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => Bun.randomUUIDv7()),
  name: text("title").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, {
      onDelete: "cascade",
    }),
  createdAt: integer("created_at", {
    mode: "timestamp",
  }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", {
    mode: "timestamp",
  })
    .default(sql`CURRENT_TIMESTAMP`)
    .$onUpdateFn(() => new Date()),
});

export type Project = typeof project.$inferSelect;
export type NewProject = typeof project.$inferInsert;

export const projectsRelation = relations(project, ({ one }) => ({
  user: one(user, {
    fields: [project.userId],
    references: [user.id],
  }),
}));

// Can use this later for likes

// export type Vote = typeof vote.$inferSelect;
// export type NewVote = typeof vote.$inferInsert;

// export const voteRelation = relations(vote, ({ one }) => ({
//   votedFor: one(pokemon, {
//     relationName: "votesFor",
//     fields: [vote.votedForId],
//     references: [pokemon.id],
//   }),
//   votedAgainst: one(pokemon, {
//     relationName: "votesAgainst",
//     fields: [vote.votedAgainstId],
//     references: [pokemon.id],
//   }),
// }));

// export const pokemonRelation = relations(pokemon, ({ many }) => ({
// 	votesFor: many(vote, {
// 		relationName: "votesFor",
// 	}),
// 	votesAgainst: many(vote, {
// 		relationName: "votesAgainst",
// 	}),
// }));

// For comments

// export const message = sqliteTable("messages", {
//   id: text("id")
//     .primaryKey()
//     .$defaultFn(() => Bun.randomUUIDv7()),
//   title: text("title").notNull(), // Add title field
//   content: text("content").notNull(),
//   userId: text("user_id")
//     .notNull()
//     .references(() => user.id, {
//       onDelete: "cascade",
//     }),
//   createdAt: integer("created_at", {
//     mode: "timestamp",
//   })
//     .notNull()
//     .$defaultFn(() => new Date()),
//   updatedAt: integer("updated_at", {
//     mode: "timestamp",
//   })
//     .notNull()
//     .$defaultFn(() => new Date())
//     .$onUpdateFn(() => new Date()),
// });

// export type Message = typeof message.$inferSelect;
// export type NewMessage = typeof message.$inferInsert;

// export const messageRelation = relations(message, ({ one }) => ({
//   user: one(user, {
//     fields: [message.userId],
//     references: [user.id],
//   }),
// }));
