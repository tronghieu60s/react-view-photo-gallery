import { ImageType } from "../../types";

export default function PGCaption({
  currentImage,
}: {
  currentImage: ImageType;
}) {
  return (
    <div className="gl-caption">
      <div className="gl-caption__body">
        <h4>{currentImage.name}</h4>
        <p>{currentImage.caption}</p>
      </div>
    </div>
  );
}
