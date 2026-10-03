import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import { projectData } from '../data/projectData';

gsap.registerPlugin(ScrollTrigger);

export default function InvestmentSection({ onOpenEnquiry }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power2.out',
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
      className="py-24 md:py-32 bg-[#151815] text-[#F5F2EA] px-6 md:px-12 relative overflow-hidden bg-grain"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div ref={textRef} className="lg:col-span-7 space-y-8">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B99A5B] font-semibold block">
              04 / RESPONSIBLE LAND OWNERSHIP
            </span>

            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-light uppercase leading-[0.95] text-[#F5F2EA]">
              A PLACE TO INVEST <br />
              <span className="italic font-light text-[#B99A5B]">IN YOUR FUTURE.</span>
            </h2>

            <p className="font-sans text-sm md:text-base text-[#EDE7D8]/80 leading-relaxed font-light max-w-xl">
              Land represents stability and long-term security. Own a space that can become your next destination, designed around open vistas, planned scale, and developer integrity by {projectData.developer}.
            </p>

            {/* Pillar Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-[#17382B]/60 border border-[#B99A5B]/20 rounded-2xl">
                <ShieldCheck className="w-6 h-6 text-[#B99A5B] mb-3" />
                <h4 className="font-display text-xl font-light text-[#F5F2EA] mb-1">
                  Developer Reliability
                </h4>
                <p className="text-xs text-[#EDE7D8]/60 font-sans">
                  Steered by Fortune Infra's established track record in land development.
                </p>
              </div>

              <div className="p-6 bg-[#17382B]/60 border border-[#B99A5B]/20 rounded-2xl">
                <Award className="w-6 h-6 text-[#B99A5B] mb-3" />
                <h4 className="font-display text-xl font-light text-[#F5F2EA] mb-1">
                  Generational Legacy
                </h4>
                <p className="text-xs text-[#EDE7D8]/60 font-sans">
                  A tangible asset to hold, pass down, and build upon for generations.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenEnquiry}
                data-cursor="ENQUIRE"
                className="px-8 py-4 bg-[#B99A5B] hover:bg-[#F5F2EA] text-[#151815] font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-xl"
              >
                Schedule Private Consultation
              </button>
            </div>
          </div>

          {/* Right Image Visual - Featuring 8K HD Project Photo 5 */}
          <div className="lg:col-span-5">
            <div
              data-cursor="DESTINATION"
              className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-[#B99A5B]/30 shadow-2xl group"
            >
              <img
                src="/projects/project_5.jpg"
                alt="Fortune Butterfly City Terrace Estate Sanctuary"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-95 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151815] via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 text-center p-6 bg-[#17382B]/85 backdrop-blur-md rounded-2xl border border-[#B99A5B]/30">
                <span className="font-display text-2xl font-light text-[#F5F2EA] block">
                  "OWN A SPACE THAT CAN BECOME YOUR NEXT DESTINATION."
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
