import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-charcoal-900/50 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop" 
          alt="Grilled Food" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-grill-orange/20 text-grill-orange border border-grill-orange/30 text-sm font-bold tracking-wider uppercase mb-6">
              Welcome to The Grill Corner
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[1.1] mb-6 uppercase">
              Fresh Grill.<br />
              <span className="text-gradient">Juicy Mandi.</span><br />
              Loaded Rolls.
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl font-medium">
              Your go-to spot for delicious food & family dining in Hyderabad. Experience the perfect blend of spices, fire, and flavor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#menu"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white uppercase tracking-wider bg-gradient-grill rounded-full hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all duration-300 transform hover:-translate-y-1 group"
              >
                View Menu
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:09866236672"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white uppercase tracking-wider bg-transparent border-2 border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Order Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Telugu Name Decorative */}
      <div className="absolute bottom-10 right-10 z-20 hidden lg:block opacity-20">
        <h2 className="text-6xl font-black text-white writing-vertical-rl transform rotate-180">
          ద గ్రిల్ కార్నర్
        </h2>
      </div>
    </section>
  );
}
