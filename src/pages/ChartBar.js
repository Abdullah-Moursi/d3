import React from "react";
import { Chart } from "../components";

const ChartBar = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <Chart />
    </div>
  );
};

export default ChartBar;
