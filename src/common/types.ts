export type ImageType = {
  src: string;
  name?: string;
  caption?: string;
};

export type PhotoGalleryProps = {
  show: boolean;
  onClose: () => void;
  images: Array<ImageType>;
  currentIndex?: number;
  openLink?: string;
  showName?: boolean;
  showCaption?: boolean;
  showOpenLink?: boolean;
  showFullscreen?: boolean;
  showSlideshow?: boolean;
  showDownload?: boolean;
  showThumbnails?: boolean;
};
