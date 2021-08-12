export default function GalleryToolbar() {
  return (
    <div className="gallery-toolbar">
      <button className="gallery-button">
        <svg viewBox="0 0 24 24">
          <path d="M11 6H9v3H6v2h3v3h2v-3h3V9h-3z" />
          <path d="M10 2c-4.411 0-8 3.589-8 8s3.589 8 8 8a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
        </svg>
      </button>
      <button className="gallery-button">
        <svg viewBox="0 0 24 24">
          <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z" />
          <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z" />
        </svg>
      </button>
      <button className="gallery-button">
        <svg viewBox="0 0 24 24">
          <path d="M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z" />
        </svg>
      </button>
      <button className="gallery-button">
        <svg viewBox="0 0 24 24">
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
          <path d="m9 17 8-5-8-5z" />
        </svg>
      </button>
      <button className="gallery-button">
        <svg viewBox="0 0 24 24">
          <path d="m12 16 4-5h-3V4h-2v7H8z" />
          <path d="M20 18H4v-7H 2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z" />
        </svg>
      </button>
      <button className="gallery-button">
        <svg viewBox="0 0 24 24">
          <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z" />
        </svg>
      </button>
      <button className="gallery-button">
        <svg viewBox="0 0 24 24">
          <path d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z" />
          <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z" />
        </svg>
      </button>
    </div>
  );
}
