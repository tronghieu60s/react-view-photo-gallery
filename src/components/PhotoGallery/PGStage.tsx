import { useEffect, useRef, useState } from "react";
import { ImageType } from "../../common/types";

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
  const [loadImage, setLoadImage] = useState<HTMLImageElement>();
  const [sizeImage, setSizeImage] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const loadImage = new Image();
    loadImage.src = image.src;
    loadImage.onload = () => {
      loadSizeImage();
      setLoadImage(loadImage);
      window.addEventListener("resize", loadSizeImage);
    };

    function loadSizeImage() {
      const widthStage =
        stageRef?.current?.clientWidth / numberImages - STAGE_WIDTH_SUBTRACT;
      const heightStage =
        stageRef?.current?.clientHeight - STAGE_HEIGHT_SUBTRACT;
      let ratioSize = loadImage.height / heightStage;
      let widthImage = loadImage.width / ratioSize;
      let heightImage = heightStage;

      if (widthImage > widthStage) {
        ratioSize = loadImage.width / widthStage;
        widthImage = widthStage;
        heightImage = loadImage.height / ratioSize;
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
