import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => (
  <div className="loading">
    <h4 className="loading__header">Page not found</h4>
    <Link className="loading__link" to="/">
      Go to main page
    </Link>
  </div>
);

export default Error;
