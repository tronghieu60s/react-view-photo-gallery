import "./PhotoGallery.scss";
import { useState } from "react";
import PGMain from "./PhotoGallery/PGMain";
import { getFileExtension } from "../helpers/commonFunctions";
import { ImageType } from "../types";

type Props = { images: Array<ImageType> };

export default function PhotoGallery(props: Props) {
  const { images } = props;
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isOpenThumbs, setIsOpenThumbs] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <PGMain
      isFullscreen={isFullscreen}
      isOpenThumbs={isOpenThumbs}
      images={images}
      numberOfImages={images.length}
      currentImage={images[currentImageIndex]}
      currentImageIndex={currentImageIndex}
      /* Actions */
      onOpenExternalLink={() =>
        window.open(images[currentImageIndex].src, "_blank")
      }
      onToggleFullScreen={onToggleFullScreen}
      onDownloadImage={onDownloadImage}
      onToggleThumbs={() => setIsOpenThumbs(!isOpenThumbs)}
      onSetCurrentImageIndex={(index) => setCurrentImageIndex(index)}
      onPreviousImage={onPreviousImage}
      onNextImage={onNextImage}
    />
  );
}
