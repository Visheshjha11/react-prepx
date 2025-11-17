// src/pages/Contact.jsx
import React, { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  // ----------------------------------------------------
  // FAQ React Logic
  // ----------------------------------------------------
  const faqData = [
    {
      q: "How can I get exam-specific study materials?",
      a: "Browse our exam categories or contact us with your specific exam name. We provide tailored resources for most competitive exams including JEE, NEET, SAT, GRE, GMAT, and more."
    },
    {
      q: "Is there technical support available?",
      a: "Yes! Our technical team is available to help with website issues, login problems, platform navigation, and any other technical difficulties you may encounter."
    },
    {
      q: "Can I suggest new features or exams?",
      a: "Absolutely! We value user feedback and actively work on improving our platform. Use the contact form to suggest new features, exams, or improvements."
    },
    {
      q: "How quickly will I receive a response?",
      a: "We typically respond within 2-4 hours during business hours (9 AM - 6 PM EST), and within 24 hours for all other times. Urgent technical issues are prioritized."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  // ----------------------------------------------------
  // Component UI
  // ----------------------------------------------------
  return (
    <>
      {/* Contact Form Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-container">

            {/* Header */}
            <div className="contact-header">
              <h2 className="section-title">Send us a Message</h2>
              <p className="section-description">
                Fill out the form below and we'll get back to you as soon as possible.
                Whether you have questions about specific exams, need technical support,
                or want to provide feedback—we're here to help.
              </p>
            </div>

            {/* Form */}
            <div className="contact-grid">
              <div className="contact-form">
                <h3>Your Message</h3>

                <form id="contactForm">
                  <div className="form-grid">

                    <div className="form-field">
                      <label htmlFor="name">Full Name *</label>
                      <input type="text" id="name" name="name" required />
                    </div>

                    <div className="form-field">
                      <label htmlFor="email">Email Address *</label>
                      <input type="email" id="email" name="email" required />
                    </div>

                    <div className="form-field">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" />
                    </div>

                    <div className="form-field">
                      <label htmlFor="subject">Query Type *</label>
                      <select id="subject" name="subject" required>
                        <option value="">Select a topic</option>
                        <option value="exam-query">Exam Information</option>
                        <option value="website-issue">Website Issues</option>
                        <option value="account-support">Account Support</option>
                        <option value="technical-help">Technical Help</option>
                        <option value="course-inquiry">Course Inquiry</option>
                        <option value="billing">Billing & Payments</option>
                        <option value="feedback">Feedback & Suggestions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="form-field">
                      <label htmlFor="exam">Specific Exam (if applicable)</label>
                      <input
                        type="text"
                        id="exam"
                        name="exam"
                        placeholder="e.g., SAT, GRE, GMAT, JEE, NEET"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="priority">Priority Level</label>
                      <select id="priority" name="priority">
                        <option value="low">Low - General Inquiry</option>
                        <option value="medium" selected>Medium - Standard Support</option>
                        <option value="high">High - Urgent Issue</option>
                      </select>
                    </div>

                  </div>

                  <div className="form-field full-width">
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Please describe your query in detail..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn" id="submitBtn">
                    Send Message
                  </button>

                  <div className="success-message" id="successMessage">
                    ✅ Thank you for your message! We'll get back to you within 24 hours.
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-container">

            <div className="faq-header">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-description">
                Find quick answers to common questions about Prepx and our services.
              </p>
            </div>

            <div className="faq-grid">

              {faqData.map((item, index) => (
                <div className="faq-item" key={index}>
                  <h3
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    style={{ cursor: "pointer" }}
                  >
                    {item.q}
                  </h3>

                  <p
                    className="faq-answer"
                    style={{
                      display: openIndex === index ? "block" : "none"
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
