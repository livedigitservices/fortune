import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Layers } from 'lucide-react';
import { projectData } from '../data/projectData';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalProjectsSection({ onOpenEnquiry }) {
  const targetRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Only run GSAP horizontal pin animation on desktop (> 1024px)
    const isDesktop = window.innerWidth >= 1024;
    
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      const scrollWidth = scrollContainerRef.current.scrollWidth - window.innerWidth;

      gsap.to(scrollContainerRef.current, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: targetRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${scrollWidth}`,
          invalidateOnRefresh: true,
        }
      });
    }, targetRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="phases"
      ref={targetRef}
      className="bg-[#17382B] text-[#F5F2EA] relative overflow-hidden bg-grain py-20 lg:py-0"
    >
      {/* Desktop Horizontal Container */}
      <div className="hidden lg:flex min-h-screen items-center">
        <div
          ref={scrollContainerRef}
          className="flex flex-nowrap items-center px-16 space-x-16 w-max"
        >
          {/* Section Header Card */}
          <div className="w-[450px] flex-shrink-0 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B99A5B] font-semibold flex items-center gap-2">
              <Layers size={14} />
              05 / MASTER DEVELOPMENT PHASES
            </span>
            <h2 className="font-display text-5xl font-light uppercase leading-[0.95] text-[#F5F2EA]">
              PLANNED <br />
              <span className="italic text-[#B99A5B]">DESTINATION</span> <br />
              ZONES.
            </h2>
            <p className="text-xs text-[#EDE7D8]/70 font-sans leading-relaxed">
              Explore the proposed land sectors comprising Fortune Butterfly City's 3600-acre master plan.
            </p>
            <div className="pt-4 flex items-center gap-2 text-xs uppercase tracking-widest text-[#B99A5B]">
              <span>Scroll horizontally to view phases</span>
              <ArrowRight size={16} className="animate-pulse" />
            </div>
          </div>

          {/* Project Items */}
          {projectData.horizontalProjects.map((proj) => (
            <div
              key={proj.id}
              data-cursor={proj.phase}
              className="w-[600px] flex-shrink-0 bg-[#11291F] border border-[#B99A5B]/30 rounded-3xl p-8 flex flex-col justify-between h-[580px] shadow-2xl relative overflow-hidden group"
            >
              {/* Background preview image */}
              <div className="relative h-72 rounded-2xl overflow-hidden mb-6">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#17382B]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-[#B99A5B] tracking-widest uppercase">
                  {proj.phase}
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-[#B99A5B] font-semibold block">
                  {proj.category}
                </span>
                <h3 className="font-display text-3xl font-light text-[#F5F2EA]">
                  {proj.title}
                </h3>
                <p className="text-xs text-[#EDE7D8]/70 font-sans leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#B99A5B]/20 flex items-center justify-between">
                <button
                  onClick={onOpenEnquiry}
                  className="text-xs uppercase tracking-widest text-[#B99A5B] hover:text-white font-semibold flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                >
                  <span>Request Phase Details</span>
                  <ArrowRight size={14} />
                </button>
                <span className="font-mono text-xs text-white/30">{proj.id}</span>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Mobile Vertical Container */}
      <div className="lg:hidden px-6 space-y-12">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A5B] font-semibold">
            05 / MASTER DEVELOPMENT PHASES
          </span>
          <h2 className="font-display text-4xl font-light uppercase text-[#F5F2EA]">
            PLANNED <span className="italic text-[#B99A5B]">DESTINATION</span> ZONES
          </h2>
        </div>

        <div className="space-y-8">
          {projectData.horizontalProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#11291F] border border-[#B99A5B]/30 rounded-2xl p-6 space-y-4 shadow-lg"
            >
              <div className="relative h-56 rounded-xl overflow-hidden">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#17382B] px-3 py-1 rounded-full text-[10px] font-mono text-[#B99A5B]">
                  {proj.phase}
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#B99A5B] font-semibold block">
                {proj.category}
              </span>
              <h3 className="font-display text-2xl font-light text-[#F5F2EA]">
                {proj.title}
              </h3>
              <p className="text-xs text-[#EDE7D8]/70 font-sans">
                {proj.description}
              </p>
              <button
                onClick={onOpenEnquiry}
                className="w-full py-3 bg-[#B99A5B] text-[#151815] font-semibold text-xs uppercase tracking-widest rounded-full"
              >
                Request Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
