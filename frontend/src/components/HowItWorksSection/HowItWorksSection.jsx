import "./HowItWorksSection.css";

function HowItWorksSection() {
  const stepsData = [
    {
      stepNumber: "01",
      title: "Connect Your Assets",
      description: "Search and select your stock tickers using our smart autocomplete field to build or import your custom portfolios."
    },
    {
      stepNumber: "02",
      title: "Analyze Risk Profiles",
      description: "Our analytics system instantly calculates system volatility, Sharpe ratios, and peak drawdown metrics for your holdings."
    },
    {
      stepNumber: "03",
      title: "Optimize & Export",
      description: "Review asset concentration heatmaps and instantly download comprehensive performance data reports."
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="page-container">
        <div className="hw-header">
          <span className="hw-tagline">The Process</span>
          <h2 className="hw-main-title">How PortX Works</h2>
          <p className="hw-subtitle">
            Three simple steps to transform raw transaction data into institutional-grade quantitative intelligence.
          </p>
        </div>

        <div className="hw-timeline">
          {stepsData.map((step, index) => (
            <div key={step.stepNumber} className="hw-step-card">
              <div className="hw-number-badge">{step.stepNumber}</div>
              <h3 className="hw-step-title">{step.title}</h3>
              <p className="hw-step-description">{step.description}</p>
              
              {/* Visual connector line between steps (except the last one) */}
              {index < stepsData.length - 1 && <div className="hw-connector-line"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;