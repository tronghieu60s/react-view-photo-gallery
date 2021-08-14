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
  numberOfImages: number;
  currentImage: ImageType;
  currentImageIndex: number;
  onToggleThumbs: () => void;
  onSetCurrentImageIndex: (index: number) => void;
  onPreviousImage: () => void;
  onNextImage: () => void;
};

export default function GalleryMain(props: Props) {
  const {
    isOpenThumbs,
    images,
    numberOfImages,
    currentImage,
    currentImageIndex,
  } = props;
  const {
    onToggleThumbs,
    onSetCurrentImageIndex,
    onPreviousImage,
    onNextImage,
  } = props;

  return (
    <div className={`gl-container${isOpenThumbs ? " gl-show-thumbs" : ""}`}>
      <div className="gl-bg"></div>
      <div className="gl-inner">
        <GalleryInfo
          currentImageIndex={currentImageIndex}
          numberOfImages={numberOfImages}
        />
        <GalleryToolbar onToggleThumbs={onToggleThumbs} />
        <GalleryNavigation
          onPreviousImage={onPreviousImage}
          onNextImage={onNextImage}
        />
        <GalleryStage image={images[currentImageIndex]} />
        <GalleryCaption currentImage={currentImage} />
      </div>
      <GalleryThumbs
        images={images}
        currentImageIndex={currentImageIndex}
        onSetCurrentImageIndex={onSetCurrentImageIndex}
      />
    </div>
  );
}
