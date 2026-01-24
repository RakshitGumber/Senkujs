import { Elysia } from "elysia";
import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";

const db = drizzle({ connection: { url: process.env.DB_FILE_NAME } });

const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.url}`);
