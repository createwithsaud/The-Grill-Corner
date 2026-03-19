import React from 'react';
import { motion } from 'motion/react';
import { Menu, X, MapPin, Phone, Clock } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal-900/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl font-heading font-black tracking-tighter text-white">
              THE GRILL <span className="text-grill-orange">CORNER</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-neutral-300 hover:text-grill-orange transition-colors px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#menu"
              className="bg-gradient-grill text-white px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_15px_rgba(255,107,0,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Order Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-charcoal-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-charcoal-900 border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-neutral-300 hover:text-grill-orange block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#menu"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-gradient-grill text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider"
            >
              Order Now
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
