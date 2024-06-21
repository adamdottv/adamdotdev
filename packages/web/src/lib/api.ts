import { Resource } from "sst";
import { ClientResponse, hc } from "hono/client";
import type { AppType } from "@adamdotdev/functions/api";

export const client = () => {
  return hc<AppType>(Resource.ApiRouter.url, {
    fetch,
    headers: {
      // Authorization: `Bearer ${token}`,
    },
  });
};

export async function handleResponse<T>(
  res: ClientResponse<{ error: string } | { result: T }>,
) {
  if (res.ok) {
    const data = await res.json();
    if ("error" in data) {
      console.error(data.error);
      return data.error;
    }
    return data.result;
  }
  const error = await res.text();
  console.error(error);
  return error;
}
