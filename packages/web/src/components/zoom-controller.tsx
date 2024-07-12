"use client";

import { zoomIn, zoomOut } from "@/app/(overlays)/overlays/actions";
import { useHeadPosition } from "@/hooks/use-head-position";
import React from "react";

export default function ZoomController({ dev }: { dev?: boolean }) {
  const { lookingAtScreen, videoRef } = useHeadPosition();
  console.log({ lookingAtScreen });

  let zoomTimer: NodeJS.Timeout | undefined;
  React.useEffect(() => {
    if (zoomTimer) clearTimeout(zoomTimer);
    if (lookingAtScreen) {
      zoomTimer = setTimeout(async () => {
        if (lookingAtScreen) await zoomIn();
      }, 7500);
    } else {
      zoomTimer = setTimeout(async () => {
        if (!lookingAtScreen) await zoomOut();
      }, 3500);
    }
    return () => clearTimeout(zoomTimer);
  }, [lookingAtScreen]);

  return (
    <video
      id="video"
      width="1280"
      height="720"
      autoPlay
      muted
      ref={videoRef}
      className={`absolute inset-0 ${!dev && "invisible"}`}
    ></video>
  );
}
