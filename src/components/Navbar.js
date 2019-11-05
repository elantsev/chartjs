import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/catalog">Catalog</Link> | <Link to="/page">Page</Link> |{" "}
      <Link to="/create">Create</Link>
    </>
  );
};

export default Navbar;
