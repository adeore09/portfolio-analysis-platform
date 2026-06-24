import { useState } from "react";
import "./AuthPages.css";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Registering account:", { username, email, password });
  };

  return (
    <div className="split-auth-container">
      {/* Left Column: Reused Branding Panel */}
      <div className="auth-visual-panel">
        <div className="visual-panel-content">
          <h1 className="visual-heading">Start Your Journey with Us</h1>
          <div className="visual-waves-decor">
            <div className="wave-shading circle-1"></div>
            <div className="wave-shading circle-2"></div>
          </div>
          <div className="visual-footer-note">
            <div className="mini-logo-icon">✕</div>
            <p>We're crafting institutional-grade analytics that solve portfolio optimization problems.</p>
          </div>
        </div>
      </div>

      {/* Right Column: Registration Workspace */}
      <div className="auth-form-panel">
        {/* Metric Accent Header mimicking image_e9a763.png */}
        <div className="auth-top-banner community-banner">
          <div className="mini-avatar-group">
            <span className="avatar-dot"></span>
            <span className="avatar-dot"></span>
          </div>
          <p><strong>Join over 10k+ Quants</strong> — Optimize performance & manage volatility instantly.</p>
        </div>

        <div className="auth-form-card">
          <div className="auth-form-header">
            <h2 className="form-main-title">Get Started Now</h2>
            <p className="form-sub-title">Let's create your analyst account</p>
          </div>

          <form onSubmit={handleRegisterSubmit} className="split-auth-form">
            <div className="input-field-wrapper">
              <label>Username</label>
              <div className="input-with-icon">
                <span className="input-icon">👤</span>
                <input
                  type="text"
                  placeholder="Dominic Matthew"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-field-wrapper">
              <label>Email</label>
              <div className="input-with-icon">
                <span className="input-icon">✉</span>
                <input
                  type="email"
                  placeholder="domat@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-field-wrapper">
              <label>Password</label>
              <div className="input-with-icon">
                <span className="input-icon">🔒</span>
                <input
                  type="password"
                  placeholder="Set your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-options-row">
              <label className="checkbox-container">
                <input type="checkbox" required />
                <span className="checkmark"></span>
                I agree to the <a href="#terms" className="inline-link">Terms & Conditions</a>
              </label>
            </div>

            <button type="submit" className="btn-split-auth-primary">Sign Up</button>
          </form>

          <p className="form-switch-footer">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;