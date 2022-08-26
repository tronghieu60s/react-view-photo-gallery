import React, { memo, useContext } from 'react';
import { ImageType, PhotoGalleryProps } from '../../common/types';
import ParametersContext from '../../contexts/ParametersContext';
import PGCaption from './PGCaption';
import PGInfo from './PGInfo';
import PGNavigation from './PGNavigation';
import PGProgress from './PGProgress';
import PGStage from './PGStage';
import PGThumbs from './PGThumbs';
import PGToolbar from './PGToolbar';

type Props = {
  isFullscreen: boolean;
  isSlideshow: boolean;
  isOpenThumbs: boolean;
  images: Array<ImageType>;
  currentImageIndex: number;
  currentProgress: number;
  onDownloadImage: () => void;
  onNextImage: () => void;
  onOpenExternalLink: () => void;
  onPressThumbsItem: (index: number) => void;
  onPreviousImage: () => void;
  onToggleFullScreen: () => void;
  onToggleSlideshow: () => void;
  onToggleThumbs: () => void;
};

export default memo(function PGMain(props: Props) {
  const {
    isFullscreen,
    isSlideshow,
    isOpenThumbs,
    images,
    currentImageIndex,
    currentProgress,
    onDownloadImage,
    onNextImage,
    onOpenExternalLink,
    onPressThumbsItem,
    onPreviousImage,
    onToggleFullScreen,
    onToggleSlideshow,
    onToggleThumbs,
  } = props;

  const { show, onClose } = useContext<PhotoGalleryProps>(ParametersContext);

  return (
    <div className={`gl-container${show ? ' active' : ''}${isOpenThumbs ? ' thumbs-active' : ''}`}>
      <div className="gl-bg" />
      <div className="gl-inner">
        <PGInfo images={images} currentImageIndex={currentImageIndex} />
        <PGToolbar
          isFullscreen={isFullscreen}
          isSlideshow={isSlideshow}
          onDownloadImage={onDownloadImage}
          onOpenExternalLink={onOpenExternalLink}
          onToggleFullScreen={onToggleFullScreen}
          onCloseShowPG={onClose}
          onToggleSlideshow={onToggleSlideshow}
          onToggleThumbs={onToggleThumbs}
        />
        <PGNavigation images={images} onPreviousImage={onPreviousImage} onNextImage={onNextImage} />
        <PGStage
          images={images}
          currentImageIndex={currentImageIndex}
          isFullscreen={isFullscreen}
          isOpenThumbs={isOpenThumbs}
        />
        <PGCaption images={images} currentImageIndex={currentImageIndex} />
        <PGProgress currentProgress={currentProgress} />
      </div>
      <PGThumbs
        images={images}
        currentImageIndex={currentImageIndex}
        onPressThumbsItem={onPressThumbsItem}
      />
    </div>
  );
});
