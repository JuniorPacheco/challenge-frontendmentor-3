import React from "react";
import "./styles/Navbar.css"

const Navbar = ({ toggleTheme }) => {
  return (
    <section className="navBar">
      <h1 className="navBar__title">Where in the world?</h1>
      <div className="navBar__theme">
        <i onClick={toggleTheme} className="bx bx-moon"></i>
        <h4>Dark Mode</h4>
      </div>
    </section>
  );
};

export default Navbar;
