"use server";

import { handleResponse } from "@/lib/api";
import { client } from "@/lib/api/server";
import { cache } from "react";

export const getLivestream = cache(async () => {
  const res = await client().public.livestream.$get();
  return handleResponse(res);
});
