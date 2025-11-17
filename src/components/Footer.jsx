// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        {/* Footer Links */}
        <div className="footer-content">
          {/* Column 1 */}
          <div className="footer-column">
            <div className="footer-logo">
              <div className="logo-icon">
                <span>P</span>
              </div>
              <span className="logo-text">Prepx</span>
            </div>

            <p className="footer-description">
              The most trusted online examination platform for educational
              institutions worldwide.
            </p>

            <div className="social-links">
              <a
                href="#"
                className="social-link"
                aria-label="Visit our Facebook"
                rel="nofollow noopener"
              >
                f
              </a>

              <a
                href="#"
                className="social-link"
                aria-label="Visit our Twitter"
                rel="nofollow noopener"
              >
                t
              </a>

              <a
                href="#"
                className="social-link"
                aria-label="Visit our LinkedIn"
                rel="nofollow noopener"
              >
                in
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <h3>Product</h3>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="../about us/aboutus.html">About Us</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#integrations">Integrations</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h3>Solutions</h3>
            <ul>
              <li><a href="#">Schools</a></li>
              <li><a href="#">Universities</a></li>
              <li><a href="#">Corporate Training</a></li>
              <li><a href="#">Certification</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><a href="../about us/aboutus.html">About Us</a></li>
              <li><a href="../contactus/contact.html">Contact Us</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Documentation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; 2025 Prepx. All rights reserved.</p>

          <div className="footer-links">
            <a href="../login/login.html">Log In</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
