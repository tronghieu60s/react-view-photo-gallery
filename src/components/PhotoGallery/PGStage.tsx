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
  const [loadImage, setLoadImage] = useState<HTMLImageElement>();
  const [sizeImage, setSizeImage] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const loadImage = new Image();
    loadImage.src = image.src;
    loadImage.onload = () => loadSizeImage();

    function loadSizeImage() {
      const stageHeight = stageRef?.current?.clientHeight - stageHeightSubtract;
      const ratioSize = loadImage.height / stageHeight;
      const widthImage = loadImage.width / ratioSize;

      setLoadImage(loadImage);
      setSizeImage({ width: widthImage, height: stageHeight });
    }
  }, [image, isFullscreen, isOpenThumbs]);

  const contentStyles = {
    width: sizeImage.width,
    height: sizeImage.height,
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
