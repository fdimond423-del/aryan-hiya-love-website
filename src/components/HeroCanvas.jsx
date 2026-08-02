import React, { useEffect, useRef } from 'react';

const HeroCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle pool
    const particles = [];
    const particleCount = 45;

    class HeartParticle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 100;
        this.size = Math.random() * 14 + 8;
        this.speedY = Math.random() * 1.2 + 0.5;
        this.speedX = Math.sin(Math.random() * Math.PI) * 0.8;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 1.5;
        this.color = Math.random() > 0.4 ? '#ff2a6d' : (Math.random() > 0.5 ? '#f7d070' : '#ffd1dc');
      }

      update() {
        this.y -= this.speedY;
        this.x += Math.sin(this.y * 0.01) + this.speedX;
        this.rotation += this.rotationSpeed;

        if (this.y < -50) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;

        // Draw Heart Path
        ctx.beginPath();
        const topCurveHeight = this.size * 0.3;
        ctx.moveTo(0, topCurveHeight);
        ctx.bezierCurveTo(0, 0, -this.size / 2, 0, -this.size / 2, topCurveHeight);
        ctx.bezierCurveTo(-this.size / 2, (this.size + topCurveHeight) / 2, 0, this.size, 0, this.size);
        ctx.bezierCurveTo(0, this.size, this.size / 2, (this.size + topCurveHeight) / 2, this.size / 2, topCurveHeight);
        ctx.bezierCurveTo(this.size / 2, 0, 0, 0, 0, topCurveHeight);
        ctx.closePath();
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new HeartParticle());
    }

    // Cursor interactive trail
    let mouseParticles = [];
    const handleMouseMove = (e) => {
      if (Math.random() > 0.3) return;
      mouseParticles.push({
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 10 + 6,
        opacity: 0.9,
        color: '#ff2a6d',
        vy: (Math.random() - 0.5) * 2,
        vx: (Math.random() - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render floating background hearts
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Render cursor mouse particles
      for (let i = mouseParticles.length - 1; i >= 0; i--) {
        const mp = mouseParticles[i];
        mp.x += mp.vx;
        mp.y += mp.vy;
        mp.opacity -= 0.02;

        if (mp.opacity <= 0) {
          mouseParticles.splice(i, 1);
        } else {
          ctx.save();
          ctx.globalAlpha = mp.opacity;
          ctx.fillStyle = mp.color;
          ctx.beginPath();
          ctx.arc(mp.x, mp.y, mp.size / 2, 0, Math.PI * 2);
          ctx.shadowColor = mp.color;
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
};

export default HeroCanvas;
