import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, ChevronLeft, ChevronRight, Bookmark, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';

const reasons = [
  { id: 1, text: 'The way your eyes light up with pure joy whenever you talk about your dreams.', category: 'Sweet Details' },
  { id: 2, text: 'How effortlessly you make me feel safe, cherished, and valued every single day.', category: 'Safety & Comfort' },
  { id: 3, text: 'Our late-night conversations where hours pass like gentle breeze seconds.', category: 'Precious Moments' },
  { id: 4, text: 'Your adorable laugh that instantly turns my worst days into bright sunshine.', category: 'Pure Happiness' },
  { id: 5, text: 'The way you hold my hand tightly, as if promising never to let go.', category: 'Warm Hugs' },
  { id: 6, text: 'Your kindness and golden heart that inspires me to be a better person.', category: 'Soul Connection' },
  { id: 7, text: 'How we can be silly, weird, and completely honest without any fear of judgment.', category: 'Best Friends' },
  { id: 8, text: 'The cute little habits you have that make you uniquely, wonderfully you.', category: 'Cute Quirks' },
  { id: 9, text: 'How even simple coffee trips turn into unforgettable romantic dates with you.', category: 'Everyday Romance' },
  { id: 10, text: 'The warmth in your voice when you say "I love you" right before sleeping.', category: 'Eternal Promise' },
];

const CardDeck = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const currentReason = reasons[currentIndex];
  const isFavorite = favorites.includes(currentReason.id);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reasons.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter((id) => id !== currentReason.id));
    } else {
      setFavorites([...favorites, currentReason.id]);
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.5 },
        colors: ['#ff2a6d', '#f7d070'],
      });
    }
  };

  return (
    <section
      id="deck"
      style={{
        padding: '100px 24px',
        position: 'relative',
        zIndex: 2,
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div className="glass-pill" style={{ marginBottom: '16px' }}>
          <Flame size={14} color="#ff2a6d" />
          <span style={{ fontSize: '0.85rem', color: '#ffd1dc', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Countless Feelings
          </span>
        </div>

        <h2 className="font-serif text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', marginBottom: '16px' }}>
          100 Reasons Why I Love You
        </h2>
        <p style={{ color: '#c4a9b6', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto' }}>
          Flip through the interactive card stack to explore heartfelt reasons Aryan loves Hiya.
        </p>
      </div>

      {/* 3D Card Stack Container */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '520px', minHeight: '320px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReason.id}
              initial={{ opacity: 0, rotateY: 90, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: -90, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="glass-panel"
              style={{
                width: '100%',
                minHeight: '320px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'linear-gradient(135deg, rgba(30,12,25,0.9), rgba(18,6,15,0.95))',
                border: '1px solid rgba(255,42,109,0.3)',
                boxShadow: '0 20px 45px rgba(0,0,0,0.7), 0 0 25px rgba(255,42,109,0.2)',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    background: 'rgba(247,208,112,0.15)',
                    border: '1px solid rgba(247,208,112,0.3)',
                    color: '#f7d070',
                    padding: '4px 14px',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                  }}
                >
                  Reason #{currentIndex + 1} • {currentReason.category}
                </span>

                <button
                  onClick={toggleFavorite}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: isFavorite ? '#ff2a6d' : '#c4a9b6',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Heart size={24} fill={isFavorite ? '#ff2a6d' : 'none'} />
                </button>
              </div>

              <p
                className="font-serif"
                style={{
                  fontSize: '1.6rem',
                  lineHeight: '1.6',
                  color: '#fff',
                  textAlign: 'center',
                  margin: '24px 0',
                }}
              >
                "{currentReason.text}"
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: '#c4a9b6' }}>
                <span>Aryan & Hiya Forever</span>
                <span>{currentIndex + 1} / {reasons.length}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button onClick={handlePrev} className="btn-secondary" style={{ padding: '12px 20px' }}>
            <ChevronLeft size={20} /> Previous
          </button>
          <button onClick={handleNext} className="btn-primary" style={{ padding: '12px 24px' }}>
            Next Reason <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardDeck;
