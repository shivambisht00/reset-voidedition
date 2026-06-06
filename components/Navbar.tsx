'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavbarProps {
  onOpenCart: () => void;
  cartCount: number;
}

export default function Navbar({ onOpenCart, cartCount }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-logo">
        <span className="logo-kanji">呪</span>
        <span className="logo-text">RE:SET<br /><span>VOID EDITION</span></span>
      </div>
      
      <ul className="nav-links">
        <li><Link href="#home" className="nav-link">Home</Link></li>
        <li><Link href="#products" className="nav-link">Shop</Link></li>
        <li><Link href="#collection" className="nav-link">Collection</Link></li>
        <li><Link href="#about" className="nav-link">About</Link></li>
      </ul>

      <div className="nav-right">
        <button className="cart-btn" onClick={onOpenCart}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
        <button 
            className="hamburger" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link href="#products" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
        <Link href="#collection" onClick={() => setIsMobileMenuOpen(false)}>Collection</Link>
        <Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
      </div>
    </nav>
  );
}
