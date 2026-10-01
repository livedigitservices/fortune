import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Maximize2, X } from 'lucide-react';
import { projectData } from '../data/projectData';

gsap.registerPlugin(ScrollTrigger);

export default function GallerySection() {
  const [activeLightBox, setActiveLightBox] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-item', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 md:py-36 bg-[#151815] text-[#F5F2EA] px-6 md:px-12 relative bg-grain"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#B99A5B] font-semibold block mb-2">
              07 / VISUAL PERSPECTIVES
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-light uppercase text-[#F5F2EA]">
              THE EDITORIAL <br />
              <span className="italic font-light text-[#B99A5B]">GALLERY.</span>
            </h2>
          </div>
          <p className="text-xs text-[#EDE7D8]/60 font-sans max-w-sm">
            Explore cinematic photography showcasing the scale, landscape, and spatial environment of Fortune Butterfly City.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projectData.galleryImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveLightBox(img)}
              data-cursor="EXPAND"
              className="gallery-item relative group rounded-3xl overflow-hidden cursor-pointer aspect-[16/10] border border-[#B99A5B]/20 shadow-2xl bg-[#17382B]"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Tag & Number */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                <span className="font-display text-2xl font-light text-[#B99A5B]">
                  {img.id}
                </span>
                <span className="px-3 py-1 bg-[#17382B]/80 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-[#B99A5B] font-semibold border border-[#B99A5B]/30">
                  {img.tag}
                </span>
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-light text-[#F5F2EA]">
                    {img.title}
                  </h3>
                  <p className="text-xs text-[#EDE7D8]/70 font-sans mt-1 max-w-md line-clamp-2">
                    {img.caption}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#B99A5B] text-[#151815] flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <Maximize2 size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightBox && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 animate-fadeIn">
          <button
            onClick={() => setActiveLightBox(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-3 rounded-full border border-white/20 hover:border-white transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="max-w-5xl w-full space-y-6">
            <div className="relative rounded-2xl overflow-hidden max-h-[75vh] flex items-center justify-center bg-black">
              <img
                src={activeLightBox.url}
                alt={activeLightBox.title}
                className="max-h-[75vh] w-auto object-contain rounded-2xl"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between text-[#F5F2EA] gap-4">
              <div>
                <span className="text-xs text-[#B99A5B] font-mono uppercase tracking-widest">
                  {activeLightBox.id} / {activeLightBox.tag}
                </span>
                <h3 className="font-display text-3xl font-light">{activeLightBox.title}</h3>
                <p className="text-xs text-[#EDE7D8]/70 font-sans mt-1">{activeLightBox.caption}</p>
              </div>
              <button
                onClick={() => setActiveLightBox(null)}
                className="px-6 py-2.5 bg-[#B99A5B] text-[#151815] rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-white"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
