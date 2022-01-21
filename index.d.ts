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
};

declare const PhotoGallery: React.ComponentClass<PhotoGalleryProps>;

export default PhotoGallery;
