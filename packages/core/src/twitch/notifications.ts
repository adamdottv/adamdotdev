import { bus } from "sst/aws/bus";
import { Twitch } from ".";
import { event } from "sst/event";
import { Notification } from "../notification";

type TwitchEvent<T extends event.Definition> = Parameters<
  Parameters<typeof bus.subscriber<T>>[1]
>[0];

type FollowerEvent = TwitchEvent<typeof Twitch.Events.ChannelFollow>;
type SubscriberEvent = TwitchEvent<typeof Twitch.Events.ChannelSubscribe>;
type RedemptionEvent = TwitchEvent<typeof Twitch.Events.RewardRedeem>;
type GiftEvent = TwitchEvent<typeof Twitch.Events.ChannelSubscriptionGift>;
type CheerEvent = TwitchEvent<typeof Twitch.Events.ChannelCheer>;
type RaidEvent = TwitchEvent<typeof Twitch.Events.ChannelRaid>;

export module Notifications {
  export async function follower(event: FollowerEvent) {
    await Notification.create({
      externalID: new Date().toLocaleDateString(),
      title: "New Follower",
      body: event.properties.userDisplayName,
      color: "#C4F042", // lime
    });
  }

  export async function subscriber(event: SubscriberEvent) {
    await Notification.create({
      externalID: new Date().toLocaleDateString(),
      title: `Tier ${event.properties.tier[0]} Subscriber`,
      body: event.properties.userDisplayName,
      color: "#F76190", // crimson
      sound: "tada4",
    });
  }

  export async function redemption(event: RedemptionEvent) {
    const color =
      event.properties.rewardCost > 10_000
        ? "#B54EFF" // purple
        : event.properties.rewardCost > 1_000
          ? "#25D0AB" // mint
          : "#FFC34E"; // amber

    await Notification.create({
      externalID: event.properties.id,
      title: "Reward Redeemed",
      body: event.properties.userDisplayName,
      note: event.properties.rewardTitle,
      count: event.properties.rewardCost,
      countLabel: event.properties.rewardCost === 1 ? "point" : "points",
      sound: "nope",
      color,
    });
  }

  export async function cheer(event: CheerEvent) {
    const cleanupCheerMessage = (message: string) => {
      return message
        .replace(
          /(Anon|Cheer|BibleThump|cheerwhal|Corgo|uni|ShowLove|Party|SeemsGood|Pride|Kappa|FrankerZ|HeyGuys|DansGame|EleGiggle|TriHard|Kreygasm|4Head|SwiftRage|NotLikeThis|FailFish|VoHiYo|PJSalt|MrDestructoid|bday|RIPCheer|Shamrock)\d+/gi,
          "",
        )
        .replace(/\s+/g, " ")
        .trim();
    };

    const message = cleanupCheerMessage(event.properties.message);
    const { bits } = event.properties;
    const color =
      bits >= 10_000
        ? "#FE2C2D"
        : bits >= 5_000
          ? "#4FAFFC"
          : bits >= 1_000
            ? "#47D7B3"
            : bits >= 100
              ? "#C982FC"
              : "#CCC9D0";

    await Notification.create({
      externalID: new Date().toLocaleDateString(),
      title: "Cheer!",
      body: event.properties.userDisplayName ?? "(anonymous)",
      note: message,
      count: event.properties.bits,
      countLabel: event.properties.bits === 1 ? "bit" : "bits",
      sound: "tada1",
      color,
    });
  }

  export async function gift(event: GiftEvent) {
    const gifter =
      event.properties.gifterId ?? event.properties.gifterName ?? "anonymous";
    const externalID = gifter + event.properties.cumulativeAmount?.toString();

    await Notification.create({
      externalID,
      title: "Subscription Gift",
      body: event.properties.gifterDisplayName ?? "(anonymous)",
      note: `Gifted ${event.properties.amount}x Tier ${event.properties.tier[0]} subs!`,
      count: event.properties.amount,
      countLabel: event.properties.amount === 1 ? "sub" : "subs",
      color: "#68DDFD", // sky
      sound: "tada3",
    });
  }

  export async function raid(event: RaidEvent) {
    await Notification.create({
      externalID: new Date().toLocaleDateString(),
      title: "Incoming Raid",
      body: event.properties.raidingBroadcasterDisplayName,
      note: `Raiding with a party of ${event.properties.viewers}!`,
      count: event.properties.viewers,
      countLabel: event.properties.viewers === 1 ? "viewer" : "viewers",
      color: "#FFB224", // amber
      sound: "tada2",
    });
  }
}
