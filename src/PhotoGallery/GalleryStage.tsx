import { ImageType } from "../types";

export default function GalleryStage({ image }: { image: ImageType }) {
  return (
    <div className="gl-stage">
      <div className="gl-stage__slide">
        <div className="gl-stage__content">
          <img src={image.src} alt="" className="gl-stage__image" />
        </div>
      </div>
    </div>
  );
}
