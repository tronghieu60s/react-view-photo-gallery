type Props = {
  numberOfImages: number;
  onPreviousImage: () => void;
  onNextImage: () => void;
};

export default function PGNavigation(props: Props) {
  const { numberOfImages, onPreviousImage, onNextImage } = props;
  return (
    <div className={`gl-navigation${numberOfImages > 1 ? "" : " gl-d-none"}`}>
      <button
        onClick={onPreviousImage}
        className="gl-button gl-navigation__left"
        title="Previous"
      >
        <svg viewBox="0 0 24 24">
          <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
        </svg>
      </button>
      <button
        onClick={onNextImage}
        className="gl-button gl-navigation__right"
        title="Next"
      >
        <svg viewBox="0 0 24 24">
          <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
        </svg>
      </button>
    </div>
  );
}
