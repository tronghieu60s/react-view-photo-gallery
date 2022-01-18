import { useEffect, useRef } from "react";
import { ImageType } from "../../common/types";

type Props = {
  images: Array<ImageType>;
  currentImageIndex: number;
  sizeThumbsImage: number;
  onSetCurrentImageIndex: (index: number) => void;
};

export default function PGThumbs(props: Props) {
  const thumbsRef = useRef<any>(null);
  const thumbsItemRef = useRef<any>(null);
  const { images, currentImageIndex, sizeThumbsImage, onSetCurrentImageIndex } =
    props;

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
          style={{
            width: sizeThumbsImage,
            height: sizeThumbsImage,
            backgroundImage: `url(${image.src})`,
          }}
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
        style={{ width: images.length * (sizeThumbsImage + 9) }}
      >
        {renderItems()}
      </div>
    </div>
  );
}
