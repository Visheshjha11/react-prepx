// src/hooks/useSmoothScroll.js
import { useEffect } from "react";

export default function useSmoothScroll() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute("href");

      // Ignore # or empty anchors
      if (href === "#" || href === "#!" || !href) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const header = document.querySelector(".header");
      const headerHeight = header?.offsetHeight || 0;

      const position = target.offsetTop - headerHeight - 20;

      // Smooth scroll
      window.scrollTo({
        top: position,
        behavior: "smooth",
      });

      // Update URL without jump
      if (history.pushState) {
        history.pushState(null, null, href);
      }
    };

    // Attach listener
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    // Cleanup
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);
}
