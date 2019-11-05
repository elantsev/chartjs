import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";

let data = {
  labels: ["Moscow", "St. Petersburg", "Kharkiv"],
  datasets: [
    {
      label: "Metro passenger flow per day",
      data: [40, 19, 8],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)"
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)"
      ],
      borderWidth: 1
    }
  ]
};

let Tag = Bar;
const Graph = () => {
  return <Tag data={data} />;
};

export default Graph;
