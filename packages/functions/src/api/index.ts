import { logger } from "hono/logger";
import { compress } from "hono/compress";
import { handle, streamHandle } from "hono/aws-lambda";
import { publicApi } from "./public";
import { hookApi } from "./hook";
import { liveApi } from "./live";
import { Hono } from "hono";

const app = new Hono();
app.use("*", logger());
app.use("*", compress());
app.use("*", async (c, next) => {
  await next();
  if (!c.res.headers.get("cache-control")) {
    c.header("cache-control", "no-store, max-age=0, must-revalidate, no-cache");
  }
});

app.get("/", async (c) => {
  return c.json({
    Result: { message: "Hello, world!" },
  });
});

const routes = app.route("/public", publicApi).route("/live", liveApi);
app.route("/hook", hookApi);

export type AppType = typeof routes;
export const handler = process.env.SST_LIVE ? handle(app) : streamHandle(app);
