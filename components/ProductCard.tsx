'use client';

import Image from 'next/image';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="product-card" data-category={product.category}>
      <div className="product-image-container" style={{ background: product.color }}>
        <Image 
          src={product.image} 
          alt={product.name}
          width={400} 
          height={500}
          className="product-image"
        />
        <div className="product-overlay">
          <button 
            className="add-to-cart-btn"
            onClick={() => onAddToCart(product)}
          >
            ADD TO DOMAIN
          </button>
        </div>
        <div className="character-stamp">{product.char}</div>
        {product.badge && <div className="product-tag">{product.badge.toUpperCase()}</div>}
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">
          Rs.{product.price}
          {product.oldPrice && <span className="old-price"> Rs.{product.oldPrice}</span>}
        </p>
        <div className="product-rating">{product.rating}</div>
      </div>
    </div>
  );
}
