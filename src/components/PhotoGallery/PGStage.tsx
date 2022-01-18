import { useEffect, useRef, useState } from "react";
import { ImageType } from "../../common/types";

type Props = {
  image: ImageType;
  isFullscreen: boolean;
  isOpenThumbs: boolean;
};

const STAGE_WIDTH_SUBTRACT = 40;
const STAGE_HEIGHT_SUBTRACT = 120;

export default function PGStage(props: Props) {
  const { image, isFullscreen, isOpenThumbs } = props;
  const stageRef = useRef<any>(null);
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
      const widthStage = stageRef?.current?.clientWidth - STAGE_WIDTH_SUBTRACT;
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
    <div className="gl-stage" ref={stageRef}>
      <div className="gl-stage__slide">
        <div
          className="gl-stage__content"
          style={{ width: sizeImage.width, height: sizeImage.height }}
        >
          <img src={loadImage?.src} alt="" className="gl-stage__image" />
        </div>
      </div>
    </div>
  );
}
