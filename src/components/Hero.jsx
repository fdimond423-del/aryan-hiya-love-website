import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Flame } from 'lucide-react';

import heroImg from '../assets/hero.png';

const Hero = () => {
  const startDate = new Date('2024-02-14T00:00:00');
  const [timeTogether, setTimeTogether] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeTogether({ days, hours, minutes, seconds });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        width: '100%',
        maxWidth: '1200px',
        padding: '24px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '40px',
        alignItems: 'center',
      }}
    >
      {/* Left Column: Text & Counter */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="glass-pill" style={{ marginBottom: '20px', border: '1px solid rgba(255,42,109,0.4)' }}>
          <Sparkles size={16} color="#f7d070" />
          <span style={{ fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#ffd1dc' }}>
            Pure Romance • Made by Aryan Soni
          </span>
        </div>

        <h1
          className="font-serif text-gradient"
          style={{
            fontSize: 'clamp(3rem, 5.5vw, 4.5rem)',
            lineHeight: 1.1,
            fontWeight: 700,
            marginBottom: '18px',
          }}
        >
          My Heart Beats<br />Only For You, Hiya.
        </h1>

        <p
          style={{
            fontSize: '1.15rem',
            color: '#c4a9b6',
            maxWidth: '520px',
            marginBottom: '32px',
            lineHeight: 1.7,
          }}
        >
          You are my soulmate, my dream come true, and my entire world, <strong style={{ color: '#fff' }}>Hiya</strong>. 
          Designed & Created with deep unconditional love by <strong style={{ color: '#f7d070', fontSize: '1.25rem' }}>Aryan Soni</strong>.
        </p>

        {/* Real-time Love Timer Box */}
        <div
          className="glass-panel"
          style={{
            padding: '20px 24px',
            marginBottom: '28px',
            width: '100%',
            maxWidth: '520px',
            border: '1px solid rgba(255, 42, 109, 0.35)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '14px',
              color: '#f7d070',
              fontSize: '0.9rem',
              fontWeight: 600,
            }}
          >
            <Flame size={18} color="#ff2a6d" />
            <span>Time Spent In Mad & Unconditional Love</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '10px',
              textAlign: 'center',
            }}
          >
            <TimerBlock label="Days" value={timeTogether.days} />
            <TimerBlock label="Hours" value={timeTogether.hours} />
            <TimerBlock label="Mins" value={timeTogether.minutes} />
            <TimerBlock label="Secs" value={timeTogether.seconds} highlight />
          </div>
        </div>

        {/* Romantic Signature Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,42,109,0.15)',
            border: '1px solid #ff2a6d',
            padding: '8px 18px',
            borderRadius: '999px',
            color: '#fff',
            fontSize: '0.9rem',
          }}
        >
          <Heart size={16} color="#ff2a6d" fill="#ff2a6d" />
          <span>Made with ❤️ by <strong style={{ color: '#f7d070' }}>Aryan Soni</strong> for Hiya</span>
        </div>
      </motion.div>

      {/* Right Column: Dynamic Floating Photo Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div
          className="animate-float"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '400px',
            aspectRatio: '4/5',
            borderRadius: '32px',
            padding: '12px',
            background: 'linear-gradient(135deg, rgba(255,42,109,0.4), rgba(247,208,112,0.25))',
            boxShadow: '0 30px 60px rgba(0,0,0,0.7), 0 0 45px rgba(255,42,109,0.4)',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <img
              src={heroImg}
              alt="Aryan Soni & Hiya"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'contrast(1.05) brightness(1.02)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(13,6,10,0.95) 0%, transparent 60%)',
              }}
            />

            {/* Floating Overlay Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                background: 'rgba(26, 12, 22, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,42,109,0.3)',
                borderRadius: '20px',
                padding: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#ff2a6d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(255,42,109,0.6)',
                }}
              >
                <Heart size={20} color="#fff" fill="#fff" />
              </div>
              <div>
                <h4 className="font-serif" style={{ fontSize: '1.2rem', color: '#fff' }}>
                  Aryan Soni ❤️ Hiya
                </h4>
                <p style={{ fontSize: '0.78rem', color: '#ffd1dc' }}>
                  Made By Aryan Soni • Eternally Bound
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const TimerBlock = ({ label, value, highlight }) => (
  <div
    style={{
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '14px',
      padding: '10px 6px',
      border: highlight ? '1px solid rgba(255, 42, 109, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)',
    }}
  >
    <div
      style={{
        fontSize: '1.5rem',
        fontWeight: '700',
        color: highlight ? '#ff2a6d' : '#ffffff',
        fontFamily: 'var(--font-serif)',
      }}
    >
      {String(value).padStart(2, '0')}
    </div>
    <div style={{ fontSize: '0.7rem', color: '#ffd1dc', textTransform: 'uppercase' }}>{label}</div>
  </div>
);

export default Hero;
