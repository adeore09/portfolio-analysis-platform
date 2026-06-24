import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar-header">
      <div className="margin">
        <b className="PortX">
          <span className="Port">Port</span>
          <span className="X">X</span>
        </b>
      </div>
      
      <nav className="navbar-menu">
        <ul className="navbar-links">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#">How It works</a>
          </li>
        </ul>
      </nav>

      <div className="navbar-actions">
        <a href="#login" className="btn-login">
          Login
        </a>
        <a href="#get-started" className="btn-signup">
          Get Started
        </a>
      </div>
    </header>
  );
}

export default Navbar;
