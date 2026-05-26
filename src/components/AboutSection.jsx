import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="about-section py-32 px-6 bg-white flex flex-col items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl w-full text-center"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="section-label mb-12 block"
        >
          ARTISTIC PHILOSOPHY
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-4xl md:text-6xl text-primary mb-12 leading-tight"
        >
          Capturing the <span className="text-secondary italic">soul</span> of heritage through <br className="hidden md:block" /> modern geometry.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans text-lg md:text-xl leading-relaxed text-text-dark/80 mb-12"
        >
          Ajit Bajracharya is a Pokhara-based visual artist specializing in
          intricate mandala art and detailed pen illustrations. With a deep
          reverence for traditional Nepali artistic heritage, each piece is a
          meditation — a careful layering of geometry, symmetry, and patience.
          Through ink and devotion, Ajit transforms blank canvases into living,
          breathing patterns that bridge the ancient and the contemporary.
        </motion.p>

        <div className="flex justify-center gap-6">
          <div className="w-16 h-0.5 bg-gradient-to-r from-secondary to-transparent rounded-full" />
          <div className="w-16 h-0.5 bg-gradient-to-l from-accent to-transparent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
