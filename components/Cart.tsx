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
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`} id="cartSidebar">
        <div className="cart-header">
            <h3>CURSED CART</h3>
            <button className="cart-close" id="cartClose" onClick={onClose}>x</button>
        </div>
        <div className="cart-items" id="cartItems">
            {items.length === 0 ? (
                <div className="cart-empty">
                    <div className="empty-icon">呪</div>
                    <p>Your cart is empty, sorcerer.</p>
                    <button className="btn btn-ghost" onClick={onClose}>SHOP NOW</button>
                </div>
            ) : (
                items.map(item => (
                <div key={item.id} className="cart-item">
                    <div className="cart-item-img">
                        <Image src={item.image} alt={item.name} width={60} height={80} style={{ objectFit: 'cover', width: '60px', height: '80px', borderRadius: '4px' }} />
                    </div>
                    <div className="cart-item-info">
                        <h4>{item.name}</h4>
                        <p className="cart-item-price">Rs.{item.price}</p>
                        <div className="cart-item-qty">
                            <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                            <button className="cart-item-remove" onClick={() => onRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                </div>
                ))
            )}
        </div>
        {items.length > 0 && (
            <div className="cart-footer" id="cartFooter">
                <div className="cart-total">
                    <span>TOTAL</span>
                    <span id="cartTotal">Rs.{total}</span>
                </div>
                <button className="btn btn-primary" style={{ width: '100%' }}>CHECKOUT</button>
            </div>
        )}
      </div>
    </>
  );
}
