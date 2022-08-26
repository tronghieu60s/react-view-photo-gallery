export type ImageType = {
  /**
   * the image src attribute value
   */
  src: string;
  /**
   * the image alt attribute value
   */
  name?: string;
  /**
   * the image caption attribute value
   */
  caption?: string;
};

export type PhotoGalleryProps = {
  /**
   * the show attribute to display photo gallery
   */
  show: boolean;
  /**
   * the action show attribute to display photo gallery
   */
  onShow: (show: boolean) => void;
  /**
   * the images to display in photo gallery
   */
  images: Array<ImageType>;
  /**
   * the image index to display in photo gallery
   * @default 0
   */
  currentIndex: number;
  /**
   * link you want to open when you click on button open link
   */
  openLink?: string;
  /**
   * show the image name
   */
  showName?: boolean;
  /**
   * show the image caption
   */
  showCaption?: boolean;
  /**
   * show the button open link
   */
  showOpenLink?: boolean;
  /**
   * show the button fullscreen
   */
  showFullscreen?: boolean;
  /**
   * show the button slideshow
   */
  showSlideshow?: boolean;
  /**
   * show the button download
   */
  showDownload?: boolean;
  /**
   * show the button thumbnails
   */
  showThumbnails?: boolean;
};

declare const PhotoGallery: React.ComponentClass<PhotoGalleryProps>;

export default PhotoGallery;
