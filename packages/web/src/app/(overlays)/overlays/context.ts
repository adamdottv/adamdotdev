import type {
  StreamInfo,
  SpotifyInfo,
  StreamSchedule,
} from "@adamdotdev/core/schema";
import React, { useContext } from "react";

export interface OverlaysContextType {
  dev?: boolean;
  stream?: StreamInfo;
  schedule?: StreamSchedule;
  spotify?: SpotifyInfo;
  topic?: string;
  highlight?: string;
}

export const OverlaysContext = React.createContext<
  OverlaysContextType | undefined
>(undefined);

// custom hook to use the context
export const useOverlaysContext = (): OverlaysContextType => {
  const context = useContext(OverlaysContext);
  if (!context) {
    throw new Error(
      "useOverlaysContext must be used within an OverlaysProvider",
    );
  }
  return context;
};
