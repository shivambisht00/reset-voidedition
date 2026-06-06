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
      <div className="product-image-container">
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
        <div className="character-stamp">{product.character}</div>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">Rs.{product.price}</p>
        <div className="character-badge">{product.character}</div>
      </div>
    </div>
  );
}
