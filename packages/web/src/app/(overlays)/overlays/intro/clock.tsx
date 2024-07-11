import clsx from "clsx";
import React from "react";

interface ClockProps extends React.ComponentProps<"div"> {
  minutes: number;
  onStart?: () => void;
  onStop?: () => void;
  onStopTime?: number;
}

const paths = [
  "M179 0H181V40H179V0Z",
  "M200.413 17.273L202.396 17.534L199.263 41.3287L197.28 41.0676L200.413 17.273Z",
  "M221.479 21.3291L223.41 21.8467L217.199 45.029L215.267 44.5113L221.479 21.3291Z",
  "M241.834 28.1011L243.682 28.8664L234.498 51.0396L232.65 50.2742L241.834 28.1011Z",
  "M269.133 23.6152L270.865 24.6152L250.865 59.2562L249.133 58.2562L269.133 23.6152Z",
  "M279.041 49.2817L280.628 50.4993L266.018 69.5397L264.431 68.3222L279.041 49.2817Z",
  "M295.259 63.3271L296.673 64.7414L279.702 81.7119L278.288 80.2977L295.259 63.3271Z",
  "M309.501 79.3701L310.718 80.9568L291.678 95.5671L290.46 93.9804L309.501 79.3701Z",
  "M335.383 89.1338L336.383 90.8658L301.742 110.866L300.742 109.134L335.383 89.1338Z",
  "M331.133 116.316L331.898 118.164L309.725 127.349L308.96 125.501L331.133 116.316Z",
  "M338.152 136.588L338.67 138.52L315.487 144.731L314.97 142.8L338.152 136.588Z",
  undefined,
  undefined,
  undefined,
  "M338.671 221.481L338.154 223.413L314.971 217.201L315.489 215.269L338.671 221.481Z",
  "M331.9 241.836L331.135 243.684L308.962 234.5L309.727 232.652L331.9 241.836Z",
  "M336.383 269.134L335.383 270.866L300.742 250.866L301.742 249.134L336.383 269.134Z",
  "M310.72 279.043L309.503 280.63L290.462 266.02L291.68 264.433L310.72 279.043Z",
  "M296.671 295.259L295.257 296.673L278.286 279.703L279.7 278.289L296.671 295.259Z",
  "M280.63 309.501L279.043 310.719L264.433 291.679L266.02 290.461L280.63 309.501Z",
  "M270.868 335.384L269.136 336.384L249.136 301.743L250.868 300.743L270.868 335.384Z",
  "M243.683 331.134L241.835 331.899L232.651 309.726L234.499 308.961L243.683 331.134Z",
  "M223.415 338.154L221.483 338.672L215.271 315.49L217.203 314.972L223.415 338.154Z",
  "M202.399 342.467L200.416 342.728L197.283 318.933L199.266 318.672L202.399 342.467Z",
  "M181 359.728L179 359.728L179 319.728L181 319.728L181 359.728Z",
  "M159.587 342.455L157.604 342.194L160.737 318.399L162.72 318.66L159.587 342.455Z",
  "M138.521 338.399L136.59 337.881L142.801 314.699L144.733 315.217L138.521 338.399Z",
  "M118.165 331.627L116.317 330.862L125.501 308.688L127.349 309.454L118.165 331.627Z",
  "M90.8666 336.113L89.1346 335.113L109.135 300.472L110.867 301.472L90.8666 336.113Z",
  "M80.9586 310.446L79.3719 309.229L93.9821 290.188L95.5689 291.406L80.9586 310.446Z",
  "M64.7414 296.401L63.3271 294.987L80.2977 278.016L81.7119 279.43L64.7414 296.401Z",
  "M50.4992 280.358L49.2816 278.771L68.3221 264.161L69.5396 265.748L50.4992 280.358Z",
  "M24.6171 270.594L23.6171 268.862L58.2581 248.862L59.2581 250.594L24.6171 270.594Z",
  "M28.867 243.412L28.1017 241.564L50.2748 232.379L51.0402 234.227L28.867 243.412Z",
  "M21.848 223.14L21.3304 221.208L44.5126 214.997L45.0302 216.928L21.848 223.14Z",
  "M17.5348 202.125L17.2738 200.143L41.0684 197.01L41.3295 198.993L17.5348 202.125Z",
  "M0 180.728L2.62268e-07 178.728L40 178.728L40 180.728L0 180.728Z",
  "M17.2753 159.313L17.5363 157.33L41.331 160.463L41.07 162.446L17.2753 159.313Z",
  "M21.3288 138.247L21.8465 136.315L45.0287 142.527L44.5111 144.459L21.3288 138.247Z",
  "M28.0997 117.892L28.865 116.044L51.0382 125.228L50.2728 127.076L28.0997 117.892Z",
  "M23.6173 90.5942L24.6173 88.8622L59.2583 108.862L58.2583 110.594L23.6173 90.5942Z",
  "M49.2796 80.6846L50.4971 79.0979L69.5376 93.7081L68.3201 95.2948L49.2796 80.6846Z",
  "M63.3291 64.4687L64.7433 63.0545L81.7139 80.0251L80.2997 81.4393L63.3291 64.4687Z",
  "M79.3698 50.2266L80.9565 49.009L95.5668 68.0495L93.9801 69.267L79.3698 50.2266Z",
  "M89.1322 24.3437L90.8643 23.3437L110.864 57.9848L109.132 58.9848L89.1322 24.3437Z",
  "M116.317 28.5942L118.165 27.8289L127.349 50.002L125.501 50.7673L116.317 28.5942Z",
  "M136.585 21.5737L138.517 21.0561L144.729 44.2383L142.797 44.7559L136.585 21.5737Z",
  "M157.601 17.2612L159.584 17.0002L162.717 40.7949L160.734 41.0559L157.601 17.2612Z",
];

export const Clock: React.FC<ClockProps> = ({
  className,
  onStart,
  onStop,
  onStopTime,
  ...props
}) => {
  const { minutes } = props;
  const [time, setTime] = React.useState<string>();
  // 48 total ticks
  const [elapsedTicks, setElapsedTicks] = React.useState<number>(0);
  const stoppedRef = React.useRef(false);

  React.useEffect(() => {
    const startTime = Number(new Date());
    const endTime = startTime + minutes * 60 * 1000;

    const interval = setInterval(() => {
      const current = Number(new Date());
      const remainingMs = endTime - current;

      if (remainingMs <= (onStopTime ?? 0) && !stoppedRef.current) {
        stoppedRef.current = true;
        if (onStop) onStop();
      }

      if (remainingMs < 0) {
        setTime("00:00:00");
        return;
      }

      const remaining = new Date(remainingMs);
      setTime(remaining.toISOString().substring(11, 19));

      const elapsed = (current - startTime) / 1000;
      const totalSeconds = minutes * 60;
      const percentageComplete = (elapsed / totalSeconds) * 100;
      const ticks = Math.floor((percentageComplete / 100) * 48);
      setElapsedTicks(ticks);
    }, 100);

    if (onStart) onStart();

    return () => clearInterval(interval);
  }, [minutes, onStart, onStop, onStopTime]);

  const pastTicksColor = "#D9D9D9";
  const futureTicksColor = "#25D0AB";

  return (
    <div
      className={clsx({
        "flex items-center justify-end": true,
        [className ?? ""]: true,
      })}
      {...props}
    >
      <svg
        viewBox="0 0 360 360"
        fill="none"
        className="absolute inset-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map(
          (path, index) =>
            path && (
              <path
                key={index}
                d={path}
                fill={elapsedTicks >= index ? futureTicksColor : pastTicksColor}
              />
            ),
        )}
      </svg>
      <div
        className="text-5xl font-light text-mauve-12"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {time}
      </div>
    </div>
  );
};
