import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { projectData } from '../data/projectData';

gsap.registerPlugin(ScrollTrigger);

export default function WhyFortuneSection({ onOpenEnquiry }) {
  const [activeHover, setActiveHover] = useState(0);
  const sectionRef = useRef(null);

  const pillars = [
    {
      num: "01",
      title: "UNMATCHED SPACE",
      subtitle: "Proposed 3600 Acres Canvas",
      description: "Generous open space allocations ensuring uncrowded sanctuary environments and future development flexibility.",
      img: "/projects/project_6.jpg"
    },
    {
      num: "02",
      title: "LONG-TERM VISION",
      subtitle: "Clubhouse & Lifestyle Hub",
      description: "Conceived by Fortune Infra Developers to establish a landmark plotted ecosystem with swimming pools, parks, and club facilities.",
      img: "/projects/project_2.jpg"
    },
    {
      num: "03",
      title: "FUTURE-READY LOCATION",
      subtitle: "Hyderabad Corridor Enclave",
      description: "Situated in an expanding suburban quadrant connected to major metropolitan highways and trade hubs.",
      img: "/projects/project_7.jpg"
    },
    {
      num: "04",
      title: "OPEN OPPORTUNITY",
      subtitle: "Your Architectural Expression",
      description: "Complete design liberty over your estate construction without restrictive architectural templates.",
      img: "/projects/project_5.jpg"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-36 bg-[#F5F2EA] text-[#151815] px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#151815]/10 pb-8 mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#B99A5B] font-semibold block mb-2">
              06 / WHY FORTUNE BUTTERFLY CITY
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-light uppercase text-[#17382B]">
              THE PILLARS OF <br />
              <span className="italic font-light text-[#B99A5B]">DISTINCTION.</span>
            </h2>
          </div>
          <p className="text-xs text-[#77766F] font-sans max-w-sm">
            Hover over each element to preview the master principles defining Fortune Butterfly City.
          </p>
        </div>

        {/* Dynamic Accordion / Image Preview Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.num}
                onMouseEnter={() => setActiveHover(idx)}
                onClick={onOpenEnquiry}
                data-cursor="EXPLORE"
                className={`p-6 md:p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  activeHover === idx
                    ? 'bg-[#17382B] text-[#F5F2EA] border-[#B99A5B] shadow-xl scale-[1.01]'
                    : 'bg-white/50 text-[#151815] border-[#151815]/10 hover:border-[#B99A5B]/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <span className={`font-display text-2xl md:text-3xl font-light ${
                      activeHover === idx ? 'text-[#B99A5B]' : 'text-[#77766F]'
                    }`}>
                      {pillar.num}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-light tracking-wide">
                        {pillar.title}
                      </h3>
                      <span className={`text-[10px] uppercase tracking-widest block mt-0.5 ${
                        activeHover === idx ? 'text-[#B99A5B]' : 'text-[#77766F]'
                      }`}>
                        {pillar.subtitle}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className={`w-5 h-5 transition-transform duration-300 ${
                    activeHover === idx ? 'text-[#B99A5B] translate-x-1 -translate-y-1' : 'opacity-30'
                  }`} />
                </div>

                {activeHover === idx && (
                  <p className="mt-4 pt-4 border-t border-[#B99A5B]/20 text-xs md:text-sm text-[#EDE7D8]/80 font-sans leading-relaxed animate-fadeIn">
                    {pillar.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Dynamic Hover Preview Image featuring Actual PDF Project Photos */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-[#B99A5B]/30 shadow-2xl">
              {pillars.map((pillar, idx) => (
                <img
                  key={pillar.num}
                  src={pillar.img}
                  alt={pillar.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    activeHover === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#17382B]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                <span className="text-[10px] uppercase tracking-widest text-[#B99A5B] font-mono block">
                  {pillars[activeHover].num} — {pillars[activeHover].subtitle}
                </span>
                <span className="font-display text-2xl font-light">
                  {pillars[activeHover].title}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
