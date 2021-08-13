import { useState } from "react";
import { ImageType } from "../types";
import GalleryMain from "./GalleryMain";
import "./PhotoGallery.scss";

type Props = {
  images: Array<ImageType>;
};

export default function PhotoGallery(props: Props) {
  const { images } = props;
  const [isOpenThumbs, setIsOpenThumbs] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <GalleryMain
      isOpenThumbs={isOpenThumbs}
      images={images}
      currentImageIndex={currentImageIndex}
      /* Actions */
      onPreviousImage={onPreviousImage}
      onNextImage={onNextImage}
    />
  );
}
