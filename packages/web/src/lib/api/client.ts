import { hc } from "hono/client";
import type { AppType } from "@adamdotdev/functions/api";

export const client = () => {
  return hc<AppType>(process.env.NEXT_PUBLIC_API_URL as string, {
    fetch,
  });
};
