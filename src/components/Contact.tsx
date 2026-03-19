import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase mb-8">
              Visit <span className="text-gradient">Us</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-charcoal-900 flex items-center justify-center text-grill-orange shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    500005, Ismail Nagar Road, Bandlaguda,<br />
                    Chandrayangutta, Hyderabad,<br />
                    Telangana 500005
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-charcoal-900 flex items-center justify-center text-grill-orange shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Timings</h3>
                  <p className="text-neutral-400">
                    Open Daily<br />
                    Closes at 1:00 AM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-charcoal-900 flex items-center justify-center text-grill-orange shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <p className="text-neutral-400 text-lg">098662 36672</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:09866236672"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white uppercase tracking-wider bg-gradient-grill rounded-full hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a 
                href="https://maps.google.com/?q=The+Grill+Corner+Ismail+Nagar+Road+Bandlaguda+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white uppercase tracking-wider bg-charcoal-900 border border-white/10 rounded-full hover:bg-charcoal-700 transition-all duration-300"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-auto rounded-2xl overflow-hidden border border-white/10 relative"
          >
            {/* Using a placeholder map image or iframe. In a real app, use Google Maps API or iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.665799982736!2d78.4638!3d17.3315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDE5JzUzLjQiTiA3OMKwMjcnNDkuNyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
