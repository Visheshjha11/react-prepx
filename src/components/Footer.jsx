// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        
        <div className="footer-content">

          {/* Column 1 */}
          <div className="footer-column">
            <div className="footer-logo">
              <div className="logo-icon"><span>P</span></div>
              <span className="logo-text">Prepx</span>
            </div>

            <p className="footer-description">
              The most trusted online examination platform for educational
              institutions worldwide.
            </p>

            <div className="social-links">
              <a href="https://facebook.com" className="social-link">f</a>
              <a href="https://twitter.com" className="social-link">t</a>
              <a href="https://linkedin.com" className="social-link">in</a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <h3>Product</h3>
            <ul>
              {/* Home page anchors are safe – no reload */}
              <li><a href="/#features">Features</a></li>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="/#security">Security</a></li>
              <li><a href="/#integrations">Integrations</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h3>Solutions</h3>
            <ul>
              <li><Link to="/solutions/schools">Schools</Link></li>
              <li><Link to="/solutions/universities">Universities</Link></li>
              <li><Link to="/solutions/corporate">Corporate Training</Link></li>
              <li><Link to="/solutions/certification">Certification</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/documentation">Documentation</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2025 Prepx. All rights reserved.</p>

          <div className="footer-links">
            <Link to="/login">Log In</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
