import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const Water = () => {
  const labels = ["Goals", "Activity", "Workout", "water" ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [5, 10, 35, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <div className="bar">
      <Bar data={data} />
    </div>
  );
};

export default Water;