import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { projectData } from '../data/projectData';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTASection({ onOpenEnquiry }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.from(textRef.current.children, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%'
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#151815] text-[#F5F2EA] px-6 py-24 overflow-hidden select-none"
    >
      {/* Background Hero Photography */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center filter brightness-[0.5] contrast-[1.15]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=90')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151815] via-[#151815]/50 to-black/70" />
        <div className="absolute inset-0 bg-grain pointer-events-none" />
      </div>

      <div ref={textRef} className="relative z-10 max-w-6xl mx-auto text-center space-y-8 flex flex-col items-center">
        
        <span className="inline-block px-5 py-1.5 rounded-full border border-[#B99A5B]/40 bg-[#17382B]/80 text-[11px] font-sans uppercase tracking-[0.3em] text-[#B99A5B] font-semibold backdrop-blur-md">
          {projectData.developer}
        </span>

        <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light uppercase leading-[0.88] tracking-tight text-[#F5F2EA]">
          YOUR SPACE. <br />
          <span className="italic text-[#B99A5B] font-serif font-normal lowercase">your</span> VISION.
        </h2>

        <p className="max-w-xl text-sm sm:text-base text-[#EDE7D8]/80 font-sans font-light leading-relaxed">
          Embark on your plotted land ownership journey at Fortune Butterfly City. A proposed 3600-acre master-planned sanctuary.
        </p>

        <div className="pt-6">
          <button
            onClick={onOpenEnquiry}
            data-cursor="BEGIN"
            className="px-10 py-5 bg-[#B99A5B] hover:bg-[#F5F2EA] text-[#151815] font-semibold text-xs uppercase tracking-[0.25em] rounded-full transition-all duration-300 shadow-2xl hover:scale-105 flex items-center gap-3"
          >
            <span>Enquire Now</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
