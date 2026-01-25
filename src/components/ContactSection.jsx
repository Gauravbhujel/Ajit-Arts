import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="py-32 px-6 bg-bg-soft flex flex-col items-center justify-center min-h-[80vh] relative overflow-hidden text-primary">
      {/* Subtle Artistic Glows for Light Theme */}
      <motion.div 
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" 
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center flex flex-col items-center relative z-10"
      >
        <span className="section-label mb-12 !text-accent">
          GET IN TOUCH
        </span>

        <h2 className="font-serif text-5xl md:text-7xl text-primary mb-10 tracking-tight">
          Let's create something <br /> <span className="italic text-secondary">extraordinary.</span>
        </h2>

        <p className="font-sans text-lg md:text-xl text-text-dark/60 mb-16 max-w-xl leading-relaxed">
          Currently accepting private commissions and worldwide collaborations. 
          Reach out to discuss your next artistic vision.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <motion.a
            href="https://www.instagram.com/ajitbajracharya.arts"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-4 px-12 py-5 bg-gradient-to-r from-secondary to-pink-600 text-white rounded-full font-sans text-sm font-bold uppercase tracking-[0.2em] transition-all shadow-2xl"
          >
            <span>Instagram DM</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>

        <div className="mt-32 flex flex-col items-center gap-8">
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
          <div className="flex flex-col items-center gap-2">
            <p className="font-sans text-[10px] text-primary/40 tracking-[0.4em] uppercase font-bold">
              © {new Date().getFullYear()} AJIT BAJRACHARYA
            </p>
            <p className="font-serif italic text-primary/20 text-sm tracking-widest">
              Rooted in tradition, envisioned in Ink.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
