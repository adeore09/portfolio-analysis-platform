import "./CTASection.css";

function CTASection() {
  return (
    <section className="cta-section">
      <div className="page-container">
        <div className="cta-content-card">
          {/* Subtle background glow effect */}
          <div className="cta-glow-effect"></div>
          
          <h2 className="cta-title">Ready to Decode Your Portfolio Risk?</h2>
          <p className="cta-description">
            Join investors utilizing quantitative intelligence to manage volatility, monitor diversification concentration, and protect wealth.
          </p>
          <div className="cta-actions">
            <button className="btn-cta-primary">
              Get Started Free
              <svg className="cta-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l7 7m-7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;