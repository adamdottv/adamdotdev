import { apiRouter } from "./api";
import { domain } from "./dns";
import { realtime } from "./realtime";

export const web = new sst.aws.Nextjs("WebApp", {
  path: "packages/web",
  // domain: {
  //   name: domain,
  //   redirects: ["www." + domain],
  // },
  link: [apiRouter, realtime],
});

export const outputs = {
  web: web.url,
};
