import React from 'react';
import { Sparkles, ShieldCheck, Layers, Clock } from 'lucide-react';

export default function AmenitiesSection({ onOpenEnquiry }) {
  return (
    <section className="py-24 md:py-36 bg-[#151815] text-[#F5F2EA] px-6 md:px-12 relative bg-grain">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A5B] font-semibold block">
            10 / LIFESTYLE STANDARDS
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-light uppercase text-[#F5F2EA]">
            PROJECT AMENITIES <br />
            <span className="italic font-light text-[#B99A5B]">DETAILS COMING SOON.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#EDE7D8]/70 font-sans leading-relaxed">
            Detailed infrastructure features, lifestyle elements, and landscape specifications for Fortune Butterfly City will be released following regulatory approvals.
          </p>
        </div>

        {/* Elegant Placeholder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-3xl bg-[#17382B]/60 border border-[#B99A5B]/20 flex flex-col justify-between space-y-6">
            <div className="w-12 h-12 rounded-full bg-[#11291F] border border-[#B99A5B]/30 flex items-center justify-center text-[#B99A5B]">
              <Layers size={20} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#B99A5B] uppercase tracking-widest block mb-1">
                Infrastructure
              </span>
              <h3 className="font-display text-2xl font-light text-[#F5F2EA]">
                Master Infrastructure
              </h3>
              <p className="text-xs text-[#EDE7D8]/60 font-sans mt-2 leading-relaxed">
                Specifications for internal road networks, underground utilities, and power distribution systems are being compiled.
              </p>
            </div>
            <div className="text-[10px] font-mono text-[#B99A5B]/60 uppercase tracking-widest flex items-center gap-1.5">
              <Clock size={12} />
              <span>Specs Coming Soon</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#17382B]/60 border border-[#B99A5B]/20 flex flex-col justify-between space-y-6">
            <div className="w-12 h-12 rounded-full bg-[#11291F] border border-[#B99A5B]/30 flex items-center justify-center text-[#B99A5B]">
              <Sparkles size={20} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#B99A5B] uppercase tracking-widest block mb-1">
                Landscape
              </span>
              <h3 className="font-display text-2xl font-light text-[#F5F2EA]">
                Green Corridors
              </h3>
              <p className="text-xs text-[#EDE7D8]/60 font-sans mt-2 leading-relaxed">
                Expansive open spaces, tree-lined boulevards, and environmental buffer zones built across the proposed 3600 acres.
              </p>
            </div>
            <div className="text-[10px] font-mono text-[#B99A5B]/60 uppercase tracking-widest flex items-center gap-1.5">
              <Clock size={12} />
              <span>Specs Coming Soon</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#17382B]/60 border border-[#B99A5B]/20 flex flex-col justify-between space-y-6">
            <div className="w-12 h-12 rounded-full bg-[#11291F] border border-[#B99A5B]/30 flex items-center justify-center text-[#B99A5B]">
              <ShieldCheck size={20} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#B99A5B] uppercase tracking-widest block mb-1">
                Security
              </span>
              <h3 className="font-display text-2xl font-light text-[#F5F2EA]">
                Gated Boundaries
              </h3>
              <p className="text-xs text-[#EDE7D8]/60 font-sans mt-2 leading-relaxed">
                Compound boundary perimeter security design and entry portal access controls planned for the development.
              </p>
            </div>
            <div className="text-[10px] font-mono text-[#B99A5B]/60 uppercase tracking-widest flex items-center gap-1.5">
              <Clock size={12} />
              <span>Specs Coming Soon</span>
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenEnquiry}
            className="px-8 py-3.5 border border-[#B99A5B] text-[#B99A5B] hover:bg-[#B99A5B] hover:text-[#151815] text-xs font-semibold uppercase tracking-widest rounded-full transition-colors"
          >
            Register for Amenities Brochure Release
          </button>
        </div>

      </div>
    </section>
  );
}
