import { Hono } from "hono";
import { TwitchController } from "./controller";

export module TwitchApi {
  const controller = new TwitchController();

  export const route = new Hono().get("/", async (c) => {
    controller.ping();
    return c.text("ok");
  });
}
