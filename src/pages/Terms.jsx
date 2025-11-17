import React from "react";
import "../styles/legal.css";

export default function Terms() {
  return (
    <main className="legal-page">
      <div className="container">
        <h1>Terms & Conditions</h1>

        <p>
          These Terms & Conditions govern the use of the PrepX online testing
          platform. By accessing or using our services, you agree to these
          terms.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By creating an account or using PrepX, you agree to comply with these
          Terms & Conditions.
        </p>

        <h2>2. User Responsibilities</h2>
        <ul>
          <li>Provide accurate account information</li>
          <li>Maintain confidentiality of login credentials</li>
          <li>Use the platform ethically and legally</li>
          <li>Avoid cheating, hacking, or misuse of the examination system</li>
        </ul>

        <h2>3. Institutional Responsibilities</h2>
        <p>
          Institutions are responsible for exam creation, user verification, and
          monitoring exam integrity.
        </p>

        <h2>4. Prohibited Activities</h2>
        <ul>
          <li>Attempting to bypass security or exam restrictions</li>
          <li>Sharing account credentials</li>
          <li>Uploading harmful or unauthorized content</li>
        </ul>

        <h2>5. Intellectual Property</h2>
        <p>
          All platform content, code, design, and materials belong to PrepX and
          may not be copied, reproduced, or resold.
        </p>

        <h2>6. Account Termination</h2>
        <p>
          PrepX may suspend or terminate accounts involved in violations of
          these Terms.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          PrepX is not responsible for data loss, downtime, or issues caused by
          external systems, misuse, or unauthorized access.
        </p>

        <h2>8. Changes to Terms</h2>
        <p>
          PrepX may update these Terms periodically. Continued use of the
          platform indicates acceptance.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          For any questions regarding these Terms, email us at: <br />
          <strong>legal@prepx.com</strong>
        </p>
      </div>
    </main>
  );
}
