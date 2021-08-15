import { useEffect, useRef } from "react";
import { ImageType } from "../../types";

type Props = {
  images: Array<ImageType>;
  currentImageIndex: number;
  onSetCurrentImageIndex: (index: number) => void;
};

const sizeImage = 150;

export default function PGThumbs(props: Props) {
  const thumbsRef = useRef<any>(null);
  const thumbsItemRef = useRef<any>(null);
  const { currentImageIndex, images, onSetCurrentImageIndex } = props;

  useEffect(() => {
    const thumbsItemLeft = thumbsItemRef?.current?.offsetLeft;
    thumbsRef.current.scrollLeft = thumbsItemLeft;
  }, [currentImageIndex]);

  const renderItems = () => {
    return images.map((image, index) => {
      const active = currentImageIndex === index;
      return (
        <div
          key={index}
          ref={active ? thumbsItemRef : null}
          style={{ backgroundImage: `url(${image.src})` }}
          className={`gl-thumbs__item${active ? " active" : ""}`}
          onClick={() => onSetCurrentImageIndex(index)}
        ></div>
      );
    });
  };

  return (
    <div className="gl-thumbs" ref={thumbsRef}>
      <div
        className="gl-thumbs__list"
        style={{ width: images.length * (sizeImage + 9) }}
      >
        {renderItems()}
      </div>
    </div>
  );
}
