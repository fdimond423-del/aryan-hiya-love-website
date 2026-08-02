import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, Key, Heart, Sparkles, Award, Play, Pause, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const SecretLock = () => {
  const [passcode, setPasscode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const correctCodes = ['0520', '1402', '2024', '7777'];

  const handleUnlockAttempt = (e) => {
    e.preventDefault();
    if (correctCodes.includes(passcode) || passcode === '') {
      unlockVault();
    } else {
      setErrorMsg('Incorrect Lock Code! Hint: Try 0520, 1402, or tap the Golden Key!');
    }
  };

  const unlockVault = () => {
    setIsUnlocked(true);
    setErrorMsg('');
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#ff2a6d', '#f7d070', '#ffd1dc', '#ffffff'],
    });
  };

  return (
    <section
      id="lock"
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
          <Key size={14} color="#f7d070" />
          <span style={{ fontSize: '0.85rem', color: '#ffd1dc', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Secret Love Vault
          </span>
        </div>

        <h2 className="font-serif text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', marginBottom: '16px' }}>
          The Love Lock
        </h2>
        <p style={{ color: '#c4a9b6', fontSize: '1.1rem', maxWidth: '540px', margin: '0 auto' }}>
          A locked secret vault created by Aryan exclusively for Hiya. Unlock to reveal special secret surprise!
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {!isUnlocked ? (
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '480px',
              padding: '40px 28px',
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(28,10,24,0.9), rgba(14,5,11,0.95))',
              border: '1px solid rgba(255,42,109,0.3)',
            }}
          >
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'rgba(255,42,109,0.15)',
                border: '2px solid #ff2a6d',
                margin: '0 auto 20px auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ff2a6d',
                boxShadow: '0 0 20px rgba(255,42,109,0.4)',
              }}
            >
              <Lock size={32} />
            </div>

            <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '12px' }}>
              Enter Anniversary Code
            </h3>

            <form onSubmit={handleUnlockAttempt} style={{ marginBottom: '20px' }}>
              <input
                type="text"
                maxLength={4}
                placeholder="e.g. 0520"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                style={{
                  width: '180px',
                  padding: '12px 16px',
                  fontSize: '1.4rem',
                  letterSpacing: '6px',
                  textAlign: 'center',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '16px',
                  color: '#fff',
                  outline: 'none',
                  marginBottom: '16px',
                  fontFamily: 'monospace',
                }}
              />
              <br />
              <button type="submit" className="btn-primary" style={{ padding: '12px 28px' }}>
                <Unlock size={18} /> Unlock Vault
              </button>
            </form>

            {errorMsg && (
              <p style={{ color: '#ff2a6d', fontSize: '0.85rem', marginBottom: '16px' }}>{errorMsg}</p>
            )}

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px' }}>
              <button
                onClick={unlockVault}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#f7d070',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'underline',
                }}
              >
                <Key size={14} /> Master Key: Click to Instant Unlock
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '680px',
              padding: '40px',
              background: 'linear-gradient(135deg, rgba(35,14,28,0.95), rgba(16,6,13,0.95))',
              border: '1px solid #f7d070',
              boxShadow: '0 25px 50px rgba(0,0,0,0.8), 0 0 30px rgba(247,208,112,0.2)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f7d070, #e6a817)',
                  margin: '0 auto 16px auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0d060a',
                  boxShadow: '0 0 25px rgba(247,208,112,0.6)',
                }}
              >
                <Unlock size={28} />
              </div>
              <h3 className="font-serif text-gradient-gold" style={{ fontSize: '2.2rem', marginBottom: '8px' }}>
                Secret Vault Unlocked!
              </h3>
              <p style={{ color: '#ffd1dc', fontSize: '0.95rem' }}>
                Congratulations Hiya! Here is your exclusive surprise package.
              </p>
            </div>

            {/* Certificate of Eternal Love */}
            <div
              style={{
                border: '2px dashed rgba(247,208,112,0.4)',
                borderRadius: '20px',
                padding: '24px',
                background: 'rgba(0,0,0,0.3)',
                marginBottom: '28px',
                textAlign: 'center',
              }}
            >
              <Award size={36} color="#f7d070" style={{ marginBottom: '8px' }} />
              <h4 className="font-serif" style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '6px' }}>
                Official Love Certificate
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#c4a9b6', marginBottom: '12px' }}>
                This certifies that <strong style={{ color: '#fff' }}>Aryan</strong> & <strong style={{ color: '#fff' }}>Hiya</strong> are officially soulmates, bound together in eternal happiness, love, and laughter.
              </p>
              <span style={{ fontSize: '0.8rem', color: '#f7d070', fontWeight: '600' }}>
                Valid Until: Infinity & Beyond ✨
              </span>
            </div>

            {/* Secret Voice Note Simulator */}
            <div
              style={{
                background: 'rgba(255,255,255,0.06)',
                borderRadius: '16px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: '#ff2a6d',
                    border: 'none',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  {isPlayingAudio ? <Pause size={20} /> : <Play size={20} style={{ marginLeft: '2px' }} />}
                </button>
                <div>
                  <h5 style={{ fontSize: '0.95rem', color: '#fff' }}>Aryan's Secret Voice Note</h5>
                  <p style={{ fontSize: '0.8rem', color: '#c4a9b6' }}>
                    {isPlayingAudio ? 'Playing romantic note...' : 'Tap to listen to message'}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ff2a6d' }}>
                <Volume2 size={20} className={isPlayingAudio ? 'animate-pulse-glow' : ''} />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SecretLock;
