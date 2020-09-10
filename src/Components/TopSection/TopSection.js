import React from "react";
import "./TopSection.css";
// import Logo from "../../Images/Logo/uu.png";

const TopSection = () => {
  return (
    <div className="top-section">
      <div className="top-section-left">
        {/* <img className="logo-image" src={Logo} /> */}
      </div>
      <div className="top-section-right">
        <h2 className="top-section-text">دقیق تر</h2>
        <h2 className="top-section-text">سریع تر</h2>
        <h2 className="top-section-text">باهوش تر</h2>
      </div>
    </div>
  );
};

export default TopSection;
