import React from "react";

import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="navbar">
      <div className="navbar__logo">SAROVA HOTEL</div>
      <div className="media">
        <div className="navbar__menu">
          <ol className="header-nav-list">
            <li className="header-navs">
              <Link to="/">Home</Link>
            </li>
            <li className="header-navs">
              <Link to="/Leadership">Rooms</Link>
            </li>
            <li className="header-navs">
              <Link to="/Tracks">Amenities</Link>
            </li>
            <li className="header-navs">
              <Link to="/Events">Contact Us</Link>
            </li>
          </ol>
        </div>
        <div className="headerbtn">
          <button className="btnn">
            <Link to="/">Sign In</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;