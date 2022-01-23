import React, { memo } from 'react';
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
  onOpenExternalLink: () => void;
  onToggleFullScreen: () => void;
  onToggleSlideshow: () => void;
  onDownloadImage: () => void;
  onToggleThumbs: () => void;
  onToggleShowPG: () => void;
};

export default memo(function PGToolbar(props: Props) {
  const { isFullscreen, isSlideshow } = props;
  const {
    onOpenExternalLink,
    onToggleFullScreen,
    onToggleSlideshow,
    onDownloadImage,
    onToggleThumbs,
    onToggleShowPG,
  } = props;

  return (
    <div className="gl-toolbar">
      {/* <button className="gl-button" title="Zoom">
        <IconsZoomIn />
      </button> */}
      <button type="button" onClick={onOpenExternalLink} className="gl-button" title="New window">
        <IconsLinkExternal />
      </button>
      <button type="button" onClick={onToggleFullScreen} className="gl-button" title="Full screen">
        {!isFullscreen ? <IconsFullscreen /> : <IconsExitFullscreen />}
      </button>
      <button
        type="button"
        onClick={onToggleSlideshow}
        className="gl-button"
        title={`${isSlideshow ? 'Stop' : 'Start'} slideshow`}
      >
        {isSlideshow ? <IconsStopCircle /> : <IconsPlayCircle />}
      </button>
      <button type="button" onClick={onDownloadImage} className="gl-button" title="Download">
        <IconsDownload />
      </button>
      <button type="button" onClick={onToggleThumbs} className="gl-button" title="Thumbnails">
        <IconsGridAlt />
      </button>
      <button type="button" onClick={onToggleShowPG} className="gl-button" title="Close">
        <IconsXCircle />
      </button>
    </div>
  );
});