'use client';

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-pattern" />
        <div className="cursed-energy-bg" />
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="eyebrow-line" />
          <span>JUJUTSU KAISEN × RE:SET</span>
          <span className="eyebrow-line" />
        </div>

        <h1 className="hero-title">
          <span className="title-line" style={{ animationDelay: '0.1s' }}>WEAR THE</span>
          <span className="title-line accent" style={{ animationDelay: '0.25s' }}>CURSED</span>
          <span className="title-line" style={{ animationDelay: '0.4s' }}>ENERGY</span>
        </h1>

        <p className="hero-sub">Premium anime streetwear. Gojo-approved. Curse-resistant fabric.<br />Limited drops. Infinite technique.</p>
        <p className="hero-brand-note">RE:SET presents <strong>The Ultimate Void Edition</strong> : <strong>RE:SET</strong>.</p>

        <div className="hero-btns">
          <a href="#products" className="btn btn-primary"><span>SHOP NOW</span></a>
          <a href="#collection" className="btn btn-ghost">VIEW COLLECTION</a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">10K+</span>
            <span className="stat-label">Cursed Users</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">50+</span>
            <span className="stat-label">Products</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">S1</span>
            <span className="stat-label">Limited Season</span>
          </div>
        </div>
      </div>

      {/* Gojo Character SVG */}
      <div className="hero-char">
        <div className="char-glow" />
        <div className="char-svg-container">
          <GojoSVG />
        </div>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh; background: #000000;
          position: relative; display: flex; align-items: center;
          overflow: hidden; padding: 120px 60px 60px;
        }
        .hero-bg { position: absolute; inset: 0; z-index: 0; background: #000000; }
        .hero-pattern {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(123,47,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(123,47,255,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: patternDrift 20s linear infinite;
        }
        .cursed-energy-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 80% at 70% 50%, rgba(123,47,255,0.1) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(68,0,187,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 30% 30% at 80% 10%, rgba(155,109,255,0.06) 0%, transparent 50%);
        }
        .hero-content { position: relative; z-index: 2; max-width: 650px; }
        .hero-eyebrow {
          display: flex; align-items: center; gap: 16px; margin-bottom: 24px;
          font-family: var(--font-display); font-size: 0.72rem;
          letter-spacing: 0.3em; color: var(--purple-light); font-weight: 600;
        }
        .eyebrow-line { display: block; height: 1px; width: 40px; background: var(--purple); opacity: 0.6; }
        .hero-title { display: flex; flex-direction: column; margin-bottom: 24px; }
        .title-line {
          font-family: var(--font-display);
          font-size: clamp(4rem, 8vw, 7rem); line-height: 0.9;
          letter-spacing: 0.05em; color: var(--white); display: block;
          animation: titleReveal 0.8s cubic-bezier(0.16,1,0.3,1) both;
          font-weight: 700;
        }
        .title-line.accent {
          color: transparent; -webkit-text-stroke: 2px var(--purple);
          text-shadow: var(--glow-purple);
        }
        .hero-sub {
          color: var(--grey-light); font-size: 0.95rem; line-height: 1.8;
          margin-bottom: 12px; animation: fadeUp 0.8s 0.5s cubic-bezier(0.16,1,0.3,1) both;
        }
        .hero-brand-note {
          font-size: 0.8rem; color: var(--grey); margin-bottom: 36px;
          animation: fadeUp 0.8s 0.58s cubic-bezier(0.16,1,0.3,1) both;
        }
        .hero-brand-note :global(strong) { color: var(--purple-light); }
        .hero-btns {
          display: flex; gap: 16px; margin-bottom: 60px;
          animation: fadeUp 0.8s 0.65s cubic-bezier(0.16,1,0.3,1) both;
        }
        .hero-stats {
          display: flex; gap: 0; align-items: center;
          animation: fadeUp 0.8s 0.8s cubic-bezier(0.16,1,0.3,1) both;
        }
        .stat { padding: 0 30px; }
        .stat:first-child { padding-left: 0; }
        .stat-num {
          display: block; font-family: var(--font-display);
          font-size: 2rem; color: var(--purple-light); letter-spacing: 0.05em; font-weight: 700;
        }
        .stat-label {
          display: block; font-size: 0.72rem; letter-spacing: 0.15em;
          color: var(--grey); text-transform: uppercase;
        }
        .stat-divider { width: 1px; height: 40px; background: var(--border); }
        .hero-char {
          position: absolute; right: 5%; top: 50%; transform: translateY(-50%);
          z-index: 1; width: min(420px, 42vw);
          animation: charFloat 6s ease-in-out infinite, fadeUp 1s 0.3s both;
        }
        .char-glow {
          position: absolute; inset: -10%;
          background: radial-gradient(ellipse at center, rgba(123,47,255,0.25) 0%, transparent 70%);
          animation: glowPulse 3s ease-in-out infinite;
        }
        .char-svg-container { position: relative; }
        .scroll-indicator {
          position: absolute; bottom: 40px; left: 60px;
          display: flex; align-items: center; gap: 12px; z-index: 2;
          font-family: var(--font-display); font-size: 0.68rem;
          letter-spacing: 0.3em; color: var(--grey);
          animation: fadeUp 0.8s 1s both;
        }
        .scroll-line {
          width: 60px; height: 1px;
          background: linear-gradient(to right, var(--grey), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @media (max-width: 900px) {
          .hero { padding: 100px 24px 60px; }
          .hero-char { display: none; }
          .scroll-indicator { left: 24px; }
          .hero-btns { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}

function GojoSVG() {
  return (
    <svg viewBox="0 0 420 660" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 0 40px rgba(123,47,255,0.45)) drop-shadow(0 0 80px rgba(123,47,255,0.2))' }}>
      <defs>
        <radialGradient id="gojoSkin" cx="48%" cy="35%" r="58%">
          <stop offset="0%" stopColor="#fdf2e4"/>
          <stop offset="55%" stopColor="#f5e2cc"/>
          <stop offset="100%" stopColor="#e8d0b5"/>
        </radialGradient>
        <linearGradient id="gojoHair" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="40%" stopColor="#e8ecf8"/>
          <stop offset="100%" stopColor="#c0c8e0"/>
        </linearGradient>
        <radialGradient id="gojoFaceShadow" cx="50%" cy="80%" r="55%">
          <stop offset="0%" stopColor="#d4b898" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#d4b898" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="gojoUniform" x1="0%" y1="0%" x2="40%" y2="100%">
          <stop offset="0%" stopColor="#ecebf5"/>
          <stop offset="50%" stopColor="#dddcec"/>
          <stop offset="100%" stopColor="#c8c6d8"/>
        </linearGradient>
        <linearGradient id="gojoUniformInner" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#18181e"/>
          <stop offset="100%" stopColor="#0c0c12"/>
        </linearGradient>
        <radialGradient id="gojoAuraMain" cx="50%" cy="55%" r="50%">
          <stop offset="0%" stopColor="#7B2FFF" stopOpacity="0.28"/>
          <stop offset="50%" stopColor="#5500CC" stopOpacity="0.12"/>
          <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="sixEyeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e0c8ff"/>
          <stop offset="40%" stopColor="#a060ff"/>
          <stop offset="100%" stopColor="#5500cc"/>
        </radialGradient>
        <linearGradient id="blindfoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a35"/>
          <stop offset="100%" stopColor="#0a0a1a"/>
        </linearGradient>
        <filter id="gf1" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="gf2" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="9" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feOffset dx="2" dy="4" result="offset"/>
          <feMerge><feMergeNode in="offset"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <ellipse cx="210" cy="370" rx="200" ry="290" fill="url(#gojoAuraMain)" style={{ animation: 'auraRing 3s ease-in-out infinite' }}/>
      <g opacity="0.15" fill="none" stroke="#9B6DFF" strokeWidth="1.5" filter="url(#gf1)">
        <path d="M60,310 C60,285 84,272 102,284 C120,296 120,324 138,336 C156,348 180,335 180,310 C180,285 156,272 138,284 C120,296 120,324 102,336 C84,348 60,335 60,310Z"/>
        <path d="M238,195 C238,178 251,170 261,176 C271,182 271,196 281,202 C291,208 304,200 304,183 C304,166 291,158 281,164 C271,170 271,184 261,190 C251,196 238,188 238,181Z"/>
      </g>
      {/* Body */}
      <path d="M105,415 L76,625 L344,625 L315,415 Z" fill="url(#gojoUniform)" stroke="#b8b6cc" strokeWidth="0.8"/>
      <path d="M270,415 L300,625 L344,625 L315,415 Z" fill="#d0cede" opacity="0.4"/>
      <path d="M105,415 L76,625 L110,625 L140,415 Z" fill="#d0cede" opacity="0.4"/>
      <path d="M160,415 L152,612 L210,598 L268,612 L260,415 Z" fill="url(#gojoUniformInner)"/>
      <path d="M170,415 L210,475 L250,415" fill="none" stroke="#c5c4d5" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M118,445 L104,600" stroke="#c0bece" strokeWidth="0.8" opacity="0.5"/>
      <path d="M302,445 L318,600" stroke="#c0bece" strokeWidth="0.8" opacity="0.5"/>
      <rect x="112" y="460" width="196" height="14" rx="2" fill="#c8c6d6" opacity="0.5"/>
      {/* Arms */}
      <path d="M105,415 C90,438 72,468 58,520 L85,530 C96,484 112,454 128,428 Z" fill="url(#gojoUniform)" stroke="#b8b6cc" strokeWidth="0.8"/>
      <path d="M315,415 C330,438 348,468 362,520 L335,530 C324,484 308,454 292,428 Z" fill="url(#gojoUniform)" stroke="#b8b6cc" strokeWidth="0.8"/>
      <ellipse cx="72" cy="538" rx="17" ry="22" fill="url(#gojoSkin)" filter="url(#softShadow)"/>
      <ellipse cx="348" cy="538" rx="17" ry="22" fill="url(#gojoSkin)" filter="url(#softShadow)"/>
      {/* Neck */}
      <path d="M192,352 L192,418 C192,418 200,424 210,424 C220,424 228,418 228,418 L228,352 Z" fill="url(#gojoSkin)"/>
      {/* Head */}
      <path d="M135,265 C130,220 138,175 155,155 C168,140 185,130 210,128 C235,130 252,140 265,155 C282,175 290,220 285,265 C282,295 278,318 268,335 C256,350 244,360 225,368 C218,372 210,374 202,372 C194,374 188,372 182,368 C162,360 150,350 140,335 C130,318 126,295 135,265 Z" fill="url(#gojoSkin)"/>
      <ellipse cx="210" cy="340" rx="65" ry="30" fill="url(#gojoFaceShadow)"/>
      {/* Hair */}
      <path d="M133,255 C126,200 132,158 148,136 C160,120 178,108 210,105 C242,108 260,120 272,136 C288,158 294,200 287,255 C280,218 268,192 248,178 C234,168 222,164 210,163 C198,164 186,168 172,178 C152,192 140,218 133,255 Z" fill="url(#gojoHair)"/>
      <path d="M133,255 C124,240 118,220 116,195 C114,172 118,152 128,138 C124,152 122,170 124,190 C126,210 130,232 133,255 Z" fill="#e8ecf8"/>
      <path d="M287,255 C296,240 302,220 304,195 C306,172 302,152 292,138 C296,152 298,170 296,190 C294,210 290,232 287,255 Z" fill="#e8ecf8"/>
      <path d="M168,172 C165,160 162,148 165,132 C168,118 175,108 185,103" fill="none" stroke="#d8e0f0" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
      <path d="M248,172 C252,160 256,148 252,133 C249,120 242,110 232,105" fill="none" stroke="#d8e0f0" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
      <path d="M175,140 C180,130 190,122 202,118" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Blindfold */}
      <path d="M136,258 C136,252 140,247 148,245 L272,245 C280,245 284,250 284,256 L284,274 C284,280 280,285 272,285 L148,285 C140,285 136,280 136,274 Z" fill="url(#blindfoldGrad)"/>
      <path d="M170,248 L168,282" stroke="rgba(25,25,50,0.35)" strokeWidth="0.8"/>
      <path d="M210,246 L210,284" stroke="rgba(25,25,50,0.35)" strokeWidth="0.8"/>
      <path d="M250,248 L252,282" stroke="rgba(25,25,50,0.35)" strokeWidth="0.8"/>
      <path d="M280,258 L304,250 L300,272 L280,272 Z" fill="#121228" stroke="#1e1e3a" strokeWidth="0.5"/>
      <path d="M300,252 C308,246 316,248 320,256" fill="none" stroke="#181828" strokeWidth="2" strokeLinecap="round"/>
      <path d="M300,270 C308,276 316,274 320,266" fill="none" stroke="#181828" strokeWidth="2" strokeLinecap="round"/>
      {/* Six Eyes */}
      <ellipse cx="172" cy="265" rx="22" ry="14" fill="#8855ff" opacity="0.18" style={{ animation: 'eyePulse 2.5s ease-in-out infinite' }} filter="url(#gf2)"/>
      <ellipse cx="172" cy="265" rx="15" ry="9" fill="url(#sixEyeGlow)" opacity="0.75" style={{ animation: 'eyePulse 2.5s ease-in-out infinite' }} filter="url(#gf1)"/>
      <ellipse cx="172" cy="265" rx="4" ry="7" fill="#220066" opacity="0.8"/>
      <ellipse cx="248" cy="265" rx="22" ry="14" fill="#8855ff" opacity="0.18" style={{ animation: 'eyePulse 2.5s ease-in-out infinite' }} filter="url(#gf2)"/>
      <ellipse cx="248" cy="265" rx="15" ry="9" fill="url(#sixEyeGlow)" opacity="0.75" style={{ animation: 'eyePulse 2.5s ease-in-out infinite' }} filter="url(#gf1)"/>
      <ellipse cx="248" cy="265" rx="4" ry="7" fill="#220066" opacity="0.8"/>
      {/* Nose & Mouth */}
      <path d="M204,310 C206,314 208,316 210,316 C212,316 214,314 216,310" fill="none" stroke="#c8a888" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M182,336 C190,350 202,356 210,355 C218,356 230,350 238,336" fill="none" stroke="#b88870" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Particles */}
      <g filter="url(#gf2)">
        <circle cx="55" cy="295" r="5" fill="#7B2FFF" opacity="0.9"/>
        <circle cx="368" cy="310" r="7" fill="#5522FF" opacity="0.7"/>
        <circle cx="66" cy="450" r="4" fill="#9B6DFF" opacity="0.8"/>
        <circle cx="210" cy="88" r="5" fill="#9B6DFF" opacity="0.7"/>
        <circle cx="285" cy="115" r="4" fill="#7B2FFF" opacity="0.8"/>
      </g>
      {/* Domain rings */}
      <ellipse cx="210" cy="592" rx="50" ry="12" fill="none" stroke="#7B2FFF" strokeWidth="0.8" opacity="0.25"/>
      <ellipse cx="210" cy="592" rx="35" ry="8" fill="none" stroke="#9B6DFF" strokeWidth="0.5" opacity="0.18"/>
    </svg>
  );
}
