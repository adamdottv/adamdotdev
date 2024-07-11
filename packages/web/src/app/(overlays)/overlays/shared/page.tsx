import React from "react";
import Notifications from "@/components/notifications";
import Stinger from "@/components/stinger/stinger";
import ZoomController from "@/components/zoom-controller";

export default function SharedPage() {
  return (
    <main className="">
      <div className="pointer-events-none absolute right-10 top-10 z-50">
        <Notifications />
      </div>
      <Stinger />
      <ZoomController />
    </main>
  );
}
