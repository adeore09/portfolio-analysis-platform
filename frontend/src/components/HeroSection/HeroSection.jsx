import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import "./HeroSection.css";

function HeroSection() {
  // Mock performance trend data for the Recharts Hero widget
  const chartData = [
    { name: "Jan", value: 400000 },
    { name: "Feb", value: 450000 },
    { name: "Mar", value: 420000 },
    { name: "Apr", value: 600000 },
    { name: "May", value: 850000 },
    { name: "Jun", value: 1201234 },
  ];

  return (
    <section className="hero-section">
      <div className="page-container hero-grid-layout">
        
        {/* Left Side Content Column */}
        <div className="hero-left">
          <span className="hero-badge">Now Live: Portfolio Analytics V1</span>
          <h1 className="hero-main-heading">
            Decode Risk. <br />
            Optimize Performance. <br />
            <span>Protect Wealth.</span>
          </h1>
          <p className="hero-subtext">
            An institutional-grade portfolio analytics engine designed for the modern investor. Monitor asset concentration, track volatility, and evaluate your Sharpe ratio under real-time simulated parameters.
          </p>
          <div className="hero-cta-group">
            <button className="btn-hero-primary">Get Started Free</button>
            <button className="btn-hero-secondary">View Documentation</button>
          </div>
        </div>

        {/* Right Side Glassmorphism Dashboard Mockup Panel */}
        <div className="hero-right">
          <div className="glass-dashboard-mockup">
            
            {/* Mockup Window Header Bars */}
            <div className="mockup-header">
              <div className="window-dots">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
              </div>
              <div className="mockup-address-bar">analytics.portx.io/live</div>
            </div>

            {/* Micro Floating Metric Cards inside Mockup */}
            <div className="mockup-metrics-grid">
              <div className="micro-card">
                <span className="micro-label">Portfolio Value</span>
                <span className="micro-value text-teal">$1,201,234</span>
              </div>
              <div className="micro-card">
                <span className="micro-label">Sharpe Ratio</span>
                <span className="micro-value">1.34 <span className="badge-good">Good</span></span>
              </div>
              <div className="micro-card">
                <span className="micro-label">Risk Score</span>
                <span className="micro-value text-blue">Low</span>
              </div>
            </div>

            {/* Embedded Recharts Performance Line Chart */}
            <div className="mockup-chart-box">
              <h4 className="chart-box-title">Performance History (YTD)</h4>
              <div style={{ width: "100%", height: 160 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00d4aa" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#00d4aa" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#475569" fontSize={11} tickLine={false} />
                    <YAxis stroke="#475569" fontSize={11} tickLine={false} domain={['dataMin - 100000', 'auto']} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#00d4aa' }}
                    />
                    <Area type="monotone" dataKey="value" stroke="#00d4aa" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;