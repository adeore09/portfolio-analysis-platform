import "./FeaturesSection.css";

function FeaturesSection() {
  const featuresData = [
    {
      id: "tracking",
      icon: "📊",
      title: "Portfolio Tracking",
      description: "Track your total portfolio value, historical gains, and real-time asset allocations instantly."
    },
    {
      id: "risk",
      icon: "🛡️",
      title: "Risk Analytics",
      description: "Advanced metrics to measure volatility, Sharpe ratio, and historical maximum drawdowns."
    },
    {
      id: "diversification",
      icon: "🧩",
      title: "Diversification Insights",
      description: "Deep dive into your sector exposure and asset concentration to avoid over-exposure risks."
    },
    {
      id: "reporting",
      icon: "📈",
      title: "Performance Reporting",
      description: "Generate and export comprehensive, institutional-grade portfolio analytics reports."
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="page-container">
        <div className="features-header">
          <span className="features-tagline">Platform Features</span>
          <h2 className="features-main-title">Built for Quantitative Analysis</h2>
          <p className="features-subtitle">
            Get the same analytical depth used by institutional fund managers, simplified for retail investors.
          </p>
        </div>

        <div className="features-grid">
          {featuresData.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">{feature.icon}</span>
              </div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;