'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">呪 RE:SET</div>
          <p className="footer-tagline">TRANSCENDING THE MATERIAL PLANE THROUGH CURSED FASHION.</p>
        </div>
        <div className="footer-section">
          <h4>NAVIGATION</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#">Shipping</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>SOCIALS</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Discord</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>NEWSLETTER</h4>
          <div className="subscribe-form">
            <input type="email" placeholder="ENTER YOUR EMAIL" />
            <button>JOIN</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 RE:SET VOID EDITION. ALL RIGHTS RESERVED - BY PRITAM BURA.</p>
      </div>
    </footer>
  );
}
