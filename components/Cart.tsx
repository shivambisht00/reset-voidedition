'use client';

import { Product } from '@/lib/data';
import Image from 'next/image';

interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, delta: number) => void;
}

export default function Cart({ isOpen, onClose, items, onRemove, onUpdateQuantity }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h3>YOUR DOMAIN</h3>
        <button className="close-cart" onClick={onClose}>×</button>
      </div>

      <div className="cart-items">
        {items.length === 0 ? (
          <div className="empty-cart">EMPTY VOID</div>
        ) : (
          items.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-img">
                <Image src={item.image} alt={item.name} width={60} height={80} />
              </div>
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>Rs.{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                </div>
              </div>
              <button 
                className="remove-item" 
                onClick={() => onRemove(item.id)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>

      <div className="cart-footer">
        <div className="cart-total">
          <span>TOTAL:</span>
          <span>Rs. {total}</span>
        </div>
        <button className="checkout-btn" disabled={items.length === 0}>
          INITIATE CHECKOUT
        </button>
      </div>
    </div>
  );
}
