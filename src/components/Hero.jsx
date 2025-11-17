// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient-1"></div>
        <div className="hero-gradient-2"></div>
        <div className="hero-geometric"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Left Content */}
          <div className="hero-left">
            <div className="hero-badge">🚀 Trusted by 1000+ users worldwide</div>

            <h1 className="hero-title">
              The Future of
              <br />
              <span className="gradient-text">Online Testing</span>
            </h1>

            <p className="hero-description">
              Create, manage, and analyze secure online examinations with our
              cutting-edge platform. Empower your students with seamless
              testing experiences.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta">
              <a href="../login/login.html" className="btn btn-cta btn-lg">
                <span>Start Your Free Trial</span>
                <svg
                  width="20"
                  height="20"
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
              </a>

              <a href="#aboutus" className="btn btn-hero btn-lg">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Watch Demo
              </a>
            </div>

            {/* Highlights */}
            <div className="hero-highlights" role="list" aria-label="Key highlights">
              <div className="highlight" role="listitem">
                <span className="highlight-value">1k+</span>
                <span className="highlight-label">Learners</span>
              </div>
              <div className="highlight" role="listitem">
                <span className="highlight-value">99.9%</span>
                <span className="highlight-label">Uptime</span>
              </div>
              <div className="highlight" role="listitem">
                <span className="highlight-value">24/7</span>
                <span className="highlight-label">Support</span>
              </div>
            </div>
          </div>
          {/* End hero-left */}
        </div>
        {/* End hero-content */}
      </div>
      {/* End container */}
    </section>
  );
}
