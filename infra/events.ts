import { realtime } from "./realtime";
import { secret } from "./secret";

export const bus = new sst.aws.Bus("Bus");
bus.subscribe({
  handler: "packages/functions/src/events/event.handler",
  link: [
    realtime,
    secret.Twitch.UserId,
    secret.Twitch.ClientId,
    secret.Twitch.ClientSecret,
    secret.Twitch.Tokens,
  ],
  permissions: [{ actions: ["iot:*"], resources: ["*"] }],
});
