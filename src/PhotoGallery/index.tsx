import GalleryCaption from "./GalleryCaption";
import GalleryInfo from "./GalleryInfo";
import GalleryNavigation from "./GalleryNavigation";
import GalleryStage from "./GalleryStage";
import GalleryThumbs from "./GalleryThumbs";
import GalleryToolbar from "./GalleryToolbar";
import "./PhotoGallery.scss";

export default function PhotoGallery() {
  return (
    <div className="gallery-container gallery-container-show-thumbs">
      <div className="gallery-bg"></div>
      <div className="gallery-inner">
        <GalleryInfo />
        <GalleryToolbar />
        <GalleryNavigation />
        <GalleryStage />
        <GalleryCaption />
      </div>
      <GalleryThumbs />
    </div>
  );
}
