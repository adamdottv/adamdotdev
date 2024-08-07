import clsx from "clsx";
import { ComponentProps, PropsWithChildren } from "react";

export const Overlay: React.FC<PropsWithChildren<ComponentProps<"div">>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <main
      className={clsx({
        "relative h-full w-full": true,
        [className]: className,
      })}
      {...props}
    >
      <div className="absolute inset-0 -z-10 bg-black/75" />
      <Lines className="absolute inset-0 stroke-current text-white opacity-[15%]" />
      {children}
    </main>
  );
};

const Lines = ({ className }: { className?: string }) => {
  return (
    <svg
      width="1920"
      height="1080"
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M300 0V1080" stroke="currentColor" />
      <path d="M340 0V1080" stroke="currentColor" />
      <path d="M100 0V1080" stroke="currentColor" />
      <path d="M1820 0V1080" stroke="currentColor" />
      <path d="M1620 0V1080" stroke="currentColor" />
      <path d="M1588 0V1080" stroke="currentColor" />
      <path d="M1920 300L-4.76837e-06 300" stroke="currentColor" />
      <path d="M1920 780L-4.76837e-06 780" stroke="currentColor" />
      <path d="M1920 980L-4.76837e-06 980" stroke="currentColor" />
      <path d="M1920 100L-4.76837e-06 99.9999" stroke="currentColor" />
    </svg>
  );
};
