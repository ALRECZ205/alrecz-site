'use client';

import { X } from 'lucide-react';
import GlitchText from '@/components/shared/GlitchText';
import { useCart } from './CartContext';

export default function CartModal() {
  const { cart, isOpen, close, removeFromCart } = useCart();
  if (!isOpen) return null;

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="fixed inset-0 z-[9970] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={close} />

      <div className="relative bg-alrecz-black border border-white/20 w-full max-w-md h-[500px] flex flex-col p-6 shadow-[10px_10px_0px_0px_rgba(122,15,15,0.4)]">
        <div className="flex justify-between items-center mb-6 border-b border-white/20 pb-4">
          <GlitchText text="CART_CONTENTS" as="h2" className="text-2xl font-bold font-display text-alrecz-blood" />
          <button onClick={close} data-cursor="button" aria-label="Close cart" className="hover:text-alrecz-blood transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {cart.length === 0 ? (
            <div className="text-center py-10 text-alrecz-silver/50 font-mono text-sm">[ EMPTY ]</div>
          ) : (
            cart.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="flex justify-between items-center border border-white/10 p-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-white/15 bg-alrecz-charcoal font-mono text-[9px] text-alrecz-silver">
                    S001
                  </div>
                  <div>
                    <p className="font-bold font-mono text-sm text-alrecz-offwhite">{item.name}</p>
                    <p className="text-xs text-alrecz-silver/60">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  data-cursor="button"
                  className="text-alrecz-blood hover:bg-alrecz-blood hover:text-white px-2 py-1 text-xs font-mono transition-all border border-alrecz-blood/40"
                >
                  RMV
                </button>
              </div>
            ))
          )}
        </div>

        <div className="mt-6 border-t border-white/20 pt-4">
          <div className="flex justify-between font-mono text-xl mb-4 text-alrecz-offwhite">
            <span>TOTAL</span>
            <span className="text-alrecz-blood">${total.toFixed(2)}</span>
          </div>
          <button
            disabled={cart.length === 0}
            data-cursor="button"
            className="w-full bg-alrecz-offwhite text-black font-bold font-mono py-3 hover:bg-alrecz-blood hover:text-white transition-all uppercase disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
