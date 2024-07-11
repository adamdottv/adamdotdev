import { AuthMiddleware } from "../middleware/auth";
import { Hono } from "hono";
import { TransitionApi } from "./transition";
import { BreakApi } from "./break";
import { ZoomApi } from "./zoom";
import { SpotifyApi } from "./spotify";
import { Live } from "@adamdotdev/core/overlays/index";

export const apexRoute = new Hono()
  .post("/", async (c) => {
    const result = await Live.start();
    if (typeof result === "string") return c.text(result, 503);
    return c.json(result);
  })
  .delete("/", async (c) => {
    const result = await Live.stop();
    if (typeof result === "string") return c.text(result, 503);
    return c.json(result);
  });

export const liveApi = new Hono()
  .use(AuthMiddleware)
  .route("/", apexRoute)
  .route("/transition", TransitionApi.route)
  .route("/break", BreakApi.route)
  .route("/zoom", ZoomApi.route)
  .route("/spotify", SpotifyApi.route);
