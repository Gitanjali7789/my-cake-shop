import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = ({ cartCount, setIsCartOpen, activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="text-2xl font-serif font-bold text-rose-500 cursor-pointer flex items-center gap-2"
          onClick={() => setActiveTab('home')}
        >
          <span>🍰</span> Sweet Delights
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Menu', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item.toLowerCase())}
              className={`text-sm font-medium transition-colors ${
                activeTab === item.toLowerCase() ? 'text-rose-500' : 'text-stone-600 hover:text-rose-500'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            className="relative p-2 text-stone-700 hover:text-rose-500 transition-colors"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-rose-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            className="md:hidden p-2 text-stone-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-stone-100 shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {['Home', 'Menu', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveTab(item.toLowerCase());
                setIsMobileMenuOpen(false);
              }}
              className="text-left py-2 px-4 hover:bg-stone-50 rounded-lg text-stone-600 font-medium"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;