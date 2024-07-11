import { bus } from "sst/aws/bus";
import { Notifications } from "@adamdotdev/core/notifications/index";
import { OBS } from "@adamdotdev/core/overlays/obs";
import { Spotify } from "@adamdotdev/core/spotify/index";
import { Live } from "@adamdotdev/core/overlays/index";

export const handler = bus.subscriber([...OBS.AllEvents], async (event) => {
  console.log("event", event);

  // TODO: don't do this
  await Notifications.send(event);

  switch (event.type) {
    case "obs.stream.started":
      await Live.start();
      break;
    case "obs.scene.changed":
      if (
        event.properties.from === "Intro" &&
        event.properties.to === "Camera"
      ) {
        await Spotify.play({ fade: true });
      }
      if (event.properties.to === "Screen") {
        await OBS.startTimer();
      }
      break;

    default:
      break;
  }
});
