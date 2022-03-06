import "./live-face.css";

export default function LiveFaceDetections() {
  return (
    <div>
      {/* <Link
        style={{ display: "block", margin: "1rem 0" }}
        to={`/live-face-recog}`}
        key={invoice.number}
      >
      </Link> */}

      <div class="main-content" style={{ padding: "73px 0px 40px 22px;" }}>
        <div class="fluid-container">
          <div class="content-wrapper"></div>
          <div class="" id="face-image">
            <div class="header">
              <h1></h1>
              <h1>Facial Recognition and Emotion Detection</h1>

              <p>
                Our Raspberry PI powered IOT devices provides 24x7 Live Services
              </p>
            </div>

            <div class="row1-container">
              <div class="box red">
                <h2>Faces are being captured from Live Cams</h2>

                <div>
                  <div style={{ float: "left" }}>
                    <p>Monica Kapre</p>
                    <p>202000932</p>
                    <p>Appeared First Time.</p>
                    <p>Likely Neutral</p>
                    <p>First Floor, Pune</p>
                  </div>
                  <div style={{ float: "right" }}>
                    <img class="face-image-img" src="img/monica2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <footer>
              <p class="attribution">
                Challenge by{" "}
                <a
                  href="https://www.frontendmentor.io?ref=challenge"
                  target="_blank"
                >
                  Frontend Mentor
                </a>
                . Coded by <a href="#">Jared Parsons</a>.
              </p>
            </footer>

          </div>
        </div>
      </div>
    </div>
  );
}
