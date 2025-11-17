import { useEffect, useState } from "react";
import "../styles/backToTop.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`back-to-top ${visible ? "show" : "hide"}`}
      onClick={scrollToTop}
    >
      ↑
    </div>
  );
}
