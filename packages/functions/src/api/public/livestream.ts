import { HTTPException } from "hono/http-exception";
import { Twitch } from "@adamdotdev/core/twitch/index";
import { Hono } from "hono";

export module LivestreamApi {
  export const route = new Hono()
    .get("/", async (c) => {
      const stream = await Twitch.Stream.get();
      if (!stream)
        throw new HTTPException(404, { message: "Adam isn't live right now" });
      return c.json({ result: stream });
    })
    .get("/schedule", async (c) => {
      const schedule = await Twitch.Stream.getSchedule();
      if (!schedule)
        throw new HTTPException(404, { message: "Adam isn't live right now" });
      return c.json({ result: schedule });
    });
}
