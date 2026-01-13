import React from "react";
import Face3Icon from "@mui/icons-material/Face3";
import BioImage from "../Assets/bio-image.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarTop">
        <Face3Icon />
        <h1> Otunba's Links </h1>
      </div>
      <div className="img-container">
        <img src={BioImage} alt="bio-image" />
      </div>
    </div>
  );
}

export default Navbar;
