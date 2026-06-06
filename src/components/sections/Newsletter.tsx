'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) {
      setMessage('✦ Enter a valid email, sorcerer.');
      setTimeout(() => setMessage(''), 3000);
      return;
    }
    // EmailJS integration
    try {
      // @ts-ignore
      if (typeof emailjs !== 'undefined') {
        // @ts-ignore
        await emailjs.send('service_uxoat4x', 'template_40l4tpm', { email });
      }
      setMessage("✦ You've entered the domain. Welcome, sorcerer!");
      setEmail('');
    } catch {
      setMessage('✦ Something went wrong. Try again.');
    }
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <section className="newsletter">
      <div className="newsletter-inner">
        <div className="nl-kanji">呪</div>
        <div className="nl-content">
          <h2>DOMAIN EXPANSION:<br /><span>YOUR INBOX</span></h2>
          <p>Get early access to drops, exclusive discounts, and cursed energy updates.</p>
          <div className="nl-form">
            <input
              type="email"
              placeholder="Enter your email, sorcerer..."
              className="nl-input"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
            />
            <button className="btn btn-primary nl-btn" onClick={handleSubscribe}>
              SUBSCRIBE
            </button>
          </div>
          {message && <p className="nl-message">{message}</p>}
          <p className="nl-note">No spam. Only cursed technique notifications.</p>
        </div>
      </div>

      <style jsx>{`
        .newsletter {
          background: #050508; border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border); padding: 80px 60px;
        }
        .newsletter-inner {
          max-width: 900px; margin: 0 auto;
          display: flex; align-items: center; gap: 60px;
        }
        .nl-kanji {
          font-family: var(--font-jp); font-size: 8rem; color: var(--purple);
          opacity: 0.12; line-height: 1; flex-shrink: 0; text-shadow: var(--glow-purple);
        }
        .nl-content { flex: 1; }
        .nl-content h2 {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3.5rem); letter-spacing: 0.08em;
          line-height: 0.95; margin-bottom: 16px; color: var(--white); font-weight: 700;
        }
        .nl-content h2 span { color: var(--purple); }
        .nl-content > p { color: var(--grey-light); font-size: 0.88rem; margin-bottom: 28px; }
        .nl-form { display: flex; gap: 0; margin-bottom: 12px; }
        .nl-input {
          flex: 1; background: var(--surface); border: 1px solid var(--border);
          border-right: none; color: var(--white); padding: 14px 20px;
          font-size: 0.88rem; outline: none; transition: var(--transition);
          border-radius: 2px 0 0 2px;
        }
        .nl-input::placeholder { color: var(--grey); }
        .nl-input:focus { border-color: rgba(123,47,255,0.5); }
        .nl-btn { border-radius: 0 2px 2px 0; }
        .nl-note { font-size: 0.72rem; color: var(--grey); letter-spacing: 0.05em; }
        .nl-message {
          font-size: 0.8rem; color: var(--purple-light); margin-bottom: 8px;
          font-family: var(--font-display); letter-spacing: 0.05em;
        }
        @media (max-width: 900px) {
          .newsletter { padding: 60px 24px; }
          .newsletter-inner { flex-direction: column; gap: 0; text-align: center; }
          .nl-kanji { display: none; }
          .nl-form { flex-direction: column; }
          .nl-input {
            border-right: 1px solid var(--border);
            border-bottom: none; border-radius: 2px 2px 0 0;
          }
          .nl-btn { border-radius: 0 0 2px 2px; }
        }
      `}</style>
    </section>
  );
}
