import type { Realtime } from "@adamdotdev/core/live/realtime";
import { useTopic } from "./use-topic";
import { v4 as uuid } from "uuid";
import React from "react";

type LiveEventType = Realtime.LiveEvent["type"];
type LiveEventProperties<T extends LiveEventType> = Extract<
  Realtime.LiveEvent,
  { type: T }
>["properties"];
type LiveEventWithProperties<T extends LiveEventType> = {
  type: T;
  properties: LiveEventProperties<T>;
};
type UnionOfEventProperties<T extends LiveEventType[]> = {
  [K in keyof T]: T[K] extends LiveEventType
    ? LiveEventWithProperties<T[K]>
    : never;
}[number];

export const useEvent = <T extends LiveEventType>(
  type: T,
  callback: (event: { type: T; properties: LiveEventProperties<T> }) => void,
) => {
  const [key] = React.useState(uuid);
  useTopic(key, (msg: Parameters<typeof callback>[0]) => {
    if (msg.type !== type) return;
    callback(msg);
  });
};

export const useEvents = <T extends LiveEventType[]>(
  types: T,
  callback: (evt: UnionOfEventProperties<T>) => void,
) => {
  const [key] = React.useState(uuid);
  useTopic(key, (msg: Parameters<typeof callback>[0]) => {
    if (!types.includes(msg.type)) return;
    callback(msg);
  });
};
