import { Fragment } from "react";
import PhotoGallery from "./components/PhotoGallery";
import { ImageType } from "./types";

const arrImages: ImageType[] = [
  {
    src: "https://www.anphatpc.com.vn/media/news/0812_wp3850825-4k-pc-wallpapers.jpg",
    name: "RDT_20210707_2149394067230846470530573-6P3zgfiE",
    caption: "Đỗ gia huy · 14/7/21 at 12:36",
  },
  {
    src: "https://wallpapercave.com/wp/Yad5yKT.jpg",
    name: "IMG_20210412_160702.jpg",
    caption: "Đỗ gia huy · 14/7/21 at 12:36",
  },
  {
    src: "https://wallpaperfordesktop.com/wp-content/uploads/2021/05/Anime-Wallpaper-4k.jpg",
    name: "RDT_20210707_2149237954976371727639099.jpg",
    caption: "Đỗ gia huy · 14/7/21 at 12:36",
  },
  {
    src: "https://media.idownloadblog.com/wp-content/uploads/2020/10/iOS-14.2-wallpaper-LAke-The-Desert-Dark-Mode.jpg",
    name: "RDT_20210707_214931735550536695879417-YPUMUTdH.jpg",
    caption: "Đỗ gia huy · 14/7/21 at 12:36",
  },
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
  return (
    <Fragment>
      <h1>Hello World!</h1>
      <PhotoGallery images={arrImages} />
    </Fragment>
  );
}
