import { useEffect, useRef, useState } from "react";
import { ImageType } from "../../types";

type Props = {
  image: ImageType;
  isFullscreen: boolean;
  isOpenThumbs: boolean;
};

const stageHeightSubtract = 120;

export default function PGStage(props: Props) {
  const { image, isFullscreen, isOpenThumbs } = props;
  const stageRef = useRef<any>(null);
  const [isMaxWidthImage, setIsMaxWidthImage] = useState(false);
  const [loadImage, setLoadImage] = useState<HTMLImageElement>();
  const [sizeImage, setSizeImage] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const loadImage = new Image();
    loadImage.src = image.src;
    loadImage.onload = () => loadSizeImage();

    function loadSizeImage() {
      const widthStage = stageRef?.current?.clientWidth;
      const heightStage = stageRef?.current?.clientHeight - stageHeightSubtract;
      const ratioSize = loadImage.height / heightStage;
      const widthImage = loadImage.width / ratioSize;

      handleIsMaxWidthImage(widthImage, widthStage);
      window.addEventListener("resize", () => {
        const widthStage = stageRef?.current?.clientWidth;
        handleIsMaxWidthImage(widthImage, widthStage);
      });

      setLoadImage(loadImage);
      setSizeImage({ width: widthImage, height: heightStage });
    }

    function handleIsMaxWidthImage(widthImage: number, widthStage: number) {
      if (widthImage > widthStage) {
        setIsMaxWidthImage(true);
      } else {
        setIsMaxWidthImage(false);
      }
    }
  }, [image, isFullscreen, isOpenThumbs]);

  const contentStyles = {
    width: isMaxWidthImage ? "90%" : sizeImage.width,
    height: isMaxWidthImage ? "auto" : sizeImage.height,
    paddingBottom: stageHeightSubtract / 2,
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
