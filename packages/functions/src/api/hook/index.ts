import { Hono } from "hono";
import { StripeWebhook } from "./stripe";

export const hookApi = new Hono().route("/stripe", StripeWebhook.route);
