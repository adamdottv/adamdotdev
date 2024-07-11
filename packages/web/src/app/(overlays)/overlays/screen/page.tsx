"use client";

import React from "react";
import { HighlightedMessageFooter, TicketFooter } from "@/components/elements";
import { Carousel } from "@/components/carousel";
import { TomorrowFooter } from "@/components/elements/tomorrow";
import { TerminalFooter } from "@/components/elements/terminal";
import { ProawsFooter } from "@/components/elements/proaws";
import { DefaultFooter } from "@/components/elements/footer";
import { useOverlaysContext } from "../context";

export default function ScreenPage() {
  const context = useOverlaysContext();

  return (
    <main className="absolute inset-x-0 bottom-0 h-20 bg-mauve-1">
      {context.highlight ? (
        <HighlightedMessageFooter message={context.highlight} />
      ) : (
        <Carousel interval={2} prioritizeFirst>
          <DefaultFooter />
          <TomorrowFooter />
          <TerminalFooter />
          <ProawsFooter />
          <TicketFooter />
        </Carousel>
      )}
    </main>
  );
}
