import React from "react";
import { Link } from "react-router-dom";

const Error = () => (
  <div className="loading">
    <h4>Page not found</h4>
    <Link to="/">Go to main page</Link>
  </div>
);

export default Error;
