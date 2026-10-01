import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import EnquiryModal from './components/EnquiryModal';

import HeroSection from './sections/HeroSection';
import IntroductionSection from './sections/IntroductionSection';
import AcresSection from './sections/AcresSection';
import OpenPlotsSection from './sections/OpenPlotsSection';
import InvestmentSection from './sections/InvestmentSection';
import HorizontalProjectsSection from './sections/HorizontalProjectsSection';
import WhyFortuneSection from './sections/WhyFortuneSection';
import GallerySection from './sections/GallerySection';
import MasterPlanSection from './sections/MasterPlanSection';
import LocationSection from './sections/LocationSection';
import AmenitiesSection from './sections/AmenitiesSection';
import EnquirySection from './sections/EnquirySection';
import ContactSection from './sections/ContactSection';
import FinalCTASection from './sections/FinalCTASection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll & Sync with GSAP ScrollTrigger
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F5F2EA] text-[#151815] selection:bg-[#B99A5B] selection:text-white">
      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* GSAP Preloader */}
      {loading && (
        <Preloader onComplete={() => setLoading(false)} />
      )}

      {/* Main Experience */}
      {!loading && (
        <div className="animate-fadeIn">
          <Navbar onOpenEnquiry={() => setIsEnquiryOpen(true)} />

          <main>
            <HeroSection onOpenEnquiry={() => setIsEnquiryOpen(true)} />
            <IntroductionSection />
            <AcresSection />
            <OpenPlotsSection />
            <InvestmentSection onOpenEnquiry={() => setIsEnquiryOpen(true)} />
            <HorizontalProjectsSection onOpenEnquiry={() => setIsEnquiryOpen(true)} />
            <WhyFortuneSection onOpenEnquiry={() => setIsEnquiryOpen(true)} />
            <GallerySection />
            <LocationSection onOpenEnquiry={() => setIsEnquiryOpen(true)} />
            <AmenitiesSection onOpenEnquiry={() => setIsEnquiryOpen(true)} />
            <EnquirySection />
            <ContactSection />
            <FinalCTASection onOpenEnquiry={() => setIsEnquiryOpen(true)} />
          </main>

          <Footer onOpenEnquiry={() => setIsEnquiryOpen(true)} />

          {/* Enquiry Modal Window */}
          <EnquiryModal
            isOpen={isEnquiryOpen}
            onClose={() => setIsEnquiryOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
