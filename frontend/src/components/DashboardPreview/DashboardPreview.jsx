import MetricCards from "../MetricCards/MetricCards";
import "./DashboardPreview.css";

function DashboardPreview() {

  const metricsData = [
    {
      id: "portfolio-value",
      title: "Portfolio Value",
      subtitle: "Retirement Portfolio",
      value: "$ 1,201,234",
      badgeText: "11.01%",
      hasArrow: true
    },
    {
      id: "today-pl",
      title: "Today P/L",
      subtitle: "Todays Profit and Loss",
      value: "+2.34%",
      badgeText: "+0.34%",
      hasArrow: true
    },
    {
      id: "sharpe-ratio",
      title: "Sharpe Ratio",
      subtitle: "Retirement Portfolio",
      value: "1.34",
      badgeText: "Good",
      hasArrow: false
    },
    {
      id: "risk-score",
      title: "Risk Score",
      subtitle: "Retirement Portfolio",
      value: "Low",
      badgeText: "Stable",
      hasArrow: false
    }
  ];

  return (
    <div className="dashboard-section-wrapper">
      <div className="page-container">
        <h2 className="dashboard-title">Dashboard Panel Overview</h2>
        
        <div className="dashboard-wrapper">
          <div className="dashboard-container">
            {metricsData.map((metric) => (
              <MetricCards 
                key={metric.id}
                title={metric.title}
                subtitle={metric.subtitle}
                value={metric.value}
                badgeText={metric.badgeText}
                hasArrow={metric.hasArrow}
              />
            ))}
          </div>
          
          <div className="analysis-section">
            <div className="analysis-card chart-card">
              <h3 className="section-title">Portfolio Allocation</h3>
              <div className="chart-container">
                <div className="pure-css-pie"></div>
                <div className="chart-legend">
                  <div className="legend-item"><span className="dot tcs"></span> TCS (20%)</div>
                  <div className="legend-item"><span className="dot infy"></span> INFY (15%)</div>
                  <div className="legend-item"><span className="dot hdfc"></span> HDFCBK (12%)</div>
                  <div className="legend-item"><span className="dot others"></span> Others (53%)</div>
                </div>
              </div>
            </div>

            <div className="analysis-card table-card">
              <h3 className="section-title">Top Holdings</h3>
              <table className="holdings-table">
                <thead>
                  <tr>
                    <th>Ticker</th>
                    <th>Weight</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="ticker-weight-bold">TCS</td>
                    <td>20%</td>
                    <td>$120,000</td>
                  </tr>
                  <tr>
                    <td className="ticker-weight-bold">INFY</td>
                    <td>15%</td>
                    <td>$90,000</td>
                  </tr>
                  <tr>
                    <td className="ticker-weight-bold">HDFCBK</td>
                    <td>12%</td>
                    <td>$75,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPreview;