import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={assets.companyLogo} alt="company-logo" className="logo"></img>
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("vendors")}
          className={menu === "vendors" ? "active" : ""}
        >
          Vendors
        </li>
        <li
          onClick={() => setMenu("gallery")}
          className={menu === "gallery" ? "active" : ""}
        >
          Gallery
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
