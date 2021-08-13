import { ImageType } from "../types";
import GalleryStageItem from "./GalleryStageItem";

type Props = {
  image: ImageType,
}

export default function GalleryStage({image}: Props) {
  return (
    <div className="gallery-stage">
      <GalleryStageItem image={image} />
    </div>
  );
}
