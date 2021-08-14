type Props = {
  currentImageIndex: number;
  numberOfImages: number;
};

export default function PGInfo(props: Props) {
  const { currentImageIndex, numberOfImages } = props;
  return (
    <div className="gl-info">
      <span>{currentImageIndex + 1}</span>&nbsp;/&nbsp;
      <span>{numberOfImages}</span>
    </div>
  );
}
