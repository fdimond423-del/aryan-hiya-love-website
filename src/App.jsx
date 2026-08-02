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
  const [direction, setDirection] = useState(1);
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
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: (dir) => ({
      rotateY: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.95,
      transformOrigin: dir > 0 ? 'left center' : 'right center',
      transition: {
        duration: 0.5,
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
      <AnimatePresence>
        {loading && <RomanticLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <HeroCanvas />

      {/* Top Glassmorphic Navigation Bar - Mobile Responsive */}
      <header
        style={{
          position: 'absolute',
          top: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '96%',
          maxWidth: '1240px',
          zIndex: 100,
          padding: '8px 16px',
          background: 'rgba(20, 8, 17, 0.9)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 42, 109, 0.35)',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
          boxShadow: '0 15px 35px rgba(0,0,0,0.6), 0 0 25px rgba(255,42,109,0.25)',
        }}
      >
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ff2a6d, #e63956)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 12px rgba(255, 42, 109, 0.6)',
            }}
          >
            <Heart size={16} color="#fff" fill="#fff" />
          </div>
          <div>
            <div className="font-serif" style={{ fontSize: '1.1rem', fontWeight: '700', lineHeight: 1.1, whiteSpace: 'nowrap' }}>
              <span style={{ color: '#fff' }}>Aryan</span>
              <span style={{ color: '#ff2a6d', margin: '0 3px' }}>❤️</span>
              <span style={{ color: '#f7d070' }}>Hiya</span>
            </div>
          </div>
        </div>

        {/* Scrollable Tab Selector Pills on Mobile */}
        <div
          className="no-scrollbar"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            background: 'rgba(255,255,255,0.06)',
            padding: '3px 4px',
            borderRadius: '9999px',
            border: '1px solid rgba(255,255,255,0.1)',
            overflowX: 'auto',
            maxWidth: '100%',
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
                  padding: '6px 12px',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  fontSize: '0.78rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? '0 0 12px rgba(255, 42, 109, 0.5)' : 'none',
                }}
              >
                <Icon size={12} fill={isActive ? '#fff' : 'none'} />
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>

        {/* Send Heart Action */}
        <button
          onClick={triggerLoveBurst}
          className="btn-primary"
          style={{ padding: '6px 12px', fontSize: '0.78rem', flexShrink: 0 }}
        >
          <Sparkles size={14} /> <span className="hidden-mobile">Send</span> ❤️
        </button>
      </header>

      {/* Main Content Area */}
      <main
        style={{
          flex: 1,
          width: '100%',
          height: 'calc(100vh - 75px)',
          overflow: 'hidden',
          position: 'relative',
          paddingTop: '70px',
          paddingBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: '1500px',
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
              maxHeight: 'calc(100vh - 90px)',
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

      {/* Left Navigation Arrow */}
      <button
        onClick={handlePrevPage}
        style={{
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 90,
          background: 'rgba(20, 8, 17, 0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 42, 109, 0.4)',
          color: '#fff',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 20px rgba(0,0,0,0.6)',
        }}
        title="Previous Page"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={handleNextPage}
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 90,
          background: 'rgba(20, 8, 17, 0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 42, 109, 0.4)',
          color: '#fff',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 20px rgba(0,0,0,0.6)',
        }}
        title="Next Page"
      >
        <ChevronRight size={22} />
      </button>

      {/* Floating Audio Player */}
      <MusicPlayer isMuted={isMuted} toggleAudio={toggleAudio} />

      {/* Footer Branding Pill */}
      <div
        style={{
          position: 'absolute',
          bottom: '12px',
          left: '16px',
          zIndex: 85,
          background: 'rgba(20, 8, 17, 0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 42, 109, 0.3)',
          borderRadius: '999px',
          padding: '4px 12px',
          fontSize: '0.72rem',
          color: '#ffd1dc',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <Heart size={12} color="#ff2a6d" fill="#ff2a6d" />
        <span>Made by <strong style={{ color: '#f7d070' }}>Aryan Soni</strong></span>
        <span style={{ color: '#f7d070', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '6px' }}>
          {activePage + 1}/{pages.length}
        </span>
      </div>
    </div>
  );
}

export default App;
