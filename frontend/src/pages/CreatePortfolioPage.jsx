import { useState } from "react";
import "./OnboardingPages.css";

function CreatePortfolioPage() {
  const [portfolioName, setPortfolioName] = useState("");

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    console.log("Creating Portfolio entity:", { name: portfolioName });
    // TODO: Dynamic redirect to /portfolio/add-holding in the next step
  };

  return (
    <div className="onboard-page-root">
      {/* Background glow effects to keep the premium dark theme vibe */}
      <div className="onboard-ambient-glow"></div>

      <div className="onboard-card">
        {/* Progress Tracker Bar */}
        <div className="onboard-progress-tracker">
          <span className="step-badge active-step">1</span>
          <div className="step-connector"></div>
          <span className="step-badge">2</span>
        </div>

        <div className="onboard-header">
          <h2 className="onboard-title">Name Your Portfolio</h2>
          <p className="onboard-subtitle">
            Create an isolated entity to track performance, manage risk metrics, and audit asset concentration.
          </p>
        </div>

        <form onSubmit={handleCreateSubmit} className="onboard-form">
          <div className="onboard-field-group">
            <label htmlFor="portfolio-name">Portfolio Name</label>
            <div className="onboard-input-wrapper">
              <span className="onboard-input-icon">📁</span>
              <input
                type="text"
                id="portfolio-name"
                placeholder="e.g., Retirement Portfolio, Growth Equities"
                value={portfolioName}
                onChange={(e) => setPortfolioName(e.target.value)}
                required
                autoFocus
              />
            </div>
          </div>

          <button type="submit" className="btn-onboard-next">
            Continue to Add Holdings
            <svg className="onboard-btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePortfolioPage;