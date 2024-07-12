import { bus } from "sst/aws/bus";
import { Twitch } from "@adamdotdev/core/twitch/index";
import { Realtime } from "@adamdotdev/core/live/realtime";

export const handler = bus.subscriber([...Twitch.AllEvents], async (event) => {
  console.log("event", event);

  switch (event.type) {
    case "twitch.channel.online":
      await Realtime.push({
        type: "live.stream.updated",
        properties: await Twitch.Stream.get(),
      });
      await Twitch.Rewards.enableAll();
      break;
    case "twitch.channel.offline":
      await Realtime.push({
        type: "live.stream.updated",
        properties: await Twitch.Stream.get(),
      });
      await Twitch.Rewards.disableAll();
      break;
    case "twitch.channel.update":
      await Realtime.push({
        type: "live.stream.updated",
        properties: await Twitch.Stream.get(),
      });
      break;
    case "twitch.chat.message":
      await Realtime.push({
        type: "live.twitch.chat.message",
        properties: {
          message: event.properties.message,
          user: event.properties.user,
          ...event.properties.msg,
          ...event.properties.msg.userInfo,
        },
      });
      break;
    case "twitch.channel.follow":
      await Twitch.Notifications.follower(event);
      break;
    case "twitch.channel.subscribe":
      await Twitch.Notifications.subscriber(event);
      break;
    case "twitch.channel.subscription.gift":
      await Twitch.Notifications.gift(event);
      break;
    case "twitch.channel.cheer":
      await Twitch.Notifications.cheer(event);
      break;
    case "twitch.reward.redeem":
      await Twitch.Notifications.redemption(event);
      break;
    case "twitch.channel.raid":
      await Twitch.Notifications.raid(event);
      break;

    default:
      break;
  }
});
