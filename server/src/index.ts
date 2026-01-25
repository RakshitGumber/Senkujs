// import { opentelemetry } from "@elysiajs/opentelemetry";
// import swagger from "@elysiajs/swagger";

import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";

import "dotenv/config";
import { betterAuth } from "./middlewares/auth";

const app = new Elysia()
  .use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
    }),
  )
  // .use(opentelemetry())
  // .use(swagger())
  .onError(({ error, code }) => {
    if (code === "NOT_FOUND") return "Not Found :(";

    console.error(error);
  })
  .use(betterAuth)
  .get("/", () => "Hello this is Senku speaking.")
  .get("health", () => "OK")
  .listen(3000);

console.log(`Server is running at ${app.server?.url}`);
console.log(`Swagger documentation available at ${app.server?.url}/swagger`);

export type App = typeof app;
