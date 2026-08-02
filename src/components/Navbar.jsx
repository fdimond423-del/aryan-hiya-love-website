import React from 'react';
import { Heart, Sparkles, Volume2, VolumeX } from 'lucide-react';
import confetti from 'canvas-confetti';

const Navbar = ({ isMuted, toggleAudio }) => {
  const triggerLoveBurst = () => {
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.1 },
      colors: ['#ff2a6d', '#f7d070', '#ffd1dc', '#ffffff'],
    });
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '92%',
        maxWidth: '1200px',
        zIndex: 100,
        padding: '12px 28px',
        background: 'rgba(20, 8, 17, 0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 42, 109, 0.3)',
        borderRadius: '9999px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 15px 35px rgba(0,0,0,0.6), 0 0 25px rgba(255,42,109,0.25)',
      }}
    >
      {/* Brand Logo & Made By Credit */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            width: '38px',
            height: '38px',
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
          <span className="font-serif" style={{ fontSize: '1.3rem', fontWeight: '700' }}>
            <span style={{ color: '#fff' }}>Aryan Soni</span>
            <span style={{ color: '#ff2a6d', margin: '0 6px' }}>❤️</span>
            <span style={{ color: '#f7d070' }}>Hiya</span>
          </span>
          <div style={{ fontSize: '0.7rem', color: '#ffd1dc', letterSpacing: '0.5px' }}>
            Made with Love by <strong style={{ color: '#f7d070' }}>Aryan Soni</strong>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={toggleAudio}
          title={isMuted ? 'Play Romantic Music' : 'Mute Music'}
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
            transition: 'all 0.3s ease',
          }}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} className="animate-pulse-glow" />}
        </button>

        <button
          onClick={triggerLoveBurst}
          className="btn-primary"
          style={{ padding: '10px 18px', fontSize: '0.85rem' }}
        >
          <Sparkles size={16} /> Send Heart ❤️
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
