import { ImageType } from "../../types";
import PGCaption from "./PGCaption";
import PGInfo from "./PGInfo";
import PGNavigation from "./PGNavigation";
import PGStage from "./PGStage";
import PGThumbs from "./PGThumbs";
import PGToolbar from "./PGToolbar";

type Props = {
  isFullscreen: boolean;
  isOpenThumbs: boolean;
  images: Array<ImageType>;
  numberOfImages: number;
  currentImage: ImageType;
  currentImageIndex: number;
  onOpenExternalLink: () => void;
  onToggleFullScreen: () => void;
  onDownloadImage: () => void;
  onToggleThumbs: () => void;
  onSetCurrentImageIndex: (index: number) => void;
  onPreviousImage: () => void;
  onNextImage: () => void;
};

export default function PGMain(props: Props) {
  const {
    isFullscreen,
    isOpenThumbs,
    images,
    numberOfImages,
    currentImage,
    currentImageIndex,
  } = props;

  return (
    <div className={`gl-container${isOpenThumbs ? " gl-show-thumbs" : ""}`}>
      <div className="gl-bg"></div>
      <div className="gl-inner">
        <PGInfo
          currentImageIndex={currentImageIndex}
          numberOfImages={numberOfImages}
        />
        <PGToolbar
          isFullscreen={isFullscreen}
          onOpenExternalLink={props.onOpenExternalLink}
          onToggleFullScreen={props.onToggleFullScreen}
          onDownloadImage={props.onDownloadImage}
          onToggleThumbs={props.onToggleThumbs}
        />
        <PGNavigation
          onPreviousImage={props.onPreviousImage}
          onNextImage={props.onNextImage}
        />
        <PGStage
          image={images[currentImageIndex]}
          isFullscreen={isFullscreen}
          isOpenThumbs={isOpenThumbs}
        />
        <PGCaption currentImage={currentImage} />
      </div>
      <PGThumbs
        images={images}
        currentImageIndex={currentImageIndex}
        onSetCurrentImageIndex={props.onSetCurrentImageIndex}
      />
    </div>
  );
}
