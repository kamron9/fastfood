import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "sotilgan mahsulotlar 2021(M)",
        data: [1, 3, 3, 2, 4],
        borderColor: [`rgba(52, 162, 235, 0.4)`],
        backgroundColor: [`rgba(52, 162, 235, 0.4)`],
        pointBackgroundColor: [`rgba(52, 162, 235, 0.4)`],
        pointBorderColor: [`rgba(52, 162, 235, 0.4)`],
      },
    ],
  };
  return <Line data={data} />;
};

export default LineChart;
