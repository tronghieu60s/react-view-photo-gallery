import { ImageType } from "../types";

type Props = {
  image: ImageType;
};

export default function GalleryStageItem({ image }: Props) {
  return (
    <div className="gallery-stage__slide">
      <div className="gallery-stage__content">
        <img src={image.src} alt="" className="gallery-stage__image" />
      </div>
    </div>
  );
}
