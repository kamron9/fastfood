import React from "react";
import { Line } from "react-chartjs-2";

const LineChart2 = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "otkaz bo'lgan mahsulotlar 2021(M)",
        data: [2, 2, 3, 1.8, 1],
        borderColor: [`#FA2738`],
        backgroundColor: [`#FA2738`],
        pointBackgroundColor: [`#FA2738`],
        pointBorderColor: [`#FA2738`],
      },
    ],
  };
  return <Line data={data} />;
};

export default LineChart2;
