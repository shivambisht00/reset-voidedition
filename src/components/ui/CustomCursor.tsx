'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };

    const animate = () => {
      trailPos.current.x += (mouseRef.current.x - trailPos.current.x) * 0.12;
      trailPos.current.y += (mouseRef.current.y - trailPos.current.y) * 0.12;
      if (trailRef.current) {
        trailRef.current.style.left = trailPos.current.x + 'px';
        trailRef.current.style.top = trailPos.current.y + 'px';
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'translate(-50%, -50%) scale(2)';
        cursorRef.current.style.background = 'var(--purple-light)';
      }
      if (trailRef.current) {
        trailRef.current.style.transform = 'translate(-50%, -50%) scale(1.4)';
        trailRef.current.style.borderColor = 'var(--purple-light)';
      }
    };
    const onLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorRef.current.style.background = 'var(--purple)';
      }
      if (trailRef.current) {
        trailRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
        trailRef.current.style.borderColor = 'var(--purple)';
      }
    };

    document.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    const interactables = document.querySelectorAll('a, button, .product-card, .char-card, .filter-btn');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={trailRef} className="cursor-trail" />
    </>
  );
}
