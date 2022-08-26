import React from 'react';
import { PhotoGalleryProps } from '../common/types';

type PhotoGalleryContextProps = PhotoGalleryProps & {
  children?: JSX.Element;
};

const defaultParams: PhotoGalleryContextProps = {
  show: false,
  onClose: () => {},
  images: [],
  currentIndex: 0,
  showName: true,
  showCaption: true,
  showOpenLink: true,
  showFullscreen: true,
  showSlideshow: true,
  showDownload: true,
  showThumbnails: true,
};

const ParametersContext = React.createContext<PhotoGalleryContextProps>(defaultParams);

export const ParametersProvider = (props: PhotoGalleryContextProps) => {
  const {
    children,
    show,
    onClose,
    images,
    currentIndex = 0,
    showName = true,
    showCaption = true,
    showOpenLink = true,
    showFullscreen = true,
    showSlideshow = true,
    showDownload = true,
    showThumbnails = true,
  } = props;

  if (!images || images.length === 0) {
    throw new Error('ParametersProvider: images should be provided');
  }

  return (
    <ParametersContext.Provider
      value={{
        show,
        onClose,
        images,
        currentIndex,
        showName,
        showCaption,
        showOpenLink,
        showFullscreen,
        showSlideshow,
        showDownload,
        showThumbnails,
      }}
    >
      {children}
    </ParametersContext.Provider>
  );
};

export const ParametersConsumer = ParametersContext.Consumer;
export default ParametersContext;
