import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL || './';

const galleryPhotos = [
  {
    id: 1,
    title: 'Starry Night Serenade',
    src: `${baseUrl}images/hero.png`,
    caption: 'Under the twinkling lights of a million stars, holding each other close.',
  },
  {
    id: 2,
    title: 'Cozy Coffee Date',
    src: `${baseUrl}images/coffee.png`,
    caption: 'Warm espresso cups, sweet laughter, and stolen glances.',
  },
  {
    id: 3,
    title: 'Crimson Sunset Walk',
    src: `${baseUrl}images/sunset.png`,
    caption: 'Golden beach shore, gentle sea waves, and endless warmth.',
  },
  {
    id: 4,
    title: 'Fairytale Proposal',
    src: `${baseUrl}images/proposal.png`,
    caption: 'The moment two promises became one shared forever.',
  },
];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section
      id="gallery"
      style={{
        padding: '24px',
        position: 'relative',
        zIndex: 2,
        maxWidth: '1100px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div className="glass-pill" style={{ marginBottom: '12px' }}>
          <ImageIcon size={14} color="#f7d070" />
          <span style={{ fontSize: '0.85rem', color: '#ffd1dc', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Captured Memories
          </span>
        </div>

        <h2 className="font-serif text-gradient" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', marginBottom: '10px' }}>
          Romantic Photo Gallery
        </h2>
        <p style={{ color: '#c4a9b6', fontSize: '1rem', maxWidth: '550px', margin: '0 auto' }}>
          A visual journey through the sweetest moments captured in the lives of Aryan Soni & Hiya.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
        }}
      >
        {galleryPhotos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            onClick={() => setSelectedPhoto(photo)}
            className="glass-panel"
            style={{
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
              borderRadius: '20px',
              padding: '8px',
            }}
          >
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '14px', overflow: 'hidden' }}>
              <img
                src={photo.src}
                alt={photo.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div style={{ padding: '8px 4px' }}>
              <h4 className="font-serif" style={{ fontSize: '1.1rem', color: '#fff' }}>
                {photo.title}
              </h4>
              <p style={{ fontSize: '0.78rem', color: '#ffd1dc' }}>{photo.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              background: 'rgba(5, 2, 4, 0.9)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel"
              style={{
                maxWidth: '750px',
                width: '100%',
                padding: '16px',
                position: 'relative',
                background: 'rgba(20, 8, 17, 0.95)',
                border: '1px solid rgba(255,42,109,0.3)',
              }}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                }}
              >
                <X size={20} />
              </button>

              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '12px' }}>
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  style={{ width: '100%', maxHeight: '480px', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '4px 8px' }}>
                <h3 className="font-serif text-gradient" style={{ fontSize: '1.6rem', marginBottom: '4px' }}>
                  {selectedPhoto.title}
                </h3>
                <p style={{ color: '#c4a9b6', fontSize: '0.95rem' }}>{selectedPhoto.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
