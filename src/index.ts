import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger'

const app = new Elysia({
  serve: {
    hostname: '0.0.0.0'
  }
})
  .use(swagger())
  .get("/", () => "Hello Elysia")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
