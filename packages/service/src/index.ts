import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { Resource } from "sst";
import { ObsApi } from "./obs";
import { TwitchApi } from "./twitch";
import { SpotifyApi } from "./spotify";

const app = new Hono().get("/", (c) => c.text("ok")); // health check

const api = new Hono().use(async (c, next) => {
  const authorization = c.req.header("authorization");
  if (!authorization)
    throw new HTTPException(403, {
      message: "Authorization header is required.",
    });
  const token = authorization.split(" ")[1];
  if (!token)
    throw new HTTPException(403, {
      message: "Bearer token is required.",
    });
  if (token !== Resource.ApiKey.value) {
    throw new HTTPException(403, {
      message: "Invalid API key",
    });
  }

  return next();
});

api.route("/obs", ObsApi.route);
api.route("/twitch", TwitchApi.route);
api.route("/spotify", SpotifyApi.route);
app.route("/api", api);

export default {
  port: 80,
  fetch: app.fetch,
};
