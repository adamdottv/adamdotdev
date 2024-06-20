import { domain } from "./dns";
import { bus } from "./events";
import { secret } from "./secret";

const api = new sst.aws.Function("Api", {
  url: true,
  streaming: !$dev,
  link: [bus, secret.ApiKey],
  handler: "./packages/functions/src/api/index.handler",
});

export const apiRouter = new sst.aws.Router("ApiRouter", {
  // domain: "api." + domain,
  routes: { "/*": api.url },
});

export const outputs = {
  api: apiRouter.url,
};
