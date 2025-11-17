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
import About from "./pages/About";
import Auth from "./pages/Auth";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

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

  // ✅ Hide layout on these pages
  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/privacy" ||
    location.pathname === "/terms";

  return (
    <>
      {/* Hide Header on login/privacy/terms */}
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
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>

      {/* Hide Footer on login/privacy/terms */}
      {!hideLayout && <Footer />}
      {/* {!hideLayout && <BackToTop />} */}
    </>
  );
}

export default App;
