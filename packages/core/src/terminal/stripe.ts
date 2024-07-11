import { Resource } from "sst";
import { Stripe as StripeClient } from "stripe";

export const stripe = new StripeClient(Resource.TerminalStripeSecret.value, {
  httpClient: StripeClient.createFetchHttpClient(),
});
