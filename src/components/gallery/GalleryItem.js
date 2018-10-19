import React from "react";

import "./Gallery.scss";

function GalleryItem(props) {
  return (
    <img
      className="img col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 rounded img-thumbnail "
      src={props.url}
      alt="Marilyn Monroe"
    />
  );
}

export default GalleryItem;
