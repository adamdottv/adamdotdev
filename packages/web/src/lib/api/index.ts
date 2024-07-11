import { ClientResponse } from "hono/client";

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
