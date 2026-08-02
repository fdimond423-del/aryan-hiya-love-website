import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Volume2, VolumeX, ChevronLeft, ChevronRight, BookOpen, Clock, ImageIcon, Award, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

import RomanticLoader from './components/RomanticLoader';
import HeroCanvas from './components/HeroCanvas';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import LoveLetter from './components/LoveLetter';
import CardDeck from './components/CardDeck';
import Gallery from './components/Gallery';
import LoveMeter from './components/LoveMeter';
import SecretLock from './components/SecretLock';
import MusicPlayer from './components/MusicPlayer';

const pages = [
  { id: 'hero', label: 'Love Story', icon: Heart, component: Hero, pageNum: 1 },
  { id: 'timeline', label: 'Our Journey', icon: Clock, component: Timeline, pageNum: 2 },
  { id: 'letter', label: 'Love Letter', icon: BookOpen, component: LoveLetter, pageNum: 3 },
  { id: 'deck', label: '100 Reasons', icon: Sparkles, component: CardDeck, pageNum: 4 },
  { id: 'gallery', label: 'Love Gallery', icon: ImageIcon, component: Gallery, pageNum: 5 },
  { id: 'meter', label: 'Love Test', icon: Award, component: LoveMeter, pageNum: 6 },
  { id: 'lock', label: 'Secret Vault', icon: Lock, component: SecretLock, pageNum: 7 },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isMuted, setIsMuted] = useState(true);

  const toggleAudio = () => setIsMuted((prev) => !prev);

  const handleNextPage = () => {
    setDirection(1);
    setActivePage((prev) => (prev + 1) % pages.length);
  };

  const handlePrevPage = () => {
    setDirection(-1);
    setActivePage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  const handleSelectPage = (index) => {
    setDirection(index > activePage ? 1 : -1);
    setActivePage(index);
  };

  const triggerLoveBurst = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.15 },
      colors: ['#ff2a6d', '#f7d070', '#ffd1dc', '#ffffff'],
    });
  };

  const ActiveComponent = pages[activePage].component;

  // 3D Book Page Flip Animation Variants
  const pageVariants = {
    initial: (dir) => ({
      rotateY: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
      transformOrigin: dir > 0 ? 'left center' : 'right center',
    }),
    animate: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transformOrigin: 'center center',
      transition: {
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: (dir) => ({
      rotateY: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.95,
      transformOrigin: dir > 0 ? 'left center' : 'right center',
      transition: {
        duration: 0.6,
        ease: [0.5, 0, 0.75, 0],
      },
    }),
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#0d060a',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Preloader */}
      <AnimatePresence>
        {loading && <RomanticLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Background Interactive Particle Canvas */}
      <HeroCanvas />

      {/* Top Glassmorphic Navigation Bar */}
      <header
        style={{
          position: 'absolute',
          top: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '94%',
          maxWidth: '1240px',
          zIndex: 100,
          padding: '10px 24px',
          background: 'rgba(20, 8, 17, 0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 42, 109, 0.35)',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 15px 35px rgba(0,0,0,0.6), 0 0 25px rgba(255,42,109,0.25)',
        }}
      >
        {/* Brand Logo & Made By Credit */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ff2a6d, #e63956)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(255, 42, 109, 0.6)',
            }}
          >
            <Heart size={20} color="#fff" fill="#fff" />
          </div>
          <div>
            <div className="font-serif" style={{ fontSize: '1.3rem', fontWeight: '700', lineHeight: 1.1 }}>
              <span style={{ color: '#fff' }}>Aryan Soni</span>
              <span style={{ color: '#ff2a6d', margin: '0 4px' }}>❤️</span>
              <span style={{ color: '#f7d070' }}>Hiya</span>
            </div>
            <span style={{ fontSize: '0.7rem', color: '#ffd1dc' }}>
              Made by <strong style={{ color: '#f7d070' }}>Aryan Soni</strong>
            </span>
          </div>
        </div>

        {/* Book Page Selector Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255,255,255,0.06)',
            padding: '4px 6px',
            borderRadius: '9999px',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {pages.map((p, idx) => {
            const Icon = p.icon;
            const isActive = activePage === idx;

            return (
              <button
                key={p.id}
                onClick={() => handleSelectPage(idx)}
                style={{
                  background: isActive ? 'linear-gradient(135deg, #ff2a6d, #e63956)' : 'transparent',
                  color: isActive ? '#fff' : '#c4a9b6',
                  border: 'none',
                  padding: '7px 14px',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? '0 0 15px rgba(255, 42, 109, 0.5)' : 'none',
                }}
              >
                <Icon size={14} fill={isActive ? '#fff' : 'none'} />
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={toggleAudio}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 42, 109, 0.3)',
              color: isMuted ? '#c4a9b6' : '#ff2a6d',
              padding: '10px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} className="animate-pulse-glow" />}
          </button>

          <button onClick={triggerLoveBurst} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.82rem' }}>
            <Sparkles size={16} /> Send Heart ❤️
          </button>
        </div>
      </header>

      {/* 3D Book Stage Container */}
      <main
        style={{
          flex: 1,
          width: '100%',
          height: 'calc(100vh - 80px)',
          overflow: 'hidden',
          position: 'relative',
          paddingTop: '85px',
          paddingBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: '1500px', // Enforces 3D Depth perspective
        }}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={activePage}
            custom={direction}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              width: '100%',
              height: '100%',
              maxHeight: 'calc(100vh - 100px)',
              overflowY: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Left Page Turn Button */}
      <button
        onClick={handlePrevPage}
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 90,
          background: 'rgba(20, 8, 17, 0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 42, 109, 0.4)',
          color: '#fff',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 25px rgba(0,0,0,0.6)',
          transition: 'all 0.3s ease',
        }}
        title="Turn Page Back"
      >
        <ChevronLeft size={26} />
      </button>

      {/* Right Page Turn Button */}
      <button
        onClick={handleNextPage}
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 90,
          background: 'rgba(20, 8, 17, 0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 42, 109, 0.4)',
          color: '#fff',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 25px rgba(0,0,0,0.6)',
          transition: 'all 0.3s ease',
        }}
        title="Turn Page Forward"
      >
        <ChevronRight size={26} />
      </button>

      {/* Bottom Audio Player */}
      <MusicPlayer isMuted={isMuted} toggleAudio={toggleAudio} />

      {/* Made By Aryan Soni Footer Credit & Page Number */}
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '24px',
          zIndex: 90,
          background: 'rgba(20, 8, 17, 0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 42, 109, 0.3)',
          borderRadius: '999px',
          padding: '6px 16px',
          fontSize: '0.78rem',
          color: '#ffd1dc',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <Heart size={14} color="#ff2a6d" fill="#ff2a6d" />
        <span>Made with ❤️ by <strong style={{ color: '#f7d070' }}>Aryan Soni</strong> for Hiya</span>
        <span style={{ color: '#f7d070', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '8px' }}>
          Page {activePage + 1} of {pages.length}
        </span>
      </div>
    </div>
  );
}

export default App;
