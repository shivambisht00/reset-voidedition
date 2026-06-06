'use client';

import { useState, useRef } from 'react';

interface IntroProps {
  onEnter: () => void;
}

export default function Intro({ onEnter }: IntroProps) {
  const [isRevealing, setIsRevealing] = useState(false);
  const [showEnterScreen, setShowEnterScreen] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    setShowEnterScreen(false);
    if (videoRef.current) {
        videoRef.current.style.display = 'block';
        videoRef.current.play().catch(revealMain);
    } else {
        revealMain();
    }
  };

  const revealMain = () => {
    setIsRevealing(true);
    setTimeout(onEnter, 800);
  };

  return (
    <div id="intro-container" style={{ opacity: isRevealing ? 0 : 1 }}>
      {showEnterScreen && (
        <div id="enter-screen">
          <div className="enter-kanji">呪</div>
          <h2>Ready to Explore?</h2>
          <p>JUJUTSU KAISEN × RE:SET</p>
          <button id="enter-btn" onClick={handleEnter}>ENTER DOMAIN</button>
        </div>
      )}
      <video 
        id="intro-video" 
        ref={videoRef}
        playsInline 
        onEnded={revealMain}
        onError={revealMain}
      >
        <source src="/images/WhatsApp Video 2026-06-01 at 11.43.29.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
