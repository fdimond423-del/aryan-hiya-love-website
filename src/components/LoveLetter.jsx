import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles, Send, CheckCircle2, Feather } from 'lucide-react';
import confetti from 'canvas-confetti';

const letters = {
  aryanToHiya: {
    sender: 'Aryan',
    receiver: 'Hiya',
    title: 'My Dearest Hiya,',
    body: `From the very first second our eyes met, my entire world shifted. You brought warmth into my coldest days and light into every dark shadow. 

Every smile of yours is a reminder of how blessed I am to walk this journey called life alongside you. Your kindness, your laugh, and the sweet way you care for me makes me fall deeper in love with you every single day.

Thank you for choosing me, for believing in us, and for turning ordinary moments into extraordinary memories. I promise to cherish you, protect your happiness, and hold your hand through every chapter of our lives.

Forever & Always Yours,`,
    signature: 'Aryan ❤️',
  },
  hiyaToAryan: {
    sender: 'Hiya',
    receiver: 'Aryan',
    title: 'My Dearest Aryan,',
    body: `You are my safe haven, my biggest strength, and my absolute favorite person in the entire universe. 

Having you in my life feels like finding a home I never knew I was searching for. You listen to my heart even when I say nothing, and you make me feel loved in ways I never thought possible.

Thank you for being the most loving, gentle, and incredible partner. My heart is yours today, tomorrow, and for all eternity.

With All My Love,`,
    signature: 'Hiya 💕',
  },
};

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('aryanToHiya');
  const [typedText, setTypedText] = useState('');
  const currentLetter = letters[activeTab];

  useEffect(() => {
    if (!isOpen) {
      setTypedText('');
      return;
    }

    let index = 0;
    const fullText = currentLetter.body;
    setTypedText('');

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isOpen, activeTab]);

  const handleOpenLetter = () => {
    setIsOpen(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#ff2a6d', '#ffd1dc', '#f7d070'],
    });
  };

  return (
    <section
      id="letter"
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
          <Feather size={14} color="#f7d070" />
          <span style={{ fontSize: '0.85rem', color: '#ffd1dc', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Sealed With A Kiss
          </span>
        </div>

        <h2 className="font-serif text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', marginBottom: '16px' }}>
          Interactive Love Letters
        </h2>
        <p style={{ color: '#c4a9b6', fontSize: '1.1rem', maxWidth: '550px', margin: '0 auto' }}>
          Click the wax seal envelope below to unseal a romantic handwritten love letter.
        </p>

        {/* Tab Switcher */}
        <div
          style={{
            display: 'inline-flex',
            gap: '8px',
            background: 'rgba(255,255,255,0.06)',
            padding: '6px',
            borderRadius: '999px',
            marginTop: '24px',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <button
            onClick={() => setActiveTab('aryanToHiya')}
            style={{
              padding: '10px 24px',
              borderRadius: '999px',
              border: 'none',
              background: activeTab === 'aryanToHiya' ? '#ff2a6d' : 'transparent',
              color: activeTab === 'aryanToHiya' ? '#fff' : '#c4a9b6',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
            }}
          >
            Aryan ➔ Hiya
          </button>
          <button
            onClick={() => setActiveTab('hiyaToAryan')}
            style={{
              padding: '10px 24px',
              borderRadius: '999px',
              border: 'none',
              background: activeTab === 'hiyaToAryan' ? '#ff2a6d' : 'transparent',
              color: activeTab === 'hiyaToAryan' ? '#fff' : '#c4a9b6',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
            }}
          >
            Hiya ➔ Aryan
          </button>
        </div>
      </div>

      {/* Sealed Envelope Container */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {!isOpen ? (
          <motion.div
            whileHover={{ scale: 1.03 }}
            onClick={handleOpenLetter}
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '540px',
              padding: '50px 30px',
              textAlign: 'center',
              cursor: 'pointer',
              border: '1px solid rgba(255,42,109,0.3)',
              position: 'relative',
              background: 'linear-gradient(135deg, rgba(38,18,32,0.85), rgba(15,6,12,0.95))',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #ff2a6d, #e63956)',
                margin: '0 auto 24px auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px rgba(255,42,109,0.6)',
                border: '3px solid #f7d070',
              }}
            >
              <Heart size={36} color="#fff" fill="#fff" />
            </div>

            <h3 className="font-serif text-gradient-gold" style={{ fontSize: '2rem', marginBottom: '10px' }}>
              Wax Sealed Love Note
            </h3>
            <p style={{ color: '#c4a9b6', fontSize: '0.95rem', marginBottom: '24px' }}>
              For {currentLetter.receiver}'s eyes only • Sent by {currentLetter.sender}
            </p>

            <div className="btn-primary" style={{ display: 'inline-flex' }}>
              <Mail size={18} /> Tap to Unseal & Read
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '680px',
              padding: '48px',
              background: 'rgba(20, 9, 17, 0.95)',
              border: '1px solid rgba(247, 208, 112, 0.3)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 30px rgba(247, 208, 112, 0.15)',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <span className="font-serif text-gradient-gold" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
                {currentLetter.title}
              </span>

              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#c4a9b6',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                }}
              >
                Close Envelope
              </button>
            </div>

            <div
              className="font-serif"
              style={{
                fontSize: '1.25rem',
                color: '#fcf8fa',
                lineHeight: '1.9',
                whiteSpace: 'pre-line',
                marginBottom: '32px',
                minHeight: '220px',
              }}
            >
              {typedText}
              <span className="animate-pulse-glow" style={{ color: '#ff2a6d' }}>|</span>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div className="font-serif text-gradient-gold" style={{ fontSize: '1.6rem', fontWeight: '700' }}>
                {currentLetter.signature}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default LoveLetter;
