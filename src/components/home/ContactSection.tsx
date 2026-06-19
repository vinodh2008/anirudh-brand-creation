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
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 flex flex-col justify-between shadow-xl rounded-lg">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10">
                  <Image
                    src="/images/anirudh-logo.png"
                    alt="Anirudh Brand Creation logo"
                    width={40}
                    height={40}
                    className="h-full w-auto object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-black text-white leading-none tracking-tight">ANIRUDH</span>
                  <span className="text-[8px] font-bold text-[#fe6b00] uppercase tracking-[0.15em] leading-tight mt-0.5">Brand Creation</span>
                </div>
              </div>
              <h3 className="text-sm font-bold mb-5 text-[#fe6b00] uppercase tracking-wider hidden">Contact Info</h3>
              <div className="space-y-4">

                {/* Address */}
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#fe6b00] text-xl flex-shrink-0 mt-0.5">location_on</span>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-white/50 font-semibold mb-0.5">Registered Address</h4>
                    <address className="text-xs text-white/95 leading-relaxed font-medium not-italic">
                      {businessInfo.name}<br />
                      {businessInfo.address.street},<br />
                      {businessInfo.address.area},<br />
                      {businessInfo.address.city},<br />
                      {businessInfo.address.state} – {businessInfo.address.postalCode},<br />
                      {businessInfo.address.country}
                    </address>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#fe6b00] text-xl">call</span>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-wider text-white/50 font-semibold mb-0.5">Phone</h4>
                      <a href={businessInfo.phoneUrl} className="text-xs text-white/95 hover:text-[#fe6b00] transition-colors font-medium">
                        {businessInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#25D366] text-xl">chat</span>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-wider text-white/50 font-semibold mb-0.5">WhatsApp</h4>
                      <a
                        href={businessInfo.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-white/95 hover:text-[#25D366] transition-colors font-medium"
                      >
                        {businessInfo.whatsapp}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#fe6b00] text-xl">mail</span>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-wider text-white/50 font-semibold mb-0.5">Email</h4>
                      <a href={businessInfo.emailUrl} className="text-xs text-white/95 hover:text-[#fe6b00] transition-colors font-medium">
                        {businessInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#fe6b00] text-xl">schedule</span>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-wider text-white/50 font-semibold mb-0.5">Business Hours</h4>
                      <p className="text-xs text-white/95 font-medium">{businessInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              <a
                href={businessInfo.phoneUrl}
                className="flex items-center justify-center gap-2 bg-[#fe6b00] text-white py-3.5 text-xs font-semibold uppercase tracking-wider hover:bg-orange-600 transition-colors duration-300 shadow-md"
                aria-label={`Call us at ${businessInfo.phone}`}
              >
                <span className="material-symbols-outlined text-base">call</span> Call Now
              </a>
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#1da851] transition-colors duration-300 shadow-md"
                aria-label="WhatsApp us"
              >
                <span className="material-symbols-outlined text-base">chat</span> WhatsApp Now
              </a>
            </div>
          </div>

          {/* Right Card: Google Map */}
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 p-4 rounded-lg shadow-xl flex flex-col gap-3">
            {/* Embedded Google Map – Replace src with final embed URL if needed */}
            <div className="relative w-full flex-1 min-h-[300px] bg-gray-900 rounded overflow-hidden">
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
              className="flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white py-3.5 text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors duration-300"
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
