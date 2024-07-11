import { bus } from "sst/aws/bus";
import { Spotify } from "@adamdotdev/core/spotify/index";
import { Realtime } from "@adamdotdev/core/overlays/realtime";

export const handler = bus.subscriber([...Spotify.AllEvents], async (event) => {
  console.log("event", event);

  switch (event.type) {
    case "spotify.playback.started":
      await Realtime.push({
        type: "live.spotify.playback.started",
        properties: event.properties,
      });
      break;
    case "spotify.playback.paused":
      await Realtime.push({
        type: "live.spotify.playback.paused",
        properties: event.properties,
      });
      break;
    case "spotify.track.changed":
      await Realtime.push({
        type: "live.spotify.track.changed",
        properties: event.properties,
      });
      break;

    default:
      break;
  }
});
