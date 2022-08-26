## What is this?

📸 A react library helpful render photos in awesome gallery.

## Preview

![Demo React-View-Photo-Gallery](https://i.imgur.com/GEii94Y.png)

## Installation

Using yarn:

```bash
$ yarn add react-view-photo-gallery
```

Using npm:

```bash
$ npm install --save react-view-photo-gallery
```

## Demo

https://tronghieu60s.github.io/react-view-photo-gallery/

## Usage

```js
import React, { useState } from 'react';
import PhotoGallery from 'react-view-photo-gallery';

export default function App() {
  const [show, setShow] = useState(false);

  const images = [
    { src: 'https://place.dog/300/200' },
    { src: 'https://place.dog/400/200', name: 'Dog Image 400x200' },
    {
      src: 'https://place.dog/400/300',
      name: 'Dog Image 400x300',
      caption: new Date().toLocaleString(),
    },
  ];

  return (
    <>
      <button onClick={() => setShow(true)}>Show</button>
      <PhotoGallery show={show} onClose={() => setShow(false)} images={images} />
    </>
  );
}
```

## Methods

| Props          | Type                   | Description                                     |
| -------------- | ---------------------- | ----------------------------------------------- |
| show           | (required) string      | Attribute show/hide `<PhotoGallery />`          |
| onClose        | (required) Function    | This function will make hide `<PhotoGallery />` |
| images         | (required) ImageType[] | Array for images                                |
| currentIndex   | (optional) number      | Index of current image                          |
| openLink       | (optional) string      | Path open link in new tab                       |
| showName       | (optional) boolean     | Show name of image                              |
| showCaption    | (optional) boolean     | Show caption of image                           |
| showOpenLink   | (optional) boolean     | Show open link button                           |
| showFullScreen | (optional) boolean     | Show full screen button                         |
| showSlideshow  | (optional) boolean     | Show slideshow button                           |
| showDownload   | (optional) boolean     | Show download button                            |
| showThumbnails | (optional) boolean     | Show thumbnails button                          |

## License

MIT

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please create an issue.
