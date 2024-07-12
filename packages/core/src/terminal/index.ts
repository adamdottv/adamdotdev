import Stripe from "stripe";
import { Realtime } from "../live/realtime";

export module Terminal {
  export const notifyOnSale = async (
    event: Stripe.PaymentIntentSucceededEvent,
  ) => {
    const bags = Math.floor(event.data.object.amount / 2200);
    await Realtime.push({
      type: "live.notification",
      properties: {
        id: event.id,
        title: "Terminal Coffee Purchased",
        body:
          event.data.object.shipping?.name?.split(" ")?.[0] ??
          "Anonymous Buyer",
        note: "> ssh terminal.shop to buy yours",
        count: bags,
        countLabel: "bags",
      },
    });
  };
}
