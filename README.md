## What is this?

📸 A react library helpful render photos in awesome gallery.

## Demo

https://tronghieu60s.github.io/react-view-photo-gallery/

## Preview

![Demo React-View-Photo-Gallery](https://i.imgur.com/GEii94Y.png)

## Installation

Using npm:

```bash
$ npm install --save react-view-photo-gallery
```

Using yarn:

```bash
$ yarn add react-view-photo-gallery
```

## Usage

```js
import React, { useState } from 'react';
import PhotoGallery from 'react-view-photo-gallery';

const arrImages = [
  { src: 'https://via.placeholder.com/500x500' },
  { src: 'https://via.placeholder.com/1000x1000', name: 'Amazing Image' },
  {
    src: 'https://via.placeholder.com/1200x1800',
    name: 'New Image',
    caption: 'This image is so cool.',
  },
];

export default function App() {
  const [showGallery, setShowGallery] = useState(false);
  return (
    <>
      <button onClick={() => setShowGallery(true)}>Show</button>
      <PhotoGallery show={showGallery} onShow={setShowGallery} images={arrImages} />
    </>
  );
}
```

## Methods

| Props          | Type                   | Description                                                     |
| -------------- | ---------------------- | --------------------------------------------------------------- |
| show           | (required) string      | Attribute show/hide `<PhotoGallery />`                          |
| onShow         | (required) Function    | This function will make the switch show/hide `<PhotoGallery />` |
| images         | (required) ImageType[] | Array for images                                                |
| currentIndex   | (optional) number      | Index of current image                                          |
| openLink       | (optional) string      | Path open link in new tab                                       |
| showName       | (optional) boolean     | Show name of image                                              |
| showCaption    | (optional) boolean     | Show caption of image                                           |
| showOpenLink   | (optional) boolean     | Show open link button                                           |
| showFullScreen | (optional) boolean     | Show full screen button                                         |
| showSlideshow  | (optional) boolean     | Show slideshow button                                           |
| showDownload   | (optional) boolean     | Show download button                                            |
| showThumbnails | (optional) boolean     | Show thumbnails button                                          |

## License

MIT

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please create an issue.
