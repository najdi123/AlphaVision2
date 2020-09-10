import React from "react";
import { pnk } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-flex">
          <div className="flex-left">
            <p className="nav-item yellow-bg">ثبت نام</p>
            <p className="nav-item yellow-bg">ورود</p>
          </div>
          <div className="flex-right">
            <p className="nav-item"> درباره ما</p>
            <p className="nav-item"> تماس با ما</p>
            <p className="nav-item">صفحه نخست</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
