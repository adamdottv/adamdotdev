import { Hono } from "hono";
import { SpotifyController } from "./controller";

export module SpotifyApi {
  const controller = new SpotifyController();

  export const route = new Hono().get("/", async (c) => {
    controller.ping();
    return c.text("ok");
  });
}
