import { LivestreamApi } from "./livestream";
import { Hono } from "hono";

export const publicApi = new Hono().route("/livestream", LivestreamApi.route);
