import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Heart, X, Maximize2, Sparkles } from 'lucide-react';

const galleryPhotos = [
  {
    id: 1,
    title: 'Starry Night Serenade',
    src: '/images/hero.png',
    caption: 'Under the twinkling lights of a million stars, holding each other close.',
    span: 'col-span-2',
  },
  {
    id: 2,
    title: 'Cozy Coffee Date',
    src: '/images/coffee.png',
    caption: 'Warm espresso cups, sweet laughter, and stolen glances.',
    span: 'col-span-1',
  },
  {
    id: 3,
    title: 'Crimson Sunset Walk',
    src: '/images/sunset.png',
    caption: 'Golden beach shore, gentle sea waves, and endless warmth.',
    span: 'col-span-1',
  },
  {
    id: 4,
    title: 'Fairytale Proposal',
    src: '/images/proposal.png',
    caption: 'The moment two promises became one shared forever.',
    span: 'col-span-2',
  },
];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section
      id="gallery"
      style={{
        padding: '100px 24px',
        position: 'relative',
        zIndex: 2,
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div className="glass-pill" style={{ marginBottom: '16px' }}>
          <ImageIcon size={14} color="#f7d070" />
          <span style={{ fontSize: '0.85rem', color: '#ffd1dc', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Captured Memories
          </span>
        </div>

        <h2 className="font-serif text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', marginBottom: '16px' }}>
          Romantic Photo Gallery
        </h2>
        <p style={{ color: '#c4a9b6', fontSize: '1.1rem', maxWidth: '550px', margin: '0 auto' }}>
          A visual journey through the sweetest moments captured in the lives of Aryan & Hiya.
        </p>
      </div>

      {/* Photo Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {galleryPhotos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            onClick={() => setSelectedPhoto(photo)}
            className="glass-panel"
            style={{
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
              borderRadius: '24px',
              padding: '10px',
            }}
          >
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '18px', overflow: 'hidden' }}>
              <img
                src={photo.src}
                alt={photo.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(13,6,10,0.85) 0%, transparent 60%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '20px',
                }}
                className="gallery-hover-overlay"
              >
                <div>
                  <h4 className="font-serif" style={{ fontSize: '1.4rem', color: '#fff' }}>
                    {photo.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#ffd1dc' }}>{photo.caption}</p>
                </div>
              </div>
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
                maxWidth: '800px',
                width: '100%',
                padding: '20px',
                position: 'relative',
                background: 'rgba(20, 8, 17, 0.95)',
                border: '1px solid rgba(255,42,109,0.3)',
              }}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
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

              <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '16px' }}>
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  style={{ width: '100%', maxHeight: '550px', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '8px 12px' }}>
                <h3 className="font-serif text-gradient" style={{ fontSize: '1.8rem', marginBottom: '6px' }}>
                  {selectedPhoto.title}
                </h3>
                <p style={{ color: '#c4a9b6', fontSize: '1rem' }}>{selectedPhoto.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
