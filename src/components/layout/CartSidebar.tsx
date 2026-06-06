'use client';

import { useCart } from '@/lib/CartContext';
import Image from 'next/image';

export default function CartSidebar() {
  const { items, isOpen, closeCart, removeFromCart, totalPrice } = useCart();

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? 'active' : ''}`}
        onClick={closeCart}
        id="cartOverlay"
      />
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`} id="cartSidebar">
        <div className="cart-header">
          <h3>CURSED CART</h3>
          <button className="cart-close" onClick={closeCart} aria-label="Close cart">✕</button>
        </div>

        <div className="cart-items" id="cartItems">
          {items.length === 0 ? (
            <div className="cart-empty">
              <div className="empty-icon">呪</div>
              <p>Your cart is empty, sorcerer.</p>
              <a href="#products" className="btn btn-ghost" onClick={closeCart}>SHOP NOW</a>
            </div>
          ) : (
            items.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-img">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
                  />
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">₹{item.price.toLocaleString()} × {item.qty}</div>
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item"
                >✕</button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer" id="cartFooter">
            <div className="cart-total">
              <span>TOTAL</span>
              <span id="cartTotal" style={{ color: 'var(--purple-light)' }}>
                ₹{totalPrice.toLocaleString()}
              </span>
            </div>
            <button className="btn btn-primary" style={{ width: '100%' }}>CHECKOUT</button>
          </div>
        )}
      </div>

      <style jsx>{`
        .cart-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.8);
          z-index: 800; opacity: 0; pointer-events: none;
          transition: opacity 0.3s; backdrop-filter: blur(4px);
        }
        .cart-overlay.active { opacity: 1; pointer-events: all; }
        .cart-sidebar {
          position: fixed; top: 0; right: 0; bottom: 0;
          width: min(420px, 100vw); background: #08080e;
          border-left: 1px solid var(--border); z-index: 900;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex; flex-direction: column;
        }
        .cart-sidebar.open { transform: translateX(0); }
        .cart-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 24px 28px; border-bottom: 1px solid var(--border);
        }
        .cart-header h3 {
          font-family: var(--font-display); font-size: 1.1rem;
          letter-spacing: 0.2em; font-weight: 700;
        }
        .cart-close { font-size: 1.2rem; color: var(--grey); transition: var(--transition); }
        .cart-close:hover { color: var(--white); }
        .cart-items { flex: 1; overflow-y: auto; padding: 20px 28px; }
        .cart-empty { text-align: center; padding: 60px 0; }
        .empty-icon {
          font-family: var(--font-jp); font-size: 4rem;
          color: var(--border); margin-bottom: 20px; display: block;
        }
        .cart-empty p { color: var(--grey); font-size: 0.88rem; margin-bottom: 24px; }
        .cart-item {
          display: flex; gap: 16px; padding: 16px 0;
          border-bottom: 1px solid rgba(123,47,255,0.1);
        }
        .cart-item-img {
          width: 70px; height: 70px; background: var(--surface);
          border-radius: 4px; display: flex; align-items: center;
          justify-content: center; font-size: 2rem; flex-shrink: 0; overflow: hidden;
        }
        .cart-item-info { flex: 1; }
        .cart-item-name {
          font-family: var(--font-display); font-size: 0.88rem;
          letter-spacing: 0.05em; margin-bottom: 4px; font-weight: 700;
        }
        .cart-item-price { font-size: 0.82rem; color: var(--purple-light); }
        .cart-item-remove {
          font-size: 1rem; color: var(--grey);
          transition: var(--transition); align-self: flex-start;
        }
        .cart-item-remove:hover { color: var(--red); }
        .cart-footer { padding: 20px 28px; border-top: 1px solid var(--border); }
        .cart-total {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 16px; font-family: var(--font-display);
          font-size: 1.1rem; letter-spacing: 0.1em; font-weight: 700;
        }
      `}</style>
    </>
  );
}
