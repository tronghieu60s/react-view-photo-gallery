type Props = {
  numberOfImages: number;
  currentImageIndex: number;
};

export default function PGInfo(props: Props) {
  const { numberOfImages, currentImageIndex } = props;
  return (
    <div className="gl-info">
      <span>{currentImageIndex + 1}</span> / <span>{numberOfImages}</span>
    </div>
  );
}
