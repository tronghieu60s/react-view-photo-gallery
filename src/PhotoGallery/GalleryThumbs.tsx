import { ImageType } from "../types";

type Props = {
  images: Array<ImageType>;
  currentImageIndex: number;
  onSetCurrentImageIndex: (index: number) => void;
};

const sizeImage = 150;

export default function GalleryThumbs(props: Props) {
  const { currentImageIndex, images } = props;
  const { onSetCurrentImageIndex } = props;
  const widthList = images.length * (sizeImage + 9);

  const renderItems = () => {
    return images.map((image, index) => (
      <div
        key={index}
        style={{ backgroundImage: `url(${image.src})` }}
        className={`gl-thumbs__item${
          currentImageIndex === index ? " active" : ""
        }`}
        onClick={() => onSetCurrentImageIndex(index)}
      ></div>
    ));
  }

  return (
    <div className="gl-thumbs">
      <div className="gl-thumbs__list" style={{ width: widthList }}>
        {renderItems()}
      </div>
    </div>
  );
}
