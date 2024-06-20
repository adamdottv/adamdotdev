"use client";

import type { TwitchEvent } from "@adamdotdev/functions/events/event";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { useQueue } from "@/hooks/use-queue";
import hash from "object-hash";
import { Notification } from "@/components/notification";
import { useTopic } from "@/hooks/use-topic";

const MAX_NOTIFICATIONS = 3;
const NOTIFICATION_DURATION = 3;
const NOTIFICATION_PANEL_HEIGHT = MAX_NOTIFICATIONS * 100 + 65;

export default function Notifications({
  topic,
  endpoint,
  authorizer,
}: {
  topic: string;
  endpoint: string;
  authorizer: string;
}) {
  const [_, setNotifications, notifications, previous] = useQueue<TwitchEvent>({
    count: MAX_NOTIFICATIONS,
    timeout: NOTIFICATION_DURATION * 1000,
  });

  const handleTwitchEvent = (twitchEvent: TwitchEvent) => {
    const key = hash(twitchEvent);
    const event = { ...twitchEvent, key };

    if (event.type !== "twitch.channel.update") {
      setNotifications((n) => [...n, event]);
    }
  };

  useTopic<TwitchEvent>({ topic, endpoint, authorizer }, handleTwitchEvent);

  const notificationsWithPrevious = [previous, ...(notifications || [])].filter(
    (notification) => !!notification,
  ) as (TwitchEvent & { key: string })[];

  return (
    <ul
      className={clsx({
        "flex w-[400px] flex-col-reverse justify-end space-y-4 space-y-reverse":
          true,
        "gradient-mask-b-80": true,
      })}
      style={{ height: NOTIFICATION_PANEL_HEIGHT }}
    >
      <AnimatePresence initial={false}>
        {notificationsWithPrevious?.map((notification) => (
          <motion.li
            key={notification.key}
            layout="position"
            initial={{ opacity: 0.33, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.33,
              type: "spring",
              damping: 25,
              stiffness: 300,
              mass: 0.5,
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.33, ease: "anticipate" },
            }}
          >
            <Notification notification={notification} />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}
