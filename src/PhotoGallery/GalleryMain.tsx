import { ImageType } from "../types";
import GalleryCaption from "./GalleryCaption";
import GalleryInfo from "./GalleryInfo";
import GalleryNavigation from "./GalleryNavigation";
import GalleryStage from "./GalleryStage";
import GalleryThumbs from "./GalleryThumbs";
import GalleryToolbar from "./GalleryToolbar";

type Props = {
  isOpenThumbs: boolean;
  images: Array<ImageType>;
  currentImageIndex: number;
  onPreviousImage: () => void;
  onNextImage: () => void;
};

export default function GalleryMain(props: Props) {
  const {
    isOpenThumbs,
    images,
    currentImageIndex,
    onPreviousImage,
    onNextImage,
  } = props;
  const isOpenThumbsClass = isOpenThumbs
    ? " gallery-container-show-thumbs"
    : "";

  return (
    <div className={`gallery-container${isOpenThumbsClass}`}>
      <div className="gallery-bg"></div>
      <div className="gallery-inner">
        <GalleryInfo
          currentImage={currentImageIndex + 1}
          numberOfImages={images.length}
        />
        <GalleryToolbar />
        <GalleryNavigation
          onPreviousImage={onPreviousImage}
          onNextImage={onNextImage}
        />
        <GalleryStage image={images[currentImageIndex]} />
        <GalleryCaption />
      </div>
      <GalleryThumbs currentImage={currentImageIndex} images={images} />
    </div>
  );
}
