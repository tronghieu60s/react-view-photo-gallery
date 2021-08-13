type Props = {
  currentImage: number;
  numberOfImages: number;
};

export default function GalleryInfo(props: Props) {
  const { currentImage, numberOfImages } = props;
  return (
    <div className="gallery-info">
      <span>{currentImage}</span>&nbsp;/&nbsp;<span>{numberOfImages}</span>
    </div>
  );
}
