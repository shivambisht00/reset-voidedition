'use client';

import { useState } from 'react';
import { Product } from '@/lib/data';
import CustomCursor from '@/components/CustomCursor';
import Intro from '@/components/Intro';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Cart from '@/components/Cart';
import Footer from '@/components/Footer';

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<(Product & { quantity: number })[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main>
      <CustomCursor />
      
      {!hasEntered && (
        <Intro onEnter={() => setHasEntered(true)} />
      )}

      {hasEntered && (
        <div className="main-content fade-in">
          <Navbar 
            onOpenCart={() => setIsCartOpen(true)} 
            cartCount={cartCount} 
          />
          
          <Hero />
          
          <ProductGrid onAddToCart={handleAddToCart} />
          
          <section className="about-section" id="about">
            <div className="about-container">
              <div className="about-text">
                <h2>BEYOND THE VOID</h2>
                <p>
                  RE:SET VOID Edition is not just a collection; it's a domain expansion in the realm of street culture. 
                  Drawing inspiration from the cursed energy of Jujutsu Kaisen, every stitch is infused with intent.
                </p>
                <div className="about-stats">
                  <div className="stat">
                    <span>8</span>
                    <p>ARTIFACTS</p>
                  </div>
                  <div className="stat">
                    <span>∞</span>
                    <p>ENERGY</p>
                  </div>
                </div>
              </div>
              <div className="about-image-glitch"></div>
            </div>
          </section>

          <Footer />

          <Cart 
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            items={cartItems}
            onRemove={handleRemoveFromCart}
            onUpdateQuantity={handleUpdateQuantity}
          />
        </div>
      )}
    </main>
  );
}
