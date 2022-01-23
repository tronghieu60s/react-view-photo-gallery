import React, { useContext } from 'react';
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
  onOpenExternalLink: () => void;
  onToggleFullScreen: () => void;
  onToggleSlideshow: () => void;
  onDownloadImage: () => void;
  onToggleThumbs: () => void;
  onPressThumbsItem: (index: number) => void;
  onPreviousImage: () => void;
  onNextImage: () => void;
};

export default function PGMain(props: Props) {
  const {
    isFullscreen,
    isSlideshow,
    isOpenThumbs,
    images,
    currentImageIndex,
    currentProgress,
    onOpenExternalLink,
    onToggleFullScreen,
    onToggleSlideshow,
    onDownloadImage,
    onToggleThumbs,
    onPressThumbsItem,
    onPreviousImage,
    onNextImage,
  } = props;

  const { show, onShow } = useContext<PhotoGalleryProps>(ParametersContext);

  return (
    <div className={`gl-container${show ? ' active' : ''}${isOpenThumbs ? ' thumbs-active' : ''}`}>
      <div className="gl-bg" />
      <div className="gl-inner">
        <PGInfo images={images} currentImageIndex={currentImageIndex} />
        <PGToolbar
          isFullscreen={isFullscreen}
          isSlideshow={isSlideshow}
          onOpenExternalLink={onOpenExternalLink}
          onToggleFullScreen={onToggleFullScreen}
          onToggleSlideshow={onToggleSlideshow}
          onDownloadImage={onDownloadImage}
          onToggleThumbs={onToggleThumbs}
          onToggleShowPG={() => onShow(!show)}
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
}
