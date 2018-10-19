import React from "react";

import "./Quotation.scss";

function Quotation() {
  return (
    <div className="quote-wrapper">
      <h1>Quotation</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas
        illum maxime saepe pariatur porro perspiciatis eum doloremque nemo
        culpa.
      </p>
      <div className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </div>
    </div>
  );
}

export default Quotation;
