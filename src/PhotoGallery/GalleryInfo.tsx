type Props = {
  currentImageIndex: number;
  numberOfImages: number;
};

export default function GalleryInfo(props: Props) {
  const { currentImageIndex, numberOfImages } = props;
  return (
    <div className="gl-info">
      <span>{currentImageIndex}</span>&nbsp;/&nbsp;<span>{numberOfImages}</span>
    </div>
  );
}
