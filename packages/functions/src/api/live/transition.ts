import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { Scene } from "@adamdotdev/core/schema";
import { Live } from "@adamdotdev/core/live/index";

export module TransitionApi {
  export const route = new Hono().post(
    "/",
    zValidator("json", z.object({ scene: Scene.shape.name })),
    async (c) => {
      const body = c.req.valid("json");
      try {
        await Live.transition(body.scene);
      } catch (error) {
        return c.text(String(error), 503);
      }
      return c.text("ok");
    },
  );
}
