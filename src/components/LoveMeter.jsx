import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Sparkles, CheckCircle, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

const questions = [
  {
    id: 1,
    question: 'Who said "I Love You" first?',
    options: ['Aryan (With full romantic setup!)', 'Hiya (With cute sweet whispers)', 'Both at the exact same second!'],
    answer: 2,
  },
  {
    id: 2,
    question: 'What is Aryan & Hiya\'s ideal date night?',
    options: ['Long drive with romantic music & late-night ice cream', 'Cozy movie blanket cuddle at home', 'Stargazing at beachside'],
    answer: 0,
  },
  {
    id: 3,
    question: 'What makes their love bond so unbreakable?',
    options: ['Endless trust & mutual respect', 'Unconditional support & laughter', 'All of the above & infinite magic!'],
    answer: 2,
  },
];

const LoveMeter = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleSelectOption = (optIndex) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQ]: optIndex });
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#ff2a6d', '#f7d070', '#ffd1dc'],
      });
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setSelectedAnswers({});
    setShowResult(false);
  };

  return (
    <section
      id="meter"
      style={{
        padding: '100px 24px',
        position: 'relative',
        zIndex: 2,
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div className="glass-pill" style={{ marginBottom: '16px' }}>
          <Award size={14} color="#ff2a6d" />
          <span style={{ fontSize: '0.85rem', color: '#ffd1dc', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Soulmate Test
          </span>
        </div>

        <h2 className="font-serif text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', marginBottom: '16px' }}>
          Love Compatibility Gauge
        </h2>
        <p style={{ color: '#c4a9b6', fontSize: '1.1rem', maxWidth: '540px', margin: '0 auto' }}>
          Test the chemistry between Aryan & Hiya and calculate their official compatibility score!
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          className="glass-panel"
          style={{
            width: '100%',
            maxWidth: '620px',
            padding: '40px',
            background: 'linear-gradient(135deg, rgba(28,10,24,0.9), rgba(16,6,13,0.95))',
            border: '1px solid rgba(255,42,109,0.3)',
          }}
        >
          {!showResult ? (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', color: '#c4a9b6', fontSize: '0.85rem' }}>
                <span>Question {currentQ + 1} of {questions.length}</span>
                <span style={{ color: '#f7d070' }}>Aryan & Hiya Trivia</span>
              </div>

              <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '24px' }}>
                {questions[currentQ].question}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {questions[currentQ].options.map((opt, idx) => {
                  const isSelected = selectedAnswers[currentQ] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      style={{
                        padding: '16px 20px',
                        borderRadius: '16px',
                        background: isSelected ? 'rgba(255, 42, 109, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                        border: isSelected ? '1px solid #ff2a6d' : '1px solid rgba(255, 255, 255, 0.1)',
                        color: isSelected ? '#fff' : '#c4a9b6',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '0.95rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <span>{opt}</span>
                      {isSelected && <CheckCircle size={18} color="#ff2a6d" />}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={handleNext}
                disabled={selectedAnswers[currentQ] === undefined}
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  opacity: selectedAnswers[currentQ] !== undefined ? 1 : 0.5,
                  cursor: selectedAnswers[currentQ] !== undefined ? 'pointer' : 'not-allowed',
                }}
              >
                {currentQ === questions.length - 1 ? 'Calculate Final Score' : 'Next Question'}
              </button>
            </div>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center' }}>
              {/* Circular Gauge */}
              <div
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  background: 'conic-gradient(#ff2a6d 0% 100%, rgba(255,255,255,0.1) 100%)',
                  margin: '0 auto 24px auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  boxShadow: '0 0 35px rgba(255,42,109,0.6)',
                }}
              >
                <div
                  style={{
                    width: '116px',
                    height: '116px',
                    borderRadius: '50%',
                    background: '#0d060a',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span className="font-serif text-gradient" style={{ fontSize: '2.4rem', fontWeight: 700 }}>
                    100%
                  </span>
                  <span style={{ fontSize: '0.7rem', color: '#f7d070', textTransform: 'uppercase' }}>Love Match</span>
                </div>
              </div>

              <h3 className="font-serif text-gradient-gold" style={{ fontSize: '2.2rem', marginBottom: '10px' }}>
                Ultimate Soulmates!
              </h3>
              <p style={{ color: '#c4a9b6', fontSize: '1rem', marginBottom: '28px', lineHeight: '1.6' }}>
                Aryan & Hiya have a 100% perfect love score. Made for each other, written in the stars, and bound for an eternity of happiness!
              </p>

              <button onClick={resetQuiz} className="btn-secondary">
                <RotateCcw size={16} /> Retake Quiz
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoveMeter;
