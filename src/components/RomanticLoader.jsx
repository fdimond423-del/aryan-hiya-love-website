import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, BookOpen, Music } from 'lucide-react';

const RomanticLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsReady(true);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  const handleStartBook = () => {
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      onClick={handleStartBook}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: '#0d060a',
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 42, 109, 0.25), transparent 70%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        cursor: 'pointer',
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotateY: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ff2a6d, #e63956)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 40px rgba(255, 42, 109, 0.8), 0 0 20px rgba(247, 208, 112, 0.5)',
          marginBottom: '24px',
          border: '3px solid #f7d070',
        }}
      >
        <BookOpen size={40} color="#fff" />
      </motion.div>

      <motion.h2
        className="font-serif text-gradient"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', marginBottom: '8px', textAlign: 'center' }}
      >
        Aryan Soni ❤️ Hiya
      </motion.h2>

      <p style={{ color: '#ffd1dc', fontSize: '0.95rem', marginBottom: '24px', textAlign: 'center' }}>
        The Eternal Book of Love
      </p>

      {/* Progress Bar Container */}
      <div
        style={{
          width: '240px',
          height: '6px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '999px',
          overflow: 'hidden',
          position: 'relative',
          marginBottom: '20px',
          border: '1px solid rgba(255, 42, 109, 0.3)',
        }}
      >
        <motion.div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #ff2a6d, #f7d070)',
            borderRadius: '999px',
            boxShadow: '0 0 10px #ff2a6d',
          }}
        />
      </div>

      {isReady ? (
        <motion.button
          initial={{ scale: 0.9 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={handleStartBook}
          className="btn-primary"
          style={{ padding: '12px 28px', fontSize: '0.95rem', marginTop: '8px' }}
        >
          <Music size={18} /> Tap to Open Book & Play Song 🎵
        </motion.button>
      ) : (
        <span style={{ fontSize: '0.85rem', color: '#c4a9b6' }}>{progress}% Loaded</span>
      )}

      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          fontSize: '0.78rem',
          color: '#f7d070',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <Sparkles size={14} /> Created with ❤️ by <strong>Aryan Soni</strong> for Hiya
      </div>
    </motion.div>
  );
};

export default RomanticLoader;
