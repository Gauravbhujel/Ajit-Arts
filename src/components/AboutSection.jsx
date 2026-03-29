import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="about-section py-32 px-6 bg-off-white flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[600px] w-full text-center"
      >
        <h2 className="section-label font-sans text-xs font-semibold tracking-widest-xl uppercase text-soft-grey mb-12">
          About
        </h2>

        <p className="font-serif text-xl md:text-2xl leading-loose text-ink-black">
          Ajit Bajracharya is a Pokhara-based visual artist specializing in
          intricate mandala art and detailed pen illustrations. With a deep
          reverence for traditional Nepali artistic heritage, each piece is a
          meditation — a careful layering of geometry, symmetry, and patience.
          Through ink and devotion, Ajit transforms blank canvases into living,
          breathing patterns that bridge the ancient and the contemporary.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
