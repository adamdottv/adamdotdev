"use server";

import { Resource } from "sst";
import { client, handleResponse } from "@/lib/api";
import { cache } from "react";

export const getLivestream = cache(async () => {
  const res = await client(Resource.ApiRouter.url).public.livestream.$get();
  return handleResponse(res);
});
