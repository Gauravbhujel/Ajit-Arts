import React from "react";
import { motion } from "framer-motion";

const galleryItems = [
  {
    src: "https://cdn.magicpatterns.com/uploads/1QZf2dadTqZn7KnLJTva1S/image.png",
    caption: "New Life — Graphite Drawing",
  },
  {
    src: "https://cdn.magicpatterns.com/uploads/qioQg9ton74ixPQnzpitsN/image.png",
    caption: "Kumari — Color Portrait",
  },
  {
    src: "https://cdn.magicpatterns.com/uploads/9SfCLpnWVhZeMGvfjGY4Lj/image.png",
    caption: "Nepali Woman — Color Portrait",
  },
  {
    src: "https://cdn.magicpatterns.com/uploads/kzbd5bsix44azHknsdEwAZ/image.png",
    caption: "Leopard — Graphite on Black",
  },
  {
    src: "https://cdn.magicpatterns.com/uploads/9ScrvSK4HBoQENUYJirR4D/image.png",
    caption: "Splash — Hyperrealistic Graphite",
  },
  {
    src: "https://cdn.magicpatterns.com/uploads/pjgSQuSKqDrXBowvsbrMTB/image.png",
    caption: "Nepal — Graphite Portrait",
  },
  {
    src: "https://cdn.magicpatterns.com/uploads/wttAjjbViJD9nUeaRM5SpB/image.png",
    caption: "Family — Oil on Canvas",
  },
  {
    src: "https://cdn.magicpatterns.com/uploads/hw8P8mEEcch1LgEDSXPZva/image.png",
    caption: "Couple — Color Portrait",
  },
  {
    src: "https://cdn.magicpatterns.com/uploads/qXME5X51updEuV2PTu1wjY/image.png",
    caption: "Living Goddess — Color Painting",
  },
  {
    src: "https://cdn.magicpatterns.com/uploads/qkxC25B5s7e4cuhWSLLRd8/image.png",
    caption: "Gaze — Graphite Portrait",
  },
  {
    src: "https://cdn.magicpatterns.com/uploads/kJJqrwsReioY1sThCreUtv/image.png",
    caption: "Kumari — Graphite Drawing",
  },
  {
    src: "https://cdn.magicpatterns.com/uploads/ijZQJx46MRmXL8p9SpVknX/image.png",
    caption: "Newari Girl — Graphite Portrait",
  },
];

const GallerySection = () => {
  return (
    <section className="py-32 px-4 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="section-label font-sans text-xs font-semibold tracking-widest-xl uppercase text-soft-grey">
            Gallery
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.1,
              }}
              className="flex flex-col"
            >
              {/* Image wrapper with hover overlay */}
              <div className="gallery-item aspect-square bg-off-white">
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span className="gallery-overlay-text">{item.caption}</span>
                </div>
              </div>

              <p className="mt-3 font-serif text-sm text-soft-grey text-center transition-colors duration-300">
                {item.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
