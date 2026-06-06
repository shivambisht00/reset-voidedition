'use client';

import { useState } from 'react';
import { products, FilterCategory } from '@/lib/products';
import { useCart } from '@/lib/CartContext';

const FILTERS: { label: string; value: FilterCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'T-Shirts', value: 'tshirt' },
  { label: 'Jeans', value: 'jeans' },
  { label: 'Shoes', value: 'shoes' },
  { label: 'Hoodies', value: 'hoodie' },
];

const BADGE_COLORS: Record<string, string> = {
  new: 'var(--purple)',
  hot: 'var(--red)',
  limited: 'var(--gold)',
};

export default function ProductsSection() {
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [visibleCount, setVisibleCount] = useState(4);
  const { addToCart } = useCart();

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  const visible = filtered.slice(0, visibleCount);

  return (
    <section className="products" id="products">
      <div className="section-header">
        <span className="section-tag">— LATEST DROP —</span>
        <h2 className="section-title">CURSED <span>COLLECTION</span></h2>
        <p className="section-sub">Handpicked. Premium quality. Sorcerer-grade materials.</p>
      </div>

      <div className="filter-tabs">
        {FILTERS.map(f => (
          <button
            key={f.value}
            className={`filter-btn ${filter === f.value ? 'active' : ''}`}
            onClick={() => { setFilter(f.value); setVisibleCount(4); }}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="products-grid" id="productsGrid">
        {visible.map((p, i) => (
          <div className="product-card" key={p.id} style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="product-img-wrap">
              <div className="product-img-bg" style={{ background: p.color }}>
                <img
                  src={p.image}
                  alt={p.name}
                  className="product-actual-img"
                />
                <div className="product-img-glow" style={{ background: p.color, opacity: 0.5 }} />
              </div>
              {p.badge && (
                <span
                  className="product-badge"
                  style={{ background: p.badge === 'limited' ? 'var(--gold)' : p.badge === 'hot' ? 'var(--red)' : 'var(--purple)', color: p.badge === 'limited' ? 'var(--black)' : 'var(--white)' }}
                >
                  {p.badge.toUpperCase()}
                </span>
              )}
              <div className="product-actions">
                <button className="btn-add-cart" onClick={() => addToCart(p)}>
                  + ADD TO CART
                </button>
              </div>
            </div>

            <div className="product-info">
              <div className="product-char-tag">{p.char}</div>
              <div className="product-name">{p.name}</div>
              <div className="product-desc">{p.desc}</div>
              <div className="product-price-row">
                <div>
                  <span className="product-price">₹{p.price.toLocaleString()}</span>
                  {p.oldPrice && (
                    <span className="product-price-old">₹{p.oldPrice.toLocaleString()}</span>
                  )}
                </div>
                <div className="product-rating">{p.rating}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length > visibleCount && (
        <div className="load-more-wrap">
          <button className="btn btn-outline" onClick={() => setVisibleCount(v => v + 4)}>
            LOAD MORE DROPS
          </button>
        </div>
      )}

      <style jsx>{`
        .products { padding: 0 60px 80px; background: var(--black); }
        .filter-tabs {
          display: flex; justify-content: center; gap: 8px;
          padding: 0 20px 40px; flex-wrap: wrap;
        }
        .filter-btn {
          font-family: var(--font-display); font-size: 0.82rem;
          letter-spacing: 0.15em; padding: 8px 24px;
          border: 1px solid var(--border); border-radius: 2px;
          color: var(--grey); transition: var(--transition);
          background: transparent; font-weight: 600;
        }
        .filter-btn.active, .filter-btn:hover {
          background: var(--purple); border-color: var(--purple); color: var(--white);
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px; max-width: 1400px; margin: 0 auto;
        }
        .product-card {
          background: var(--dark2); border: 1px solid var(--border);
          border-radius: 4px; overflow: hidden;
          transition: var(--transition-slow); position: relative;
        }
        .product-card:hover {
          transform: translateY(-8px);
          border-color: rgba(123,47,255,0.5);
          box-shadow: 0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(123,47,255,0.1);
        }
        .product-img-wrap { position: relative; aspect-ratio: 3/3.5; overflow: hidden; background: var(--surface); }
        .product-img-bg {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          font-size: 5rem; transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
          position: relative;
        }
        .product-card:hover .product-img-bg { transform: scale(1.08); }
        .product-img-glow { position: absolute; inset: 0; opacity: 0; transition: opacity 0.4s; }
        .product-card:hover .product-img-glow { opacity: 1; }
        .product-actual-img {
          width: 80%; height: auto; object-fit: contain;
          max-height: 200px; z-index: 2; position: relative;
          transition: transform 0.3s ease;
        }
        .product-card:hover .product-actual-img { transform: scale(1.05); }
        .product-badge {
          position: absolute; top: 12px; left: 12px;
          font-family: var(--font-display); font-size: 0.62rem;
          letter-spacing: 0.15em; padding: 4px 10px;
          border-radius: 2px; z-index: 2; font-weight: 700;
        }
        .product-actions {
          position: absolute; bottom: -50px; left: 0; right: 0;
          padding: 0 16px; transition: bottom 0.3s cubic-bezier(0.16,1,0.3,1); z-index: 2;
        }
        .product-card:hover .product-actions { bottom: 12px; }
        .btn-add-cart {
          width: 100%; background: var(--purple); color: var(--white);
          font-family: var(--font-display); font-size: 0.82rem;
          letter-spacing: 0.15em; padding: 12px; border-radius: 2px;
          transition: var(--transition); font-weight: 700;
        }
        .btn-add-cart:hover { background: var(--purple-light); box-shadow: var(--glow-purple); }
        .product-info { padding: 16px 20px 20px; }
        .product-char-tag {
          font-family: var(--font-display); font-size: 0.62rem;
          letter-spacing: 0.25em; color: var(--purple); margin-bottom: 6px; font-weight: 700;
        }
        .product-name {
          font-family: var(--font-display); font-size: 1rem;
          letter-spacing: 0.08em; color: var(--white);
          margin-bottom: 4px; line-height: 1.2; font-weight: 700;
        }
        .product-desc { font-size: 0.78rem; color: var(--grey); margin-bottom: 14px; }
        .product-price-row { display: flex; align-items: center; justify-content: space-between; }
        .product-price {
          font-family: var(--font-display); font-size: 1.3rem;
          color: var(--white); letter-spacing: 0.05em; font-weight: 700;
        }
        .product-price-old {
          font-size: 0.82rem; color: var(--grey);
          text-decoration: line-through; margin-left: 8px;
        }
        .product-rating { font-size: 0.72rem; color: var(--gold); letter-spacing: 0.05em; }
        .load-more-wrap { text-align: center; padding: 40px 0 0; }
        @media (max-width: 900px) {
          .products { padding: 0 24px 60px; }
          .products-grid { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; }
        }
      `}</style>
    </section>
  );
}
