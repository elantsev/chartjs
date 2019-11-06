import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        className="navbar__link"
        exact
        activeClassName="navbar__link_active"
        to="/"
      >
        Graph
      </NavLink>
      <NavLink
        className="navbar__link"
        activeClassName="navbar__link_active"
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
