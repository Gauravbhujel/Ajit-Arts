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
                ease: [0.22, 1, 0.36, 1]
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
                    {item.caption.split('—')[1] || "Artwork"}
                  </span>
                  <p className="text-white font-serif text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.caption.split('—')[0]}
                  </p>
                </div>
              </div>

              <div className="p-8 pb-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-[10px] font-bold text-secondary uppercase tracking-[0.2em] bg-secondary/5 px-2.5 py-1 rounded-full">
                    {item.caption.split('—')[1] || "Fine Art"}
                  </span>
                  <div className="w-8 h-[1px] bg-primary/10 group-hover:w-12 group-hover:bg-accent transition-all duration-500" />
                </div>
                
                <h3 className="font-serif text-2xl text-primary group-hover:text-secondary transition-colors duration-300">
                  {item.caption.split('—')[0]}
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
