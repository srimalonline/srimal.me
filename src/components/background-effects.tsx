"use client";
import { useEffect, useRef } from 'react';

const BackgroundEffects = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particles = particlesRef.current;
    if (!particles) return;

    // Create floating particles
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
      particles.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (particles.contains(particle)) {
          particles.removeChild(particle);
        }
      }, 25000);
    };

    // Create initial particles
    for (let i = 0; i < 20; i++) {
      setTimeout(createParticle, i * 500);
    }

    // Continue creating particles
    const interval = setInterval(createParticle, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="gradient-bg" />
      <div ref={particlesRef} className="particles" />
    </>
  );
};

export default BackgroundEffects;