import React from "react";
import BioImage from "../Assets/bio-image.jpg";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarTop">
        <h1> Otunba's Links </h1>
      </div>

      <div className="img-container">
        <img src={BioImage} alt="bio-image" />
      </div>

      <div className="circle"></div>
    </div>
  );
}

export default Navbar;
