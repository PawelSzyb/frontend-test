import React from "react";

import "./Gallery.scss";

function Modal(props) {
  return (
    <div className="overlay">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <img
              className="modal-img"
              src={props.url}
              alt="Modal image of Marilyn Monroe"
            />
          </div>
          <div className="modal-footer">
            <button
              onClick={props.onModalClose}
              type="button"
              className="btn btn-secondary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
