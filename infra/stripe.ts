import { domain } from "./dns";

sst.linkable(stripe.WebhookEndpoint, function (endpoint) {
  return {
    properties: {
      id: endpoint.id,
      secret: endpoint.secret,
    },
  };
});

export const webhook = new stripe.WebhookEndpoint("TerminalStripeWebhook", {
  url: $interpolate`https://api.${domain}/hook/stripe`,
  metadata: { stage: $app.stage },
  enabledEvents: ["payment_intent.succeeded"],
});
