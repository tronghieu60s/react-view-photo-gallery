import { Fragment, useState } from "react";
import PhotoGallery from "./components/PhotoGallery";
import { ImageType } from "./types";

const arrImages: ImageType[] = [
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/71PmIZIFMlL.png",
    name: "anhyeuem.jpg",
    caption: "Đỗ gia huy · 14/7/21 at 12:36",
  },
  {
    src: "https://i.pinimg.com/originals/0b/3a/07/0b3a07cbf4f5140c7b499eaf966624e5.jpg",
    name: "RDT_20210707_214931735550536695879417-YPUMUTdH.jpg",
    caption: "Đỗ gia huy · 14/7/21 at 12:36",
  },
];

export default function App(): JSX.Element {
  const [showGallery, setShowGallery] = useState(false);
  return (
    <Fragment>
      <h1>Hello World!</h1>
      <button onClick={() => setShowGallery(true)}>Show</button>
      <PhotoGallery
        show={showGallery}
        setShow={setShowGallery}
        images={arrImages}
      />
    </Fragment>
  );
}
