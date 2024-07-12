import { service } from "./cluster";
import { database } from "./database";
import { realtime } from "./realtime";
import { secret } from "./secret";

export const bus = new sst.aws.Bus("Bus");
bus.subscribe(
  {
    handler: "packages/functions/src/events/twitch.handler",
    link: [
      database,
      realtime,
      secret.ObsPassword,
      service,
      ...Object.values(secret.Twitch),
      ...Object.values(secret.Spotify),
    ],
    permissions: [{ actions: ["iot:*"], resources: ["*"] }],
  },
  {
    pattern: {
      detailType: [{ prefix: { "equals-ignore-case": "twitch." } }],
    },
  },
);
bus.subscribe(
  {
    handler: "packages/functions/src/events/obs.handler",
    link: [
      database,
      realtime,
      secret.ObsPassword,
      service,
      ...Object.values(secret.Twitch),
      ...Object.values(secret.Spotify),
    ],
    permissions: [{ actions: ["iot:*"], resources: ["*"] }],
  },
  {
    pattern: {
      detailType: [{ prefix: { "equals-ignore-case": "obs." } }],
    },
  },
);
bus.subscribe(
  {
    handler: "packages/functions/src/events/spotify.handler",
    link: [
      database,
      realtime,
      secret.ObsPassword,
      ...Object.values(secret.Twitch),
      ...Object.values(secret.Spotify),
    ],
    permissions: [{ actions: ["iot:*"], resources: ["*"] }],
  },
  {
    pattern: {
      detailType: [{ prefix: { "equals-ignore-case": "spotify." } }],
    },
  },
);
