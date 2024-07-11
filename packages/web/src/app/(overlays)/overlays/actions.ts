"use server";

import { handleResponse } from "@/lib/api";
import { client } from "@/lib/api/server";
import { cache } from "react";

export const zoomIn = cache(async () => {
  await client().live.zoom.$post();
});

export const zoomOut = cache(async () => {
  await client().live.zoom.$delete();
});

export const getSpotifyInfo = cache(async () => {
  const res = await client().live.spotify.$get();
  return handleResponse(res);
});
