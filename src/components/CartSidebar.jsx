import Button from "./Button";
import { ShoppingBag, X, Trash2 } from "lucide-react";


const CartSidebar = ({ isOpen, onClose, cart, updateQuantity, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white z-50 shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-rose-50">
            <h2 className="text-xl font-serif font-bold text-stone-800 flex items-center gap-2">
              <ShoppingBag size={20} /> Your Box
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-rose-100 rounded-full text-stone-600 transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-10 text-stone-500">
                <div className="bg-stone-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag size={32} className="text-stone-300" />
                </div>
                <p>Your cake box is empty.</p>
                <p className="text-sm mt-2">Time to add some sweetness!</p>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.id} className="flex gap-4 bg-white border border-stone-100 p-3 rounded-xl shadow-sm">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h3 className="font-medium text-stone-800">{item.name}</h3>
                    <p className="text-rose-500 font-bold">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center hover:bg-stone-200"
                      >
                        -
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.qty}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center hover:bg-stone-200"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-stone-400 hover:text-red-500 h-fit"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="p-6 bg-stone-50 border-t border-stone-100">
            <div className="flex justify-between mb-4 text-stone-600">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-6 text-lg font-bold text-stone-800">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Button className="w-full" onClick={() => alert("Proceeding to checkout! (Demo only)")}>
              Checkout Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;