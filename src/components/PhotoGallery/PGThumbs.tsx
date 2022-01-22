import React, { useEffect, useRef } from 'react';
import { ImageType } from '../../common/types';

type Props = {
  images: Array<ImageType>;
  currentImageIndex: number;
  sizeThumbs: number;
  isOpenThumbs: boolean;
  onPressThumbsItem: (index: number) => void;
};

export default function PGThumbs(props: Props) {
  const thumbsRef = useRef<any>(null);
  const thumbsItemRef = useRef<any>(null);
  const { images, currentImageIndex, sizeThumbs, isOpenThumbs, onPressThumbsItem } = props;

  useEffect(() => {
    const thumbsItemLeft = thumbsItemRef?.current?.offsetLeft;
    thumbsRef.current.scrollLeft = thumbsItemLeft;
  }, [currentImageIndex]);

  const renderItems = () => {
    return images.map((image, index) => {
      const active = currentImageIndex === index;
      return (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          ref={active ? thumbsItemRef : null}
          style={{
            width: sizeThumbs,
            height: sizeThumbs,
            backgroundImage: `url(${image.src})`,
          }}
          className={`gl-thumbs__list__item${active ? ' active' : ''}`}
          onClick={() => onPressThumbsItem(index)}
          aria-hidden="true"
        />
      );
    });
  };

  return (
    <div className={`gl-thumbs${isOpenThumbs ? ' active' : ''}`} ref={thumbsRef}>
      <div className="gl-thumbs__list" style={{ width: images.length * (sizeThumbs + 9) }}>
        {renderItems()}
      </div>
    </div>
  );
}
