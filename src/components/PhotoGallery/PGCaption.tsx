import React, { memo, useContext } from 'react';
import { ImageType, PhotoGalleryProps } from '../../common/types';
import ParametersContext from '../../contexts/ParametersContext';

type Props = {
  images: Array<ImageType>;
  currentImageIndex: number;
};

export default memo(function PGCaption(props: Props) {
  const { images, currentImageIndex } = props;
  const { src, name, caption } = images[currentImageIndex];

  const { showName, showCaption } = useContext<PhotoGalleryProps>(ParametersContext);

  return (
    <div className="gl-caption">
      <div className="gl-caption__body">
        {showName && <h4>{name || src.split('/').pop()}</h4>}
        {showCaption && <span>{caption || new Date().toUTCString()}</span>}
      </div>
    </div>
  );
});
