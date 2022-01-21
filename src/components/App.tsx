import { Fragment, useState } from "react";
import { ImageType } from "../common/types";
import PhotoGallery from "./PhotoGallery";

const arrImages: ImageType[] = [
  { src: "https://via.placeholder.com/500x500" },
  { src: "https://via.placeholder.com/1000x1000" },
  { src: "https://via.placeholder.com/1200x1800" },
];

export default function App(): JSX.Element {
  const [showGallery, setShowGallery] = useState(false);
  return (
    <Fragment>
      <button onClick={() => setShowGallery(true)}>Show</button>
      <PhotoGallery
        show={showGallery}
        onShow={setShowGallery}
        images={arrImages}
      />
    </Fragment>
  );
}
