import { getImageProps } from "next/image";
import ProAWS400 from "../../public/media/www.proaws.dev_400w.png";
import ProAWS640 from "../../public/media/www.proaws.dev_640w.png";
import ProAWS768 from "../../public/media/www.proaws.dev_768w.png";
import ProAWS1024 from "../../public/media/www.proaws.dev_1024w.png";
import ProAWS1280 from "../../public/media/www.proaws.dev_1280w.png";

export default async function ProAWSBackground() {
  const common = { alt: "www.proaws.dev", sizes: "100vw" };
  const {
    props: { srcSet: proaws400, ...rest },
  } = getImageProps({ ...common, src: ProAWS400 });
  const {
    props: { srcSet: proaws640 },
  } = getImageProps({ ...common, src: ProAWS640 });
  const {
    props: { srcSet: proaws768 },
  } = getImageProps({ ...common, src: ProAWS768 });
  const {
    props: { srcSet: proaws1024 },
  } = getImageProps({ ...common, src: ProAWS1024 });
  const {
    props: { srcSet: proaws1280 },
  } = getImageProps({ ...common, src: ProAWS1280 });

  return (
    <div className="absolute inset-0 overflow-hidden">
      <picture>
        <source media="(min-width: 1280px)" srcSet={proaws1280} />
        <source media="(min-width: 1024px)" srcSet={proaws1024} />
        <source media="(min-width: 768px)" srcSet={proaws768} />
        <source media="(min-width: 640px)" srcSet={proaws640} />
        <source srcSet={proaws400} />
        <img {...rest} className="h-auto w-full" />
        <div className="absolute inset-0 bg-black/85" />
      </picture>
    </div>
  );
}
