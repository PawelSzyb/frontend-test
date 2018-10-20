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
      const results = nextProps.gallery.items.slice(0, 9);
      this.setState({ results });
    }
  }
  render() {
    const { results } = this.state;
    return (
      <div className="gallery-wrapper ">
        {results !== undefined && Object.keys(results).length > 0
          ? results.map(photo => (
              <GalleryItem key={photo.date_taken} url={photo.media.m} />
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
