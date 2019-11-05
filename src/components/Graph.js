import React, { useEffect, useState } from "react";
import { Doughnut, Bar, Radar } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getGraphData } from "../actions/getGraphData";

const Graph = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGraphData());
  }, []);

  const graphData = useSelector(state => state);
  const { day, month, year } = graphData.graphData;

  let [period, setPeriod] = useState();
  if (!period && day) period = [...day];
  const [tag, setTag] = useState("Doughnut");
  const Tags = { Doughnut, Bar, Radar };

  let Tag = Tags[tag];
  return (
    <>
      <aside>
        <button onClick={() => setPeriod(day)}>day</button>
        <button onClick={() => setPeriod(month)}>month</button>
        <button onClick={() => setPeriod(year)}>year</button>
      </aside>
      <aside>
        <button onClick={() => setTag("Doughnut")}>Doughnut</button>
        <button onClick={() => setTag("Bar")}>Bar</button>
        <button onClick={() => setTag("Radar")}>Radar</button>
      </aside>
      <Tag
        data={{
          labels: ["Moscow", "St. Petersburg", "Kharkiv"],
          datasets: [
            {
              label: "Metro passenger flow per day",
              data: period,
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
        }}
      />
    </>
  );
};

export default Graph;
