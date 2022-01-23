import React, { useEffect, useState } from 'react';
import { ImageType } from '../common/types';
import PhotoGallery from './PhotoGallery';
import './App.scss';

export default function App() {
  const [showGallery, setShowGallery] = useState(false);
  const [images, setImage] = useState<ImageType[]>([]);

  useEffect(() => {
    const arrImages = [];
    for (let index = 1; index <= 20; index += 1) {
      arrImages.push({ src: `https://nekos.best/api/v1/nekos/${('0000' + index).slice(-4)}.jpg` });
      setImage(shuffleArr(arrImages));
    }

    function shuffleArr(arr: any[]) {
      let currentIndex = arr.length,
        randomIndex;

      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
      }

      return arr;
    };
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
            <img key={image.src} src={image.src} onClick={() => setShowGallery(true)} />
          ))}
        </div>
        <div className="column">
          {images.slice(5, 10).map((image: ImageType) => (
            <img key={image.src} src={image.src} onClick={() => setShowGallery(true)} />
          ))}
        </div>
        <div className="column">
          {images.slice(10, 15).map((image: ImageType) => (
            <img key={image.src} src={image.src} onClick={() => setShowGallery(true)} />
          ))}
        </div>
        <div className="column">
          {images.slice(15, 20).map((image: ImageType) => (
            <img key={image.src} src={image.src} onClick={() => setShowGallery(true)} />
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
