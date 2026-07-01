'use client';

import { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import { Product } from './types';

interface CartContextValue {
  cart: Product[];
  isOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  open: () => void;
  close: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo<CartContextValue>(
    () => ({
      cart,
      isOpen,
      addToCart: (product) => {
        setCart((prev) => [...prev, product]);
        setIsOpen(true);
      },
      removeFromCart: (id) =>
        setCart((prev) => {
          const idx = prev.findIndex((p) => p.id === id);
          if (idx === -1) return prev;
          return [...prev.slice(0, idx), ...prev.slice(idx + 1)];
        }),
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [cart, isOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
