import React, { useEffect, useRef } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import FeaturedWorks from "./components/FeaturedWorks";
import ContactSection from "./components/ContactSection";

/* ── Custom Cursor ───────────────────────────────────────── */


function App() {
  return (
    <main className="w-full min-h-screen bg-bg-soft text-primary selection:bg-secondary selection:text-white font-sans overflow-x-hidden">
      <Navbar />

      <div id="home">
        <HeroSection />
      </div>
      
      <div id="about">
        <AboutSection />
      </div>
      
      <div id="gallery">
        <GallerySection />
      </div>
      
      <div id="featured">
        <FeaturedWorks />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}

export default App;
