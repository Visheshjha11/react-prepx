// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Modules from "./pages/Modules";  
import Hero from "./components/Hero";
import Modal from "./components/Modal";
import Features from "./components/Features";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

import Contact from "./pages/Contact";
import About from "./pages/About";   // ✅ Add About page here
import Auth from "./pages/Auth";

import useMobileMenu from "./hooks/useMobileMenu";
import useBackToTop from "./hooks/useBackToTop";
import useScrollAnimation from "./hooks/useScrollAnimation";
import useSmoothScroll from "./hooks/useSmoothScroll";

function App() {
  useMobileMenu();
  useBackToTop();
  useScrollAnimation();
  useSmoothScroll();

  const location = useLocation();

  // Hide layout only on login page
  const hideLayout = location.pathname === "/login";

  return (
    <>
      {/* Hide Header on /login */}
      {!hideLayout && <Header />}

      <main id="mainContent">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Modal />
                <Features />
              </>
            }
          />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />   {/* ✅ FINAL ABOUT ROUTE */}
          <Route path="/login" element={<Auth />} />
          <Route path="/modules" element={<Modules />} />
        </Routes>
      </main>

      {/* Hide Footer & BackToTop on login */}
      {!hideLayout && <Footer />}
      {!hideLayout && <BackToTop />}
    </>
  );
}

export default App;
