import { database } from "./database";
import { domain } from "./dns";
import { bus } from "./bus";
import { realtime } from "./realtime";
import { secret } from "./secret";
import { webhook } from "./stripe";
import { service } from "./cluster";
import { table } from "./table";

const api = new sst.aws.Function("Api", {
  url: true,
  streaming: !$dev,
  link: [
    bus,
    database,
    table,
    secret.ApiKey,
    secret.Twitch.UserId,
    secret.Twitch.ClientId,
    secret.Twitch.ClientSecret,
    secret.Twitch.Tokens,
    secret.TerminalStripeSecret,
    secret.Spotify.ClientId,
    secret.Spotify.ClientSecret,
    secret.Spotify.RefreshToken,
    secret.Spotify.AccessToken,
    webhook,
    realtime,
    service,
  ],
  permissions: [{ actions: ["iot:*"], resources: ["*"] }],
  handler: "./packages/functions/src/api/index.handler",
});

export const apiRouter = new sst.aws.Router("ApiRouter", {
  domain: "api." + domain,
  routes: { "/*": api.url },
});

export const outputs = {
  api: apiRouter.url,
};
