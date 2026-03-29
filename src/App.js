import React from "react";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import FeaturedWorks from "./components/FeaturedWorked"; // fixed typo
import ContactSection from "./components/ContactSection";

function SectionDivider() {
  return (
    <div className="flex justify-center py-0">
      <div className="w-full max-w-5xl mx-6 md:mx-12 h-[1px] bg-ink-black opacity-10"></div>
    </div>
  );
}

function App() {
  return (
    <main className="w-full min-h-screen bg-white text-ink-black selection:bg-ink-black selection:text-white">
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <GallerySection />
      <SectionDivider />
      <FeaturedWorks />
      <SectionDivider />
      <ContactSection />
    </main>
  );
}

export default App;
