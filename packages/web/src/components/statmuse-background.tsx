import { getImageProps } from "next/image";
import StatMuse400 from "../../public/media/www.statmuse.com_400w.png";
import StatMuse640 from "../../public/media/www.statmuse.com_640w.png";
import StatMuse768 from "../../public/media/www.statmuse.com_768w.png";
import StatMuse1024 from "../../public/media/www.statmuse.com_1024w.png";
import StatMuse1280 from "../../public/media/www.statmuse.com_1280w.png";

export default async function StatMuseBackground() {
  const common = { alt: "www.statmuse.com", sizes: "100vw" };
  const {
    props: { srcSet: statmuse400, ...rest },
  } = getImageProps({ ...common, src: StatMuse400 });
  const {
    props: { srcSet: statmuse640 },
  } = getImageProps({ ...common, src: StatMuse640 });
  const {
    props: { srcSet: statmuse768 },
  } = getImageProps({ ...common, src: StatMuse768 });
  const {
    props: { srcSet: statmuse1024 },
  } = getImageProps({ ...common, src: StatMuse1024 });
  const {
    props: { srcSet: statmuse1280 },
  } = getImageProps({ ...common, src: StatMuse1280 });

  return (
    <div className="absolute inset-0 overflow-hidden">
      <picture>
        <source media="(min-width: 1280px)" srcSet={statmuse1280} />
        <source media="(min-width: 1024px)" srcSet={statmuse1024} />
        <source media="(min-width: 768px)" srcSet={statmuse768} />
        <source media="(min-width: 640px)" srcSet={statmuse640} />
        <source srcSet={statmuse400} />
        <img {...rest} className="h-auto w-full" />
      </picture>
    </div>
  );
}
