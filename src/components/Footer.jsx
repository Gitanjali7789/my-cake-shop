import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';  
const Footer = () => (
  <footer className="bg-stone-900 text-stone-400 py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-2">
          <div className="text-2xl font-serif font-bold text-white mb-4 flex items-center gap-2">
            <span>🍰</span> Sweet Delights
          </div>
          <p className="max-w-xs mb-6">Making the world a sweeter place, one slice at a time.</p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="bg-stone-800 p-2 rounded-full hover:bg-rose-500 hover:text-white transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['Home', 'Menu', 'About Us', 'Contact', 'Privacy Policy'].map(link => (
              <li key={link}><a href="#" className="hover:text-rose-500 transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Opening Hours</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between"><span>Mon - Fri:</span> <span>9:00 AM - 8:00 PM</span></li>
            <li className="flex justify-between"><span>Saturday:</span> <span>10:00 AM - 6:00 PM</span></li>
            <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-800 pt-8 text-center text-sm">
        <p>&copy; 2024 Sweet Delights Cake Shop. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;