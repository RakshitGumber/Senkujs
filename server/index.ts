import staticPlugin from "@elysiajs/static";
import { Elysia } from "elysia";

new Elysia()
  .use(staticPlugin({ prefix: "/", assets: "web/routes" }))
  .use(staticPlugin({ prefix: "/public", assets: "public" }))
  .listen(3000);

console.log(`Your app is started at port: http://localhost:3000`);
