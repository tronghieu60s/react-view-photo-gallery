import "./PhotoGallery.scss";

export default function PhotoGallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-bg"></div>
      <div className="gallery-inner">
        <div className="gallery-inner-top">
          <div className="gallery-info">
            <span>1</span>&nbsp;/&nbsp;<span>2</span>
          </div>
          <div className="gallery-toolbar">
            <button className="gallery-button">
              <i className="fa fa-search-plus" aria-hidden="true"></i>
            </button>
            <button className="gallery-button">
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </button>
            <button className="gallery-button">
              <i className="fa fa-arrows-alt" aria-hidden="true"></i>
            </button>
            <button className="gallery-button">
              <i className="fa fa-play" aria-hidden="true"></i>
            </button>
            <button className="gallery-button">
              <i className="fa fa-download" aria-hidden="true"></i>
            </button>
            <button className="gallery-button">
              <i className="fa fa-th" aria-hidden="true"></i>
            </button>
            <button className="gallery-button">
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div className="gallery-inner-navigation">
          <button className="gallery-button">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
          <button className="gallery-button">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
        {/* <div className="gallery-stage">
          <div className="gallery-slide gallery-slide--image gallery-slide--current gallery-slide--complete">
            <div className="gallery-content">
              <img
                src="https://i.imgur.com/QQCkPzN.jpeg"
                alt=""
                className="gallery-image"
              />
            </div>
          </div>
        </div> */}
        {/* <div className="gallery-caption gallery-caption--separate">
          <div className="gallery-caption__body">
            <h4>19.jpg</h4>
            <p>PhotoGallery · 8/8/21 at 16:35</p>
          </div>
        </div> */}
      </div>
      <div className="gallery-thumbs gallery-thumbs-x">
        <div className="gallery-thumbs__list">
          <a
            href=""
            style={{
              backgroundImage: "url(https://i.imgur.com/QQCkPzN.jpeg)",
            }}
          ></a>
          <a
            href=""
            style={{
              backgroundImage: "url(https://i.imgur.com/QQCkPzN.jpeg)",
            }}
            className="gallery-thumbs-active"
          ></a>
        </div>
      </div>
    </div>
  );
}
