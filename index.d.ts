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
  show: boolean;
  onShow: (show: boolean) => void;
  images: Array<ImageType>;
};

declare const PhotoGallery: React.ComponentClass<PhotoGalleryProps>;

export default PhotoGallery;
