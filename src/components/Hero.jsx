import Button from "./Button";
import { ChevronRight, Star } from "lucide-react";

const Hero = ({ setActiveTab }) => (
  <div className="relative min-h-screen flex items-center bg-[#FDF8F5] pt-20 overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-100 rounded-l-[100px] hidden lg:block opacity-50" />
    
    {/* Decorative circles */}
    <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
    <div className="absolute top-40 right-10 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />

    <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <div className="space-y-8 text-center lg:text-left">
        <div className="inline-block px-4 py-1 bg-white border border-rose-100 rounded-full text-rose-500 font-medium text-sm mb-2 shadow-sm">
          ✨ Freshly Baked Every Morning
        </div>
        <h1 className="text-5xl lg:text-7xl font-serif font-bold text-stone-800 leading-tight">
          Taste the <span className="text-rose-500 italic">Magic</span> in Every Slice
        </h1>
        <p className="text-lg text-stone-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
          Handcrafted artisan cakes made with organic ingredients and a whole lot of love. Perfect for birthdays, weddings, or just a Tuesday.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button onClick={() => setActiveTab('menu')}>
            Order Now <ChevronRight size={18} />
          </Button>
          <Button variant="secondary" onClick={() => setActiveTab('about')}>
            Our Story
          </Button>
        </div>
        
        <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
          <div>
            <p className="text-2xl font-bold text-stone-800">5k+</p>
            <p className="text-sm text-stone-500">Happy Customers</p>
          </div>
          <div className="w-px h-10 bg-stone-300" />
          <div>
            <p className="text-2xl font-bold text-stone-800">50+</p>
            <p className="text-sm text-stone-500">Cake Varieties</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
          <img 
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1000" 
            alt="Delicious Chocolate Cake" 
            className="rounded-2xl w-full h-[500px] object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 animate-bounce-slow">
            <div className="bg-rose-100 p-2 rounded-full text-rose-500">
              <Star size={24} fill="currentColor" />
            </div>
            <div>
              <p className="font-bold text-stone-800">#1 Best Seller</p>
              <p className="text-xs text-stone-500">Dark Chocolate Truffle</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Hero;