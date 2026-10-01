import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { projectData } from '../data/projectData';
import BrandLogo from './BrandLogo';

export default function Footer({ onOpenEnquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#11291F] text-[#F5F2EA] pt-20 pb-12 px-6 md:px-12 border-t border-[#B99A5B]/20 relative bg-grain">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#B99A5B]/20">
          
          {/* Brand & Developer Info (5 Cols) */}
          <div className="md:col-span-5 space-y-6">
            <a href="#" className="inline-block">
              <BrandLogo className="w-12 h-12" showText={true} />
            </a>

            <p className="text-xs text-[#EDE7D8]/70 font-sans leading-relaxed max-w-sm">
              A proposed 3600-acre premium open-plots and plotted-development destination developed by <span className="text-white font-semibold">{projectData.developer}</span>.
            </p>

            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-widest text-[#B99A5B] font-semibold block mb-1">
                Corporate Office
              </span>
              <p className="text-xs text-[#EDE7D8]/80 font-sans leading-relaxed">
                {projectData.contacts.office.fullAddress}
              </p>
            </div>
          </div>

          {/* Navigation Links (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B99A5B] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-[#EDE7D8]/80 font-sans uppercase tracking-wider">
              {projectData.navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#B99A5B] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Inquiries & Contacts (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B99A5B] font-semibold block">
              Contact Leadership
            </span>
            
            <div className="space-y-2 text-xs font-sans">
              <p className="text-white font-semibold">{projectData.contacts.manager} — Marketing Manager</p>
              <div className="space-y-1 text-[#EDE7D8]/80">
                <a href={`tel:${projectData.contacts.phones[0]}`} className="block hover:text-[#B99A5B] font-mono">
                  +91 {projectData.contacts.phones[0]}
                </a>
                <a href={`tel:${projectData.contacts.phones[1]}`} className="block hover:text-[#B99A5B] font-mono">
                  +91 {projectData.contacts.phones[1]}
                </a>
                <a href={`mailto:${projectData.contacts.email}`} className="block hover:text-[#B99A5B] pt-1">
                  {projectData.contacts.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-2.5 bg-[#B99A5B] text-[#151815] font-semibold text-[11px] uppercase tracking-widest rounded-full hover:bg-white transition-colors"
              >
                Enquire Online
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#EDE7D8]/50 font-sans">
          <div>
            © {new Date().getFullYear()} Fortune Infra Developers Private Limited. All rights reserved.
          </div>

          <div className="text-center sm:text-right">
            <span>Fortune Butterfly City — Proposed 3600 Acres Plotted Development</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full border border-[#B99A5B]/30 text-[#B99A5B] hover:bg-[#B99A5B] hover:text-[#151815] transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
