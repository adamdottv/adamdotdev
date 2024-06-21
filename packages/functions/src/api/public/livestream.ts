import { OpenAPIHono, createRoute } from "@hono/zod-openapi";
import { HTTPException } from "hono/http-exception";
import { Twitch } from "@adamdotdev/core/twitch/index";
import { NotFound, Result } from "../common";

export module LivestreamApi {
  export const LivestreamSchema = Twitch.Stream.Info.openapi("Livestream");

  export const route = new OpenAPIHono().openapi(
    createRoute({
      method: "get",
      path: "/",
      responses: {
        404: NotFound("Adam isn't live right now"),
        200: Result(LivestreamSchema, "Returns Adam's current livestream"),
      },
    }),
    async (c) => {
      const stream = await Twitch.Stream.get();
      if (!stream)
        throw new HTTPException(404, { message: "Adam isn't live right now" });
      return c.json({ result: stream });
    },
  );
}
