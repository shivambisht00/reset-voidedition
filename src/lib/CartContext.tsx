'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { Product } from '@/lib/products';

export interface CartItem extends Product {
  qty: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  toast: string;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
  totalCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState('');

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3200);
  }, []);

  const addToCart = useCallback((product: Product) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    setIsOpen(true);
    showToast(`✦ ${product.name} added to cart`);
  }, [showToast]);

  const removeFromCart = useCallback((id: number) => {
    setItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const totalCount = items.reduce((acc, i) => acc + i.qty, 0);
  const totalPrice = items.reduce((acc, i) => acc + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{
      items, isOpen, toast,
      addToCart, removeFromCart,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      totalCount, totalPrice,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
