'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalCount, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-logo">
        <span className="logo-kanji">呪</span>
        <span className="logo-text">
          RE:SET<br /><span>VOID EDITION</span>
        </span>
      </div>

      <ul className="nav-links">
        {['home', 'products', 'collection', 'about'].map(link => (
          <li key={link}>
            <a href={`#${link}`} className="nav-link">
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <button className="cart-btn" id="cartBtn" onClick={openCart} aria-label="Open cart">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span className="cart-count">{totalCount}</span>
        </button>

        <button
          className="hamburger"
          id="hamburger"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileMenu">
        {['home', 'products', 'collection', 'about'].map(link => (
          <a key={link} href={`#${link}`} onClick={() => setMenuOpen(false)}>
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>

      <style jsx>{`
        .navbar {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 500;
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 60px;
          transition: var(--transition);
        }
        .navbar.scrolled {
          background: rgba(0,0,0,0.97);
          backdrop-filter: blur(20px);
          padding: 12px 60px;
          border-bottom: 1px solid var(--border);
        }
        .nav-logo { display: flex; align-items: center; gap: 12px; }
        .logo-kanji {
          font-family: var(--font-jp);
          font-size: 2rem; color: var(--purple);
          line-height: 1; text-shadow: var(--glow-purple);
        }
        .logo-text {
          font-family: var(--font-display);
          font-size: 0.9rem; letter-spacing: 0.2em;
          line-height: 1.2; color: var(--white); font-weight: 700;
        }
        .logo-text span { color: var(--purple); }
        .nav-links { display: flex; gap: 40px; align-items: center; }
        .nav-link {
          font-family: var(--font-display);
          font-size: 0.9rem; letter-spacing: 0.15em;
          color: var(--grey-light); transition: var(--transition);
          position: relative; font-weight: 600;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: -4px; left: 0; right: 0;
          height: 1px; background: var(--purple);
          transform: scaleX(0); transform-origin: left; transition: var(--transition);
        }
        .nav-link:hover { color: var(--white); }
        .nav-link:hover::after { transform: scaleX(1); }
        .nav-right { display: flex; align-items: center; gap: 20px; }
        .cart-btn {
          position: relative; width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid var(--border); border-radius: 50%;
          color: var(--white); transition: var(--transition);
        }
        .cart-btn svg { width: 18px; height: 18px; }
        .cart-btn:hover { border-color: var(--purple); box-shadow: var(--glow-purple); }
        .cart-count {
          position: absolute; top: -5px; right: -5px;
          width: 18px; height: 18px; background: var(--purple);
          border-radius: 50%; font-size: 0.65rem;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display);
        }
        .hamburger {
          display: none; flex-direction: column; gap: 5px; width: 28px;
        }
        .hamburger span { display: block; height: 2px; background: var(--white); transition: var(--transition); }
        .mobile-menu {
          display: none; position: absolute; top: 100%; left: 0; right: 0;
          background: rgba(0,0,0,0.98); padding: 20px 30px;
          border-bottom: 1px solid var(--border);
          flex-direction: column; gap: 20px;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          font-family: var(--font-display); font-size: 1.2rem;
          letter-spacing: 0.1em; color: var(--grey-light); transition: var(--transition);
        }
        .mobile-menu a:hover { color: var(--purple); }
        @media (max-width: 900px) {
          .navbar { padding: 16px 24px; }
          .navbar.scrolled { padding: 10px 24px; }
          .nav-links { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>
    </nav>
  );
}
