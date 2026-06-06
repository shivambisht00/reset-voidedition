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
            <span className="section-tag">— LATEST DROP —</span>
            <h2 className="section-title">CURSED <span>COLLECTION</span></h2>
            <p className="section-sub">Handpicked. Premium quality. Sorcerer-grade materials.</p>
        </div>
        <div className="filter-tabs">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
            <button className={`filter-btn ${filter === 'tshirt' ? 'active' : ''}`} onClick={() => setFilter('tshirt')}>T-Shirts</button>
            <button className={`filter-btn ${filter === 'jeans' ? 'active' : ''}`} onClick={() => setFilter('jeans')}>Jeans</button>
            <button className={`filter-btn ${filter === 'shoes' ? 'active' : ''}`} onClick={() => setFilter('shoes')}>Shoes</button>
            <button className={`filter-btn ${filter === 'hoodie' ? 'active' : ''}`} onClick={() => setFilter('hoodie')}>Hoodies</button>
        </div>
        <div className="products-grid" id="productsGrid">
            {filteredProducts.map((product) => (
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={onAddToCart} 
                />
            ))}
        </div>
        <div className="load-more-wrap">
            <button className="btn btn-outline" id="loadMoreBtn">LOAD MORE DROPS</button>
        </div>
    </section>
  );
}
