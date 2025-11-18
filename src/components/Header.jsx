// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import useMobileMenu from "../hooks/useMobileMenu";

export default function Header() {
  // Initialize mobile menu logic
  useMobileMenu();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">

          {/* Logo */}
          <div className="logo">
            <Link to="/" className="logo-link">
              <div className="logo-icon">
                <span>P</span>
              </div>
              <span className="logo-text">Prepx</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="nav" id="primaryNav">
            <Link to="/modules" className="nav-item">Modules</Link>
            <Link to="/about" className="nav-item">About Us</Link>

            {/* ❌ REMOVE: /resources (route does NOT exist)
                If you need it, create /resources page later */}
            
            <Link to="/contact" className="nav-item">Contact Us</Link>
          </nav>

          {/* Auth Buttons */}
          <div className="header-buttons">
            <div className="student-access">
              <span>Student Access</span>

              {/* Make it open login */}
              <Link to="/login" className="access-btn">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>

            <div className="auth-buttons">
              <Link to="/login" className="login-box">Log In</Link>

              <Link to="/login" className="btn btn-cta" id="getStartedBtn">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            id="mobileMenuBtn"
            aria-expanded="false"
            aria-controls="primaryNav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </div>
    </header>
  );
}
