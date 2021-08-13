import { ImageType } from "../types";

type Props = {
  image: ImageType;
  active: boolean;
};

export default function GalleryThumbsItem({ image, active }: Props) {
  const backgroundImage = `url(${image.src})`;
  const activeClass = active ? " active" : "";
  return (
    <div
      style={{ backgroundImage }}
      className={`gallery-thumbs__item${activeClass}`}
    ></div>
  );
}
