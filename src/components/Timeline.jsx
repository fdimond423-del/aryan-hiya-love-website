import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Heart, Sparkles, Coffee, Sun, Star } from 'lucide-react';

import heroImg from '../assets/hero.png';
import coffeeImg from '../assets/coffee.png';
import sunsetImg from '../assets/sunset.png';
import proposalImg from '../assets/proposal.png';

const milestones = [
  {
    id: 1,
    title: 'The Magical First Spark',
    date: 'February 14, 2024',
    location: 'Mumbai, India',
    icon: Sparkles,
    image: heroImg,
    description: 'The exact day two souls connected. A simple conversation turned into hours of endless laughter, revealing a bond deeper than words could describe.',
    tag: 'Chapter 1',
  },
  {
    id: 2,
    title: 'Warm Coffee & Stolen Glances',
    date: 'March 10, 2024',
    location: 'Cozy Corner Café',
    icon: Coffee,
    image: coffeeImg,
    description: 'Our first official coffee date. The aroma of roasted espresso, sweet giggles across the wooden table, and the moment Aryan realized Hiya was his dream come true.',
    tag: 'Chapter 2',
  },
  {
    id: 3,
    title: 'Golden Sunset Hand-in-Hand',
    date: 'October 25, 2024',
    location: 'Marine Sunset Beach',
    icon: Sun,
    image: sunsetImg,
    description: 'Walking beside the crashing ocean waves while the sky turned into shades of violet and crimson gold. Time stood completely still for Aryan and Hiya.',
    tag: 'Chapter 3',
  },
  {
    id: 4,
    title: 'The Promise of Forever',
    date: 'January 01, 2025',
    location: 'Under Starry Canopy',
    icon: Star,
    image: proposalImg,
    description: 'A magical proposal illuminated by soft fairy lights. "Will you be my forever?" — A resounding "Yes!" that sealed two hearts into one shared eternity.',
    tag: 'Chapter 4',
  },
];

const Timeline = () => {
  return (
    <section
      id="story"
      style={{
        padding: '24px',
        position: 'relative',
        zIndex: 2,
        maxWidth: '1100px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div className="glass-pill" style={{ marginBottom: '12px' }}>
          <Heart size={14} color="#ff2a6d" fill="#ff2a6d" />
          <span style={{ fontSize: '0.85rem', color: '#ffd1dc', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Our Journey of Togetherness
          </span>
        </div>

        <h2 className="font-serif text-gradient" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', marginBottom: '10px' }}>
          The Chapters of Our Love
        </h2>
        <p style={{ color: '#c4a9b6', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
          Every milestone, every smile, and every memory spent together by Aryan Soni & Hiya.
        </p>
      </div>

      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, transparent, #ff2a6d 15%, #f7d070 50%, #ff2a6d 85%, transparent)',
            boxShadow: '0 0 15px rgba(255, 42, 109, 0.5)',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {milestones.map((m, index) => {
            const isEven = index % 2 === 0;
            const Icon = m.icon;

            return (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto 1fr',
                  gap: '20px',
                  alignItems: 'center',
                }}
              >
                <div style={{ textAlign: isEven ? 'right' : 'left', order: isEven ? 1 : 3 }}>
                  <div className="glass-panel" style={{ padding: '20px', display: 'inline-block', width: '100%' }}>
                    <span
                      style={{
                        background: 'rgba(255,42,109,0.15)',
                        border: '1px solid rgba(255,42,109,0.3)',
                        color: '#ff2a6d',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        padding: '4px 12px',
                        borderRadius: '999px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        display: 'inline-block',
                        marginBottom: '8px',
                      }}
                    >
                      {m.tag}
                    </span>

                    <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '6px' }}>
                      {m.title}
                    </h3>

                    <div
                      style={{
                        display: 'flex',
                        gap: '12px',
                        justifyContent: isEven ? 'flex-end' : 'flex-start',
                        color: '#f7d070',
                        fontSize: '0.8rem',
                        marginBottom: '10px',
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={12} /> {m.date}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={12} /> {m.location}
                      </span>
                    </div>

                    <p style={{ color: '#c4a9b6', fontSize: '0.88rem', lineHeight: '1.5', marginBottom: '14px' }}>
                      {m.description}
                    </p>

                    <div
                      style={{
                        width: '100%',
                        height: '140px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      <img
                        src={m.image}
                        alt={m.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    order: 2,
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff2a6d, #e63956)',
                    border: '3px solid #0d060a',
                    boxShadow: '0 0 15px rgba(255, 42, 109, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    zIndex: 3,
                  }}
                >
                  <Icon size={20} />
                </div>

                <div style={{ order: isEven ? 3 : 1 }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
