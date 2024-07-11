import { useOverlaysContext } from "@/app/(overlays)/overlays/context";
import React from "react";

export const Timer = () => {
  const context = useOverlaysContext();
  const [timer, setTimer] = React.useState<string>();

  React.useEffect(() => {
    if (!context.stream?.started) return;

    const intervalHandle = setInterval(() => {
      const now = new Date();
      const startTime = new Date(context.stream!.started!);
      const diff = now.getTime() - startTime.getTime();
      const timer = new Date(diff);
      setTimer(timer.toISOString().substring(11, 19));
    }, 1000);

    return () => clearInterval(intervalHandle);
  }, [context.stream]);

  return (
    <div className="absolute inset-0 flex items-center">
      <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="40" r="8" fill="#25D0AB" />
      </svg>
      <div className="absolute left-[49px] text-2xl text-mauve-12">{timer}</div>
    </div>
  );
};
