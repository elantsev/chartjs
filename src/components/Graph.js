import React, { useEffect, useState } from "react";
import { Doughnut, Bar, Pie } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getGraphData } from "../actions/getGraphData";
import Loading from "./Loading";
import ButtonBlock from "./ButtonBlock";

const Graph = () => {
  const graphData = useSelector(state => state.graphData);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!graphData.day) dispatch(getGraphData());
  }, [dispatch, graphData.day]);

  const [period, setPeriod] = useState("day");
  let periodData;
  if (graphData.day) periodData = [...graphData[period]];

  const [tag, setTag] = useState("Doughnut");
  const Tags = { Doughnut, Bar, Pie };
  let Tag = Tags[tag];

  return (
    <>
      <ButtonBlock
        period={period}
        setPeriod={setPeriod}
        tag={tag}
        setTag={setTag}
      />
      {graphData.isLoading ? (
        <Loading />
      ) : (
        <Tag
          data={{
            labels: ["Moscow", "St. Petersburg", "Kharkiv"],
            datasets: [
              {
                label: "Metro passenger flow per day",
                data: periodData,
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
      )}
    </>
  );
};

export default Graph;
