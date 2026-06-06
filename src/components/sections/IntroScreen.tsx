'use client';

import { useRef, useState } from 'react';

interface IntroScreenProps {
  onEnter: () => void;
}

export default function IntroScreen({ onEnter }: IntroScreenProps) {
  const [videoStarted, setVideoStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    setVideoStarted(true);
    const video = videoRef.current;
    if (video && video.querySelector('source')) {
      video.style.display = 'block';
      video.play().catch(() => onEnter());
      video.addEventListener('ended', onEnter);
      video.addEventListener('error', onEnter);
    } else {
      onEnter();
    }
  };

  const handleSkip = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
    }
    onEnter();
  };

  return (
    <div id="intro-container">
      <div id="enter-screen" style={{ display: videoStarted ? 'none' : 'flex' }}>
        <div className="enter-kanji">呪</div>
        <h2>Ready to Explore?</h2>
        <p>JUJUTSU KAISEN × RE:SET</p>
        <button id="enter-btn" onClick={handleEnter}>ENTER DOMAIN</button>
      </div>
      <video id="intro-video" ref={videoRef} playsInline style={{ display: 'none' }}>
        <source src="/images/WhatsApp Video 2026-06-01 at 11.43.29.mp4" type="video/mp4" />
      </video>
      <button
        id="skip-intro-btn"
        type="button"
        onClick={handleSkip}
        style={{ display: videoStarted ? 'inline-flex' : 'none' }}
      >
        SKIP INTRO
      </button>

      <style jsx>{`
        #intro-container {
          position: fixed; top: 0; left: 0;
          width: 100%; height: 100vh; z-index: 9999;
          background: #000000;
          display: flex; justify-content: center; align-items: center;
          transition: opacity 0.8s ease-out;
          cursor: auto;
        }
        #intro-container * { cursor: auto !important; }
        #enter-screen {
          text-align: center; color: white; z-index: 10;
          display: flex; flex-direction: column; align-items: center; gap: 16px;
        }
        .enter-kanji {
          font-family: var(--font-jp); font-size: 5rem;
          color: var(--purple); text-shadow: var(--glow-purple);
          animation: pulseKanji 2s ease-in-out infinite;
          line-height: 1; margin-bottom: 8px;
        }
        #enter-screen h2 {
          font-family: var(--font-display); font-size: 1.8rem;
          letter-spacing: 0.3em; color: var(--white); font-weight: 700;
        }
        #enter-screen p {
          font-family: var(--font-display); font-size: 0.75rem;
          letter-spacing: 0.4em; color: var(--purple-light);
        }
        #enter-btn {
          padding: 16px 48px; font-family: var(--font-display);
          font-size: 1rem; letter-spacing: 0.3em;
          background: transparent; color: var(--white);
          border: 1px solid var(--purple); border-radius: 2px;
          cursor: pointer; transition: all 0.3s;
          position: relative; overflow: hidden; margin-top: 8px;
        }
        #enter-btn::before {
          content: ''; position: absolute; inset: 0;
          background: var(--purple);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); z-index: -1;
        }
        #enter-btn:hover::before { transform: scaleX(1); }
        #enter-btn:hover { box-shadow: var(--glow-purple); }
        #intro-video {
          position: absolute; top: 0; left: 0;
          width: 100%; height: 100%; object-fit: cover;
        }
        #skip-intro-btn {
          position: absolute; right: 28px; bottom: 28px; z-index: 20;
          align-items: center; justify-content: center;
          min-width: 138px; min-height: 42px; padding: 12px 20px;
          font-family: var(--font-display); font-size: 0.72rem;
          letter-spacing: 0.22em; color: var(--white);
          background: rgba(0, 0, 0, 0.52);
          border: 1px solid rgba(255, 255, 255, 0.72);
          border-radius: 2px; cursor: pointer;
          backdrop-filter: blur(8px);
          transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }
        #skip-intro-btn:hover {
          background: rgba(127, 90, 240, 0.28);
          border-color: var(--purple-light);
          box-shadow: var(--glow-purple);
        }
        @media (max-width: 600px) {
          #skip-intro-btn {
            right: 16px; bottom: 18px;
            min-width: 124px; min-height: 40px;
            padding: 11px 16px; font-size: 0.66rem;
          }
        }
      `}</style>
    </div>
  );
}
