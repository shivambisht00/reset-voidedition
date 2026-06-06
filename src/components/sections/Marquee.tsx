export default function Marquee() {
  const items = [
    'CURSED ENERGY', 'JUJUTSU KAISEN', 'DOMAIN EXPANSION', 'INFINITE VOID',
    'GOJO SATORU', 'SUKUNA RYOMEN', 'CURSED THREADS', 'NOBARA KUGISAKI',
  ];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i}>
            {item}
            <span className="sep">✦</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        .marquee-wrap {
          overflow: hidden; background: #050508;
          border-top: 1px solid rgba(123,47,255,0.35);
          border-bottom: 1px solid rgba(123,47,255,0.35);
          padding: 12px 0;
        }
        .marquee-track {
          display: flex; gap: 0; white-space: nowrap;
          animation: marqueeScroll 25s linear infinite;
          width: max-content;
        }
        .marquee-track span {
          font-family: var(--font-display); font-size: 0.82rem;
          letter-spacing: 0.25em; color: rgba(240,238,248,0.6);
          padding: 0 24px; font-weight: 600;
        }
        .sep { color: var(--purple-light); padding: 0 4px; }
      `}</style>
    </div>
  );
}
