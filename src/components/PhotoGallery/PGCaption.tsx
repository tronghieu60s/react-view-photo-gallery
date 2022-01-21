import { ImageType } from "../../common/types";

type Props = {
  currentImage: ImageType;
};

export default function PGCaption(props: Props) {
  const { currentImage } = props;
  const { src, name, caption } = currentImage;
  const nameGl = name || src.split("/").pop();
  const captionGl = caption || new Date().toUTCString();
  return (
    <div className="gl-caption">
      <div className="gl-caption__body">
        <h4>{nameGl}</h4>
        <span>{captionGl}</span>
      </div>
    </div>
  );
}
