import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Volume2, VolumeX, ChevronLeft, ChevronRight, BookOpen, Clock, ImageIcon, Award, Lock, Menu, X } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
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

      {/* Top Glassmorphic Navigation Bar */}
      <header
        style={{
          position: 'absolute',
          top: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '94%',
          maxWidth: '1240px',
          zIndex: 100,
          padding: '10px 18px',
          background: 'rgba(20, 8, 17, 0.92)',
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
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ff2a6d, #e63956)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 12px rgba(255, 42, 109, 0.6)',
            }}
          >
            <Heart size={18} color="#fff" fill="#fff" />
          </div>
          <div>
            <div className="font-serif" style={{ fontSize: '1.2rem', fontWeight: '700', lineHeight: 1.1, whiteSpace: 'nowrap' }}>
              <span style={{ color: '#fff' }}>Aryan</span>
              <span style={{ color: '#ff2a6d', margin: '0 3px' }}>❤️</span>
              <span style={{ color: '#f7d070' }}>Hiya</span>
            </div>
          </div>
        </div>

        {/* Desktop Tab Selector Pills (Hidden on Mobile) */}
        <div
          className="desktop-tabs-container"
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
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? '0 0 12px rgba(255, 42, 109, 0.5)' : 'none',
                }}
              >
                <Icon size={13} fill={isActive ? '#fff' : 'none'} />
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>

        {/* Action Controls & Mobile Menu Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button onClick={triggerLoveBurst} className="btn-primary" style={{ padding: '6px 14px', fontSize: '0.78rem' }}>
            <Sparkles size={14} /> ❤️
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-toggle"
            style={{
              background: 'rgba(255, 42, 109, 0.2)',
              border: '1px solid rgba(255, 42, 109, 0.4)',
              color: '#fff',
              padding: '8px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {mobileMenuOpen ? <X size={20} color="#ff2a6d" /> : <Menu size={20} color="#fff" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-Down Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '65px',
              left: '5%',
              right: '5%',
              zIndex: 200,
              background: 'rgba(20, 8, 17, 0.96)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 42, 109, 0.4)',
              borderRadius: '24px',
              padding: '16px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.8), 0 0 30px rgba(255,42,109,0.3)',
            }}
          >
            <div style={{ fontSize: '0.8rem', color: '#f7d070', marginBottom: '12px', fontWeight: '600', textAlign: 'center' }}>
              Select Chapter • Aryan Soni ❤️ Hiya
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
              {pages.map((p, idx) => {
                const Icon = p.icon;
                const isActive = activePage === idx;

                return (
                  <button
                    key={p.id}
                    onClick={() => handleSelectPage(idx)}
                    style={{
                      background: isActive ? 'linear-gradient(135deg, #ff2a6d, #e63956)' : 'rgba(255, 255, 255, 0.06)',
                      border: isActive ? '1px solid #ff2a6d' : '1px solid rgba(255, 255, 255, 0.1)',
                      color: isActive ? '#fff' : '#c4a9b6',
                      padding: '10px 12px',
                      borderRadius: '14px',
                      cursor: 'pointer',
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <Icon size={16} color={isActive ? '#fff' : '#ff2a6d'} fill={isActive ? '#fff' : 'none'} />
                    <span>{p.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
