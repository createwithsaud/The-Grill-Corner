import React from 'react';
import { motion } from 'motion/react';
import { Star, Users, Flame, IndianRupee } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Star className="w-8 h-8 text-grill-yellow" />,
      title: "4.5 Rated",
      description: "Loved by our customers"
    },
    {
      icon: <Users className="w-8 h-8 text-grill-orange" />,
      title: "Family-Friendly",
      description: "Private seating available"
    },
    {
      icon: <Flame className="w-8 h-8 text-grill-red" />,
      title: "Freshly Grilled",
      description: "Hot & fresh every time"
    },
    {
      icon: <IndianRupee className="w-8 h-8 text-emerald-500" />,
      title: "Budget-Friendly",
      description: "₹200–₹400 per person"
    }
  ];

  return (
    <section id="about" className="py-24 bg-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase mb-6">
              More Than Just <br/><span className="text-gradient">Great Food</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-grill mb-8 rounded-full"></div>
            
            <div className="space-y-6 text-neutral-300 text-lg">
              <p>
                The Grill Corner is a popular local spot in Bandlaguda, Hyderabad, famous for our mouth-watering grilled items, authentic mandi, and loaded shawarma rolls.
              </p>
              <p>
                We are known for serving incredibly tasty food in a relaxed, family-friendly environment. Whether you're craving a late-night snack or a full family dinner, we've got you covered.
              </p>
              <p className="font-medium text-white">
                Experience premium taste with affordable pricing and satisfying portions.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-charcoal-800 p-6 rounded-2xl border border-white/5 hover:border-grill-orange/30 transition-colors group"
              >
                <div className="w-14 h-14 bg-charcoal-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-neutral-400">{feature.description}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
