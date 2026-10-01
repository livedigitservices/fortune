import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { projectData } from '../data/projectData';
import BrandLogo from './BrandLogo';

export default function Navbar({ onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Plot Vision', href: '#vision' },
    { name: 'Phases', href: '#phases' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#17382B]/95 backdrop-blur-md py-3 shadow-2xl border-b border-[#B99A5B]/20 text-[#F5F2EA]'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 text-[#F5F2EA]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo with Enhanced Brand Mark */}
          <a
            href="#"
            className="focus:outline-none"
            data-cursor="HOME"
          >
            <BrandLogo className="w-9 h-9 md:w-11 md:h-11" showText={true} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-[11px] uppercase tracking-[0.2em] font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 text-[#F5F2EA]/85 hover:text-[#B99A5B] transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B99A5B] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${projectData.contacts.phones[0]}`}
              className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-[#B99A5B] hover:text-white transition-colors"
            >
              <Phone size={14} />
              <span>{projectData.contacts.phones[0]}</span>
            </a>
            <button
              onClick={onOpenEnquiry}
              data-cursor="ENQUIRE"
              className="relative group overflow-hidden px-6 py-2.5 rounded-full border border-[#B99A5B] text-xs font-semibold uppercase tracking-widest text-[#151815] bg-[#B99A5B] hover:bg-[#F5F2EA] transition-colors duration-300 shadow-md"
            >
              <span className="relative z-10 flex items-center gap-1">
                Enquire Now
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-[#F5F2EA] hover:text-[#B99A5B] focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#17382B] text-[#F5F2EA] flex flex-col justify-between p-8 lg:hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-6'
        }`}
      >
        <div className="flex justify-between items-center border-b border-[#B99A5B]/20 pb-6">
          <BrandLogo className="w-10 h-10" showText={true} />
          <button
            onClick={toggleMobileMenu}
            className="text-[#F5F2EA] hover:text-[#B99A5B] focus:outline-none"
          >
            <X size={30} />
          </button>
        </div>

        <nav className="flex flex-col space-y-4 my-auto">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-2xl font-light text-[#F5F2EA] hover:text-[#B99A5B] transition-colors flex items-center justify-between group"
            >
              <span>{link.name}</span>
              <span className="text-xs font-sans text-[#B99A5B] opacity-0 group-hover:opacity-100 transition-opacity">
                0{idx + 1}
              </span>
            </a>
          ))}
        </nav>

        <div className="border-t border-[#B99A5B]/20 pt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest text-[#B99A5B]">Direct Inquiries</span>
            <a href={`tel:${projectData.contacts.phones[0]}`} className="text-sm font-semibold tracking-wider">
              +91 {projectData.contacts.phones[0]}
            </a>
            <a href={`tel:${projectData.contacts.phones[1]}`} className="text-sm font-semibold tracking-wider">
              +91 {projectData.contacts.phones[1]}
            </a>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEnquiry();
            }}
            className="w-full py-3 bg-[#B99A5B] text-[#151815] font-semibold uppercase tracking-widest text-xs rounded-full text-center"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </>
  );
}
