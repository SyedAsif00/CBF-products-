import React from "react";
import "./header.css";
import Logo from "../../assets/logo-removebg-preview.png";

const Header = () => {
  return (
    <div className="header">
      <div className="cbf-logo-text">CarbonFootPrint</div>
      <div className="cbf-logo-footprint">
        <img src={Logo} />
      </div>
    </div>
  );
};

export default Header;
