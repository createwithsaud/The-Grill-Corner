import React from 'react';
import { motion } from 'motion/react';
import { Utensils, Car, ShoppingBag } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Utensils className="w-10 h-10" />,
      title: "Dine-in",
      desc: "Enjoy our cozy, family-friendly atmosphere with private seating options available."
    },
    {
      icon: <Car className="w-10 h-10" />,
      title: "Kerbside Pickup",
      desc: "Order ahead and we'll bring your hot food right to your car."
    },
    {
      icon: <ShoppingBag className="w-10 h-10" />,
      title: "Delivery",
      desc: "Get your favorite grill and mandi delivered straight to your doorstep."
    }
  ];

  return (
    <section className="py-20 bg-charcoal-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-b from-charcoal-800 to-charcoal-900 border border-white/5"
            >
              <div className="w-20 h-20 rounded-full bg-charcoal-900 flex items-center justify-center text-grill-orange mb-6 shadow-[0_0_15px_rgba(255,107,0,0.15)]">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-neutral-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
