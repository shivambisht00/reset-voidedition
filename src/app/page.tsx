'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import IntroScreen from '@/components/sections/IntroScreen';
import Navbar from '@/components/layout/Navbar';
import CartSidebar from '@/components/layout/CartSidebar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import Marquee from '@/components/sections/Marquee';
import ProductsSection from '@/components/sections/ProductsSection';
import CollectionBanner from '@/components/sections/CollectionBanner';
import CharactersStrip from '@/components/sections/CharactersStrip';
import Newsletter from '@/components/sections/Newsletter';
import Toast from '@/components/ui/Toast';

// Load cursor only on client (no SSR)
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), { ssr: false });

export default function Home() {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);
    document.body.style.overflow = '';
  };

  return (
    <>
      {/* Intro Gate */}
      {!entered && <IntroScreen onEnter={handleEnter} />}

      {/* Main Site */}
      <div
        id="main-content"
        style={{
          opacity: entered ? 1 : 0,
          visibility: entered ? 'visible' : 'hidden',
          transition: 'opacity 0.8s ease',
        }}
      >
        <CustomCursor />
        <div className="noise-overlay" />

        <Navbar />

        <main>
          <HeroSection />
          <Marquee />
          <ProductsSection />
          <CollectionBanner />
          <CharactersStrip />
          <Newsletter />
        </main>

        <Footer />
        <CartSidebar />
        <Toast />
      </div>
    </>
  );
}
