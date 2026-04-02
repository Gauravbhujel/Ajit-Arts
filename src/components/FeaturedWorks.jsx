import React from "react";
import { motion } from "framer-motion";
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image2.png";
import image3 from "../Assets/image3.png";

const featuredArtworks = [
  {
    src: image1,
    title: "Innocence",
    technique: "Graphite on paper",
  },
  {
    src: image2,
    title: "Together",
    technique: "Graphite portrait",
  },
  {
    src: image3,
    title: "Beloved",
    technique: "Graphite portrait",
  },
];

const FeaturedWorks = () => {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden text-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-24 text-center"
        >
          <span className="section-label mb-6">MASTERPIECES</span>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl text-primary font-bold tracking-tight">
            Featured Works
          </h2>
        </motion.div>

        <div className="flex flex-col gap-32 md:gap-48">
          {featuredArtworks.map((artwork, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-24`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 group relative">
                {/* Decorative Elements */}
                <div
                  className={`absolute -inset-4 bg-gradient-to-tr from-secondary/10 to-accent/10 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-50`}
                />

                <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 card-shadow aspect-[4/5] lg:aspect-auto">
                  <div className="overflow-hidden rounded-[1.5rem] h-full">
                    <img
                      src={artwork.src}
                      alt={artwork.title}
                      className="w-full h-full object-cover max-h-[70vh] transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div
                className={`w-full lg:w-1/2 text-left ${index % 2 === 0 ? "" : "lg:text-right"}`}
              >
                <span
                  className={`font-sans text-[10px] font-bold tracking-[0.4em] text-accent uppercase mb-6 block ${index % 2 === 0 ? "" : "lg:justify-end"}`}
                >
                  {artwork.technique}
                </span>

                <h3 className="font-serif text-4xl md:text-6xl text-primary mb-8 leading-tight tracking-tight">
                  {artwork.title}
                </h3>

                <div
                  className={`w-16 h-1 bg-gradient-to-r from-secondary to-accent mb-8 ${index % 2 === 0 ? "" : "lg:ml-auto"}`}
                />

                <p className="font-sans text-lg md:text-xl text-text-dark/70 leading-relaxed mb-10 max-w-xl">
                  A masterpiece that captures the essence of{" "}
                  {artwork.technique.toLowerCase()}, demonstrating meticulous
                  attention to detail and a profound understanding of form and
                  light. Each stroke is a testament to the patient mastery of
                  the medium.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
