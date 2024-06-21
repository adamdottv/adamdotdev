"use server";

import { client, handleResponse } from "@/lib/api";
import { cache } from "react";

export const getLivestream = cache(async () => {
  const res = await client().public.livestream.$get();
  return handleResponse(res);
});
