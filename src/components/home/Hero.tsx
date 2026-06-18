"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const [formData, setFormData] = useState({ name: "", phone: "", requirement: "", location: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);
    // Simulate API call — replace with real endpoint
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", phone: "", requirement: "", location: "" });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-surface">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/group-corporate-branding.jpeg"
          alt="LED Sign Board Manufacturers in Hyderabad - Anirudh Brand Creation corporate branding project featuring Vessella Group reception signage"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-16 md:py-0">
        {/* Left: Copy + CTA buttons */}
        <div>
          <span className="inline-block px-4 py-1.5 mb-6 border border-white/30 font-label-sm text-label-sm uppercase tracking-widest text-white/80 backdrop-blur-sm">
            LED Sign Board Manufacturers in Hyderabad
          </span>
          <h1 className="text-display-md md:text-display-lg text-white mb-6 leading-tight font-display-lg">
            Premium Signage &amp; Branding That Builds <span className="text-secondary-container">Powerful Brands.</span>
          </h1>
          <p className="text-body-lg text-white/80 mb-8 max-w-lg font-body-lg">
            Hyderabad&apos;s trusted LED sign board, hospital signage, reception signage, wayfinding, pylon sign board, and ACP cladding manufacturers. 500+ projects delivered for AIG Hospitals, NMDC, Salarpuria Sattva, Smartworks &amp; more.
          </p>

          {/* Trust stats */}
          <div className="flex gap-8 mb-8">
            <div>
              <p className="text-headline-lg text-white font-bold">500+</p>
              <p className="text-label-sm uppercase text-white/60 font-label-sm">Projects</p>
            </div>
            <div className="border-l border-white/20 pl-8">
              <p className="text-headline-lg text-white font-bold">150+</p>
              <p className="text-label-sm uppercase text-white/60 font-label-sm">Clients</p>
            </div>
            <div className="border-l border-white/20 pl-8">
              <p className="text-headline-lg text-white font-bold">10+</p>
              <p className="text-label-sm uppercase text-white/60 font-label-sm">Years</p>
            </div>
          </div>

          {/* Instant CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 bg-secondary-container text-white px-6 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-secondary transition-all duration-300"
            >
              <span className="material-symbols-outlined text-xl">call</span> Call Now
            </a>
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I%20need%20a%20quote%20for%20signage"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-[#1da851] transition-all duration-300"
            >
              <span className="material-symbols-outlined text-xl">chat</span> WhatsApp
            </a>
          </div>
        </div>

        {/* Right: Quick Inquiry Form */}
        <div className="w-full max-w-md ml-auto">
          <div className="bg-white/95 backdrop-blur-md p-8 rounded-lg shadow-2xl border border-outline-variant/30">
            <h2 className="text-headline-lg-mobile font-headline-lg-mobile text-primary mb-1">Get Free Quote</h2>
            <p className="text-label-sm text-on-surface-variant font-label-sm mb-6">Quick response within 30 minutes</p>

            {submitted ? (
              <div className="text-center py-8">
                <span className="material-symbols-outlined text-5xl text-secondary-container mb-4">check_circle</span>
                <p className="text-headline-lg-mobile font-headline-lg-mobile text-primary">Thank You!</p>
                <p className="text-body-md text-on-surface-variant mt-2">We&apos;ll call you within 30 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    required
                    className="w-full px-4 py-3 bg-surface border-b-2 border-outline-variant/50 focus:border-primary focus:outline-none transition-colors text-body-md font-body-md placeholder:text-on-surface-variant/50"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    required
                    className="w-full px-4 py-3 bg-surface border-b-2 border-outline-variant/50 focus:border-primary focus:outline-none transition-colors text-body-md font-body-md placeholder:text-on-surface-variant/50"
                  />
                </div>
                <div>
                  <select
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border-b-2 border-outline-variant/50 focus:border-primary focus:outline-none transition-colors text-body-md font-body-md text-on-surface-variant"
                  >
                    <option value="">Select Requirement</option>
                    <option value="led-sign-board">LED Sign Board</option>
                    <option value="hospital-signage">Hospital Signage</option>
                    <option value="reception-signage">Reception Signage</option>
                    <option value="wayfinding">Wayfinding Signage</option>
                    <option value="pylon-sign">Pylon Sign Board</option>
                    <option value="acp-cladding">ACP Cladding</option>
                    <option value="3d-letters">3D Letters</option>
                    <option value="corporate-branding">Corporate Branding</option>
                    <option value="restaurant-signage">Restaurant Signage</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Location (City / Area)"
                    className="w-full px-4 py-3 bg-surface border-b-2 border-outline-variant/50 focus:border-primary focus:outline-none transition-colors text-body-md font-body-md placeholder:text-on-surface-variant/50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-on-primary py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-secondary-container transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin">progress_activity</span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined">send</span>
                      Get Free Quote
                    </>
                  )}
                </button>
              </form>
            )}

            <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-outline-variant/30">
              <a href="tel:+919999999999" className="flex items-center gap-1 text-label-sm font-label-sm text-on-surface-variant hover:text-secondary-container transition-colors">
                <span className="material-symbols-outlined text-base">call</span> Call Us
              </a>
              <span className="text-outline-variant">|</span>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-label-sm font-label-sm text-on-surface-variant hover:text-[#25D366] transition-colors">
                <span className="material-symbols-outlined text-base">chat</span> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
