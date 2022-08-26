import React, { memo, useContext } from 'react';
import { PhotoGalleryProps } from '../../common/types';
import ParametersContext from '../../contexts/ParametersContext';
import {
  IconsDownload,
  IconsExitFullscreen,
  IconsFullscreen,
  IconsGridAlt,
  IconsLinkExternal,
  IconsPlayCircle,
  IconsStopCircle,
  IconsXCircle,
  IconsZoomIn,
} from './PGIcons';

type Props = {
  isFullscreen: boolean;
  isSlideshow: boolean;
  onCloseShowPG: () => void;
  onDownloadImage: () => void;
  onOpenExternalLink: () => void;
  onToggleFullScreen: () => void;
  onToggleSlideshow: () => void;
  onToggleThumbs: () => void;
};

export default memo(function PGToolbar(props: Props) {
  const { isFullscreen, isSlideshow } = props;
  const {
    onCloseShowPG,
    onDownloadImage,
    onOpenExternalLink,
    onToggleFullScreen,
    onToggleSlideshow,
    onToggleThumbs,
  } = props;

  const { showOpenLink, showFullscreen, showSlideshow, showDownload, showThumbnails } =
    useContext<PhotoGalleryProps>(ParametersContext);

  return (
    <div className="gl-toolbar">
      {/* <button className="gl-button" title="Zoom">
        <IconsZoomIn />
      </button> */}
      {showOpenLink && (
        <button type="button" onClick={onOpenExternalLink} className="gl-button" title="Open link">
          <IconsLinkExternal />
        </button>
      )}
      {showFullscreen && (
        <button
          type="button"
          onClick={onToggleFullScreen}
          className="gl-button"
          title="Full screen"
        >
          {!isFullscreen ? <IconsFullscreen /> : <IconsExitFullscreen />}
        </button>
      )}
      {showSlideshow && (
        <button
          type="button"
          onClick={onToggleSlideshow}
          className="gl-button"
          title={`${isSlideshow ? 'Stop' : 'Start'} slideshow`}
        >
          {isSlideshow ? <IconsStopCircle /> : <IconsPlayCircle />}
        </button>
      )}
      {showDownload && (
        <button type="button" onClick={onDownloadImage} className="gl-button" title="Download">
          <IconsDownload />
        </button>
      )}
      {showThumbnails && (
        <button type="button" onClick={onToggleThumbs} className="gl-button" title="Thumbnails">
          <IconsGridAlt />
        </button>
      )}
      <button type="button" onClick={onCloseShowPG} className="gl-button" title="Close">
        <IconsXCircle />
      </button>
    </div>
  );
});
