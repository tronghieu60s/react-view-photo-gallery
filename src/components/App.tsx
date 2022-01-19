import { Fragment, useState } from "react";
import { ImageType } from "../common/types";
import PhotoGallery from "./PhotoGallery";

const arrImages: ImageType[] = [
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/71PmIZIFMlL.png",
    name: "",
    caption: "",
  },
  {
    src: "https://i.pinimg.com/originals/0b/3a/07/0b3a07cbf4f5140c7b499eaf966624e5.jpg",
    name: "",
    caption: "",
  },
];

export default function App(): JSX.Element {
  const [showGallery, setShowGallery] = useState(false);
  return (
    <Fragment>
      <button onClick={() => setShowGallery(true)}>Show</button>
      <PhotoGallery
        show={showGallery}
        setShow={setShowGallery}
        images={arrImages}
      />
    </Fragment>
  );
}
