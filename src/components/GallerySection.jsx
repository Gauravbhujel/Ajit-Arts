import React from "react";
import { motion } from "framer-motion";
import NewLife from "../Assets/NewLife.png";
import kumari from "../Assets/kumari.png";
import NepaliWomen from "../Assets/NepaliWomen.png";
import Leopard from "../Assets/Leopard.png";
import Splash from "../Assets/Splash.png";
import Nepal from "../Assets/Nepal.png";
import Family from "../Assets/Family.png";
import Couple from "../Assets/Couple.png";
import Godess from "../Assets/Godess.png";
import Gaze from "../Assets/Gaze.png";
import kumari2 from "../Assets/kumari2.png";
import newari from "../Assets/newari.png";

const galleryItems = [
  {
    src: NewLife,
    caption: "New Life — Graphite Drawing",
  },
  {
    src: kumari,
    caption: "Kumari — Color Portrait",
  },
  {
    src: NepaliWomen,
    caption: "Nepali Woman — Color Portrait",
  },
  {
    src: Leopard,
    caption: "Leopard — Graphite on Black",
  },
  {
    src: Splash,
    caption: "Splash — Hyperrealistic Graphite",
  },
  {
    src: Nepal,
    caption: "Nepal — Graphite Portrait",
  },
  {
    src: Family,
    caption: "Family — Oil on Canvas",
  },
  {
    src: Couple,
    caption: "Couple — Color Portrait",
  },
  {
    src: Godess,
    caption: "Living Goddess — Color Painting",
  },
  {
    src: Gaze,
    caption: "Gaze — Graphite Portrait",
  },
  {
    src: kumari2,
    caption: "Kumari — Graphite Drawing",
  },
  {
    src: newari,
    caption: "Newari Girl — Graphite Portrait",
  },
];

const GallerySection = () => {
  return (
    <section className="py-24 px-6 bg-bg-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >
          <span className="section-label mb-6">THE GALLERY</span>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl text-primary font-bold tracking-tight">
            Selected Creations
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: (index % 3) * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden card-shadow"
            >
              <div className="relative overflow-hidden aspect-[4/5] bg-accent-grey">
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />

                {/* Modern Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <span className="text-accent font-sans text-[10px] font-bold tracking-[0.3em] uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.caption.split("—")[1] || "Artwork"}
                  </span>
                  <p className="text-white font-serif text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.caption.split("—")[0]}
                  </p>
                </div>
              </div>

              <div className="p-8 pb-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-[10px] font-bold text-secondary uppercase tracking-[0.2em] bg-secondary/5 px-2.5 py-1 rounded-full">
                    {item.caption.split("—")[1] || "Fine Art"}
                  </span>
                  <div className="w-8 h-[1px] bg-primary/10 group-hover:w-12 group-hover:bg-accent transition-all duration-500" />
                </div>

                <h3 className="font-serif text-2xl text-primary group-hover:text-secondary transition-colors duration-300">
                  {item.caption.split("—")[0]}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
