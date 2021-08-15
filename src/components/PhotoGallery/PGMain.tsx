import { ImageType } from "../../types";
import PGCaption from "./PGCaption";
import PGInfo from "./PGInfo";
import PGNavigation from "./PGNavigation";
import PGProgress from "./PGProgress";
import PGStage from "./PGStage";
import PGThumbs from "./PGThumbs";
import PGToolbar from "./PGToolbar";

type Props = {
  isFullscreen: boolean;
  isSlideshow: boolean;
  isOpenThumbs: boolean;
  images: Array<ImageType>;
  numberOfImages: number;
  currentImage: ImageType;
  currentImageIndex: number;
  currentProgress: number;
  onOpenExternalLink: () => void;
  onToggleFullScreen: () => void;
  onToggleSlideshow: () => void;
  onDownloadImage: () => void;
  onToggleThumbs: () => void;
  onSetCurrentImageIndex: (index: number) => void;
  onPreviousImage: () => void;
  onNextImage: () => void;
};

export default function PGMain(props: Props) {
  const {
    isFullscreen,
    isSlideshow,
    isOpenThumbs,
    images,
    numberOfImages,
    currentImage,
    currentImageIndex,
    currentProgress,
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
          isSlideshow={isSlideshow}
          onOpenExternalLink={props.onOpenExternalLink}
          onToggleFullScreen={props.onToggleFullScreen}
          onToggleSlideshow={props.onToggleSlideshow}
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
        <PGProgress currentProgress={currentProgress} />
      </div>
      <PGThumbs
        images={images}
        currentImageIndex={currentImageIndex}
        onSetCurrentImageIndex={props.onSetCurrentImageIndex}
      />
    </div>
  );
}
