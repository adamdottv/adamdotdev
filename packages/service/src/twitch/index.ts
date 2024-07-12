import { Hono } from "hono";
import { TwitchController } from "./controller";

export module TwitchApi {
  export const controller = new TwitchController();

  export const route = new Hono().get("/", async (c) => {
    controller.ok();
    return c.text("ok");
  });
}
