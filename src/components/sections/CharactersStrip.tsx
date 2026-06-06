const characters = [
  {
    id: 'gojo',
    name: 'GOJO SATORU',
    sub: 'Infinite Collection',
    tag: 'Special Grade',
    tagColor: 'purple',
    kanji: '五条',
    tagBg: 'rgba(123,47,255,0.2)',
    tagFg: 'var(--purple-light)',
    tagBorder: 'rgba(123,47,255,0.3)',
    borderHover: 'rgba(123,47,255,0.4)',
    cardBg: 'radial-gradient(ellipse at bottom, rgba(123,47,255,0.08) 0%, transparent 70%)',
    strokeColor: '#7B2FFF',
    svgBg1: '#0d0d1a', svgBg2: '#050510',
    hairGrad1: '#ffffff', hairGrad2: '#cad0e6',
    eyeColor: '#a370ff', faceColor: '#fcf0e3', mouthColor: '#ba7b70',
  },
  {
    id: 'sukuna',
    name: 'RYOMEN SUKUNA',
    sub: 'King of Curses',
    tag: 'Special Grade',
    tagColor: 'red',
    kanji: '宿儺',
    tagBg: 'rgba(204,0,34,0.15)',
    tagFg: '#FF2244',
    tagBorder: 'rgba(204,0,34,0.3)',
    borderHover: 'rgba(204,0,34,0.4)',
    cardBg: 'radial-gradient(ellipse at bottom, rgba(204,0,34,0.1) 0%, transparent 70%)',
    strokeColor: '#CC0022',
    svgBg1: '#1a0008', svgBg2: '#080004',
    hairGrad1: '#3b1b22', hairGrad2: '#1c0a0d',
    eyeColor: '#ff2233', faceColor: '#eccbb0', mouthColor: '#6b0211',
  },
  {
    id: 'yuji',
    name: 'YUJI ITADORI',
    sub: 'Divergent Fist',
    tag: 'Grade 1',
    tagBg: 'rgba(200,80,0,0.15)',
    tagFg: '#FF8833',
    tagBorder: 'rgba(200,80,0,0.3)',
    borderHover: 'rgba(200,80,0,0.4)',
    cardBg: 'radial-gradient(ellipse at bottom, rgba(200,80,0,0.1) 0%, transparent 70%)',
    kanji: '虎杖',
    strokeColor: '#FF6600',
    svgBg1: '#241100', svgBg2: '#0f0700',
    hairGrad1: '#ff94b8', hairGrad2: '#bf5475',
    eyeColor: '#543111', faceColor: '#f7d4b2', mouthColor: '#8a5541',
  },
  {
    id: 'nobara',
    name: 'NOBARA KUGISAKI',
    sub: 'Straw Doll Technique',
    tag: 'Grade 3',
    tagBg: 'rgba(255,80,130,0.15)',
    tagFg: '#FF6699',
    tagBorder: 'rgba(255,80,130,0.3)',
    borderHover: 'rgba(255,80,130,0.4)',
    cardBg: 'radial-gradient(ellipse at bottom, rgba(255,80,130,0.1) 0%, transparent 70%)',
    kanji: '釘崎',
    strokeColor: '#FF6699',
    svgBg1: '#240a1d', svgBg2: '#0f020b',
    hairGrad1: '#d49b46', hairGrad2: '#8c5e1c',
    eyeColor: '#945816', faceColor: '#fae6d4', mouthColor: '#a16254',
  },
  {
    id: 'megumi',
    name: 'FUSHIGURO MEGUMI',
    sub: 'Ten Shadows',
    tag: 'Grade 2',
    tagBg: 'rgba(0,85,238,0.15)',
    tagFg: '#4488FF',
    tagBorder: 'rgba(0,85,238,0.3)',
    borderHover: 'rgba(0,85,238,0.4)',
    cardBg: 'radial-gradient(ellipse at bottom, rgba(0,85,238,0.1) 0%, transparent 70%)',
    kanji: '伏黒',
    strokeColor: '#0066FF',
    svgBg1: '#001126', svgBg2: '#00060f',
    hairGrad1: '#1c2430', hairGrad2: '#090d14',
    eyeColor: '#19382c', faceColor: '#faf0e3', mouthColor: '#9e7368',
  },
];

export default function CharactersStrip() {
  return (
    <section className="chars-strip">
      <div className="section-header">
        <span className="section-tag">— INSPIRED BY —</span>
        <h2 className="section-title">THE <span>SORCERERS</span></h2>
      </div>

      <div className="chars-grid">
        {characters.map(char => (
          <div key={char.id} className="char-card" data-char={char.id}>
            <div className="char-card-bg" style={{ background: char.cardBg, opacity: 0 }} />
            <div className="char-icon">
              <svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id={`bg-${char.id}`}>
                    <stop offset="0%" stopColor={char.svgBg1}/>
                    <stop offset="100%" stopColor={char.svgBg2}/>
                  </radialGradient>
                  <linearGradient id={`hair-${char.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={char.hairGrad1}/>
                    <stop offset="100%" stopColor={char.hairGrad2}/>
                  </linearGradient>
                  <filter id={`f-${char.id}`}>
                    <feGaussianBlur stdDeviation="3" result="b"/>
                    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>
                <circle cx="60" cy="65" r="55" fill={`url(#bg-${char.id})`} stroke={char.strokeColor} strokeWidth="1.5"/>
                <path d="M35,118 L30,138 L90,138 L85,118 Z" fill={char.svgBg1}/>
                <ellipse cx="60" cy="85" rx="21" ry="24" fill={char.faceColor}/>
                <path d="M36,75 C33,50 42,40 60,38 C78,40 87,50 84,75 C82,88 84,98 80,102 C74,76 46,76 40,102 C36,98 37,88 36,75Z" fill={`url(#hair-${char.id})`}/>
                <ellipse cx="48" cy="76" rx="5" ry="3.5" fill="#fff" opacity="0.9"/>
                <ellipse cx="72" cy="76" rx="5" ry="3.5" fill="#fff" opacity="0.9"/>
                <circle cx="48" cy="76" r="2.5" fill={char.eyeColor}/>
                <circle cx="72" cy="76" r="2.5" fill={char.eyeColor}/>
                <circle cx="48" cy="76" r="1.5" fill={char.strokeColor} filter={`url(#f-${char.id})`} opacity="0.7"/>
                <circle cx="72" cy="76" r="1.5" fill={char.strokeColor} filter={`url(#f-${char.id})`} opacity="0.7"/>
                <path d="M52,98 C56,103 64,103 68,98" fill="none" stroke={char.mouthColor} strokeWidth="2" strokeLinecap="round"/>
                <text x="60" y="130" textAnchor="middle" fontSize="9" fill={char.strokeColor} fontFamily="Noto Serif JP" opacity="0.8">{char.kanji}</text>
              </svg>
            </div>
            <h3>{char.name}</h3>
            <p>{char.sub}</p>
            <span className="char-tag" style={{
              background: char.tagBg,
              color: char.tagFg,
              border: `1px solid ${char.tagBorder}`,
            }}>
              {char.tag}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .chars-strip { padding: 0 60px 80px; background: var(--black); }
        .chars-grid {
          display: grid; grid-template-columns: repeat(5, 1fr);
          gap: 20px; max-width: 1300px; margin: 0 auto;
        }
        .char-card {
          background: var(--dark2); border: 1px solid var(--border); border-radius: 4px;
          padding: 32px 20px; text-align: center; transition: var(--transition);
          position: relative; overflow: hidden;
        }
        .char-card-bg { position: absolute; inset: 0; transition: opacity 0.4s; }
        .char-card:hover .char-card-bg { opacity: 1 !important; }
        .char-card:hover { transform: translateY(-6px); }
        .char-card[data-char="gojo"]:hover { border-color: rgba(123,47,255,0.4); }
        .char-card[data-char="sukuna"]:hover { border-color: rgba(204,0,34,0.4); }
        .char-card[data-char="yuji"]:hover { border-color: rgba(200,80,0,0.4); }
        .char-card[data-char="nobara"]:hover { border-color: rgba(255,80,130,0.4); }
        .char-card[data-char="megumi"]:hover { border-color: rgba(0,85,238,0.4); }
        .char-icon { width: 100px; height: 120px; margin: 0 auto 16px; }
        .char-icon svg { width: 100%; height: 100%; }
        .char-card h3 {
          font-family: var(--font-display); font-size: 0.88rem;
          letter-spacing: 0.08em; color: var(--white); margin-bottom: 4px; font-weight: 700;
        }
        .char-card p { font-size: 0.78rem; color: var(--grey); margin-bottom: 12px; }
        .char-tag {
          display: inline-block; font-family: var(--font-display);
          font-size: 0.62rem; letter-spacing: 0.15em; padding: 3px 10px;
          border-radius: 2px; font-weight: 700;
        }
        @media (max-width: 1100px) {
          .chars-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .chars-strip { padding: 0 24px 60px; }
          .chars-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .chars-grid { grid-template-columns: 1fr 1fr; }
          .char-icon { width: 80px; height: 95px; }
        }
      `}</style>
    </section>
  );
}
