import { Grid } from "@/components/grid";
import React from "react";

export const TitleScreen = () => {
  const [loadingPercentage, setLoadingPercentage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const lengths = [
        0.001, 0.002, 0.003, 0.004, 0.005, 0.006, 0.007, 0.008, 0.009, 0.075,
        0.1,
      ];
      const maxIncrease = lengths[Math.floor(Math.random() * lengths.length)];
      const increase = Math.random() * maxIncrease;
      setLoadingPercentage((p) => Math.min(p + increase, 1));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <Grid
      center={
        <div className="absolute inset-0 flex items-center justify-center font-holbeard text-[600px] uppercase text-mauve-12">
          Let&apos;s Go
        </div>
      }
      bottomCenter={
        <div className="absolute inset-0 flex items-center">
          <div className="relative h-[2px] w-full bg-mauve-10">
            <div
              className="absolute inset-y-0 bg-mint"
              style={{ width: `${loadingPercentage * 100}%` }}
            />
          </div>
        </div>
      }
    />
  );
};
