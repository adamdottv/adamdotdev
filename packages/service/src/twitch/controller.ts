import { ChatClient } from "@twurple/chat";
import { EventSubWsListener } from "@twurple/eventsub-ws";
import { Resource } from "sst";
import { bus } from "sst/aws/bus";
import { Twitch } from "@adamdotdev/core/twitch/index";
import { randomItem } from "@adamdotdev/core/util/index";

export class TwitchController {
  listener: EventSubWsListener | undefined;
  chatClient: ChatClient | undefined;

  constructor() {
    this.setup();
  }

  ok() {
    return true;
  }

  async setup() {
    if (!Resource.TwitchClientId.value) {
      console.warn("You haven't setup your Twitch environment variables!");
      return;
    }

    await this.setupEventSub();
    await this.setupChatBot();

    if (Resource.App.stage === "adam") {
      await this.sendFakeEvents();
    }

    console.log("Twitch setup complete!");
  }

  async sendFakeEvents() {
    const eventTypes = [
      Twitch.Events.ChannelFollow,
      Twitch.Events.ChannelSubscribe,
      Twitch.Events.ChannelSubscriptionGift,
      Twitch.Events.RewardRedeem,
      Twitch.Events.ChannelCheer,
      Twitch.Events.ChannelRaid,
    ];

    setInterval(() => {
      const randomEventType =
        eventTypes[Math.floor(Math.random() * eventTypes.length)];

      switch (randomEventType) {
        case Twitch.Events.ChannelFollow:
          const followEvent = {
            broadcasterId: Twitch.UserId,
            broadcasterName: "adamdotdev",
            broadcasterDisplayName: "adamdotdev",
            userId: "123456",
            userName: "john_doe",
            userDisplayName: "John Doe",
            followDate: new Date(),
          };
          bus.publish(Resource.Bus, Twitch.Events.ChannelFollow, followEvent);
          bus.publish(Resource.Bus, Twitch.Events.ChannelFollow, followEvent);
          break;
        case Twitch.Events.ChannelSubscribe:
          const subscribeEvent = {
            broadcasterId: Twitch.UserId,
            broadcasterName: "adamdotdev",
            broadcasterDisplayName: "adamdotdev",
            userId: "123456",
            userName: "john_doe",
            userDisplayName: "John Doe",
            tier: "1",
            isGift: false,
          };
          bus.publish(
            Resource.Bus,
            Twitch.Events.ChannelSubscribe,
            subscribeEvent,
          );
          bus.publish(
            Resource.Bus,
            Twitch.Events.ChannelSubscribe,
            subscribeEvent,
          );
          break;
        case Twitch.Events.RewardRedeem:
          const redeemEvent = {
            id: "123456",
            status: "done",
            input: "Test Input",
            broadcasterId: Twitch.UserId,
            broadcasterName: "adamdotdev",
            broadcasterDisplayName: "adamdotdev",
            userId: "123456",
            userName: "john_doe",
            userDisplayName: "John Doe",
            rewardId: "123456",
            rewardCost: randomItem([100, 500, 1500, 15000]),
            rewardTitle: "Fake Reward",
            rewardPrompt: "Fake Reward Prompt",
            redemptionDate: new Date(),
          };
          bus.publish(Resource.Bus, Twitch.Events.RewardRedeem, redeemEvent);
          bus.publish(Resource.Bus, Twitch.Events.RewardRedeem, redeemEvent);
          break;
        case Twitch.Events.ChannelSubscriptionGift:
          const giftEvent = {
            broadcasterId: Twitch.UserId,
            broadcasterName: "adamdotdev",
            broadcasterDisplayName: "adamdotdev",
            gifterId: "123456",
            gifterName: "jane_doe",
            gifterDisplayName: "Jane Doe",
            tier: "2",
            amount: randomItem([1, 10, 100, 1000]),
            cumulativeAmount: 100,
            isAnonymous: false,
          };
          bus.publish(
            Resource.Bus,
            Twitch.Events.ChannelSubscriptionGift,
            giftEvent,
          );
          bus.publish(
            Resource.Bus,
            Twitch.Events.ChannelSubscriptionGift,
            giftEvent,
          );
          break;
        case Twitch.Events.ChannelCheer:
          const cheerEvent = {
            broadcasterId: Twitch.UserId,
            broadcasterName: "adamdotdev",
            broadcasterDisplayName: "adamdotdev",
            userId: "123456",
            userName: "john_doe",
            userDisplayName: "John Doe",
            message: "Test Message",
            bits: randomItem([100, 500, 1500, 15000]),
            isAnonymous: false,
          };
          bus.publish(Resource.Bus, Twitch.Events.ChannelCheer, cheerEvent);
          bus.publish(Resource.Bus, Twitch.Events.ChannelCheer, cheerEvent);
          break;
        case Twitch.Events.ChannelRaid:
          const raidEvent = {
            raidedBroadcasterId: Twitch.UserId,
            raidedBroadcasterName: "adamdotdev",
            raidedBroadcasterDisplayName: "adamdotdev",
            raidingBroadcasterId: "123456",
            raidingBroadcasterName: "jane_doe",
            raidingBroadcasterDisplayName: "Jane Doe",
            viewers: randomItem([1, 10, 100, 1000]),
          };
          bus.publish(Resource.Bus, Twitch.Events.ChannelRaid, raidEvent);
          bus.publish(Resource.Bus, Twitch.Events.ChannelRaid, raidEvent);
          break;
      }
    }, 1000 * 5);
  }

  async setupEventSub() {
    this.listener = await Twitch.Client.listener();

    this.listener.onChannelFollow(Twitch.UserId, Twitch.UserId, (event) =>
      bus.publish(Resource.Bus, Twitch.Events.ChannelFollow, event),
    );
    this.listener.onChannelSubscription(Twitch.UserId, (event) =>
      bus.publish(Resource.Bus, Twitch.Events.ChannelSubscribe, event),
    );
    this.listener.onChannelUpdate(Twitch.UserId, (event) =>
      bus.publish(Resource.Bus, Twitch.Events.ChannelUpdate, event),
    );
    this.listener.onChannelCheer(Twitch.UserId, (event) =>
      bus.publish(Resource.Bus, Twitch.Events.ChannelCheer, event),
    );
    this.listener.onChannelSubscriptionGift(Twitch.UserId, (event) =>
      bus.publish(Resource.Bus, Twitch.Events.ChannelSubscriptionGift, event),
    );
    this.listener.onChannelRaidTo(Twitch.UserId, (event) =>
      bus.publish(Resource.Bus, Twitch.Events.ChannelRaid, event),
    );
    this.listener.onStreamOnline(Twitch.UserId, (event) =>
      bus.publish(Resource.Bus, Twitch.Events.ChannelOnline, event),
    );
    this.listener.onStreamOffline(Twitch.UserId, (event) =>
      bus.publish(Resource.Bus, Twitch.Events.ChannelOffline, event),
    );
    this.listener.onChannelRedemptionAdd(Twitch.UserId, (event) =>
      bus.publish(Resource.Bus, Twitch.Events.RewardRedeem, event),
    );

    this.listener.start();
  }

  async setupChatBot() {
    this.chatClient = await Twitch.Client.chat();
    this.chatClient.connect();

    this.chatClient.onMessage(async (channel, user, message, msg) => {
      bus.publish(Resource.Bus, Twitch.Events.ChatMessage, {
        channel,
        user,
        message,
        msg,
      });
    });
  }
}
