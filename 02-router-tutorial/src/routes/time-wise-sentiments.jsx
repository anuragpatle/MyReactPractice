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
      <div class="main-content" style={{ padding: "73px 0px 40px 22px" }}>
        <div class="fluid-container">
          <div class="content-wrapper"></div>
          <div class="page-section" id="about">
            <div class="row">
              <div class="col-md-12">
                <h4 class="widget-title">Today's Timewise Sentiment Records</h4>
                <div class="about-image">
                  <Chart
                    chartType="ComboChart"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeWiseSentiments;
