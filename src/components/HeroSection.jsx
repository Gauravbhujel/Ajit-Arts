import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (titleRef.current) titleRef.current.classList.add("animate");
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section min-h-screen flex flex-col items-center justify-center px-6 bg-white relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hero-content text-center"
      >
        <h1
          ref={titleRef}
          className="hero-title font-sans text-3xl md:text-5xl font-medium tracking-widest-xl uppercase text-ink-black mb-8"
        >
          ajitbajracharya.arts
        </h1>

        <div className="w-12 h-[1px] bg-ink-black mx-auto mb-8 opacity-20"></div>

        <p className="font-serif italic text-xl md:text-2xl text-soft-grey max-w-lg mx-auto leading-relaxed">
          "Art speaks where words are unable to explain"
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-sans tracking-widest text-soft-grey uppercase">
          Scroll
        </span>
        <div className="scroll-line w-[1px] h-12 bg-soft-grey opacity-50"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
