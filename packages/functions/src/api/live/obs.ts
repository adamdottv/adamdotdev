import { OBS } from "@adamdotdev/core/overlays/obs";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { Scene } from "@adamdotdev/core/schema";

export module ObsApi {
  export const route = new Hono().put(
    "/scene",
    zValidator("json", z.object({ name: Scene.shape.name })),
    async (c) => {
      const body = c.req.valid("json");
      const result = await OBS.setScene(body.name);
      if (typeof result === "string") return c.text(result, 503);
      return c.json(result);
    },
  );
}
