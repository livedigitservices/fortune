import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AcresSection() {
  const containerRef = useRef(null);
  const numberRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax image
      gsap.to(bgRef.current, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Number scale up & opacity
      gsap.fromTo(
        numberRef.current,
        { scale: 0.8, opacity: 0, y: 100 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          }
        }
      );

      // Text reveal
      gsap.from(textRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="acres"
      ref={containerRef}
      className="relative min-h-[90vh] flex flex-col justify-center items-center bg-[#17382B] text-[#F5F2EA] px-6 py-24 overflow-hidden select-none"
    >
      {/* Background Image backdrop with parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center filter grayscale brightness-50"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17382B] via-[#17382B]/60 to-[#17382B]" />
        <div className="absolute inset-0 bg-grain pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center">
        
        {/* Editorial Subtitle */}
        <span className="text-xs uppercase tracking-[0.4em] text-[#B99A5B] font-semibold mb-6">
          02 / PROPOSED LAND CANVAS
        </span>

        {/* Extremely Large 3600 Number */}
        <div
          ref={numberRef}
          data-cursor="3600 ACRES"
          className="font-display text-[120px] sm:text-[180px] md:text-[240px] lg:text-[300px] font-light leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#F5F2EA] via-[#EDE7D8] to-[#B99A5B]/40 drop-shadow-2xl my-[-20px] md:my-[-40px]"
        >
          7000
        </div>

        {/* Acres Unit & Vision Statement */}
        <div ref={textRef} className="space-y-4 max-w-2xl mt-4">
          <span className="font-display text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-widest text-[#B99A5B] block">
            ACRES
          </span>

          <h3 className="font-display text-2xl sm:text-3xl font-light uppercase text-[#F5F2EA] tracking-wide">
            A VISION DESIGNED AT SCALE.
          </h3>

          <p className="font-sans text-xs sm:text-sm text-[#EDE7D8]/70 leading-relaxed font-light">
            Providing unprecedented room for master planning, grand green boulevards, self-sustained community zones, and serene open-air freedom.
          </p>
        </div>

      </div>

      {/* Decorative Corner Accents */}
      <div className="absolute bottom-8 left-8 hidden md:block text-[10px] uppercase tracking-[0.3em] text-[#B99A5B]/60">
        Fortune Infra Scale Paradigm
      </div>
      <div className="absolute bottom-8 right-8 hidden md:block text-[10px] uppercase tracking-[0.3em] text-[#B99A5B]/60">
        Plotted Excellence
      </div>
    </section>
  );
}
