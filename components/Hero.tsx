'use client';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title animate-in">
          DOMAIN<br />EXPANSION
        </h1>
        <p className="hero-subtitle animate-in" style={{ animationDelay: '0.2s' }}>
          VOID EDITION COLLECTION 2024
        </p>
        <div className="hero-tags animate-in" style={{ animationDelay: '0.4s' }}>
          <span>JUJUTSU SORCERY</span>
          <span>CURSED ENERGY</span>
          <span>VOID REVERB</span>
        </div>
        <a 
            href="#products" 
            className="hero-btn animate-in" 
            style={{ animationDelay: '0.6s' }}
        >
          VIEW THE COLLECTION
          <span className="btn-glow"></span>
        </a>
      </div>
      <div className="hero-eye-pulse"></div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>SCROLL DOWN</span>
      </div>
    </section>
  );
}
