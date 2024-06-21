import { getImageProps } from "next/image";
import Terminal400 from "../../public/media/www.terminal.shop_400w.png";
import Terminal640 from "../../public/media/www.terminal.shop_640w.png";
import Terminal768 from "../../public/media/www.terminal.shop_768w.png";
import Terminal1024 from "../../public/media/www.terminal.shop_1024w.png";
import Terminal1280 from "../../public/media/www.terminal.shop_1280w.png";

export default async function TerminalBackground() {
  const common = { alt: "www.terminal.shop", sizes: "100vw" };
  const {
    props: { srcSet: terminal400, ...rest },
  } = getImageProps({ ...common, src: Terminal400 });
  const {
    props: { srcSet: terminal640 },
  } = getImageProps({ ...common, src: Terminal640 });
  const {
    props: { srcSet: terminal768 },
  } = getImageProps({ ...common, src: Terminal768 });
  const {
    props: { srcSet: terminal1024 },
  } = getImageProps({ ...common, src: Terminal1024 });
  const {
    props: { srcSet: terminal1280 },
  } = getImageProps({ ...common, src: Terminal1280 });

  return (
    <div className="absolute inset-0 overflow-hidden">
      <picture>
        <source media="(min-width: 1280px)" srcSet={terminal1280} />
        <source media="(min-width: 1024px)" srcSet={terminal1024} />
        <source media="(min-width: 768px)" srcSet={terminal768} />
        <source media="(min-width: 640px)" srcSet={terminal640} />
        <source srcSet={terminal400} />
        <img {...rest} className="h-auto w-full" />
      </picture>
      <div className="absolute inset-0 bg-black/85" />
    </div>
  );
}
