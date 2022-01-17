import { ImageType } from "../../types";

type Props = {
  currentImage: ImageType;
};

export default function PGCaption(props: Props) {
  const { currentImage } = props;
  const { src, name, caption } = currentImage;
  const nameFile = name || src.split("/").pop();
  return (
    <div className="gl-caption">
      <div className="gl-caption__body">
        <h4>{nameFile}</h4>
        <p>{caption || new Date().toUTCString()}</p>
      </div>
    </div>
  );
}
