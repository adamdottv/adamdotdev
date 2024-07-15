import { table } from "@adamdotdev/core/dynamo/index";
import { Realtime } from "@adamdotdev/core/live/realtime";
import { Notification } from "@adamdotdev/core/notification/index";

export const handler = table.subscriber(
  Notification.Entity,
  async (event, raw) => {
    // This ensures no duplicates
    if (raw.eventName === "INSERT") {
      await Realtime.push({
        type: "live.notification",
        properties: event,
      });
    }
  },
);
