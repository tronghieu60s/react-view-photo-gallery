import React from 'react';
import { ImageType } from '../../common/types';
import { IconsArrowNext, IconsArrowPrevious } from './PGIcons';

type Props = {
  images: Array<ImageType>;
  onPreviousImage: () => void;
  onNextImage: () => void;
};

export default function PGNavigation(props: Props) {
  const { images, onPreviousImage, onNextImage } = props;
  return (
    <div className={`gl-navigation${images.length > 1 ? '' : ' gl-d-none'}`}>
      <button
        type="button"
        className="gl-button gl-navigation__left"
        title="Previous"
        onClick={onPreviousImage}
      >
        <IconsArrowPrevious />
      </button>
      <button
        type="button"
        className="gl-button gl-navigation__right"
        title="Next"
        onClick={onNextImage}
      >
        <IconsArrowNext />
      </button>
    </div>
  );
}
