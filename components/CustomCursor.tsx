'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    let trailX = 0;
    let trailY = 0;
    
    const animateTrail = () => {
      trailX += (position.x - trailX) * 0.12;
      trailY += (position.y - trailY) * 0.12;
      setTrail({ x: trailX, y: trailY });
      requestAnimationFrame(animateTrail);
    };

    const requestId = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestId);
    };
  }, [position.x, position.y]);

  return (
    <>
      <div 
        className="custom-cursor" 
        style={{ left: `${position.x}px`, top: `${position.y}px` }} 
      />
      <div 
        className="cursor-trail" 
        style={{ left: `${trail.x}px`, top: `${trail.y}px` }} 
      />
    </>
  );
}
