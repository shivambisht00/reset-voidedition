'use client';

export default function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-kanji">呪</span>
            <span className="logo-text">RE:SET<br /><span>VOID EDITION</span></span>
          </div>
          <p>RE:SET: The Ultimate Void Edition is a premium JJK-inspired capsule for sorcerers worldwide. Parent company and main brand: RE:SET.</p>
          <div className="social-links">
            <a
              href="https://www.instagram.com/resetultimatevoid?igsh=aGh0NmtkdWUxZjky"
              target="_blank" rel="noopener"
              className="social-link instagram"
              title="Instagram" aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener" className="social-link">TW</a>
            <a href="https://youtube.com/@unknown.0_140" target="_blank" rel="noopener" className="social-link">YT</a>
            <a href="https://discord.com/" target="_blank" rel="noopener" className="social-link">DC</a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>SHOP</h4>
            <a href="#products">T-Shirts</a>
            <a href="#products">Hoodies</a>
            <a href="#products">Jeans</a>
            <a href="#products">Shoes</a>
            <a href="#products">All Items</a>
          </div>
          <div className="footer-col">
            <h4>INFO</h4>
            <a href="mailto:vision.official.3107@gmail.com">About Us</a>
            <a href="mailto:vision.official.3107@gmail.com">Shipping</a>
            <a href="mailto:vision.official.3107@gmail.com">Returns</a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Size Guide coming soon!'); }}>Size Guide</a>
            <a href="mailto:vision.official.3107@gmail.com">FAQ</a>
          </div>
          <div className="footer-col">
            <h4>LEGAL</h4>
            <a href="#" onClick={e => { e.preventDefault(); alert('Privacy Policy — Coming Soon'); }}>Privacy Policy</a>
            <a href="#" onClick={e => { e.preventDefault(); alert('Terms of Use — Coming Soon'); }}>Terms of Use</a>
            <a href="#" onClick={e => { e.preventDefault(); alert('Cookie Policy — Coming Soon'); }}>Cookie Policy</a>
          </div>
          <div className="footer-col">
            <h4>CONTACT</h4>
            <a href="mailto:vision.official.3107@gmail.com">vision.official.3107@gmail.com</a>
            <a href="tel:+918171659929">+91 81716 59929</a>
            <a href="https://www.instagram.com/resetultimatevoid" target="_blank" rel="noopener">Instagram</a>
            <a href="https://discord.com/" target="_blank" rel="noopener">Discord Server</a>
            <a href="https://twitter.com/" target="_blank" rel="noopener">Twitter / X</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2026 RE:SET. The Ultimate Void Edition site by RE:SET. Fan-made project inspired by Jujutsu Kaisen. JJK © Gege Akutami / Shueisha.</p>
        <p className="footer-kanji-row">呪術廻戦 · 五条悟 · 宿儺 · 虎杖悦 · 釘崎野薔薇</p>
      </div>

      <style jsx>{`
        .footer { padding: 80px 60px 40px; background: #030305; }
        .footer-top {
          display: flex; gap: 80px; padding-bottom: 60px;
          border-bottom: 1px solid var(--border); margin-bottom: 40px;
        }
        .footer-brand { max-width: 300px; }
        .footer-logo { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
        .logo-kanji { font-family: var(--font-jp); font-size: 2rem; color: var(--purple); line-height: 1; text-shadow: var(--glow-purple); }
        .logo-text { font-family: var(--font-display); font-size: 0.9rem; letter-spacing: 0.2em; line-height: 1.2; color: var(--white); font-weight: 700; }
        .logo-text span { color: var(--purple); }
        .footer-brand > p { font-size: 0.82rem; color: var(--grey); line-height: 1.7; margin-bottom: 24px; }
        .social-links { display: flex; gap: 8px; flex-wrap: wrap; }
        .social-link {
          width: 36px; height: 36px; border: 1px solid var(--border); border-radius: 2px;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display); font-size: 0.62rem; letter-spacing: 0.05em;
          color: var(--grey); transition: var(--transition); font-weight: 700;
        }
        .social-link:hover { border-color: var(--purple); color: var(--purple); }
        .social-link.instagram:hover {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          border-color: transparent; color: white;
        }
        .footer-links { display: flex; gap: 60px; flex: 1; justify-content: flex-end; }
        .footer-col h4 {
          font-family: var(--font-display); font-size: 0.78rem; letter-spacing: 0.25em;
          color: var(--purple-light); margin-bottom: 20px; font-weight: 700;
        }
        .footer-col a {
          display: block; font-size: 0.82rem; color: var(--grey);
          margin-bottom: 10px; transition: var(--transition);
        }
        .footer-col a:hover { color: var(--white); transform: translateX(4px); }
        .footer-bottom { text-align: center; }
        .footer-bottom p { font-size: 0.72rem; color: var(--grey); line-height: 1.8; }
        .footer-kanji-row {
          font-family: var(--font-jp); font-size: 0.82rem;
          color: rgba(123,47,255,0.25); margin-top: 8px;
        }
        @media (max-width: 900px) {
          .footer { padding: 60px 24px 30px; }
          .footer-top { flex-direction: column; gap: 40px; }
          .footer-brand { max-width: 100%; }
          .footer-links { gap: 30px; justify-content: flex-start; flex-wrap: wrap; }
        }
      `}</style>
    </footer>
  );
}
