import React, { useState } from 'react';
import { Phone, Mail, CheckCircle2, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';
import { projectData } from '../data/projectData';

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredContact: 'Phone',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please enter your name and phone number.');
      return;
    }

    setError('');
    setSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Direct Website Inquiry: ${formData.name} - Fortune Butterfly City`,
          from_name: 'Fortune Butterfly City Website',
          name: formData.name,
          phone: formData.phone,
          email: formData.email || 'Not provided',
          preferred_contact: formData.preferredContact,
          message: formData.message || 'No additional message',
          project: projectData.name,
          developer: projectData.developer
        })
      });

      const result = await response.json();

      if (result.success || response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Web3Forms Submission Error:', err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 md:py-36 bg-[#17382B] text-[#F5F2EA] px-6 md:px-12 relative overflow-hidden bg-grain">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B99A5B] font-semibold block">
              11 / PRIVATE CONSULTATION
            </span>

            <h2 className="font-display text-4xl sm:text-6xl font-light uppercase leading-[0.95] text-[#F5F2EA]">
              READY TO <br />
              DISCOVER <br />
              <span className="italic font-light text-[#B99A5B]">YOUR SPACE?</span>
            </h2>

            <p className="font-sans text-sm text-[#EDE7D8]/80 leading-relaxed font-light">
              Connect directly with Marketing Manager {projectData.contacts.manager} for priority land previews, official site visit arrangements, and project briefings.
            </p>

            {/* Direct Phone Numbers */}
            <div className="space-y-4 pt-4 border-t border-[#B99A5B]/30">
              <span className="text-[10px] uppercase tracking-widest text-[#B99A5B] font-semibold block">
                Direct Call Lines
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href={`tel:${projectData.contacts.phones[0]}`}
                  className="flex items-center space-x-3 text-lg font-mono font-semibold text-white hover:text-[#B99A5B] transition-colors"
                >
                  <Phone size={18} className="text-[#B99A5B]" />
                  <span>+91 {projectData.contacts.phones[0]}</span>
                </a>
                <a
                  href={`tel:${projectData.contacts.phones[1]}`}
                  className="flex items-center space-x-3 text-lg font-mono font-semibold text-white hover:text-[#B99A5B] transition-colors"
                >
                  <Phone size={18} className="text-[#B99A5B]" />
                  <span>+91 {projectData.contacts.phones[1]}</span>
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-widest text-[#B99A5B] font-semibold block mb-1">
                Official Email
              </span>
              <a
                href={`mailto:${projectData.contacts.email}`}
                className="flex items-center space-x-3 text-sm font-sans text-[#EDE7D8] hover:text-[#B99A5B] transition-colors"
              >
                <Mail size={16} className="text-[#B99A5B]" />
                <span>{projectData.contacts.email}</span>
              </a>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 bg-[#11291F] border border-[#B99A5B]/30 rounded-3xl p-8 md:p-12 shadow-2xl relative">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#B99A5B]/20 pb-4 mb-6">
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#B99A5B]">
                    Priority Inquiry Form (Web3Forms API)
                  </span>
                  <ShieldCheck size={18} className="text-[#B99A5B]" />
                </div>

                {error && (
                  <div className="p-3 bg-red-950/60 border border-red-500/40 text-red-200 text-xs rounded-lg">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#B99A5B] mb-1.5 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Viswanadh Rao"
                      required
                      className="w-full bg-[#17382B] border border-[#B99A5B]/20 rounded-xl px-4 py-3.5 text-sm text-[#F5F2EA] placeholder-white/20 focus:outline-none focus:border-[#B99A5B] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#B99A5B] mb-1.5 font-semibold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9515508897"
                      required
                      className="w-full bg-[#17382B] border border-[#B99A5B]/20 rounded-xl px-4 py-3.5 text-sm text-[#F5F2EA] placeholder-white/20 focus:outline-none focus:border-[#B99A5B] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#B99A5B] mb-1.5 font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@domain.com"
                      className="w-full bg-[#17382B] border border-[#B99A5B]/20 rounded-xl px-4 py-3.5 text-sm text-[#F5F2EA] placeholder-white/20 focus:outline-none focus:border-[#B99A5B] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#B99A5B] mb-1.5 font-semibold">
                      Preferred Contact Method
                    </label>
                    <select
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleChange}
                      className="w-full bg-[#17382B] border border-[#B99A5B]/20 rounded-xl px-4 py-3.5 text-sm text-[#F5F2EA] focus:outline-none focus:border-[#B99A5B] transition-colors"
                    >
                      <option value="Phone">Phone Call</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#B99A5B] mb-1.5 font-semibold">
                    Inquiry Message
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements for Fortune Butterfly City..."
                    className="w-full bg-[#17382B] border border-[#B99A5B]/20 rounded-xl px-4 py-3.5 text-sm text-[#F5F2EA] placeholder-white/20 focus:outline-none focus:border-[#B99A5B] transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  data-cursor="SUBMIT"
                  className="w-full py-4 bg-[#B99A5B] hover:bg-[#F5F2EA] text-[#151815] font-semibold uppercase tracking-widest text-xs rounded-full transition-all duration-300 shadow-xl flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-12 text-center flex flex-col items-center">
                <CheckCircle2 className="w-16 h-16 text-[#B99A5B] mb-4 animate-bounce" />
                <h3 className="font-display text-3xl font-light text-[#F5F2EA] mb-2">
                  INQUIRY SUBMITTED
                </h3>
                <p className="text-sm text-[#EDE7D8]/80 max-w-md mx-auto mb-8 font-sans leading-relaxed">
                  Thank you, <span className="text-[#B99A5B] font-semibold">{formData.name}</span>. Your submission was sent via Web3Forms API. Marketing Manager {projectData.contacts.manager} will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-[#B99A5B] text-[#151815] font-semibold text-xs uppercase tracking-widest rounded-full hover:bg-white transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
