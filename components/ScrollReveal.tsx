'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('revealed');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.char-card, .section-header, .testimonial-card').forEach(el => {
      // Add initial styles only if not already initialized
      if (!(el as HTMLElement).style.transition) {
          (el as HTMLElement).style.opacity = '0';
          (el as HTMLElement).style.transform = 'translateY(30px)';
          (el as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          revealObserver.observe(el);
      }
    });

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return null;
}
