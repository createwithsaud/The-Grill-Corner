import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    text: "Good and delicious mandi and rolls. The quality of meat is excellent and perfectly cooked.",
    author: "Mohammed A.",
    rating: 5
  },
  {
    text: "Nice place with family privacy. The seating arrangement is very comfortable for large groups.",
    author: "Syed R.",
    rating: 4
  },
  {
    text: "Taste is very good mashallah. Best grilled chicken in Chandrayangutta area.",
    author: "Abdul K.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-charcoal-800 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-grill-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase mb-4">
              Customer <span className="text-gradient">Reviews</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-xl">
              Don't just take our word for it. See what our amazing customers have to say about their experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-charcoal-900 p-4 rounded-2xl border border-white/10"
          >
            <div className="text-5xl font-black text-white">4.5</div>
            <div>
              <div className="flex text-grill-yellow mb-1">
                {[...Array(4)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                <Star className="w-5 h-5 fill-current opacity-50" />
              </div>
              <div className="text-sm text-neutral-400">Based on 79 reviews</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-charcoal-900 p-8 rounded-2xl border border-white/5 relative group hover:border-grill-orange/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-grill-orange/10 transition-colors" />
              <div className="flex text-grill-yellow mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-neutral-300 text-lg mb-6 italic relative z-10">
                "{review.text}"
              </p>
              <div className="font-bold text-white uppercase tracking-wider text-sm">
                — {review.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
