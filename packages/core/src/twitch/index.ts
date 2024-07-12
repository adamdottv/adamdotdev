import { z } from "zod";
import { event } from "../event";
import TwitchAuthProvider from "./auth-provider";
import { ApiClient } from "@twurple/api";
import { ChatClient } from "@twurple/chat";
import { EventSubWsListener } from "@twurple/eventsub-ws";
import { Resource } from "sst";
import { Rewards as _Rewards } from "./rewards";
import { Stream as _Stream } from "./stream";
import { Notifications as _Notifications } from "./notifications";

export module Twitch {
  export const Events = {
    ChannelOnline: event(
      "twitch.channel.online",
      z.object({
        id: z.string(),
        broadcasterId: z.string(),
        broadcasterName: z.string(),
        broadcasterDisplayName: z.string(),
        startDate: z.date(),
        type: z.enum(["live", "playlist", "watch_party", "premiere", "rerun"]),
      }),
    ),
    ChannelOffline: event(
      "twitch.channel.offline",
      z.object({
        broadcasterId: z.string(),
        broadcasterName: z.string(),
        broadcasterDisplayName: z.string(),
      }),
    ),
    ChannelFollow: event(
      "twitch.channel.follow",
      z.object({
        userId: z.string(),
        userName: z.string(),
        userDisplayName: z.string(),
        broadcasterId: z.string(),
        broadcasterName: z.string(),
        broadcasterDisplayName: z.string(),
        followDate: z.date(),
      }),
    ),
    ChannelSubscribe: event(
      "twitch.channel.subscribe",
      z.object({
        userId: z.string(),
        userName: z.string(),
        userDisplayName: z.string(),
        broadcasterId: z.string(),
        broadcasterName: z.string(),
        broadcasterDisplayName: z.string(),
        tier: z.string(),
        isGift: z.boolean(),
      }),
    ),
    ChannelUpdate: event(
      "twitch.channel.update",
      z.object({
        broadcasterId: z.string(),
        broadcasterName: z.string(),
        broadcasterDisplayName: z.string(),
        streamTitle: z.string(),
        streamLanguage: z.string(),
        categoryId: z.string(),
        categoryName: z.string(),
        isMature: z.boolean(),
      }),
    ),
    ChannelCheer: event(
      "twitch.channel.cheer",
      z.object({
        isAnonymous: z.boolean(),
        userId: z.string().nullable(),
        userName: z.string().nullable(),
        userDisplayName: z.string().nullable(),
        broadcasterId: z.string(),
        broadcasterName: z.string(),
        broadcasterDisplayName: z.string(),
        message: z.string(),
        bits: z.number(),
      }),
    ),
    ChannelSubscriptionGift: event(
      "twitch.channel.subscription.gift",
      z.object({
        gifterId: z.string().nullable(),
        gifterName: z.string().nullable(),
        gifterDisplayName: z.string().nullable(),
        broadcasterId: z.string(),
        broadcasterName: z.string(),
        broadcasterDisplayName: z.string(),
        amount: z.number(),
        tier: z.string(),
        cumulativeAmount: z.number().nullable(),
        isAnonymous: z.boolean(),
      }),
    ),
    ChannelRaid: event(
      "twitch.channel.raid",
      z.object({
        raidingBroadcasterId: z.string(),
        raidingBroadcasterName: z.string(),
        raidingBroadcasterDisplayName: z.string(),
        raidedBroadcasterId: z.string(),
        raidedBroadcasterName: z.string(),
        raidedBroadcasterDisplayName: z.string(),
        viewers: z.number(),
      }),
    ),
    ChatMessage: event(
      "twitch.chat.message",
      z.object({
        channel: z.string(),
        user: z.string(),
        message: z.string(),
        msg: z.object({
          id: z.string(),
          date: z.date(),
          userInfo: z.object({
            userName: z.string(),
            displayName: z.string(),
            color: z.string().optional(),
            badges: z.map(z.string(), z.string()),
            badgeInfo: z.map(z.string(), z.string()),
            userId: z.string(),
            userType: z.string().optional(),
            isBroadcaster: z.boolean(),
            isSubscriber: z.boolean(),
            isFounder: z.boolean(),
            isMod: z.boolean(),
            isVip: z.boolean(),
            isArtist: z.boolean(),
          }),
          channelId: z.string().nullable(),
          isCheer: z.boolean(),
          isRedemption: z.boolean(),
          rewardId: z.string().nullable(),
          isFirst: z.boolean(),
          isReturningChatter: z.boolean(),
          isHighlight: z.boolean(),
          isReply: z.boolean(),
          parentMessageId: z.string().nullable(),
          parentMessageText: z.string().nullable(),
          parentMessageUserId: z.string().nullable(),
          parentMessageUserName: z.string().nullable(),
          parentMessageUserDisplayName: z.string().nullable(),
          threadMessageId: z.string().nullable(),
          threadMessageUserId: z.string().nullable(),
          bits: z.number(),
          emoteOffsets: z.map(z.string(), z.string().array()),
          isHypeChat: z.boolean(),
          hypeChatAmount: z.number().nullable(),
          hypeChatDecimalPlaces: z.number().nullable(),
          hypeChatLocalizedAmount: z.number().nullable(),
          hypeChatCurrency: z.string().nullable(),
          hypeChatLevel: z.number().nullable(),
          hypeChatIsSystemMessage: z.boolean().nullable(),
        }),
      }),
    ),
    RewardRedeem: event(
      "twitch.reward.redeem",
      z.object({
        id: z.string(),
        broadcasterId: z.string(),
        broadcasterName: z.string(),
        broadcasterDisplayName: z.string(),
        userId: z.string(),
        userName: z.string(),
        userDisplayName: z.string(),
        input: z.string(),
        status: z.string(),
        rewardId: z.string(),
        rewardTitle: z.string(),
        rewardCost: z.number(),
        rewardPrompt: z.string(),
        redemptionDate: z.date(),
      }),
    ),
  };
  export const AllEvents = Object.values(Events);
  export const UserId = Resource.TwitchUserId.value;
  export const UserName = "adamdotdev";
  export const Rewards = _Rewards;
  export const Stream = _Stream;
  export const Notifications = _Notifications;

  export module Client {
    export async function api() {
      const authProvider = await TwitchAuthProvider.getInstance();
      return new ApiClient({ authProvider });
    }

    export async function chat() {
      const authProvider = await TwitchAuthProvider.getInstance();
      return new ChatClient({ authProvider, channels: [Twitch.UserName] });
    }

    export async function listener() {
      return api().then((apiClient) => new EventSubWsListener({ apiClient }));
    }
  }
}
