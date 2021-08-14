import {
  IconsFive,
  IconsFour,
  IconsOne,
  IconsSeven,
  IconsSix,
  IconsThree,
  IconsTwo,
} from "./GalleryIcons";

type Props = {
  onToggleThumbs: () => void;
};

export default function GalleryToolbar(props: Props) {
  const { onToggleThumbs } = props;
  return (
    <div className="gl-toolbar">
      <button className="gl-button">
        <IconsOne />
      </button>
      <button className="gl-button">
        <IconsTwo />
      </button>
      <button className="gl-button">
        <IconsThree />
      </button>
      <button className="gl-button">
        <IconsFour />
      </button>
      <button className="gl-button">
        <IconsFive />
      </button>
      <button onClick={onToggleThumbs} className="gl-button">
        <IconsSix />
      </button>
      <button className="gl-button">
        <IconsSeven />
      </button>
    </div>
  );
}
