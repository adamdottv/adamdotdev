import clsx from "clsx";
import React, { PropsWithChildren } from "react";

export interface SwipeableProps extends React.ComponentProps<"div"> {}

export const Swipeable: React.FC<PropsWithChildren<SwipeableProps>> = ({
  children,
  className = "",
  ...props
}) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div
      className={clsx({
        "no-scrollbar grid snap-x snap-mandatory grid-flow-col overflow-y-hidden":
          true,
        [className]: className,
      })}
      {...props}
    >
      {childrenArray.map((child, index) => (
        <div
          key={index}
          className={clsx({
            "relative w-screen snap-center": true,
          })}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default Swipeable;
