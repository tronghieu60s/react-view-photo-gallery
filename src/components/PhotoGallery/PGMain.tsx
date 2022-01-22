import { useContext, useEffect, useState } from "react";
import { ImageType, PhotoGalleryProps } from "../../common/types";
import ParametersContext from "../../contexts/ParametersContext";
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

const MOBILE_SIZE_IMAGE = 75;
const TABLET_SIZE_IMAGE = 120;
const DESKTOP_SIZE_IMAGE = 150;

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
    onOpenExternalLink,
    onToggleFullScreen,
    onToggleSlideshow,
    onDownloadImage,
    onToggleThumbs,
    onSetCurrentImageIndex,
    onPreviousImage,
    onNextImage,
  } = props;

  const [sizeThumbsImage, setSizeThumbsImage] = useState(0);

  const { show, onShow } = useContext<PhotoGalleryProps>(ParametersContext);

  useEffect(() => {
    handleSizeThumbsImage();
    window.addEventListener("resize", handleSizeThumbsImage);

    function handleSizeThumbsImage() {
      const widthWindow = window.screen.width;
      if (widthWindow < 425) {
        setSizeThumbsImage(MOBILE_SIZE_IMAGE);
      } else if (widthWindow < 768) {
        setSizeThumbsImage(TABLET_SIZE_IMAGE);
      } else {
        setSizeThumbsImage(DESKTOP_SIZE_IMAGE);
      }
    }
  }, []);

  return (
    <div
      className={`gl-container${!show ? " gl-container-hidden" : ""}${
        isOpenThumbs ? " gl-show-thumbs" : ""
      }`}
    >
      <div className="gl-bg"></div>
      <div
        className="gl-inner"
        style={{ bottom: isOpenThumbs ? sizeThumbsImage : 0 }}
      >
        <PGInfo
          numberOfImages={numberOfImages}
          currentImageIndex={currentImageIndex}
        />
        <PGToolbar
          isFullscreen={isFullscreen}
          isSlideshow={isSlideshow}
          onOpenExternalLink={onOpenExternalLink}
          onToggleFullScreen={onToggleFullScreen}
          onToggleSlideshow={onToggleSlideshow}
          onDownloadImage={onDownloadImage}
          onToggleThumbs={onToggleThumbs}
          onToggleShowPG={() => onShow(!show)}
        />
        <PGNavigation
          numberOfImages={numberOfImages}
          onPreviousImage={onPreviousImage}
          onNextImage={onNextImage}
        />
        <PGStage
          images={images}
          numberOfImages={numberOfImages}
          currentImageIndex={currentImageIndex}
          isFullscreen={isFullscreen}
          isOpenThumbs={isOpenThumbs}
        />
        <PGCaption currentImage={currentImage} />
        <PGProgress currentProgress={currentProgress} />
      </div>
      <PGThumbs
        images={images}
        currentImageIndex={currentImageIndex}
        sizeThumbsImage={sizeThumbsImage}
        onSetCurrentImageIndex={onSetCurrentImageIndex}
      />
    </div>
  );
}
