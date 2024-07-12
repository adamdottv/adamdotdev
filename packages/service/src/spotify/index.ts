import { Hono } from "hono";
import { SpotifyController } from "./controller";

export module SpotifyApi {
  export const controller = new SpotifyController();

  export const route = new Hono().get("/", async (c) => {
    controller.ok();
    return c.text("ok");
  });
}
