import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/">Graph</Link> | <Link to="/about">About</Link>
    </>
  );
};

export default Navbar;
