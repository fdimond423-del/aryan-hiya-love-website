import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, BookOpen } from 'lucide-react';

const RomanticLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 5;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: '#0d060a',
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 42, 109, 0.2), transparent 70%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      {/* 3D Opening Heart Book Animation */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotateY: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        style={{
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ff2a6d, #e63956)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 40px rgba(255, 42, 109, 0.8), 0 0 20px rgba(247, 208, 112, 0.5)',
          marginBottom: '28px',
          border: '3px solid #f7d070',
        }}
      >
        <BookOpen size={44} color="#fff" />
      </motion.div>

      <motion.h2
        className="font-serif text-gradient"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '8px', textAlign: 'center' }}
      >
        Aryan Soni ❤️ Hiya
      </motion.h2>

      <p style={{ color: '#ffd1dc', fontSize: '1rem', marginBottom: '24px', textAlign: 'center' }}>
        Opening The Eternal Book of Love...
      </p>

      {/* Progress Bar Container */}
      <div
        style={{
          width: '260px',
          height: '6px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '999px',
          overflow: 'hidden',
          position: 'relative',
          marginBottom: '16px',
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

      <span style={{ fontSize: '0.85rem', color: '#c4a9b6' }}>{progress}% Loaded</span>

      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          fontSize: '0.8rem',
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
