import React, { Component } from "react";
import { connect } from "react-redux";
import { getPhotos } from "../../actions/galleryActions";

import GalleryItem from "./GalleryItem";

export class Gallery extends Component {
  state = {
    results: {}
  };
  componentDidMount() {
    this.props.getPhotos();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.gallery) {
      this.setState({ results: nextProps.gallery.photos.photo });
    }
  }
  render() {
    const { results } = this.state;
    return (
      <div className="gallery-wrapper ">
        {results !== undefined && Object.keys(results).length > 0
          ? results.map(photo => (
              <GalleryItem
                key={photo.id}
                url={`https://farm${photo.farm}.staticflickr.com/${
                  photo.server
                }/${photo.id}_${photo.secret}.jpg`}
              />
            ))
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gallery: state.gallery
});

export default connect(
  mapStateToProps,
  { getPhotos }
)(Gallery);
