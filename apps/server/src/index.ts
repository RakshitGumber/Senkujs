// import { opentelemetry } from "@elysiajs/opentelemetry";
// import swagger from "@elysiajs/swagger";

import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { generateProject } from "@senkujs/create";

import "dotenv/config";
import { betterAuth } from "./middlewares/auth";
import { auth } from "./libs/better-auth/auth";
import { zipDir } from "./utils/zip";

const app = new Elysia()
  .use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization", "Cookie", "Set-Cookie"],
    }),
  )
  // .use(opentelemetry())
  // .use(swagger())
  .onError(({ error, code }) => {
    if (code === "NOT_FOUND") return "Not Found :(";

    console.error(error);
  })
  .mount(auth.handler)
  .get("/", () => "Hello this is Senku speaking.")
  .get("health", () => "OK")
  .use(betterAuth)
  .post("/create", async ({ body, set }) => {
    const outDir = `./temp/${body.name}`;
    await generateProject(
      {
        name: body.name,

        runtime: "browser",

        framework: body.framework,
        language: body.language,
        styling: { type: body.styling },
      },
      outDir,
    );

    const zipPath = `${outDir}.zip`;
    await zipDir(outDir, zipPath);

    set.headers["Content-Type"] = "application/zip";
    set.headers["Content-Disposition"] = `attachment; filename=first.zip`;

    return Bun.file(zipPath);
  })
  .listen(3000);

console.log(`Server is running at ${app.server?.url}`);
console.log(`Swagger documentation available at ${app.server?.url}/swagger`);

export type App = typeof app;
