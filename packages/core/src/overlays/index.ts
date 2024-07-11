import { fn } from "../util/fn";
import { Realtime } from "./realtime";
import { delay } from "../util";
import { Scene } from "../schema";
import { OBS } from "./obs";
import { Spotify } from "../spotify";
import { Twitch } from "../twitch";

export module Live {
  export const start = async () => {
    await OBS.setScene("Init");
    const response = await OBS.startStream();
    await delay(1000 * 30);
    await OBS.setScene("Intro");
    return response;
  };

  export const stop = async () => {
    Spotify.pause({ fade: true });
    await transition("Outro");
    await Twitch.Stream.raid();
    await delay(1000 * 82); // 1:22 theme song
    return await OBS.stopStream();
  };

  export const startBreak = async () => {
    Spotify.pause({ fade: true });
    const response = await transition("Break");
    return response;
  };

  export const stopBreak = fn(Scene.shape.name.optional(), async (scene) => {
    await Realtime.push({ type: "live.fade.audio.out", properties: {} });
    await delay(3000);
    const response = await transition(scene ?? "Camera");
    await Spotify.play({ fade: true, resume: true });
    return response;
  });

  export const transition = fn(Scene.shape.name, async (scene) => {
    OBS.stopTimer();

    await Realtime.push({
      type: "live.transition.started",
      properties: { to: scene },
    });

    await delay(800);

    const result = await OBS.setScene(scene);
    if (typeof result === "string") {
      await Realtime.push({
        type: "live.transition.ended",
        properties: { to: scene },
      });
      throw new Error(result);
    }

    await delay(1000);
    await Realtime.push({
      type: "live.transition.ended",
      properties: { to: scene },
    });
  });
}
