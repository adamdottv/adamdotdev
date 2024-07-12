import { Hono } from "hono";
import { Live } from "@adamdotdev/core/live/index";

export module BreakApi {
  export const route = new Hono()
    .post("/", async (c) => {
      await Live.startBreak();
      return c.text("ok");
    })
    .delete("/", async (c) => {
      await Live.stopBreak("Camera");
      return c.text("ok");
    });
}
