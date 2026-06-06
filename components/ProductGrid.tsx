'use client';

import { useState } from 'react';
import { products, Product } from '@/lib/data';
import ProductCard from './ProductCard';

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

export default function ProductGrid({ onAddToCart }: ProductGridProps) {
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <section className="products" id="products">
      <div className="section-header">
        <h2 className="section-title">THE ARTIFACTS</h2>
        <div className="filter-chips">
          {['all', 'tee', 'hoodie', 'outerwear'].map((cat) => (
            <button 
              key={cat}
              className={`filter-chip ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid" id="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>
    </section>
  );
}
