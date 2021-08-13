import { ImageType } from "../types";
import GalleryThumbsItem from "./GalleryThumbsItem";

type Props = {
  currentImage: number;
  images: Array<ImageType>;
};

const sizeImage = 150;

export default function GalleryThumbs(props: Props) {
  const { currentImage, images } = props;
  const widthList = images.length * (sizeImage + 9);
  return (
    <div className="gallery-thumbs">
      <div className="gallery-thumbs__list" style={{ width: widthList }}>
        {images.map((image, index) => (
          <GalleryThumbsItem
            key={index}
            image={image}
            active={currentImage === index}
          />
        ))}
      </div>
    </div>
  );
}
