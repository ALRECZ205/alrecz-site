import React from 'react';
import { Product } from '../types';
import GlitchText from './GlitchText';
import { X } from 'lucide-react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Product[];
  removeFromCart: (id: string) => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cart, removeFromCart }) => {
  if (!isOpen) return null;

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-black border-2 border-white w-full max-w-md h-[500px] flex flex-col p-6 shadow-[10px_10px_0px_0px_rgba(255,255,0,1)]">
        <div className="flex justify-between items-center mb-6 border-b border-white/20 pb-4">
          <GlitchText text="CART_CONTENTS" as="h2" className="text-2xl font-bold font-retro text-awge-yellow" />
          <button onClick={onClose} className="hover:text-awge-yellow transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {cart.length === 0 ? (
            <div className="text-center py-10 text-gray-500 font-mono">
              [EMPTY]
            </div>
          ) : (
            cart.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="flex justify-between items-center border border-white/20 p-2">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover grayscale" />
                  <div>
                    <p className="font-bold font-mono text-sm">{item.name}</p>
                    <p className="text-xs text-gray-400">${item.price}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:bg-red-500 hover:text-black px-2 py-1 text-xs font-mono transition-all"
                >
                  RMV
                </button>
              </div>
            ))
          )}
        </div>

        <div className="mt-6 border-t border-white pt-4">
          <div className="flex justify-between font-mono text-xl mb-4">
            <span>TOTAL</span>
            <span className="text-awge-yellow">${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-white text-black font-bold font-mono py-3 hover:bg-awge-yellow hover:translate-x-1 hover:translate-y-1 transition-all uppercase">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;