import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="section">
      <div className="container">
        <div className="overlayblur" />
        <div className="overlayblur2" />
      </div>
      <div className="section-paints" />
      <div className="container2">
        <div className="container3">
          <div className="heading1">
            <b className="understand-your-portfolio-container">
              <span className="underdtand-your-portfolio">
                Understand Your Portfolio
                <br />
              </span>
              <span className="beyond-returns">Beyond Returns</span>
            </b>
          </div>
          <div className="container4">
            <div className="track-your-performance">
              Track performance, analyze risk, and uncover diversification
              insights through quantitative portfolio analytics.
            </div>
          </div>
          <div className="container5">
            <div className="link">
              <div className="button">
                <div className="get-started">Get Started</div>
                <div className="margin">
                  <img className="svg-icon" alt=" "></img>
                </div>
              </div>
            </div>
            <div className="heading1">
              <div className="button-2">
                <div className="view-demo">View Demo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
