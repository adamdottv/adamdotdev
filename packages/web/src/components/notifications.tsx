"use client";

import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { useQueue } from "@/hooks/use-queue";
import { NotificationComponent } from "@/components/notification";
import { useEvent } from "@/hooks/use-event";
import { Notification } from "@adamdotdev/core/schema";

const MAX_NOTIFICATIONS = 3;
const NOTIFICATION_DURATION = 3;
const NOTIFICATION_PANEL_HEIGHT = MAX_NOTIFICATIONS * 100 + 65;

export default function Notifications() {
  const [_, setNotifications, notifications, previous] = useQueue<Notification>(
    {
      count: MAX_NOTIFICATIONS,
      timeout: NOTIFICATION_DURATION * 1000,
    },
  );

  useEvent("live.notification", (evt) => {
    setNotifications((n) => [...n, evt.properties]);
  });

  const notificationsWithPrevious = [previous, ...(notifications || [])].filter(
    (notification) => !!notification,
  );

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
            key={notification!.id}
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
            <NotificationComponent notification={notification!} />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}
