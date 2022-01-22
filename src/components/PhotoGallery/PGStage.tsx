import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ImageType } from '../../common/types';

type Props = {
  images: Array<ImageType>;
  currentImageIndex: number;
  isFullscreen: boolean;
  isOpenThumbs: boolean;
};

type PropsItem = {
  image: ImageType;
  numberImages: number;
  isFullscreen: boolean;
  isOpenThumbs: boolean;
  stageRef: React.MutableRefObject<any>;
};

const STAGE_WIDTH_SUBTRACT = 40;
const STAGE_HEIGHT_SUBTRACT = 120;

export function PGStageItem(props: PropsItem) {
  const { image, numberImages, isFullscreen, isOpenThumbs, stageRef } = props;
  const [loadImage, setLoadImage] = useState<any>();
  const [sizeImage, setSizeImage] = useState({ width: 0, height: 0 });

  useEffect(() => {
    /* eslint-disable no-use-before-define */
    const imageL = new Image();
    imageL.src = image.src;
    imageL.onload = () => {
      loadSizeImage();
      setLoadImage(imageL);
      window.addEventListener('resize', loadSizeImage);
    };

    function loadSizeImage() {
      let widthImage = 0;
      let heightImage = 0;
      const width = imageL?.width;
      const height = imageL?.height;
      const { clientWidth, clientHeight } = stageRef?.current || null;
      const widthStage = clientWidth / numberImages - STAGE_WIDTH_SUBTRACT;
      const heightStage = clientHeight - STAGE_HEIGHT_SUBTRACT;

      widthImage = width / (height / heightStage);
      heightImage = heightStage;
      if (widthImage > widthStage) {
        widthImage = widthStage;
        heightImage = height / (width / widthStage);
      }

      setSizeImage({ width: widthImage, height: heightImage });
    }
  }, [image, isFullscreen, isOpenThumbs]);

  return (
    <div className="gl-stage__item">
      <div
        className="gl-stage__item__content"
        style={{ width: sizeImage.width, height: sizeImage.height }}
      >
        <img src={loadImage?.src} alt="" className="gl-stage__image" />
      </div>
    </div>
  );
}

export default function PGStage(props: Props) {
  const { images, currentImageIndex, ...otherProps } = props;
  const stageRef = useRef<any>(null);

  return (
    <div
      className="gl-stage"
      ref={stageRef}
      style={{
        left: `${-currentImageIndex * 100}%`,
        width: `${images.length * 100}%`,
      }}
    >
      <div className="gl-stage__slide">
        {images.map((image, index) => (
          <PGStageItem
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            image={image}
            numberImages={images.length}
            stageRef={stageRef}
            {...otherProps}
          />
        ))}
      </div>
    </div>
  );
}
