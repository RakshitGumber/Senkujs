import { Elysia } from "elysia";
import "dotenv/config";
import { auth } from "./modules/auth";

const app = new Elysia()
  .use(auth)
  .get("/", () => "Hello Elysia")
  .listen(3000);

console.log(`Server is running at ${app.server?.url}`);

export type App = typeof app;
