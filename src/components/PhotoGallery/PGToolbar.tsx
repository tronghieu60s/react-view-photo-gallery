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
} from "./PGIcons";

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

export default function PGToolbar(props: Props) {
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
      <button
        onClick={onOpenExternalLink}
        className="gl-button"
        title="New window"
      >
        <IconsLinkExternal />
      </button>
      <button
        onClick={onToggleFullScreen}
        className="gl-button"
        title="Full screen"
      >
        {!isFullscreen ? <IconsFullscreen /> : <IconsExitFullscreen />}
      </button>
      <button
        onClick={onToggleSlideshow}
        className="gl-button"
        title="Start slideshow"
      >
        {isSlideshow ? <IconsStopCircle /> : <IconsPlayCircle />}
      </button>
      <button onClick={onDownloadImage} className="gl-button" title="Download">
        <IconsDownload />
      </button>
      <button onClick={onToggleThumbs} className="gl-button" title="Thumbnails">
        <IconsGridAlt />
      </button>
      <button onClick={onToggleShowPG} className="gl-button" title="Close">
        <IconsXCircle />
      </button>
    </div>
  );
}
