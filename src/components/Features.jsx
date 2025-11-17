// src/components/Features.jsx
import React from "react";

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="features-bg"></div>

      <div className="container">
        {/* Header */}
        <div className="features-header">
          <div className="section-badge">⚡ Powerful Features</div>

          <h2 className="section-title">
            Everything you need for
            <br />
            <span className="gradient-text">modern examinations</span>
          </h2>

          <p className="section-description">
            From intelligent question creation to advanced analytics, our
            comprehensive platform delivers enterprise-grade testing solutions
            with unmatched simplicity.
          </p>
        </div>

        {/* Features GRID */}
        <div className="features-grid">
          {/* CARD 1 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">
                <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="feature-glow"></div>
            </div>

            <h3 className="feature-title">Secure &amp; Reliable</h3>
            <p className="feature-description">
              Advanced proctoring and anti-cheating measures ensure exam
              integrity with industry-leading security protocols.
            </p>
            <div className="feature-accent"></div>
          </div>

          {/* CARD 2 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">
                <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div className="feature-glow"></div>
            </div>

            <h3 className="feature-title">Easy Administration</h3>
            <p className="feature-description">
              Intuitive dashboard for creating, managing, and monitoring exams
              with bulk student management capabilities.
            </p>
            <div className="feature-accent"></div>
          </div>

          {/* CARD 3 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">
                <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div className="feature-glow"></div>
            </div>

            <h3 className="feature-title">Detailed Analytics</h3>
            <p className="feature-description">
              Comprehensive reporting and analytics to track performance,
              identify trends, and improve learning outcomes.
            </p>
            <div className="feature-accent"></div>
          </div>

          {/* CARD 4 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">
                <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="feature-glow"></div>
            </div>

            <h3 className="feature-title">Flexible Scheduling</h3>
            <p className="feature-description">
              Schedule exams with custom time limits, multiple attempts, and
              automated grading for efficient workflow.
            </p>
            <div className="feature-accent"></div>
          </div>

          {/* CARD 5 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">
                <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="feature-glow"></div>
            </div>

            <h3 className="feature-title">Instant Results</h3>
            <p className="feature-description">
              Automated grading with immediate feedback and detailed
              explanations to enhance student learning experience.
            </p>
            <div className="feature-accent"></div>
          </div>

          {/* CARD 6 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">
                <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div className="feature-glow"></div>
            </div>

            <h3 className="feature-title">Global Accessibility</h3>
            <p className="feature-description">
              Multi-language support and mobile-responsive design ensuring
              accessibility for students worldwide.
            </p>
            <div className="feature-accent"></div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="features-cta">
          <div className="cta-card">
            <h3>Ready to transform your testing process?</h3>
            <p>
              Join thousands of educators who trust Prepx for their online
              examinations.
            </p>

            <a href="../login/login.html" className="btn btn-cta btn-lg">
              Get Started Today
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
