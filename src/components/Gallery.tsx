import React from 'react';
import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop", // Grill
  "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop", // Shawarma
  "https://images.unsplash.com/photo-1633383718081-22ac93e3db65?q=80&w=800&auto=format&fit=crop", // Mandi
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop", // Ambience
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop", // Night view
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase mb-4">
              Our <span className="text-gradient">Gallery</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              A glimpse into The Grill Corner experience.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-xl overflow-hidden group ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <div className={`w-full ${index === 0 ? 'h-full min-h-[400px]' : 'h-48 md:h-64'}`}>
                <img 
                  src={src} 
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
