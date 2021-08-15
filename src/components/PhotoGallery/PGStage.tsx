import { useEffect, useRef, useState } from "react";
import { ImageType } from "../../types";

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
  const [sizeImage, setSizeImage] = useState({ width: 0, height: 0, padding: 0 });

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
      let paddingImage = STAGE_HEIGHT_SUBTRACT / 2;

      if (widthImage > widthStage) {
        ratioSize = loadImage.width / widthStage;
        widthImage = widthStage;
        heightImage = loadImage.height / ratioSize;
        paddingImage = 0;
      }

      setSizeImage({
        width: widthImage,
        height: heightImage,
        padding: paddingImage,
      });
    }
  }, [image, isFullscreen, isOpenThumbs]);

  const contentStyles = {
    width: sizeImage.width,
    height: sizeImage.height,
    paddingBottom: sizeImage.padding,
  };

  return (
    <div className="gl-stage" ref={stageRef}>
      <div className="gl-stage__slide">
        <div className="gl-stage__content" style={contentStyles}>
          <img src={loadImage?.src} alt="" className="gl-stage__image" />
        </div>
      </div>
    </div>
  );
}
