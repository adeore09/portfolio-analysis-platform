
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="page-container">
        <div className="footer-main-content">
          
          {/* Brand/Identity Block */}
          <div className="footer-brand-column">
            <div className="footer-logo">
              Port<span>X</span>
            </div>
            <p className="footer-tagline">
              Quantitative portfolio analytics and risk intelligence platform for modern investors.
            </p>
          </div>

          {/* Quick Links Navigation */}
          <div className="footer-links-column">
            <h4 className="footer-column-title">Platform</h4>
            <ul className="footer-links-list">
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4 className="footer-column-title">Account</h4>
            <ul className="footer-links-list">
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Get Started</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar Divider and Copyright */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {currentYear} PortX. All rights reserved. Built for institutional-grade portfolio visualization.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;