import React, { Component } from "react";
import Modal from "./Modal";

import "./Gallery.scss";

export class GalleryItem extends Component {
  state = {
    modalOpen: false
  };
  onClickHandle = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };
  render() {
    return (
      <>
        <img
          className="gallery-img rounded img-thumbnail "
          src={this.props.url}
          alt="Marilyn Monroe"
          onClick={this.onClickHandle}
        />
        {this.state.modalOpen ? (
          <Modal url={this.props.url} onModalClose={this.onClickHandle} />
        ) : null}
      </>
    );
  }
}

export default GalleryItem;
