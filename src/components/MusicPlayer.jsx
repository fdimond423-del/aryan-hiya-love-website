import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL || './';

const MusicPlayer = ({ isMuted, toggleAudio }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;

    if (!isMuted) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.log('Audio autoplay prevented:', err);
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
        bottom: '16px',
        right: '24px',
        zIndex: 90,
        background: 'rgba(20, 8, 17, 0.9)',
        backdropFilter: 'blur(18px)',
        border: '1px solid rgba(255, 42, 109, 0.4)',
        borderRadius: '999px',
        padding: '8px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.6), 0 0 25px rgba(255,42,109,0.3)',
      }}
    >
      {/* HTML5 Audio element loading "Die With A Smile" custom MP3 file */}
      <audio ref={audioRef} src={`${baseUrl}audio/love_song.mp3`} loop preload="auto" />

      <button
        onClick={toggleAudio}
        style={{
          width: '38px',
          height: '38px',
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
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} className="animate-pulse-glow" />}
      </button>

      <div>
        <div style={{ fontSize: '0.84rem', color: '#fff', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Music size={14} color="#f7d070" /> Die With A Smile ❤️
        </div>
        <div style={{ fontSize: '0.72rem', color: '#ffd1dc' }}>
          {isMuted ? 'Tap icon to play song' : 'Playing Lady Gaga & Bruno Mars Mix 🎵'}
        </div>
      </div>

      {/* Visualizer Waves */}
      {!isMuted && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '16px' }}>
          <span style={waveStyle(0.1)} />
          <span style={waveStyle(0.4)} />
          <span style={waveStyle(0.7)} />
          <span style={waveStyle(0.3)} />
        </div>
      )}
    </div>
  );
};

const waveStyle = (delay) => ({
  width: '3px',
  height: '100%',
  background: '#ff2a6d',
  borderRadius: '2px',
  animation: `pulseGlow 1.2s ease-in-out infinite ${delay}s`,
});

export default MusicPlayer;
