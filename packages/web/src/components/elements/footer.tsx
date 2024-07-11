import { useOverlaysContext } from "@/app/(overlays)/overlays/context";
import { ComponentProps } from "react";
import { Timer } from "./timer";
import { AudioSpectrum } from "../audio-spectrum";
import { BrandDetail } from ".";

export const DefaultFooter: React.FC<ComponentProps<"div">> = () => {
  const context = useOverlaysContext();

  return (
    <div className="flex h-full space-x-10 px-10">
      <div className="relative w-40">
        <Timer />
      </div>
      <div className="relative flex flex-grow items-center justify-between text-lg text-mauve-12">
        {context.topic ||
          context.stream?.title ||
          "we should probably set the topic"}
        {context.spotify?.playing && (
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div>{context.spotify.title}</div>
              <div className="text-sm text-mauve-11">
                {context.spotify.artist}
              </div>
            </div>
            <img
              src={context.spotify.artwork}
              alt={context.spotify.title}
              width={60}
              height={60}
              className="border-l-4 border-mint"
            />
          </div>
        )}
      </div>
      <div className="relative w-40">
        {context.spotify?.playing ? (
          <AudioSpectrum meterCount={8} width={160} height={60} />
        ) : (
          <BrandDetail />
        )}
      </div>
    </div>
  );
};
