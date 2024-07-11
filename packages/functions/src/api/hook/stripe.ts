import { Notifications } from "@adamdotdev/core/notifications/index";
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
        const bags = Math.floor(evt.data.object.amount / 2200);
        const notification = {
          type: "terminal-sale",
          title: "Terminal Coffee Purchased",
          body: evt.data.object.shipping?.name ?? "Anonymous Buyer",
          note: "> ssh terminal.shop to buy yours",
          number: bags,
          label: "bags",
        };
        console.log("publishing", notification);
        await Notifications.send(notification);
    }
    return ctx.json({});
  });
}
