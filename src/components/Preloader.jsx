import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import BrandLogo from './BrandLogo';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const counterRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const counts = [0, 25, 50, 75, 100];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex += 1;
      if (currentIndex < counts.length) {
        setProgress(counts[currentIndex]);
      } else {
        clearInterval(interval);
        runExitAnimation();
      }
    }, 280);

    const runExitAnimation = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });

      tl.to(counterRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.inOut'
      })
      .to(logoRef.current, {
        scale: 1.15,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.inOut'
      }, '-=0.3')
      .to(textRef.current, {
        y: -60,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.inOut'
      }, '-=0.4')
      .to(containerRef.current, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 1.0,
        ease: 'expo.inOut'
      }, '-=0.3');
    };

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-[#17382B] text-[#F5F2EA] flex flex-col justify-between p-8 md:p-16 select-none bg-grain"
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
    >
      {/* Top Header */}
      <div className="flex justify-between items-center text-xs tracking-[0.3em] uppercase opacity-70 text-[#B99A5B]">
        <span>Fortune Infra Developers</span>
        <span>Proposed 3600 Acres</span>
      </div>

      {/* Main Title Center with Brand Butterfly Emblem */}
      <div className="my-auto text-center flex flex-col items-center">
        <div ref={logoRef} className="mb-6 animate-pulse">
          <img
            src="/brand-logo-transparent.png"
            alt="Fortune Butterfly City Logo"
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain filter drop-shadow-[0_0_25px_rgba(185,154,91,0.6)]"
          />
        </div>

        <div ref={textRef} className="space-y-2">
          <p className="text-xs uppercase tracking-[0.4em] text-[#B99A5B] font-sans font-semibold">
            Plotted Development Sanctuary
          </p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9]">
            FORTUNE<br />
            <span className="italic font-light text-[#B99A5B]">BUTTERFLY</span> CITY
          </h1>
        </div>
      </div>

      {/* Bottom Counter */}
      <div className="flex justify-between items-end border-t border-[#B99A5B]/20 pt-6">
        <span className="text-xs tracking-widest text-[#B99A5B] uppercase">Loading Experience</span>
        <div ref={counterRef} className="font-display text-5xl md:text-7xl font-light tracking-tighter text-[#F5F2EA]">
          {String(progress).padStart(2, '0')}%
        </div>
      </div>
    </div>
  );
}
