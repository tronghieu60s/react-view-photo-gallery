export type ImageType = {
  src: string;
  name?: string;
  caption?: string;
};

export type PhotoGalleryProps = {
  show: boolean;
  onShow: (show: boolean) => void;
  images: Array<ImageType>;
};
