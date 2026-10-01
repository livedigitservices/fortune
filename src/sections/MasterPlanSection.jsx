import React from 'react';
import { Compass, FileText, Lock, Sparkles } from 'lucide-react';
import { projectData } from '../data/projectData';

export default function MasterPlanSection({ onOpenEnquiry }) {
  return (
    <section
      id="masterplan"
      className="py-24 md:py-36 bg-[#17382B] text-[#F5F2EA] px-6 md:px-12 relative overflow-hidden bg-grain"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A5B] font-semibold block">
            08 / ARCHITECTURAL BLUEPRINT
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-light uppercase text-[#F5F2EA]">
            MASTER PLAN <br />
            <span className="italic font-light text-[#B99A5B]">DETAILS COMING SOON.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#EDE7D8]/70 font-sans leading-relaxed">
            The grand 3600-acre spatial layout, sector divisions, and boulevard alignments are undergoing detailed finalization by Fortune Infra's urban design consultants.
          </p>
        </div>

        {/* Architectural Blueprint Placeholder Frame */}
        <div className="relative max-w-5xl mx-auto rounded-3xl border border-[#B99A5B]/30 bg-[#11291F] p-8 md:p-16 text-center shadow-2xl overflow-hidden">
          
          {/* Blueprint Grid Lines Styling */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-[#B99A5B] 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 flex flex-col items-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#17382B] border border-[#B99A5B]/40 flex items-center justify-center text-[#B99A5B]">
              <Compass className="w-8 h-8 animate-spin-slow" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#B99A5B] font-mono">
                Project Scale: Proposed 3600 Acres
              </span>
              <h3 className="font-display text-3xl font-light text-white">
                Official Sector Map & CAD Blueprint
              </h3>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#17382B] border border-[#B99A5B]/30 text-xs text-[#EDE7D8]">
              <Lock size={14} className="text-[#B99A5B]" />
              <span>Under Finalization for Direct Client Disclosure</span>
            </div>

            <p className="text-xs text-[#EDE7D8]/60 font-sans max-w-md">
              Be among the first to receive the official master layout draft and sector plan upon release.
            </p>

            <button
              onClick={onOpenEnquiry}
              data-cursor="REQUEST"
              className="mt-4 px-8 py-4 bg-[#B99A5B] hover:bg-white text-[#151815] font-semibold text-xs uppercase tracking-widest rounded-full transition-colors duration-300 shadow-xl flex items-center gap-2"
            >
              <FileText size={16} />
              <span>Register for Master Plan Release</span>
            </button>
          </div>

          {/* Decorative Corner Specs */}
          <div className="absolute top-6 left-6 text-[9px] font-mono text-[#B99A5B]/50 uppercase tracking-widest">
            CAD REF: FBC-3600-MP
          </div>
          <div className="absolute bottom-6 right-6 text-[9px] font-mono text-[#B99A5B]/50 uppercase tracking-widest">
            FORTUNE INFRA DESIGN LAB
          </div>
        </div>

      </div>
    </section>
  );
}
