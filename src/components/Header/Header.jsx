import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2 className="animated fadeInUp ">Wedding Vendors</h2>
        <h5 className="animated fadeInUp delay-1s">
          Browse your favourite wedding vendors with ease
        </h5>
        <button className="yellowButton">View Vendors</button>
      </div>
    </div>
  );
};

export default Header;
