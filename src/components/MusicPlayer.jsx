import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL || './';

const MusicPlayer = ({ isMuted, toggleAudio }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Global mobile interaction listener to trigger audio playback
  useEffect(() => {
    const handleFirstUserInteraction = () => {
      if (audioRef.current && isMuted) {
        // Attempt audio playback on user touch/click
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            // If autoplay succeeded, notify toggle
            if (isMuted) toggleAudio();
          })
          .catch(() => {});
      }
    };

    window.addEventListener('pointerdown', handleFirstUserInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstUserInteraction, { once: true });
    window.addEventListener('click', handleFirstUserInteraction, { once: true });

    return () => {
      window.removeEventListener('pointerdown', handleFirstUserInteraction);
      window.removeEventListener('touchstart', handleFirstUserInteraction);
      window.removeEventListener('click', handleFirstUserInteraction);
    };
  }, [isMuted, toggleAudio]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (!isMuted) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.log('Mobile audio autoplay waiting for touch interaction:', err);
            setIsPlaying(false);
          });
      }
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [isMuted]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '12px',
        right: '12px',
        zIndex: 90,
        background: 'rgba(20, 8, 17, 0.92)',
        backdropFilter: 'blur(18px)',
        border: '1px solid rgba(255, 42, 109, 0.4)',
        borderRadius: '999px',
        padding: '6px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.7), 0 0 20px rgba(255,42,109,0.3)',
      }}
    >
      <audio ref={audioRef} src={`${baseUrl}audio/love_song.mp3`} loop preload="auto" />

      <button
        onClick={toggleAudio}
        style={{
          width: '34px',
          height: '34px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ff2a6d, #e63956)',
          border: 'none',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 0 15px rgba(255,42,109,0.6)',
        }}
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} className="animate-pulse-glow" />}
      </button>

      <div>
        <div style={{ fontSize: '0.78rem', color: '#fff', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Music size={12} color="#f7d070" /> Die With A Smile ❤️
        </div>
        <div style={{ fontSize: '0.68rem', color: '#ffd1dc' }}>
          {isMuted ? 'Tap anywhere to play song' : 'Playing Lady Gaga & Bruno Mars Mix 🎵'}
        </div>
      </div>

      {!isMuted && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px', height: '14px' }}>
          <span style={waveStyle(0.1)} />
          <span style={waveStyle(0.4)} />
          <span style={waveStyle(0.7)} />
        </div>
      )}
    </div>
  );
};

const waveStyle = (delay) => ({
  width: '2px',
  height: '100%',
  background: '#ff2a6d',
  borderRadius: '2px',
  animation: `pulseGlow 1.2s ease-in-out infinite ${delay}s`,
});

export default MusicPlayer;
