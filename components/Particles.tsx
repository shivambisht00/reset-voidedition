'use client';

import { useEffect } from 'react';

export default function Particles() {
  useEffect(() => {
    const container = document.getElementById('collectionParticles');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      const size = Math.random() * 4 + 1;
      const x = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 5 + 4;
      const isRed = Math.random() > 0.5;
      
      p.style.cssText = `
        position: absolute;
        width: ${size}px; height: ${size}px;
        border-radius: 50%;
        background: ${isRed ? 'rgba(255,34,68,0.6)' : 'rgba(204,0,34,0.4)'};
        left: ${x}%;
        bottom: ${Math.random() * 40}%;
        animation: particleFloat ${duration}s ${delay}s ease-in-out infinite alternate;
        pointer-events: none;
        box-shadow: 0 0 ${size * 3}px ${isRed ? 'rgba(255,34,68,0.4)' : 'rgba(204,0,34,0.3)'};
      `;
      container.appendChild(p);
    }
  }, []);

  return null;
}
