import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <span className="text-3xl font-heading font-black tracking-tighter text-white mb-4 block">
              THE GRILL <span className="text-grill-orange">CORNER</span>
            </span>
            <p className="text-neutral-400 max-w-sm mb-6">
              Your go-to spot for delicious grilled food, juicy mandi, and loaded rolls in Hyderabad. Fresh, flavorful, and family-friendly.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-grill-orange transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-grill-orange transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-grill-orange transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-neutral-400 hover:text-grill-orange transition-colors">Home</a></li>
              <li><a href="#about" className="text-neutral-400 hover:text-grill-orange transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-neutral-400 hover:text-grill-orange transition-colors">Menu</a></li>
              <li><a href="#reviews" className="text-neutral-400 hover:text-grill-orange transition-colors">Reviews</a></li>
              <li><a href="#gallery" className="text-neutral-400 hover:text-grill-orange transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-neutral-400">
              <li className="flex justify-between">
                <span>Monday - Sunday</span>
                <span className="text-white">Open</span>
              </li>
              <li className="flex justify-between border-t border-white/10 pt-3 mt-3">
                <span>Closing Time</span>
                <span className="text-grill-orange font-bold">1:00 AM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} The Grill Corner. All rights reserved.
          </p>
          <p className="text-neutral-500 text-sm">
            Designed for flavor.
          </p>
        </div>
      </div>
    </footer>
  );
}
