import React from 'react';
import { MapPin, Navigation, Compass, Globe } from 'lucide-react';
import { projectData } from '../data/projectData';

export default function LocationSection({ onOpenEnquiry }) {
  return (
    <section
      id="location"
      className="py-24 md:py-36 bg-[#F5F2EA] text-[#151815] px-6 md:px-12 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A5B] font-semibold block">
            09 / STRATEGIC CONNECTIVITY
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-light uppercase text-[#17382B]">
            PROJECT LOCATION <br />
            <span className="italic font-light text-[#B99A5B]">DETAILS COMING SOON.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#77766F] font-sans leading-relaxed">
            Exact project site positioning, access road maps, and micro-market distance matrices will be officially announced shortly.
          </p>
        </div>

        {/* Minimal Luxury Interactive Map Canvas Placeholder */}
        <div className="relative rounded-3xl overflow-hidden bg-[#17382B] text-[#F5F2EA] border border-[#B99A5B]/30 h-[450px] md:h-[550px] shadow-2xl flex items-center justify-center p-8 bg-grain">
          
          {/* Map Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#B99A5B 1px, transparent 1px), linear-gradient(90deg, #B99A5B 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />

          <div className="relative z-10 text-center max-w-lg space-y-6">
            <div className="inline-flex p-4 rounded-full bg-[#B99A5B] text-[#151815] shadow-lg animate-pulse">
              <MapPin size={32} />
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#B99A5B] block mb-2">
                Hyderabad Metro Growth Corridor
              </span>
              <h3 className="font-display text-3xl font-light text-white">
                Fortune Butterfly City Site
              </h3>
            </div>

            <p className="text-xs text-[#EDE7D8]/70 font-sans leading-relaxed">
              Official site location blueprints and driving route guides are available directly via {projectData.contacts.manager} at Fortune House, Jubilee Hills.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenEnquiry}
                data-cursor="LOCATION"
                className="px-8 py-3.5 bg-[#B99A5B] hover:bg-white text-[#151815] font-semibold text-xs uppercase tracking-widest rounded-full transition-colors shadow-lg"
              >
                Request Verified Location Map
              </button>
              <a
                href={`tel:${projectData.contacts.phones[0]}`}
                className="px-6 py-3.5 border border-white/30 text-xs font-semibold uppercase tracking-widest text-white rounded-full hover:border-[#B99A5B]"
              >
                Call Office
              </a>
            </div>
          </div>

          {/* Coordinates HUD overlay */}
          <div className="absolute top-6 left-6 text-[10px] font-mono text-[#B99A5B]/60 uppercase tracking-widest flex items-center gap-2">
            <Navigation size={12} />
            <span>HYD METRO REGION</span>
          </div>

          <div className="absolute bottom-6 left-6 text-[10px] font-mono text-[#B99A5B]/60 uppercase tracking-widest flex items-center gap-2">
            <Globe size={12} />
            <span>FORTUNE INFRA DEVELOPERS</span>
          </div>

        </div>

      </div>
    </section>
  );
}
