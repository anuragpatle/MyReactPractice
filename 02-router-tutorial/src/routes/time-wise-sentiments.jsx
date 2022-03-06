import callCharts from "../background-services/drawGoogleCharts";

const TimeWiseSentiments = () => {

  return (
    <div>
      <div class="main-content" style={{ padding: "73px 0px 40px 22px;" }}>
        <div class="fluid-container">
          <div class="content-wrapper"></div>
          <div class="page-section" id="about">
            <div class="row">
              <div class="col-md-12">
                <h4 class="widget-title">Today's Timewise Sentiment Records</h4>
                <div class="about-image">
                  <div id="time-wise-percentage-daily"></div>
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
