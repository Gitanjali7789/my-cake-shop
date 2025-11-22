import { Heart, Star } from "lucide-react";
import Button from "./Button";
const AboutSection = () => (
  <div className="py-24 bg-[#FDF8F5]">
    <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
      <div className="grid grid-cols-2 gap-4">
        <img src="https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWR8ZW58MHx8MHx8fDA%3D" alt="Baking" className="rounded-2xl mb-8 shadow-lg" />
        <img src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=600" alt="Decorating" className="rounded-2xl mt-8 shadow-lg" />
      </div>
      
      <div className="space-y-6">
        <h2 className="text-4xl font-serif font-bold text-stone-800">Baked with Love, Served with Joy</h2>
        <p className="text-lg text-stone-600 leading-relaxed">
          Founded in 2010, Sweet Delights began in a small kitchen with a big dream: to bring back the authentic taste of homemade cakes. 
        </p>
        <p className="text-stone-600 leading-relaxed">
          We believe that the secret ingredient to a perfect cake isn't just sugar or flour—it's passion. Our master bakers wake up before dawn to ensure every sponge is airy, every ganache is glossy, and every bite makes you smile.
        </p>
        
        <div className="grid grid-cols-2 gap-6 pt-4">
          <div className="flex items-start gap-3">
            <div className="bg-rose-100 p-2 rounded-full text-rose-500 mt-1">
              <Heart size={20} />
            </div>
            <div>
              <h4 className="font-bold text-stone-800">100% Organic</h4>
              <p className="text-sm text-stone-500">Locally sourced ingredients</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-rose-100 p-2 rounded-full text-rose-500 mt-1">
              <Star size={20} />
            </div>
            <div>
              <h4 className="font-bold text-stone-800">Master Bakers</h4>
              <p className="text-sm text-stone-500">Years of expertise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutSection;