import React from 'react';
import { ImageType } from '../../common/types';

type Props = {
  images: Array<ImageType>;
  currentImageIndex: number;
};

export default function PGInfo(props: Props) {
  const { images, currentImageIndex } = props;
  return (
    <div className="gl-info">
      <span>{currentImageIndex + 1}</span>
      {' / '}
      <span>{images.length}</span>
    </div>
  );
}
