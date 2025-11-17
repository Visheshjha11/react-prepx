import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Modal from "./components/Modal";
import Features from "./components/Features";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

import Contact from "./pages/Contact";
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
  const hideLayout = location.pathname === "/login"; // <── HIDE on login page

  return (
    <>
      {/* Hide Header when on /login */}
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
          <Route path="/login" element={<Auth />} />
        </Routes>
      </main>

      {/* Hide Footer + BackToTop on /login */}
      {!hideLayout && <Footer />}
      {!hideLayout && <BackToTop />}
    </>
  );
}

export default App;
