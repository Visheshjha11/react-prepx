// src/components/BackToTop.jsx
import React from "react";
import useBackToTop from "../hooks/useBackToTop";

export default function BackToTop() {
  // initialize scroll-to-top behavior
  useBackToTop();

  return (
    <button id="backToTop" className="back-to-top" aria-label="Back to top">
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
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        ></path>
      </svg>
    </button>
  );
}
