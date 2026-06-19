"use client";

import Image from "next/image";
import { businessInfo } from "@/config/businessInfo";

export function ContactSection() {
  return (
    <section className="relative py-16 overflow-hidden text-white" id="contact">
      {/* Background Image with lazy loading and dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/working-manufacturing.jpeg"
          alt="Anirudh Brand Creation signage fabrication workshop in Hyderabad"
          fill
          sizes="100vw"
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-2 block">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Contact Anirudh Brand Creation</h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-2 text-sm md:text-base">
            Reach out directly for signage consultation, site visits, and project discussions across Hyderabad, Secunderabad, and Telangana.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Left Card: Contact Info */}
          <div className="bg-[#0f0f0f]/80 backdrop-blur-md border border-white/15 p-8 md:p-10 flex flex-col justify-between shadow-2xl rounded-xl">
            <div>
              <div className="mb-10 relative h-[50px] md:h-[60px] w-[200px] md:w-[240px] flex items-center justify-start">
                <Image
                  src="/images/anirude-logo.png"
                  alt="Anirudh Brand Creation Logo"
                  fill
                  className="object-contain object-left invert mix-blend-screen opacity-90 scale-[1.35] origin-left"
                />
              </div>
              <h3 className="text-sm font-bold mb-6 text-[#fe6b00] uppercase tracking-wider hidden">Contact Info</h3>
              <div className="space-y-6">

                {/* Address */}
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#fe6b00] text-xl flex-shrink-0 mt-0.5">location_on</span>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-white/50 font-bold mb-1">Registered Address</h4>
                    <address className="text-[13px] text-white/95 leading-relaxed font-medium not-italic">
                      {businessInfo.name}<br />
                      {businessInfo.address.street}, {businessInfo.address.area},<br />
                      {businessInfo.address.city}, {businessInfo.address.state} – {businessInfo.address.postalCode},<br />
                      {businessInfo.address.country}
                    </address>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#fe6b00] text-xl flex-shrink-0 mt-0.5">call</span>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-wider text-white/50 font-bold mb-1">Phone</h4>
                      <a href={businessInfo.phoneUrl} className="text-[13px] text-white/95 hover:text-[#fe6b00] transition-colors font-medium">
                        {businessInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#25D366] text-xl flex-shrink-0 mt-0.5">chat</span>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-wider text-white/50 font-bold mb-1">WhatsApp</h4>
                      <a
                        href={businessInfo.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-white/95 hover:text-[#25D366] transition-colors font-medium"
                      >
                        {businessInfo.whatsapp}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#fe6b00] text-xl flex-shrink-0 mt-0.5">mail</span>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-wider text-white/50 font-bold mb-1">Email</h4>
                      <a href={businessInfo.emailUrl} className="text-[13px] text-white/95 hover:text-[#fe6b00] transition-colors font-medium">
                        {businessInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#fe6b00] text-xl flex-shrink-0 mt-0.5">schedule</span>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-wider text-white/50 font-bold mb-1">Business Hours</h4>
                      <p className="text-[13px] text-white/95 font-medium">{businessInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <a
                href={businessInfo.phoneUrl}
                className="flex items-center justify-center gap-2 bg-[#fe6b00] text-white py-4 rounded-md text-xs font-bold uppercase tracking-wider hover:bg-[#e05f00] transition-colors duration-300 shadow-lg"
                aria-label={`Call us at ${businessInfo.phone}`}
              >
                <span className="material-symbols-outlined text-lg">call</span> Call Now
              </a>
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-md text-xs font-bold uppercase tracking-wider hover:bg-[#20bd5a] transition-colors duration-300 shadow-lg"
                aria-label="Message us on WhatsApp"
              >
                <span className="material-symbols-outlined text-lg">chat</span> WhatsApp Now
              </a>
            </div>
          </div>

          {/* Right Card: Google Map */}
          <div className="bg-[#0f0f0f]/80 border border-white/15 rounded-xl shadow-2xl flex flex-col overflow-hidden">
            {/* Embedded Google Map */}
            <div className="relative w-full flex-1 min-h-[350px] bg-gray-900">
              <iframe
                src={businessInfo.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${businessInfo.name} Location Map – ${businessInfo.address.area}, ${businessInfo.address.city}`}
                className="absolute inset-0 w-full h-full"
              />
            </div>

            <a
              href={businessInfo.googleMapsDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#0a0a0a] border-t border-white/10 hover:bg-[#1a1a1a] text-white py-4 text-xs font-bold uppercase tracking-wider transition-colors duration-300"
              aria-label="View our location on Google Maps"
            >
              <span className="material-symbols-outlined text-base">near_me</span> View Location on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
