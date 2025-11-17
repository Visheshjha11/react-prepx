import React, { useEffect } from "react";
import "../styles/about.css";

export default function About() {

  // Auto-scroll to top when opening About page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-badge">🚀 About Prepx</div>

            <h1 className="about-hero-title">
              Revolutionizing <br />
              <span className="about-gradient-text">Online Testing</span>
            </h1>

            <p className="about-hero-description">
              We’re building a next-generation platform that makes online
              examinations secure, seamless, and accessible for every student
              and institution.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="about-section fade-up">
        <div className="container">
          <h2 className="about-heading">Our Story</h2>
          <p className="about-text">
            Prepx began with one powerful idea — transforming the online testing
            experience into something efficient, secure, and stress-free.
          </p>

          <p className="about-text">
            Our team of developers, educators, and designers came together to
            solve real challenges faced by schools, colleges, and universities
            worldwide.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission fade-up">
        <div className="container">
          <h2 className="about-heading">Our Mission</h2>

          <p className="about-text large">
            To empower institutions with an advanced examination ecosystem that
            prioritizes security, performance, and simplicity — enabling
            students to deliver their best without technical barriers.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team fade-up">
        <div className="container">
          <div className="about-team-header">
            <h2 className="about-heading">Meet Our Team</h2>
            <p className="about-subtext">
              The minds building the future of online testing
            </p>
          </div>

          <div className="about-team-grid">

            {/* Member 1 */}
            <div className="about-team-card">
              <div className="about-avatar">V</div>
              <h3 className="team-name">Vishesh</h3>
              <p className="team-role">Team Lead</p>
              <p className="team-desc">
                Leads the Prepx vision, architecture, and innovation.
                Continuously shaping the product to serve institutions worldwide.
              </p>
            </div>

            {/* Member 2 */}
            <div className="about-team-card">
              <div className="about-avatar">M</div>
              <h3 className="team-name">Maitrik</h3>
              <p className="team-role">Team Member</p>
              <p className="team-desc">
                Handles backend logic, database optimization, and cloud
                deployment strategies.
              </p>
            </div>

            {/* Member 3 */}
            <div className="about-team-card">
              <div className="about-avatar">N</div>
              <h3 className="team-name">Naveen</h3>
              <p className="team-role">Team Member</p>
              <p className="team-desc">
                Focuses on user experience, interface consistency, and product
                scalability.
              </p>
            </div>

            {/* Member 4 */}
            <div className="about-team-card">
              <div className="about-avatar">M</div>
              <h3 className="team-name">Milan</h3>
              <p className="team-role">Team Member</p>
              <p className="team-desc">
                Ensures platform stability, testing workflow reliability, and
                seamless organization experience.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to transform your testing process?</h2>
          <p>
            Join thousands of institutions already using Prepx for secure and
            reliable online examinations.
          </p>

          <a href="/login" className="about-cta-btn">
            Get Started
          </a>
        </div>
      </section>

    </div>
  );
}
