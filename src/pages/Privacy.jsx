import React from "react";
import "../styles/legal.css";

export default function Privacy() {
  return (
    <main className="legal-page">
      <div className="container">
        <h1>Privacy Policy</h1>

        <p>
          At PrepX, we are committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, store, and safeguard your
          information when you use our online examination and learning platform.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We may collect the following information:</p>
        <ul>
          <li>Personal information (name, email, phone number)</li>
          <li>Institution details (school, college, organization)</li>
          <li>Usage data such as test attempts, scores, and login activity</li>
          <li>Device information (IP address, browser type, OS)</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>Your data may be used to:</p>
        <ul>
          <li>Provide secure online examinations</li>
          <li>Improve platform performance and features</li>
          <li>Authenticate and manage user accounts</li>
          <li>Ensure academic integrity</li>
          <li>Send important service updates</li>
        </ul>

        <h2>3. Data Protection & Security</h2>
        <p>
          We implement strong encryption, strict access controls, and secure
          server practices to protect your information from unauthorized access
          or misuse.
        </p>

        <h2>4. Sharing Your Information</h2>
        <p>
          PrepX does <strong>not</strong> sell or share your personal
          information with third parties except:
        </p>
        <ul>
          <li>When required by law</li>
          <li>With your institution for educational purposes</li>
          <li>For secure hosting and analytics services</li>
        </ul>

        <h2>5. Cookies</h2>
        <p>
          PrepX uses cookies to enhance your experience, save preferences, and
          provide analytics for performance optimization.
        </p>

        <h2>6. Your Rights</h2>
        <ul>
          <li>Access, update, or delete your data</li>
          <li>Request account deactivation</li>
          <li>Withdraw consent where applicable</li>
        </ul>

        <h2>7. Contact Us</h2>
        <p>
          For privacy-related questions, contact us at: <br />
          <strong>support@prepx.com</strong>
        </p>
      </div>
    </main>
  );
}
