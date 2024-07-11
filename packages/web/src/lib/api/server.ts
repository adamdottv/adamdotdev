import { hc } from "hono/client";
import type { AppType } from "@adamdotdev/functions/api";
import { Resource } from "sst";

export const client = () => {
  return hc<AppType>(Resource.ApiRouter.url, {
    fetch,
    headers: {
      Authorization: `Bearer ${Resource.ApiKey.value}`,
    },
  });
};
