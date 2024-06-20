import { getImageProps } from "next/image";
import Tomorrow400 from "../../public/media/tomorrow.fm_400w.png";
import Tomorrow640 from "../../public/media/tomorrow.fm_640w.png";
import Tomorrow768 from "../../public/media/tomorrow.fm_768w.png";
import Tomorrow1024 from "../../public/media/tomorrow.fm_1024w.png";
import Tomorrow1280 from "../../public/media/tomorrow.fm_1280w.png";

export default async function TomorrowBackground() {
  const common = { alt: "tomorrow.fm", sizes: "100vw" };
  const {
    props: { srcSet: tomorrow400, ...rest },
  } = getImageProps({ ...common, src: Tomorrow400 });
  const {
    props: { srcSet: tomorrow640 },
  } = getImageProps({ ...common, src: Tomorrow640 });
  const {
    props: { srcSet: tomorrow768 },
  } = getImageProps({ ...common, src: Tomorrow768 });
  const {
    props: { srcSet: tomorrow1024 },
  } = getImageProps({ ...common, src: Tomorrow1024 });
  const {
    props: { srcSet: tomorrow1280 },
  } = getImageProps({ ...common, src: Tomorrow1280 });

  return (
    <div className="absolute inset-0 overflow-hidden">
      <picture>
        <source media="(min-width: 1280px)" srcSet={tomorrow1280} />
        <source media="(min-width: 1024px)" srcSet={tomorrow1024} />
        <source media="(min-width: 768px)" srcSet={tomorrow768} />
        <source media="(min-width: 640px)" srcSet={tomorrow640} />
        <source srcSet={tomorrow400} />
        <img {...rest} className="h-auto w-full" />
      </picture>
    </div>
  );
}
