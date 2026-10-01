import React from 'react';

export default function BrandLogo({ className = 'w-10 h-10', showText = false, textClassName = '' }) {
  return (
    <div className="flex items-center gap-3 group inline-flex select-none">
      {/* Enhanced Transparent Gold Butterfly Emblem Image */}
      <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
        <img
          src="/brand-logo-transparent.png"
          alt="Fortune Butterfly City Brand Logo"
          className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(185,154,91,0.4)] group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(185,154,91,0.7)] transition-all duration-500 ease-out"
        />
      </div>

      {showText && (
        <div className={`flex flex-col ${textClassName}`}>
          <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#F5F2EA] group-hover:text-[#B99A5B] transition-colors leading-tight">
            FORTUNE <span className="font-light italic text-[#B99A5B]">BUTTERFLY</span> CITY
          </span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#EDE7D8]/70 font-sans">
            Fortune Infra Developers
          </span>
        </div>
      )}
    </div>
  );
}

// Pure Scalable Vector SVG Butterfly Icon for Favicon and crisp inline uses
export function ButterflySvg({ className = "w-8 h-8 text-[#B99A5B]" }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Antennae */}
        <path d="M100 65 Q92 35 70 20" />
        <path d="M100 65 Q108 35 130 20" />
        <circle cx="68" cy="18" r="2.5" fill="currentColor" />
        <circle cx="132" cy="18" r="2.5" fill="currentColor" />

        {/* Central Body */}
        <path d="M100 50 Q105 75 100 110 Q95 75 100 50 Z" fill="currentColor" opacity="0.9" />

        {/* Left Upper Wing Main Outline */}
        <path d="M98 62 C70 40 30 30 18 50 C8 68 20 100 65 95 C82 93 96 82 98 62 Z" />
        {/* Left Upper Wing Internal Filigree Veins */}
        <path d="M35 48 C45 60 70 70 95 72" />
        <path d="M22 62 C38 75 65 82 92 84" />
        <path d="M50 42 C60 52 78 60 92 64" />
        <path d="M30 75 C45 84 65 87 85 88" />

        {/* Right Upper Wing Main Outline */}
        <path d="M102 62 C130 40 170 30 182 50 C192 68 180 100 135 95 C118 93 104 82 102 62 Z" />
        {/* Right Upper Wing Internal Filigree Veins */}
        <path d="M165 48 C155 60 130 70 105 72" />
        <path d="M178 62 C162 75 135 82 108 84" />
        <path d="M150 42 C140 52 122 60 108 64" />
        <path d="M170 75 C155 84 135 87 115 88" />

        {/* Left Lower Wing Main Outline */}
        <path d="M96 85 C75 92 45 105 48 128 C50 148 78 152 92 125 C96 112 96 95 96 85 Z" />
        {/* Left Lower Wing Internal Veins */}
        <path d="M62 102 C70 120 85 132 94 112" />
        <path d="M52 118 C65 130 82 138 92 122" />

        {/* Right Lower Wing Main Outline */}
        <path d="M104 85 C125 92 155 105 152 128 C150 148 122 152 108 125 C104 112 104 95 104 85 Z" />
        {/* Right Lower Wing Internal Veins */}
        <path d="M138 102 C130 120 115 132 106 112" />
        <path d="M148 118 C135 130 118 138 108 122" />
      </g>
    </svg>
  );
}
