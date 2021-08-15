import { useEffect, useState } from "react";
import {
  ParametersProps,
  ParametersProvider,
} from "../contexts/ParametersContext";
import { getFileExtension } from "../helpers/commonFunctions";
import "./PhotoGallery.scss";
import PGMain from "./PhotoGallery/PGMain";

const SLIDE_SHOW_MILLISECONDS = 3000;

export default function PhotoGallery(props: ParametersProps) {
  const { images } = props;
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const [isOpenThumbs, setIsOpenThumbs] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    if (isSlideshow) {
      setCurrentProgress(3000);
      const slideshow = setInterval(() => {
        setCurrentProgress(0);
        setTimeout(onNextImage, 100);
      }, SLIDE_SHOW_MILLISECONDS);
      return () => clearInterval(slideshow);
    }
    setCurrentProgress(0);
  }, [isSlideshow, currentImageIndex]);

  function onToggleFullScreen() {
    if (!document.fullscreenElement || !isFullscreen) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  }

  const onDownloadImage = () => {
    const { src } = images[currentImageIndex];
    const fileExtension = getFileExtension(src || "");
    fetch(src)
      .then((res) => res.blob())
      .then((blob) => {
        const href = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = href;
        link.setAttribute("download", `${Date.now()}.${fileExtension}`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((_) => alert("Cannot Download File!"));
  };

  const onPreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(images.length - 1);
    }
  };

  const onNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  return (
    <ParametersProvider {...props}>
      <PGMain
        isFullscreen={isFullscreen}
        isSlideshow={isSlideshow}
        isOpenThumbs={isOpenThumbs}
        images={images}
        numberOfImages={images.length}
        currentImage={images[currentImageIndex]}
        currentImageIndex={currentImageIndex}
        currentProgress={currentProgress}
        /* Actions */
        onOpenExternalLink={() =>
          window.open(images[currentImageIndex].src, "_blank")
        }
        onToggleFullScreen={onToggleFullScreen}
        onToggleSlideshow={() => setIsSlideshow(!isSlideshow)}
        onDownloadImage={onDownloadImage}
        onToggleThumbs={() => setIsOpenThumbs(!isOpenThumbs)}
        onSetCurrentImageIndex={(index) => setCurrentImageIndex(index)}
        onPreviousImage={onPreviousImage}
        onNextImage={onNextImage}
      />
    </ParametersProvider>
  );
}
