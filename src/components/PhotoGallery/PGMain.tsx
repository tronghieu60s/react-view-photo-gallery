import React, { useCallback, useContext, useEffect, useState } from 'react';
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

const MOBILE_SIZE_IMAGE = 75;
const TABLET_SIZE_IMAGE = 120;
const DESKTOP_SIZE_IMAGE = 150;

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

  const [sizeThumbs, setSizeThumbs] = useState(0);

  const { show, onShow } = useContext<PhotoGalleryProps>(ParametersContext);

  const handleSizeThumbs = useCallback(() => {
    const widthWindow = window.screen.width;
    if (widthWindow < 425) {
      setSizeThumbs(MOBILE_SIZE_IMAGE);
    } else if (widthWindow < 768) {
      setSizeThumbs(TABLET_SIZE_IMAGE);
    } else {
      setSizeThumbs(DESKTOP_SIZE_IMAGE);
    }
  }, []);

  useEffect(() => {
    handleSizeThumbs();
    window.addEventListener('resize', handleSizeThumbs);
  }, []);

  return (
    <div className={`gl-container${show ? ' active' : ''}`}>
      <div className="gl-bg" />
      <div className="gl-inner" style={{ bottom: isOpenThumbs ? sizeThumbs : 0 }}>
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
        sizeThumbs={sizeThumbs}
        isOpenThumbs={isOpenThumbs}
        onPressThumbsItem={onPressThumbsItem}
      />
    </div>
  );
}
