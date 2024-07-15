import Stripe from "stripe";
import { Notification } from "../notification";

export module Terminal {
  export const notifyOnSale = async (
    event: Stripe.PaymentIntentSucceededEvent,
  ) => {
    const object = event.data.object;
    const bags = Math.floor(object.amount / 2200);
    const city = object.shipping?.address?.city;
    const state = object.shipping?.address?.state;
    const country = object.shipping?.address?.country;
    const body = `${city}, ${state ? state + ", " : ""}${country}`;
    await Notification.create({
      externalID: event.id,
      title: "Terminal Coffee Purchased",
      body,
      note: "> ssh terminal.shop to buy yours",
      count: bags,
      countLabel: bags === 1 ? "bag" : "bags",
    });
  };
}
