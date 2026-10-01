import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectData } from '../data/projectData';

gsap.registerPlugin(ScrollTrigger);

export default function IntroductionSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      gsap.from(imageRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        }
      });

      gsap.from(textRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="overview"
      ref={sectionRef}
      className="py-24 md:py-36 bg-[#F5F2EA] text-[#151815] px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Editorial Label */}
        <div className="flex items-center justify-between border-b border-[#151815]/10 pb-6 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A5B] font-semibold">
            01 / PROJECT OVERVIEW
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#77766F]">
            Fortune Infra Developers Private Limited
          </span>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Headline Column (7 Cols) */}
          <div className="lg:col-span-7">
            <h2
              ref={headingRef}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase leading-[0.92] tracking-tight text-[#17382B]"
            >
              MORE THAN <br />
              <span className="italic text-[#B99A5B] font-normal lowercase">a plot.</span> <br />
              A PLACE TO BUILD <br />
              YOUR NEXT <br />
              <span className="font-semibold">CHAPTER.</span>
            </h2>

            <div className="mt-12 p-8 bg-[#EDE7D8]/60 border-l-2 border-[#B99A5B] max-w-xl">
              <p className="font-sans text-sm md:text-base text-[#151815]/80 leading-relaxed italic">
                "We don't merely measure boundaries; we curate open horizons where legacy, stability, and generational values take root."
              </p>
              <span className="block mt-4 text-xs font-semibold uppercase tracking-wider text-[#17382B]">
                — Fortune Infra Philosophy
              </span>
            </div>
          </div>

          {/* Right Column Imagery & Copy (5 Cols) - Featuring Actual Aerial View */}
          <div className="lg:col-span-5 space-y-10">
            <div
              ref={imageRef}
              data-cursor="SANCTUARY"
              className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-2xl group border border-[#B99A5B]/30"
            >
              <img
                src="/projects/project_7.jpg"
                alt="Fortune Butterfly City Plotted Enclave Aerial View"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#B99A5B] font-semibold block">
                  Project Aerial View
                </span>
                <span className="font-display text-xl font-light">
                  {projectData.name} Plotted Enclave
                </span>
              </div>
            </div>

            <div ref={textRef} className="space-y-6">
              <h3 className="font-display text-2xl font-light text-[#17382B]">
                Unrivaled Scale in Plotted Development
              </h3>
              <p className="font-sans text-sm text-[#77766F] leading-relaxed">
                Fortune Butterfly City represents a grand envisioned expanse spanning {projectData.scale} {projectData.unit}. Spearheaded by {projectData.developer}, this open-plots ecosystem is crafted for discerning buyers seeking freedom of construction and pristine environmental surroundings.
              </p>
              
              <div className="pt-4 border-t border-[#151815]/10 flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
                <span className="text-[#17382B]">Developer</span>
                <span className="text-[#B99A5B]">{projectData.developer}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
