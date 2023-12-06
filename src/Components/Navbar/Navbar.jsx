import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="/" className="logo flex">
            <h1>Workspace</h1>
          </a>
        </div>

        <div className="navbar">
          <ul className="navLists flex">
            <button className="btn">
              <a href="#">Đăng ký</a>
            </button>
            <button className="btn">
              <a href="#">Đăng nhập</a>
            </button>
          </ul>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
