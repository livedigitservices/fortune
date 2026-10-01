import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Compass, ShieldCheck } from 'lucide-react';
import { projectData } from '../data/projectData';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({ onOpenEnquiry }) {
  const heroRef = useRef(null);
  const bgImageRef = useRef(null);
  const logoMarkRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Stagger Reveal
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        bgImageRef.current,
        { scale: 1.25, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
      )
      .fromTo(
        logoMarkRef.current,
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' },
        '-=1.4'
      )
      .fromTo(
        titleRef.current.children,
        { y: 80, opacity: 0, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
        { y: 0, opacity: 1, clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)', duration: 1.2, stagger: 0.15, ease: 'power4.out' },
        '-=1.0'
      )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.8'
      )
      .fromTo(
        statsRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      );

      // Scroll Parallax Effect
      gsap.to(bgImageRef.current, {
        yPercent: 20,
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#151815] text-[#F5F2EA] pt-28 pb-12 px-6 md:px-12 select-none"
    >
      {/* Background Hero Photography - Actual Fortune Butterfly City Project Photo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={bgImageRef}
          className="absolute inset-0 bg-cover bg-center filter brightness-[0.7] contrast-[1.1] transform"
          style={{
            backgroundImage: `url('/projects/project_1.png')`
          }}
        />
        {/* Dark Editorial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151815] via-[#151815]/40 to-black/60" />
        <div className="absolute inset-0 bg-grain pointer-events-none" />
      </div>

      {/* Top Meta info */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-xs tracking-[0.25em] uppercase text-[#B99A5B]">
        <div className="flex items-center gap-2">
          <ShieldCheck size={14} />
          <span>Fortune Infra Developers</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-white/70">
          <Compass size={14} className="text-[#B99A5B]" />
          <span>Hyderabad Headquarters</span>
        </div>
      </div>

      {/* Main Title Center */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8">
        <div ref={titleRef} className="space-y-1 sm:space-y-2">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight uppercase leading-[0.88] text-[#F5F2EA]">
            FORTUNE
          </h1>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight uppercase leading-[0.88] text-white">
            <span className="font-light italic font-serif text-[#B99A5B] lowercase">butterfly</span> CITY
          </h1>
        </div>

        <p className="mt-8 max-w-xl text-sm sm:text-base text-[#EDE7D8]/80 font-sans font-light leading-relaxed">
          A proposed <span className="text-white font-semibold">{projectData.scale} {projectData.unit}</span> plotted development by Fortune Infra Developers Private Limited. Designed for visionary land ownership and generational legacy.
        </p>

        {/* Hero CTA & Stats Bar */}
        <div className="mt-10 flex flex-wrap items-center gap-6" ref={ctaRef}>
          <button
            onClick={onOpenEnquiry}
            data-cursor="ENQUIRE"
            className="px-8 py-4 bg-[#B99A5B] hover:bg-[#F5F2EA] text-[#151815] font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-2xl hover:scale-105"
          >
            Enquire Now
          </button>
          
          <a
            href="#overview"
            data-cursor="EXPLORE"
            className="px-8 py-4 border border-[#F5F2EA]/30 hover:border-[#B99A5B] text-[#F5F2EA] hover:text-[#B99A5B] text-xs font-semibold uppercase tracking-widest rounded-full backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
          >
            <span>Explore The Project</span>
            <ArrowDown size={14} />
          </a>
        </div>
      </div>

      {/* Bottom Hero Info Bar */}
      <div
        ref={statsRef}
        className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10 text-[#F5F2EA]"
      >
        <div>
          <span className="block text-[10px] uppercase tracking-widest text-[#B99A5B]">Total Scale</span>
          <span className="font-display text-2xl md:text-3xl font-light text-white">3600 Acres</span>
        </div>
        <div>
          <span className="block text-[10px] uppercase tracking-widest text-[#B99A5B]">Development Type</span>
          <span className="font-display text-xl md:text-2xl font-light text-white">Open Plots</span>
        </div>
        <div>
          <span className="block text-[10px] uppercase tracking-widest text-[#B99A5B]">Developer</span>
          <span className="font-sans text-xs md:text-sm font-semibold text-white/90 truncate block">Fortune Infra Developers</span>
        </div>
        <div>
          <span className="block text-[10px] uppercase tracking-widest text-[#B99A5B]">Direct Contact</span>
          <span className="font-mono text-xs md:text-sm text-[#B99A5B] block font-semibold">+91 {projectData.contacts.phones[0]}</span>
        </div>
      </div>
    </section>
  );
}
