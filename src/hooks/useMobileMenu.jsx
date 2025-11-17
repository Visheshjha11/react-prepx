// src/hooks/useMobileMenu.js
import { useEffect } from "react";

export default function useMobileMenu() {
  useEffect(() => {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const nav = document.querySelector(".nav");
    const body = document.body;

    if (!mobileMenuBtn || !nav) return;

    const toggleMenu = (e) => {
      e.preventDefault();
      const isOpen = nav.classList.contains("mobile-open");

      if (isOpen) {
        nav.classList.remove("mobile-open");
        mobileMenuBtn.classList.remove("active");
        body.classList.remove("menu-open");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        body.style.overflow = "";
      } else {
        nav.classList.add("mobile-open");
        mobileMenuBtn.classList.add("active");
        body.classList.add("menu-open");
        mobileMenuBtn.setAttribute("aria-expanded", "true");
        body.style.overflow = "hidden";
      }
    };

    const closeMenu = () => {
      nav.classList.remove("mobile-open");
      mobileMenuBtn.classList.remove("active");
      body.classList.remove("menu-open");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      body.style.overflow = "";
    };

    // Toggle on click
    mobileMenuBtn.addEventListener("click", toggleMenu);

    // Click nav links to close
    const navLinks = nav.querySelectorAll(".nav-item");
    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Close on outside click
    const handleOutsideClick = (e) => {
      if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        closeMenu();
      }
    };
    document.addEventListener("click", handleOutsideClick);

    // Close on ESC key
    const handleEsc = (e) => {
      if (e.key === "Escape" && nav.classList.contains("mobile-open")) {
        closeMenu();
      }
    };
    document.addEventListener("keydown", handleEsc);

    // Cleanup on component unmount
    return () => {
      mobileMenuBtn.removeEventListener("click", toggleMenu);
      navLinks.forEach((link) => link.removeEventListener("click", closeMenu));
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);
}
