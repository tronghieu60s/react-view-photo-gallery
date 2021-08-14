import {
  IconsDownload,
  IconsExitFullscreen,
  IconsFullscreen,
  IconsGridAlt,
  IconsLinkExternal,
  IconsPlayCircle,
  IconsXCircle,
  IconsZoomIn,
} from "./PGIcons";

type Props = {
  isFullscreen: boolean;
  onOpenExternalLink: () => void;
  onToggleFullScreen: () => void;
  onDownloadImage: () => void;
  onToggleThumbs: () => void;
};

export default function PGToolbar(props: Props) {
  const { isFullscreen } = props;
  const {
    onOpenExternalLink,
    onToggleFullScreen,
    onDownloadImage,
    onToggleThumbs,
  } = props;

  return (
    <div className="gl-toolbar">
      <button className="gl-button" title="Zoom">
        <IconsZoomIn />
      </button>
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
      <button className="gl-button" title="Start slideshow">
        <IconsPlayCircle />
      </button>
      <button onClick={onDownloadImage} className="gl-button" title="Download">
        <IconsDownload />
      </button>
      <button onClick={onToggleThumbs} className="gl-button" title="Thumbnails">
        <IconsGridAlt />
      </button>
      <button className="gl-button" title="Close">
        <IconsXCircle />
      </button>
    </div>
  );
}
