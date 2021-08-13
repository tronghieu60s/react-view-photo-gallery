import { Fragment } from "react";
import PhotoGallery from "./PhotoGallery";
import { ImageType } from "./types";

const arrImages: ImageType[] = [
  { src: "https://i.imgur.com/QQCkPzN.jpeg", name: "A", caption: "A" },
  {
    src: "https://i.pinimg.com/originals/e9/29/1c/e9291cc39e820cd4afc6e58618dfc9e0.jpg",
    name: "A",
    caption: "A",
  },
  {
    src: "https://cdn.pixabay.com/photo/2019/09/27/09/39/melons-4507974__480.jpg",
    name: "A",
    caption: "A",
  },
  {
    src: "https://media.idownloadblog.com/wp-content/uploads/2020/10/iOS-14.2-wallpaper-LAke-The-Desert-Dark-Mode.jpg",
    name: "A",
    caption: "A",
  },
  { src: "https://i.imgur.com/QQCkPzN.jpeg", name: "A", caption: "A" },
  { src: "https://i.imgur.com/QQCkPzN.jpeg", name: "A", caption: "A" },
];

export default function App(): JSX.Element {
  return (
    <Fragment>
      <h1>Hello World!</h1>
      <PhotoGallery images={arrImages} />
    </Fragment>
  );
}
