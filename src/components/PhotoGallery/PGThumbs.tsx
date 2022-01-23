import React, { memo, useEffect, useRef, useState } from 'react';
import { ImageType } from '../../common/types';

type Props = {
  images: Array<ImageType>;
  currentImageIndex: number;
  onPressThumbsItem: (index: number) => void;
};

export default memo(function PGThumbs(props: Props) {
  const thumbsRef = useRef<any>(null);
  const thumbsItemRef = useRef<any>(null);
  const [widthThumbsList, setWidthThumbsList] = useState(0);
  const { images, currentImageIndex, onPressThumbsItem } = props;

  function loadSizeThumbs() {
    const width = images.length * thumbsItemRef?.current?.clientHeight + 9;
    setWidthThumbsList(width);
  }

  useEffect(() => {
    thumbsRef.current.scrollLeft = thumbsItemRef?.current?.offsetLeft;
    loadSizeThumbs();
    window.addEventListener('resize', loadSizeThumbs);
  }, [currentImageIndex]);

  return (
    <div className="gl-thumbs" ref={thumbsRef}>
      <div className="gl-thumbs__list" style={{ width: widthThumbsList }}>
        {images.map((image, index) => {
          const active = currentImageIndex === index;
          return (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              ref={active ? thumbsItemRef : null}
              style={{ backgroundImage: `url(${image.src})` }}
              className={`gl-thumbs__list__item${active ? ' active' : ''}`}
              onClick={() => onPressThumbsItem(index)}
              aria-hidden="true"
            />
          );
        })}
      </div>
    </div>
  );
});