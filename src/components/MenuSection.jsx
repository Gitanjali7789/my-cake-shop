import React, { useState } from 'react';
import { CAKES } from '../data.js'; 
import { Star, Plus } from 'lucide-react';
import Button from './Button';

const MenuSection = ({ addToCart }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Classic', 'Chocolate', 'Fruit', 'Specialty'];

  const filteredCakes = filter === 'All' ? CAKES : CAKES.filter(cake => cake.category === filter);

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-rose-500 uppercase tracking-wider mb-2">Our Menu</h2>
          <h3 className="text-4xl font-serif font-bold text-stone-800 mb-4">Choose Your Sweet Treat</h3>
          <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                ? 'bg-stone-800 text-white shadow-lg' 
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCakes.map(cake => (
            <div key={cake.id} className="group bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={cake.image} 
                  alt={cake.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold text-stone-800 shadow-sm">
                  <Star size={14} className="text-yellow-400" fill="currentColor" />
                  {cake.rating}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-xs text-rose-500 font-bold uppercase tracking-wide">{cake.category}</p>
                    <h3 className="text-xl font-bold text-stone-800">{cake.name}</h3>
                  </div>
                  {/* RUPEE SYMBOL IS HERE 👇 */}
                  <span className="text-xl font-serif font-bold text-stone-800">₹{cake.price}</span>
                </div>
                <p className="text-stone-500 text-sm mb-6 line-clamp-2">{cake.description}</p>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500"
                  onClick={() => addToCart(cake)}
                >
                  <Plus size={18} /> Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;