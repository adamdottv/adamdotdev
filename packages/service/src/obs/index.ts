import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { ObsProxy } from "./proxy";
import { Scene } from "@adamdotdev/core/schema";

export module ObsApi {
  export const proxy = new ObsProxy();

  export const route = new Hono()
    .use(async (c, next) => {
      if (!proxy.connected) return c.text("OBS not connected", 503);
      return next();
    })
    .get("/stream", async (c) => {
      return c.json({ streaming: proxy.streaming });
    })
    .post("/stream", async (c) => {
      await proxy.startStream();
      return c.text("ok");
    })
    .delete("/stream", async (c) => {
      await proxy.stopStream();
      return c.text("ok");
    })
    .get("/recording", async (c) => {
      return c.json({ recording: proxy.recording });
    })
    .post("/recording", async (c) => {
      await proxy.startRecording();
      return c.text("ok");
    })
    .delete("/recording", async (c) => {
      await proxy.stopRecording();
      return c.text("ok");
    })
    .get("/zoom", async (c) => {
      return c.json({ zoomed: proxy.zoomed });
    })
    .post("/zoom", async (c) => {
      await proxy.zoomIn();
      return c.text("ok");
    })
    .delete("/zoom", async (c) => {
      await proxy.zoomOut();
      return c.text("ok");
    })
    .get("/scene", (c) => {
      return c.json({ name: proxy.currentScene });
    })
    .post("/timer", async (c) => {
      await proxy.startTimer();
      return c.text("ok");
    })
    .delete("/timer", async (c) => {
      await proxy.stopTimer();
      return c.text("ok");
    })
    .put(
      "/scene",
      zValidator("json", z.object({ name: Scene.shape.name })),
      async (c) => {
        const body = c.req.valid("json");
        const previous = proxy.currentScene;
        await proxy.setScene(body.name);
        return c.json({ previous, current: body.name });
      },
    );
}
