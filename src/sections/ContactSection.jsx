import React from 'react';
import { Phone, Mail, MapPin, Building, ArrowUpRight, Navigation } from 'lucide-react';
import { projectData } from '../data/projectData';

export default function ContactSection() {
  const office = projectData.contacts.office;

  return (
    <section
      id="contact"
      className="py-24 md:py-36 bg-[#F5F2EA] text-[#151815] px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#151815]/10 pb-6 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A5B] font-semibold">
            12 / OFFICIAL HEADQUARTERS
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#77766F] hidden sm:block">
            Fortune Infra Developers Private Limited
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Manager & Contact Card (6 Cols) */}
          <div className="lg:col-span-6 bg-[#17382B] text-[#F5F2EA] rounded-3xl p-8 md:p-12 flex flex-col justify-between shadow-2xl bg-grain">
            <div className="space-y-6">
              <span className="px-3.5 py-1 bg-[#B99A5B] text-[#151815] rounded-full text-[10px] uppercase tracking-widest font-semibold inline-block">
                Project Marketing Leadership
              </span>

              <h3 className="font-display text-4xl md:text-5xl font-light text-[#F5F2EA]">
                {projectData.contacts.manager}
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-[#B99A5B] font-semibold">
                {projectData.contacts.role}
              </p>

              <div className="space-y-4 pt-6 border-t border-[#B99A5B]/30">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-full bg-[#11291F] border border-[#B99A5B]/30 text-[#B99A5B]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#B99A5B] block">Direct Phone</span>
                    <a href={`tel:${projectData.contacts.phones[0]}`} className="font-mono text-base text-white hover:underline block font-semibold">
                      +91 {projectData.contacts.phones[0]}
                    </a>
                    <a href={`tel:${projectData.contacts.phones[1]}`} className="font-mono text-base text-white hover:underline block font-semibold">
                      +91 {projectData.contacts.phones[1]}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 pt-2">
                  <div className="p-2.5 rounded-full bg-[#11291F] border border-[#B99A5B]/30 text-[#B99A5B]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#B99A5B] block">Direct Email</span>
                    <a href={`mailto:${projectData.contacts.email}`} className="font-sans text-sm text-white hover:underline block font-semibold">
                      {projectData.contacts.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Call Now / Email CTAs */}
            <div className="mt-10 pt-6 border-t border-[#B99A5B]/20 flex flex-wrap gap-4">
              <a
                href={`tel:${projectData.contacts.phones[0]}`}
                className="flex-1 py-3.5 bg-[#B99A5B] hover:bg-white text-[#151815] font-semibold text-xs uppercase tracking-widest rounded-full text-center transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Phone size={14} />
                <span>Call Now</span>
              </a>
              <a
                href={`mailto:${projectData.contacts.email}`}
                className="flex-1 py-3.5 border border-white/30 hover:border-[#B99A5B] text-white hover:text-[#B99A5B] font-semibold text-xs uppercase tracking-widest rounded-full text-center transition-colors flex items-center justify-center gap-2"
              >
                <Mail size={14} />
                <span>Email Us</span>
              </a>
            </div>
          </div>

          {/* Office Address Card (6 Cols) */}
          <div className="lg:col-span-6 bg-[#EDE7D8]/60 border border-[#B99A5B]/20 rounded-3xl p-8 md:p-12 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <span className="px-3.5 py-1 bg-[#17382B] text-[#B99A5B] rounded-full text-[10px] uppercase tracking-widest font-semibold inline-block">
                Corporate Address
              </span>

              <h3 className="font-display text-4xl font-light text-[#17382B]">
                {office.building}
              </h3>

              <div className="space-y-2 font-sans text-sm text-[#151815]/80 leading-relaxed pt-2">
                <p className="font-semibold text-[#17382B]">{projectData.developer}</p>
                <p>{office.houseNo}, {office.road}</p>
                <p>{office.area}, {office.city} – {office.pincode}</p>
              </div>

              <div className="p-6 bg-white/70 rounded-2xl border border-[#B99A5B]/30 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[#B99A5B] font-semibold block">
                  Visiting Hours
                </span>
                <p className="text-xs text-[#77766F] font-sans">
                  Monday to Saturday: 09:30 AM – 06:30 PM <br />
                  Prior appointment recommended for site previews.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[#151815]/10">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(office.fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#17382B] hover:bg-[#263F32] text-[#F5F2EA] font-semibold text-xs uppercase tracking-widest rounded-full text-center transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <Navigation size={16} className="text-[#B99A5B]" />
                <span>Get Directions to Jubilee Hills Office</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
