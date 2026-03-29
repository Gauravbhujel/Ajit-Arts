import React, { useEffect, useRef } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import FeaturedWorks from "./components/FeaturedWorked";
import ContactSection from "./components/ContactSection";

/* ── Custom Cursor ───────────────────────────────────────── */
function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      const { clientX: x, clientY: y } = e;
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top  = `${y}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${x}px`;
        ringRef.current.style.top  = `${y}px`;
      }
    };

    const onEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width  = "54px";
        ringRef.current.style.height = "54px";
        ringRef.current.style.borderColor = "rgba(17,17,17,0.2)";
      }
    };

    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width  = "32px";
        ringRef.current.style.height = "32px";
        ringRef.current.style.borderColor = "rgba(17,17,17,0.35)";
      }
    };

    window.addEventListener("mousemove", onMove);

    // Expand ring on hoverable elements
    const hoverTargets = document.querySelectorAll("a, button, .gallery-item, .featured-card");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot"  ref={dotRef}  />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}

/* ── Section Divider ─────────────────────────────────────── */
function SectionDivider() {
  return (
    <div className="section-divider mx-6 md:mx-12">
      <div className="divider-line" />
    </div>
  );
}

/* ── App ─────────────────────────────────────────────────── */
function App() {
  return (
    <main className="w-full min-h-screen bg-white text-ink-black selection:bg-ink-black selection:text-white">
      <CustomCursor />
      <Navbar />

      <div id="home">
        <HeroSection />
      </div>
      <SectionDivider />
      <div id="about">
        <AboutSection />
      </div>
      <SectionDivider />
      <div id="gallery">
        <GallerySection />
      </div>
      <SectionDivider />
      <div id="featured">
        <FeaturedWorks />
      </div>
      <SectionDivider />
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}

export default App;
