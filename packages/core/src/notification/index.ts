import { fn } from "../util/fn";
import { notificationEntity } from "./notification.ddb";
import { Notification as _Notification } from "../schema";
import hash from "object-hash";

export module Notification {
  export const Entity = notificationEntity;

  export const create = fn(_Notification.omit({ id: true }), async (input) => {
    const id = hash({ ...input, id: undefined });
    const notification = { ...input, id };
    await Entity.put(notification).go();
  });
}
