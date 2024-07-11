"use client";

import clsx from "clsx";
import React, { PropsWithChildren, useEffect } from "react";

export interface CarouselProps extends React.ComponentProps<"div"> {
  interval?: number;
  prioritizeFirst?: boolean;
}

export const Carousel: React.FC<PropsWithChildren<CarouselProps>> = ({
  children,
  interval = 1,
  prioritizeFirst,
  className = "",
  ...props
}) => {
  const [active, setActive] = React.useState(0);
  const [step, setStep] = React.useState(0);
  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    const intervalHandle = setInterval(
      () => {
        if (prioritizeFirst && active !== 0) {
          setActive(0);
        } else {
          setActive(step % childrenArray.length);
          setStep((step) => step + 1);
        }
      },
      interval * 60 * 1000,
    );
    return () => clearInterval(intervalHandle);
  }, [childrenArray, interval]);

  return (
    <div
      className={clsx({ "absolute inset-0": true, [className]: className })}
      {...props}
    >
      {childrenArray.map((child, index) => (
        <div
          key={index}
          className={clsx({
            "absolute inset-0": true,
            invisible: active !== index,
          })}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
