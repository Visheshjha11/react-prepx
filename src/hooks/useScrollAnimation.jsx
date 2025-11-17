// src/hooks/useScrollAnimations.js
import { useEffect } from "react";

export default function useScrollAnimations() {
  useEffect(() => {
    // Elements to animate when visible
    const animatedSelectors = [
      ".feature-card",
      ".pricing-card",
      ".cta-card",
      ".hero-content",
      ".section-title"
    ];

    const elements = document.querySelectorAll(animatedSelectors.join(", "));

    // Observer Options
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    // Stagger animation for siblings
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        el.classList.add("animate-in");

        const parent = el.parentElement;
        if (parent) {
          const siblings = parent.querySelectorAll(
            ".feature-card, .pricing-card, .cta-card"
          );

          siblings.forEach((sib, index) => {
            setTimeout(() => {
              sib.classList.add("animate-in");
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observe all elements
    elements.forEach((el) => observer.observe(el));

    // Header scroll behavior
    const header = document.querySelector(".header");
    let lastScroll = window.scrollY;

    const handleHeaderScroll = () => {
      const current = window.scrollY;

      // Add scrolled class
      if (current > 100) header?.classList.add("scrolled");
      else header?.classList.remove("scrolled");

      // Hide on scroll down, show on scroll up
      if (current > lastScroll && current > 200) {
        header?.classList.add("header-hidden");
      } else {
        header?.classList.remove("header-hidden");
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleHeaderScroll);

    // Cleanup on unmount
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener("scroll", handleHeaderScroll);
    };
  }, []);
}
