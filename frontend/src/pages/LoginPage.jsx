import { useState } from "react";
import "./AuthPages.css";

function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in with:", {email, password});
    }

    return(
        <div className="split-auth-container">
            <div className="auth-visual-panel">
                <div className="visual-panel-content">
                    <h1 className="visual-heading">Start Your Journey with Us</h1>
                    <div className="visual-waves-decor">
                        <div className="wave-shading circle-1"/>
                        <div className="wave-shading circle-2"/>
                    </div>
                    <div className="visual-footer-note">
                        <div className="mini-logo-icon">✕</div>
                        <p>We're crafting institutional-grade analytics that solve portfolio optimization problems.</p>
                    </div>
                </div>
            </div>

            <div className="auth-form-panel">
                <div className="auth-top-banner">
                    <p>“Price is what you pay, value is what you get.” — Warren Buffett</p>
                </div>

                <div className="auth-form-card">
                    <div className="auth-form-header">
                        <h2 className="form-main-title">Welcome Back</h2>
                        <p className="form-sub-title">Sign in to your account</p>
                    </div>

                    <form onSubmit={handleLoginSubmit} className="split-auth-form">
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
                        
                        <div className="form-options-row">
                            <label className="checkbox-container">
                                <input type="checkbox"/>
                                <spam className="checkmark"></spam>
                                Remember Me 
                            </label>
                            <a href="#forgot"  className="forgot-password-link">Forgot Password ?</a>
                        </div>

                        <button type="submit" className="btn-split-auth-primary">Sign In</button>
                    </form>

                    <p className="form-switch-footer">
                        Don't have an account? <a href="/register">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;