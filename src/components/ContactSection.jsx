import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="py-32 px-6 bg-white flex flex-col items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center flex flex-col items-center"
      >
        <p className="font-serif italic text-xl text-soft-grey mb-6">
          For commissions and inquiries
        </p>

        <a
          href="#"
          className="font-sans text-2xl md:text-4xl font-light tracking-wide text-ink-black hover:text-soft-grey transition-colors duration-300 mb-16"
        >
          @ajitbajracharya.arts
        </a>

        <div className="w-full max-w-xs h-[1px] bg-soft-grey opacity-20 mb-12"></div>

        <p className="font-sans text-xs text-soft-grey tracking-widest uppercase">
          © {new Date().getFullYear()} ajitbajracharya.arts
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
