'use client';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-pattern"></div>
        <div className="cursed-energy-bg"></div>
      </div>
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="eyebrow-line"></span>
          <span>JUJUTSU KAISEN × RE:SET</span>
          <span className="eyebrow-line"></span>
        </div>
        <h1 className="hero-title">
          <span className="title-line" data-text="WEAR THE">WEAR THE</span>
          <span className="title-line accent" data-text="CURSED">CURSED</span>
          <span className="title-line" data-text="ENERGY">ENERGY</span>
        </h1>
        <p className="hero-sub">Premium anime streetwear. Gojo-approved. Curse-resistant fabric.<br/>Limited drops. Infinite technique.</p>
        <p className="hero-brand-note">RE:SET presents <strong>The Ultimate Void Edition</strong> : <strong>RE:SET</strong>.</p>
        <div className="hero-btns">
          <a href="#products" className="btn btn-primary"><span>SHOP NOW</span><i className="btn-glow"></i></a>
          <a href="#collection" className="btn btn-ghost">VIEW COLLECTION</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">10K+</span>
            <span className="stat-label">Cursed Users</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">50+</span>
            <span className="stat-label">Products</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">4.9/5</span>
            <span className="stat-label">Rating</span>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="mouse"></div>
        <span>SCROLL</span>
      </div>
    </section>
  );
}
