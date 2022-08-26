import React, { useEffect, useState } from 'react';
import { ImageType } from '../common/types';
import PhotoGallery from './PhotoGallery';
import './App.scss';
import { shuffleArr } from '../helpers/commonFunctions';

export default function App() {
  const [showGallery, setShowGallery] = useState(false);
  const [images, setImage] = useState<ImageType[]>([]);

  useEffect(() => {
    (async () => {
      const images = await fetch('https://dog.ceo/api/breeds/image/random/20')
        .then((res) => res.json())
        .then((res) => res.message.map((image: string) => ({ src: image })));
      setImage(shuffleArr(images));
    })();
  }, []);

  if (images.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <header className="header">
        <h2>React-View-Photo-Gallery</h2>
        <span>
          Document:{' '}
          <a href="https://www.npmjs.com/package/react-view-photo-gallery">
            https://www.npmjs.com/package/react-view-photo-gallery
          </a>
        </span>
      </header>
      <div className="row">
        <div className="column">
          {images.slice(0, 5).map((image: ImageType) => (
            <div key={image.src} className="item">
              <img src={image.src} onClick={() => setShowGallery(true)} />
            </div>
          ))}
        </div>
        <div className="column">
          {images.slice(5, 10).map((image: ImageType) => (
            <div key={image.src} className="item">
              <img src={image.src} onClick={() => setShowGallery(true)} />
            </div>
          ))}
        </div>
        <div className="column">
          {images.slice(10, 15).map((image: ImageType) => (
            <div key={image.src} className="item">
              <img src={image.src} onClick={() => setShowGallery(true)} />
            </div>
          ))}
        </div>
        <div className="column">
          {images.slice(15, 20).map((image: ImageType) => (
            <div key={image.src} className="item">
              <img src={image.src} onClick={() => setShowGallery(true)} />
            </div>
          ))}
        </div>
      </div>
      <PhotoGallery show={showGallery} onShow={setShowGallery} images={images} />
      <footer className="footer">
        <span>© {new Date().getFullYear()}. React-View-Photo-Gallery</span>
      </footer>
    </>
  );
}
