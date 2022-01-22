import { memo } from "react";
import { ImageType } from "../../common/types";

type Props = {
  images: Array<ImageType>;
  currentImageIndex: number;
};

export default memo(function PGCaption(props: Props) {
  const { images, currentImageIndex } = props;
  const { src, name, caption } = images[currentImageIndex];

  return (
    <div className="gl-caption">
      <div className="gl-caption__body">
        <h4>{name || src.split("/").pop()}</h4>
        <span>{caption || new Date().toUTCString()}</span>
      </div>
    </div>
  );
});
