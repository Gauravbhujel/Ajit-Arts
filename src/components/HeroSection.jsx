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
    <section className="hero-section min-h-screen flex flex-col items-center justify-center px-6 bg-bg-soft relative overflow-hidden">
      {/* Soft Artistic Gradients */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" 
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="hero-content text-center relative z-10"
      >
        <span className="font-sans text-xs uppercase tracking-[0.5rem] text-secondary font-bold mb-6 block">
          Digital Art & Portfolios
        </span>
        
        <h1
          ref={titleRef}
          className="hero-title font-serif text-5xl md:text-8xl lg:text-9xl font-bold text-primary mb-8 leading-tight tracking-tight"
        >
          Ajit<span className="italic text-secondary font-medium">Arts</span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-text-dark/70 max-w-2xl mx-auto leading-relaxed mb-12">
          "Art speaks where words are unable to explain." <br />
          Discover a collection where tradition meets contemporary vision.
        </p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(109, 40, 217, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 bg-gradient-to-r from-secondary to-pink-500 text-white rounded-full font-sans text-sm font-semibold uppercase tracking-widest transition-all shadow-xl"
          onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
        >
          Explore Gallery
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="relative w-[1px] h-16 bg-gradient-to-b from-secondary to-transparent">
          <motion.div 
            animate={{ 
              y: [0, 64, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 w-full h-4 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
