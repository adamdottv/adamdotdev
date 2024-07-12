import { apiRouter } from "./api";
import { domain } from "./dns";
import { realtime } from "./realtime";
import { secret } from "./secret";

export const web = new sst.aws.Nextjs("WebApp", {
  path: "packages/web",
  domain: {
    name: domain,
    redirects: ["www." + domain],
  },
  link: [apiRouter, realtime, secret.ApiKey],
  environment: {
    NEXT_PUBLIC_API_URL: apiRouter.url,
    NEXT_PUBLIC_REALTIME_ENDPOINT: realtime.endpoint,
    NEXT_PUBLIC_REALTIME_AUTHORIZER: realtime.authorizer,
    NEXT_PUBLIC_REALTIME_TOPIC: `${$app.name}/${$app.stage}/live`,
    NEXT_PUBLIC_DEV: String($dev),
  },
});

export const outputs = {
  web: web.url,
};
