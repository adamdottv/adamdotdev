import { Terminal } from "@adamdotdev/core/terminal/index";
import { stripe } from "@adamdotdev/core/terminal/stripe";
import { Hono } from "hono";
import { Resource } from "sst";

export module StripeWebhook {
  export const route = new Hono().post("/", async (ctx) => {
    const sig = ctx.req.header("stripe-signature");
    const evt = await stripe.webhooks.constructEventAsync(
      await ctx.req.text(),
      sig!,
      Resource.TerminalStripeWebhook.secret,
    );
    switch (evt.type) {
      case "payment_intent.succeeded":
        await Terminal.notifyOnSale(evt);
    }
    return ctx.json({});
  });
}
