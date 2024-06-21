import { OpenAPIHono } from "@hono/zod-openapi";
import { LivestreamApi } from "./livestream";

export const publicApi = new OpenAPIHono().route(
  "/livestream",
  LivestreamApi.route,
);
