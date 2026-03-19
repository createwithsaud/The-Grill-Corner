import React from 'react';
import { motion } from 'motion/react';

const menuItems = [
  {
    name: "Chicken Shawarma",
    category: "Rolls & Wraps",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop",
    price: "₹120"
  },
  {
    name: "Mutton Mandi",
    category: "Mandi",
    image: "https://images.unsplash.com/photo-1633383718081-22ac93e3db65?q=80&w=800&auto=format&fit=crop",
    price: "₹350"
  },
  {
    name: "Chicken Mandi",
    category: "Mandi",
    image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=800&auto=format&fit=crop",
    price: "₹280"
  },
  {
    name: "Grilled Chicken",
    category: "Grill",
    image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=800&auto=format&fit=crop",
    price: "₹250"
  },
  {
    name: "Loaded Chicken Roll",
    category: "Rolls & Wraps",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop",
    price: "₹150"
  },
  {
    name: "Spicy Wings",
    category: "Snacks & Starters",
    image: "https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?q=80&w=800&auto=format&fit=crop",
    price: "₹180"
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase mb-4">
              Menu <span className="text-gradient">Highlights</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Explore our most loved dishes. From sizzling grills to aromatic mandi, every bite is a celebration of flavor.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-charcoal-900 border border-white/5 hover:border-grill-orange/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/20 to-transparent opacity-80" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-grill-orange text-sm font-bold uppercase tracking-wider mb-2 block">
                  {item.category}
                </span>
                <div className="flex justify-between items-end">
                  <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                  <span className="text-xl font-black text-white bg-charcoal-800/80 backdrop-blur-sm px-3 py-1 rounded-lg">
                    {item.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="tel:09866236672"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white uppercase tracking-wider bg-gradient-grill rounded-full hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Call to Order Now
          </a>
        </div>
      </div>
    </section>
  );
}
