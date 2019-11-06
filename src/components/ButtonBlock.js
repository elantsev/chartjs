import React from "react";
import "./ButtonBlock.css";

const ButtonBlock = ({ setPeriod, period, setTag, tag }) => {
  return (
    <div className="button-block">
      <div>
        <h3 className="button-block_header">Set period</h3>
        <button
          className={`btn ${period === "day" && "btn_active"}`}
          onClick={() => setPeriod("day")}
        >
          day
        </button>
        <button
          className={`btn ${period === "month" && "btn_active"}`}
          onClick={() => setPeriod("month")}
        >
          month
        </button>
        <button
          className={`btn ${period === "year" && "btn_active"}`}
          onClick={() => setPeriod("year")}
        >
          year
        </button>
      </div>
      <div>
        <h3 className="button-block_header">Set type of graph</h3>
        <button
          className={`btn ${tag === "Doughnut" && "btn_active"}`}
          onClick={() => setTag("Doughnut")}
        >
          Doughnut
        </button>
        <button
          className={`btn ${tag === "Bar" && "btn_active"}`}
          onClick={() => setTag("Bar")}
        >
          Bar
        </button>
        <button
          className={`btn ${tag === "Pie" && "btn_active"}`}
          onClick={() => setTag("Pie")}
        >
          Pie
        </button>
      </div>
    </div>
  );
};

export default ButtonBlock;
