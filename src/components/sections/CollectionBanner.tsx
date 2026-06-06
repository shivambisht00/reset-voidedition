'use client';

import { useEffect } from 'react';

export default function CollectionBanner() {
  useEffect(() => {
    const container = document.getElementById('collectionParticles');
    if (!container || container.children.length > 0) return;
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      const size = Math.random() * 4 + 1;
      const x = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 5 + 4;
      const isRed = Math.random() > 0.5;
      p.style.cssText = `
        position:absolute;width:${size}px;height:${size}px;border-radius:50%;
        background:${isRed ? 'rgba(255,34,68,0.6)' : 'rgba(204,0,34,0.4)'};
        left:${x}%;bottom:${Math.random() * 40}%;
        animation:particleFloat ${duration}s ${delay}s ease-in-out infinite alternate;
        pointer-events:none;
        box-shadow:0 0 ${size*3}px ${isRed ? 'rgba(255,34,68,0.4)' : 'rgba(204,0,34,0.3)'};
      `;
      container.appendChild(p);
    }
  }, []);

  return (
    <section className="collection-banner" id="collection">
      <div className="collection-content">
        <div className="collection-left">
          <span className="collection-tag">SEASON 1 DROP</span>
          <h2>INFINITE VOID<br /><span>CAPSULE</span></h2>
          <p>The most powerful collection in existence. Inspired by Gojo&apos;s Domain Expansion — Infinite Void. Limited pieces. Unlimited energy.</p>
          <a href="#products" className="btn btn-primary">EXPLORE NOW</a>
        </div>
        <div className="collection-right">
          <div className="sukuna-art">
            <SukunaSVG />
          </div>
        </div>
      </div>
      <div className="collection-particles" id="collectionParticles" />

      <style jsx>{`
        .collection-banner {
          position: relative; min-height: 600px; background: #050508;
          border-top: 1px solid var(--border-red); border-bottom: 1px solid var(--border-red);
          overflow: hidden; display: flex; align-items: center;
        }
        .collection-content {
          display: flex; align-items: center; width: 100%; max-width: 1400px;
          margin: 0 auto; padding: 80px 60px; gap: 60px; position: relative; z-index: 2;
        }
        .collection-left { flex: 1; }
        .collection-tag {
          font-family: var(--font-display); font-size: 0.72rem;
          letter-spacing: 0.4em; color: var(--red-light);
          display: block; margin-bottom: 20px; font-weight: 700;
        }
        .collection-left h2 {
          font-family: var(--font-display);
          font-size: clamp(3rem, 6vw, 5.5rem); line-height: 0.9;
          letter-spacing: 0.08em; color: var(--white); margin-bottom: 24px; font-weight: 700;
        }
        .collection-left h2 span { color: var(--red-light); text-shadow: var(--glow-red); }
        .collection-left p {
          color: var(--grey-light); font-size: 0.95rem; line-height: 1.7;
          margin-bottom: 36px; max-width: 420px;
        }
        .collection-right { flex: 1; display: flex; justify-content: center; align-items: center; }
        .sukuna-art {
          width: min(360px, 42vw);
          animation: charFloat 5s ease-in-out infinite 1s;
        }
        .collection-particles { position: absolute; inset: 0; pointer-events: none; }
        @media (max-width: 900px) {
          .collection-content { flex-direction: column; padding: 60px 24px; text-align: center; }
          .collection-right { order: -1; }
          .sukuna-art { width: 240px; }
          .collection-left p { margin: 0 auto 30px; }
        }
      `}</style>
    </section>
  );
}

function SukunaSVG() {
  return (
    <svg viewBox="0 0 380 530" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', filter: 'drop-shadow(0 0 40px rgba(204,0,34,0.5)) drop-shadow(0 0 80px rgba(204,0,34,0.25))' }}>
      <defs>
        <radialGradient id="sSkin" cx="48%" cy="32%" r="60%">
          <stop offset="0%" stopColor="#f0d4b8"/>
          <stop offset="55%" stopColor="#e4c4a0"/>
          <stop offset="100%" stopColor="#d4ae88"/>
        </radialGradient>
        <linearGradient id="sHair" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#1a0a0c"/>
          <stop offset="50%" stopColor="#2c1216"/>
          <stop offset="100%" stopColor="#0d0508"/>
        </linearGradient>
        <linearGradient id="sRobe" x1="0%" y1="0%" x2="30%" y2="100%">
          <stop offset="0%" stopColor="#100808"/>
          <stop offset="50%" stopColor="#0a0404"/>
          <stop offset="100%" stopColor="#060202"/>
        </linearGradient>
        <linearGradient id="sSash" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6b0010"/>
          <stop offset="50%" stopColor="#990018"/>
          <stop offset="100%" stopColor="#6b0010"/>
        </linearGradient>
        <radialGradient id="sAura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#CC0022" stopOpacity="0.3"/>
          <stop offset="60%" stopColor="#880010" stopOpacity="0.1"/>
          <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="sEyeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff6060"/>
          <stop offset="40%" stopColor="#dd1130"/>
          <stop offset="100%" stopColor="#880010"/>
        </radialGradient>
        <filter id="sgf1" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="sgf2" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="9" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="sshadow">
          <feGaussianBlur stdDeviation="2.5" result="blur"/>
          <feOffset dx="1" dy="3" result="offset"/>
          <feMerge><feMergeNode in="offset"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <ellipse cx="190" cy="295" rx="178" ry="245" fill="url(#sAura)" style={{ animation: 'auraRing 3s ease-in-out infinite' }}/>
      <circle cx="190" cy="295" r="165" fill="none" stroke="#CC0022" strokeWidth="0.6" opacity="0.12"/>
      <circle cx="190" cy="295" r="140" fill="none" stroke="#CC0022" strokeWidth="0.4" opacity="0.08"/>
      {/* Robe */}
      <path d="M100,390 L70,510 L310,510 L280,390 Z" fill="url(#sRobe)" stroke="#200808" strokeWidth="0.8"/>
      <path d="M112,395 L88,505 L120,505 L148,395 Z" fill="#160a0a" opacity="0.6"/>
      <path d="M268,395 L292,505 L260,505 L232,395 Z" fill="#160a0a" opacity="0.6"/>
      <path d="M155,390 L148,504 L190,492 L232,504 L225,390 Z" fill="#0a0202"/>
      <path d="M165,390 L190,432 L215,390" fill="none" stroke="#220a0a" strokeWidth="2" strokeLinejoin="round"/>
      <rect x="105" y="398" width="170" height="20" rx="3" fill="url(#sSash)" opacity="0.9"/>
      <rect x="180" y="396" width="20" height="24" rx="2" fill="#880018" opacity="0.8"/>
      {/* Arms */}
      <path d="M100,390 C86,410 66,445 50,490 L78,498 C90,460 108,428 122,408 Z" fill="url(#sRobe)" stroke="#1c0808" strokeWidth="0.8"/>
      <path d="M280,390 C294,410 314,445 330,490 L302,498 C290,460 272,428 258,408 Z" fill="url(#sRobe)" stroke="#1c0808" strokeWidth="0.8"/>
      <path d="M100,400 C80,425 55,462 38,495" fill="none" stroke="#1a0808" strokeWidth="16" strokeLinecap="round" opacity="0.55"/>
      <path d="M280,400 C300,425 325,462 342,495" fill="none" stroke="#1a0808" strokeWidth="16" strokeLinecap="round" opacity="0.55"/>
      {/* Curse marks on arms */}
      <path d="M68,450 L76,438" stroke="#8B0000" strokeWidth="2" strokeLinecap="round" style={{ animation: 'curseFlicker 4s ease-in-out infinite' }}/>
      <path d="M312,450 L304,438" stroke="#8B0000" strokeWidth="2" strokeLinecap="round" style={{ animation: 'curseFlicker 4s ease-in-out infinite' }}/>
      <ellipse cx="62" cy="504" rx="18" ry="23" fill="url(#sSkin)" filter="url(#sshadow)"/>
      <ellipse cx="318" cy="504" rx="18" ry="23" fill="url(#sSkin)" filter="url(#sshadow)"/>
      {/* Neck */}
      <path d="M174,368 L174,395 C174,395 182,400 190,400 C198,400 206,395 206,395 L206,368 Z" fill="url(#sSkin)"/>
      <path d="M174,380 C178,374 182,378 186,374 C190,378 194,374 198,378 C202,374 206,380" fill="none" stroke="#8B0000" strokeWidth="1.8" strokeLinecap="round" style={{ animation: 'curseFlicker 4s ease-in-out infinite' }}/>
      {/* Head */}
      <path d="M120,265 C116,222 124,178 142,158 C156,142 170,132 190,130 C210,132 224,142 238,158 C256,178 264,222 260,265 C257,292 253,315 242,330 C232,344 218,356 206,363 C200,366 190,368 180,366 C168,364 154,356 142,342 C132,328 124,296 120,265 Z" fill="url(#sSkin)"/>
      {/* Hair */}
      <path d="M118,258 C112,205 120,160 138,140 C152,124 168,115 190,113 C212,115 228,124 242,140 C260,160 268,205 262,258 C256,225 244,200 225,186 C212,178 200,175 190,174 C180,175 168,178 155,186 C136,200 124,225 118,258 Z" fill="url(#sHair)"/>
      <path d="M118,258 C108,282 102,308 95,355" stroke="#1e0e10" strokeWidth="14" fill="none" strokeLinecap="round"/>
      <path d="M262,258 C272,282 278,308 285,355" stroke="#1e0e10" strokeWidth="14" fill="none" strokeLinecap="round"/>
      <path d="M158,180 C154,165 150,148 153,130 C156,116 163,106 172,100" fill="none" stroke="#2a1218" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
      <path d="M218,180 C222,165 226,148 222,130 C219,118 212,108 204,103" fill="none" stroke="#2a1218" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
      {/* Facial tattoos */}
      <path d="M128,250 L144,236" stroke="#8B0000" strokeWidth="2.8" strokeLinecap="round" style={{ animation: 'curseFlicker 4s ease-in-out infinite' }}/>
      <path d="M252,250 L236,236" stroke="#8B0000" strokeWidth="2.8" strokeLinecap="round" style={{ animation: 'curseFlicker 4s ease-in-out infinite' }}/>
      <path d="M122,270 L136,262" stroke="#8B0000" strokeWidth="2" strokeLinecap="round" style={{ animation: 'curseFlicker 4s ease-in-out infinite' }} opacity="0.8"/>
      <path d="M258,270 L244,262" stroke="#8B0000" strokeWidth="2" strokeLinecap="round" style={{ animation: 'curseFlicker 4s ease-in-out infinite' }} opacity="0.8"/>
      <path d="M174,205 L182,196 L190,192 L198,196 L206,205" fill="none" stroke="#8B0000" strokeWidth="2" strokeLinejoin="round" style={{ animation: 'curseFlicker 4s ease-in-out infinite' }} opacity="0.85"/>
      {/* Four eyes */}
      <ellipse cx="162" cy="255" rx="20" ry="14" fill="#f0e8e0"/>
      <ellipse cx="218" cy="255" rx="20" ry="14" fill="#f0e8e0"/>
      <ellipse cx="162" cy="255" rx="13" ry="11" fill="#CC0011"/>
      <ellipse cx="218" cy="255" rx="13" ry="11" fill="#CC0011"/>
      <ellipse cx="162" cy="255" rx="4" ry="9" fill="#1a0002"/>
      <ellipse cx="218" cy="255" rx="4" ry="9" fill="#1a0002"/>
      <ellipse cx="162" cy="255" rx="20" ry="14" fill="none" stroke="#1a0002" strokeWidth="1.2"/>
      <ellipse cx="218" cy="255" rx="20" ry="14" fill="none" stroke="#1a0002" strokeWidth="1.2"/>
      <ellipse cx="162" cy="255" rx="22" ry="16" fill="#CC0011" opacity="0.2" filter="url(#sgf1)"/>
      <ellipse cx="218" cy="255" rx="22" ry="16" fill="#CC0011" opacity="0.2" filter="url(#sgf1)"/>
      <path d="M142,248 C150,244 158,243 168,244 C176,245 182,248 182,251" fill="none" stroke="#0d0002" strokeWidth="2" strokeLinecap="round"/>
      <path d="M198,248 C206,244 214,243 224,244 C232,245 238,248 238,251" fill="none" stroke="#0d0002" strokeWidth="2" strokeLinecap="round"/>
      {/* Lower eyes */}
      <ellipse cx="159" cy="273" rx="13" ry="9" fill="#f0e8e0"/>
      <ellipse cx="221" cy="273" rx="13" ry="9" fill="#f0e8e0"/>
      <ellipse cx="159" cy="273" rx="9" ry="7" fill="#AA0000"/>
      <ellipse cx="221" cy="273" rx="9" ry="7" fill="#AA0000"/>
      <ellipse cx="159" cy="273" rx="3" ry="5.5" fill="#180000"/>
      <ellipse cx="221" cy="273" rx="3" ry="5.5" fill="#180000"/>
      <ellipse cx="159" cy="273" rx="13" ry="9" fill="none" stroke="#200004" strokeWidth="1"/>
      <ellipse cx="221" cy="273" rx="13" ry="9" fill="none" stroke="#200004" strokeWidth="1"/>
      {/* Nose & Smirk */}
      <path d="M184,310 C186,314 188,316 190,316 C192,316 194,314 196,310" fill="none" stroke="#c09870" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M164,332 C172,342 182,347 190,346 C202,347 214,340 222,330" fill="none" stroke="#6a3030" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M220,330 C222,328 224,326 224,322" fill="none" stroke="#6a3030" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      {/* Particles */}
      <g filter="url(#sgf2)">
        <circle cx="42" cy="300" r="6" fill="#FF2244" opacity="0.8"/>
        <circle cx="338" cy="325" r="8" fill="#CC0022" opacity="0.6"/>
        <circle cx="190" cy="88" r="5" fill="#FF2244" opacity="0.6"/>
        <circle cx="110" cy="148" r="3.5" fill="#FF4466" opacity="0.7"/>
        <circle cx="270" cy="135" r="4.5" fill="#CC0022" opacity="0.7"/>
      </g>
      {/* Domain rings */}
      <ellipse cx="190" cy="500" rx="48" ry="10" fill="none" stroke="#CC0022" strokeWidth="0.7" opacity="0.2"/>
      <ellipse cx="190" cy="500" rx="33" ry="7" fill="none" stroke="#FF2244" strokeWidth="0.4" opacity="0.15"/>
    </svg>
  );
}
