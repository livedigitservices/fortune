import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Maximize2, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function OpenPlotsSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      });

      gsap.from([card1Ref.current, card2Ref.current], {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card1Ref.current,
          start: 'top 80%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="py-24 md:py-36 bg-[#F5F2EA] text-[#151815] px-6 md:px-12 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div ref={titleRef} className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A5B] font-semibold block mb-4">
            03 / THE OPEN PLOTS PARADIGM
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-light uppercase leading-[0.95] text-[#17382B]">
            YOUR LAND. <br />
            <span className="italic font-light text-[#B99A5B]">YOUR VISION.</span> <br />
            YOUR FUTURE.
          </h2>
          <p className="mt-6 text-sm text-[#77766F] font-sans leading-relaxed">
            Plotted development grants you absolute autonomy over your architectural footprint, landscape designs, and long-term property legacy.
          </p>
        </div>

        {/* Editorial Asymmetric Dual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Feature Highlight 1 (7 cols) - Featuring Real Garden Villa Photo */}
          <div
            ref={card1Ref}
            className="lg:col-span-7 bg-[#EDE7D8]/40 border border-[#B99A5B]/20 rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group hover:border-[#B99A5B]/50 transition-colors duration-500"
          >
            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#17382B] text-[#B99A5B] flex items-center justify-center">
                <Maximize2 size={22} />
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-light text-[#17382B]">
                Architectural Freedom
              </h3>
              <p className="font-sans text-sm text-[#77766F] leading-relaxed max-w-lg">
                Unlike pre-built structures, open plots allow you to design custom villas, private garden retreats, or generational estates built precisely to your family's evolving lifestyle requirements.
              </p>
            </div>

            <div
              data-cursor="VIEW PLOTS"
              className="mt-10 relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-[#B99A5B]/20"
            >
              <img
                src="/projects/project_4.jpg"
                alt="Fortune Butterfly City Custom Garden Villa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 right-4 bg-[#17382B]/90 backdrop-blur-md text-[#B99A5B] px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold">
                Actual Villa Residence
              </div>
            </div>
          </div>

          {/* Feature Highlight 2 (5 cols) */}
          <div
            ref={card2Ref}
            className="lg:col-span-5 bg-[#17382B] text-[#F5F2EA] rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group shadow-2xl bg-grain"
          >
            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#B99A5B] text-[#151815] flex items-center justify-center">
                <Compass size={22} />
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-light text-[#F5F2EA]">
                Enduring Tangible Asset
              </h3>
              <p className="font-sans text-sm text-[#EDE7D8]/70 leading-relaxed">
                Land remains the premier fundamental asset class. Fortune Butterfly City offers curated open spaces, wide avenues, and natural surroundings within a master-planned community structure.
              </p>
            </div>

            <div className="mt-12 space-y-4 pt-6 border-t border-[#B99A5B]/30 relative z-10">
              <div className="flex items-center space-x-3 text-xs text-[#B99A5B]">
                <Sparkles size={16} />
                <span className="uppercase tracking-widest font-semibold">Master Community Focus</span>
              </div>
              <p className="text-xs text-[#EDE7D8]/60 font-sans italic">
                Environmentally harmonious layout designed for peace, privacy, and future value.
              </p>
            </div>

            {/* Decorative background glow */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#B99A5B]/10 rounded-full filter blur-3xl pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
}
