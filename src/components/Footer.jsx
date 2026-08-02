import React from 'react';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';
import confetti from 'canvas-confetti';

const Footer = () => {
  const triggerGrandFireworks = () => {
    const count = 200;
    const defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55, colors: ['#ff2a6d', '#ffffff'] });
    fire(0.2, { spread: 60, colors: ['#f7d070', '#ffd1dc'] });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        padding: '80px 24px 40px 24px',
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        background: 'rgba(10, 4, 8, 0.95)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
          textAlign: 'center',
        }}
      >
        <div
          onClick={triggerGrandFireworks}
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ff2a6d, #e63956)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 30px rgba(255, 42, 109, 0.6)',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
          }}
          className="animate-pulse-glow"
          title="Click for Grand Fireworks!"
        >
          <Heart size={32} color="#fff" fill="#fff" />
        </div>

        <h3 className="font-serif text-gradient" style={{ fontSize: '2.4rem' }}>
          Aryan & Hiya
        </h3>

        <p style={{ color: '#c4a9b6', maxWidth: '500px', fontSize: '1rem', lineHeight: '1.7' }}>
          "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
        </p>

        <div style={{ display: 'flex', gap: '16px' }}>
          <button onClick={triggerGrandFireworks} className="btn-primary" style={{ fontSize: '0.9rem' }}>
            <Sparkles size={16} /> Launch Grand Fireworks
          </button>
          <button onClick={scrollToTop} className="btn-secondary" style={{ padding: '12px 18px' }}>
            <ArrowUp size={18} /> Top
          </button>
        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', width: '100%', paddingTop: '28px', color: '#8c707e', fontSize: '0.85rem' }}>
          Crafted with Infinite Love & High-End UI/UX for <strong style={{ color: '#ffd1dc' }}>Aryan & Hiya</strong> • {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
