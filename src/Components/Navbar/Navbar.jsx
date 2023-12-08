import React from "react";
import "./navbar.css";
import Search from "../Search/Search";

const Navbar = () => {
  return (
    <>
      <div className="navbar flex">
        <div className="left-section">
          <Search></Search>
        </div>
        <div className="center-section">
          <img src="" alt="Logo" />
        </div>
        <div className="right-section">
          <button className="register-btn">Đăng ký</button>
          <button className="login-btn">Đăng nhập</button>
        </div>
      </div>
    </>
  )
};

export default Navbar;
