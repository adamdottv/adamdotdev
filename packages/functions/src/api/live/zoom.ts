import { Hono } from "hono";
import { OBS } from "@adamdotdev/core/overlays/obs";

export module ZoomApi {
  export const route = new Hono()
    .post("/", async (c) => {
      await OBS.zoomIn();
      return c.text("ok");
    })
    .delete("/", async (c) => {
      await OBS.zoomOut();
      return c.text("ok");
    });
}
