import React from "react";
import { Chart } from "react-google-charts";

const data = [
  [
    "Month",
    "Likely Neutral",
    "Likely Not Happy",
    "Likely Happy",
    "Happiness Trend",
  ],
  ["May", 45, 20, 35, 35],
  ["June", 47, 16, 37, 37],
  ["July", 50, 17, 33, 33],
  ["August", 52, 12, 30, 30],
  ["September", 51, 24, 25, 25],
  ["October", 59, 29, 20, 20],
  ["November", 54, 21, 25, 25],
  ["December", 49, 6, 35, 35],
  ["January", 48, 10, 42, 42],
];

export const options = {
  title: "Monthly Coffee Production by Country",
  vAxis: { title: "Cups" },
  hAxis: { title: "Month" },
  seriesType: "bars",
  series: { 5: { type: "line" } },
};

const TimeWiseSentiments = () => {
  return (
    <div>
      <Chart
        chartType="ScatterChart"
        data={[
          ["Age", "Weight"],
          [4, 5.5],
          [8, 12],
        ]}
        width="100%"
        height="400px"
        legendToggle
      />
    </div>
  );
};

export default TimeWiseSentiments;
