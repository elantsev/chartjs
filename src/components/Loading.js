import React from "react";
import loading from "../img/loading.gif";

const Loading = () => (
  <div className="loading">
    <h4>rooms data loading....</h4>
    <img src={loading} alt="Loading..." />
  </div>
);

export default Loading;
