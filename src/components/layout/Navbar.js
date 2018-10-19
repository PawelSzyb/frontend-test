import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

function Navbar() {
  return (
    <ul className="nav bg-info justify-content-end">
      <li className="nav-item">
        <NavLink className="nav-link" to="/quotation">
          <i className="fas fa-quote-right text-white" />
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/gallery">
          <i className="fas fa-images text-white" />
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
