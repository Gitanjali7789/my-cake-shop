import { MapPin, Phone, Mail } from 'lucide-react';
const ContactSection = () => (
  <div className="py-24 bg-white">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-serif font-bold text-stone-800 mb-8">Visit Our Shop</h2>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="p-6 bg-stone-50 rounded-xl text-center hover:shadow-md transition-shadow">
          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-rose-500">
            <MapPin size={24} />
          </div>
          <h3 className="font-bold text-stone-800 mb-2">Location</h3>
          <p className="text-stone-600 text-sm">123 Baker Street<br/>Sweet City, SC 90210</p>
        </div>
        <div className="p-6 bg-stone-50 rounded-xl text-center hover:shadow-md transition-shadow">
          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-rose-500">
            <Phone size={24} />
          </div>
          <h3 className="font-bold text-stone-800 mb-2">Phone</h3>
          <p className="text-stone-600 text-sm">+1 (555) 123-4567<br/>Mon-Sat: 9am - 8pm</p>
        </div>
        <div className="p-6 bg-stone-50 rounded-xl text-center hover:shadow-md transition-shadow">
          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-rose-500">
            <Mail size={24} />
          </div>
          <h3 className="font-bold text-stone-800 mb-2">Email</h3>
          <p className="text-stone-600 text-sm">hello@sweetdelights.com<br/>orders@sweetdelights.com</p>
        </div>
      </div>

      <div className="bg-rose-500 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h3>
          <p className="mb-6 opacity-90">Get notified about new flavors and special offers.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
            <button className="bg-stone-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-900 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default ContactSection;