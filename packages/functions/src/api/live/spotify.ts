import { Spotify } from "@adamdotdev/core/spotify/index";
import { Hono } from "hono";

export module SpotifyApi {
  export const route = new Hono().get("/", async (c) => {
    return c.json({ result: (await Spotify.get()) || { playing: false } });
  });
}
