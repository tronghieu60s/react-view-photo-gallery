import React, { useState } from 'react';
import { ImageType } from '../common/types';
import PhotoGallery from './PhotoGallery';

const arrImages: ImageType[] = [
  { src: 'https://via.placeholder.com/500x500' },
  { src: 'https://via.placeholder.com/1000x1000' },
  { src: 'https://via.placeholder.com/1200x2000' },
  { src: 'https://via.placeholder.com/1000x300' },
  { src: 'https://via.placeholder.com/2000x1000' },
];

export default function App() {
  const [showGallery, setShowGallery] = useState(true);
  return (
    <>
      <button type="button" onClick={() => setShowGallery(true)}>
        Show
      </button>
      <PhotoGallery show={showGallery} onShow={setShowGallery} images={arrImages} />
    </>
  );
}
