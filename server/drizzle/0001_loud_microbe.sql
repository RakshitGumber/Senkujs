ALTER TABLE `users_table` RENAME COLUMN "github_id" TO "githubId";--> statement-breakpoint
ALTER TABLE `users_table` RENAME COLUMN "avatar_url" TO "avatarUrl";--> statement-breakpoint
CREATE TABLE `sessions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`expires_at` integer
);
--> statement-breakpoint
DROP INDEX `users_table_github_id_unique`;--> statement-breakpoint
DROP INDEX `users_table_email_unique`;--> statement-breakpoint
ALTER TABLE `users_table` ADD `created_at` integer DEFAULT (cast((julianday('now') - 2440587.5)*86400000 as integer));--> statement-breakpoint
CREATE UNIQUE INDEX `users_table_githubId_unique` ON `users_table` (`githubId`);--> statement-breakpoint
ALTER TABLE `users_table` DROP COLUMN `email`;