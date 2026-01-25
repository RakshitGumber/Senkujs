import { cors } from "@elysiajs/cors";
import { opentelemetry } from "@elysiajs/opentelemetry";
import swagger from "@elysiajs/swagger";

import { Elysia } from "elysia";

import "dotenv/config";

import { authService } from "@/services/auth-service";

const app = new Elysia()
  .use(cors())
  .use(opentelemetry())
  .use(swagger())
  .onError(({ error, code }) => {
    if (code === "NOT_FOUND") return "Not Found :(";

    console.error(error);
  })
  .use(authService)
  .get("/", () => "Hello this is Senku speaking.")
  .get("health", () => "OK")
  .listen(3000);

console.log(`Server is running at ${app.server?.url}`);
console.log(`Swagger documentation available at ${app.server?.url}/swagger`);

export type App = typeof app;
