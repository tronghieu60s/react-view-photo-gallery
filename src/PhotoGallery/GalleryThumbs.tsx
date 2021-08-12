import GalleryThumbsItem from "./GalleryThumbsItem";

export default function GalleryThumbs() {
  return (
    <div className="gallery-thumbs">
      <div className="gallery-thumbs__list">
        <GalleryThumbsItem />
        <GalleryThumbsItem />
        <GalleryThumbsItem />
      </div>
    </div>
  );
}
