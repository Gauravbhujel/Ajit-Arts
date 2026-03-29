import React from "react";
import { motion } from "framer-motion";

const featuredArtworks = [
  {
    src: "https://cdn.magicpatterns.com/uploads/nZedibEuwimybjZTQesA1r/image.png",
    title: "Innocence",
    technique: "Graphite on paper",
  },
  {
    src: "https://cdn.magicpatterns.com/uploads/fFcZyyYbafZeufHxNhUCm1/image.png",
    title: "Together",
    technique: "Graphite portrait",
  },
  {
    src: "https://cdn.magicpatterns.com/uploads/td8yiMkxdvgZLB8xNEby2H/image.png",
    title: "Beloved",
    technique: "Graphite portrait",
  },
];

const FeaturedWorks = () => {
  return (
    <section className="py-32 px-6 bg-off-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h2 className="font-sans text-xs font-semibold tracking-widest-xl uppercase text-soft-grey">
            Featured Works
          </h2>
        </motion.div>

        <div className="flex flex-col gap-32">
          {featuredArtworks.map((artwork, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="w-full max-w-4xl mb-8 overflow-hidden bg-white border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-3 md:p-5">
                <img
                  src={artwork.src}
                  alt={artwork.title}
                  className="w-full h-auto object-cover max-h-[70vh]"
                  loading="lazy"
                />
              </div>

              <div className="text-center">
                <h3 className="font-serif text-2xl text-ink-black mb-2">
                  {artwork.title}
                </h3>
                <p className="font-sans text-sm text-soft-grey tracking-wide uppercase">
                  {artwork.technique}
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
