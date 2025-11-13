'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import heroContent from '@/lib/hero-content.json';

interface HeroSection {
  id: string;
  background: {
    type: 'image' | 'video';
    url: string;
    overlay: 'dark' | 'light' | 'gradient' | 'none';
  };
  headline: string;
  subheadline: string;
  cta: {
    text: string;
    url: string;
    style: 'primary' | 'secondary' | 'outline';
  };
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sections = heroContent.sections as HeroSection[];

  useEffect(() => {
    if (heroContent.autoplay) {
      const interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % sections.length);
          setIsAnimating(false);
        }, 500);
      }, heroContent.duration);

      return () => clearInterval(interval);
    }
  }, [sections.length]);

  const getOverlayClass = (overlay: string) => {
    switch (overlay) {
      case 'dark':
        return 'bg-black/50';
      case 'light':
        return 'bg-white/20';
      case 'gradient':
        return 'bg-gradient-to-br from-black/30 via-transparent to-black/20';
      default:
        return '';
    }
  };

  const getCtaStyle = () => {
    return 'px-8 py-4 font-semibold rounded-full hover-lift transition-all duration-300 inline-block bg-black border border-black hover:bg-gray-900 hover:border-gray-900 shadow-lg';
  };

  return (
    <div className="w-full h-auto min-h-[50vh] sm:min-h-[60vh] p-2 sm:p-4 md:p-6">
      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg">
        {/* Subtle minimal border */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-black/10"></div>
        
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`absolute inset-0 rounded-2xl sm:rounded-3xl transition-all duration-1000 ease-in-out overflow-hidden ${
              index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
            }`}
          >
          <div className="relative h-full w-full">
            <Image
              src={section.background.url}
              alt={section.headline}
              fill
              className={`object-cover object-center transition-transform duration-[8000ms] ease-linear ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
              priority={index === 0}
              unoptimized
            />
            
            {section.background.overlay !== 'none' && (
              <div className={`absolute inset-0 ${getOverlayClass(section.background.overlay)}`} />
            )}
            
            <div className="absolute inset-0 flex items-end justify-center p-4 sm:p-6 md:p-8 pb-8 sm:pb-12 md:pb-16">
              <div className={`text-center max-w-2xl sm:max-w-4xl lg:max-w-5xl mx-auto transition-all duration-1000 ${
                isAnimating ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
              }`}>
                <h1 className="mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight drop-shadow-lg animate-fade-in-up text-white">
                  {section.headline}
                </h1>

                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-6 sm:mb-8 lg:mb-10 drop-shadow-lg max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto text-white/90 animate-fade-in-up animation-delay-200 tracking-wide">
                  {section.subheadline}
                </p>

                <div className="flex justify-center">
                  <div className="relative">
                    <a
                      href={section.cta.url}
                      className={`${getCtaStyle()} text-sm sm:text-base animate-fade-in-up animation-delay-600 animate-bounce-in relative z-20 text-white`}
                      style={{
                        animationDelay: '0.8s',
                        animationFillMode: 'both',
                        willChange: 'transform',
                        color: 'white'
                      }}
                    >
                      {section.cta.text}
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      ))}
      </section>
    </div>
  );
}