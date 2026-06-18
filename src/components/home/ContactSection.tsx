"use client";

import Image from "next/image";
import { businessInfo } from "@/config/businessInfo";

export function ContactSection() {
  return (
    <section className="relative py-24 overflow-hidden text-white" id="contact">
      {/* Background Image with lazy loading and dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/working-manufacturing.jpeg"
          alt="Anirudh Brand Creation signage fabrication workshop"
          fill
          sizes="100vw"
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-3 block">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-bold">Contact Anirudh Brand Creation</h2>
          <p className="text-white/60 max-w-xl mx-auto mt-2">
            Reach out directly for fast consultation and site visits across Hyderabad and Secunderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Left Side: Premium Glassmorphism Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-10 flex flex-col justify-between shadow-xl rounded-lg">
            <div>
              <h3 className="text-xl font-bold mb-8 text-[#fe6b00] uppercase tracking-wider">Contact Information</h3>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#fe6b00] mt-1">location_on</span>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-white/60 font-semibold mb-1">Registered Address</h4>
                    <p className="text-sm text-white/90 leading-relaxed font-medium">
                      {businessInfo.name}<br />
                      {businessInfo.address.street},<br />
                      {businessInfo.address.area},<br />
                      {businessInfo.address.city}, {businessInfo.address.state} – {businessInfo.address.postalCode}, {businessInfo.address.country}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#fe6b00]">call</span>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-white/60 font-semibold mb-1">Phone Number</h4>
                    <a href={businessInfo.phoneUrl} className="text-sm text-white/90 hover:text-[#fe6b00] transition-colors font-medium">
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#fe6b00]">chat</span>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-white/60 font-semibold mb-1">WhatsApp</h4>
                    <a href={businessInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-white/90 hover:text-[#fe6b00] transition-colors font-medium">
                      {businessInfo.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#fe6b00]">mail</span>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-white/60 font-semibold mb-1">Email Address</h4>
                    <a href={businessInfo.emailUrl} className="text-sm text-white/90 hover:text-[#fe6b00] transition-colors font-medium">
                      {businessInfo.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#fe6b00]">schedule</span>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-white/60 font-semibold mb-1">Business Hours</h4>
                    <p className="text-sm text-white/95 font-medium">{businessInfo.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              <a
                href={businessInfo.phoneUrl}
                className="flex items-center justify-center gap-2 bg-[#fe6b00] text-white py-4 text-xs font-semibold uppercase tracking-wider hover:bg-orange-600 transition-colors duration-300 shadow-md"
              >
                <span className="material-symbols-outlined text-base">call</span> Call Now
              </a>
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 text-xs font-semibold uppercase tracking-wider hover:bg-[#1da851] transition-colors duration-300 shadow-md"
              >
                <span className="material-symbols-outlined text-base">chat</span> WhatsApp Now
              </a>
            </div>
          </div>

          {/* Right Side: Embedded Google Map */}
          <div className="flex flex-col justify-between bg-black/40 backdrop-blur-sm border border-white/10 p-4 rounded-lg shadow-xl">
            {/* Replace with final Google Maps embed URL as requested. Configured map source points to Krishna Nagar Colony, Secunderabad. */}
            <div className="relative w-full h-[350px] lg:h-full min-h-[300px] bg-gray-900 rounded overflow-hidden">
              <iframe
                src={businessInfo.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${businessInfo.name} Location Map Secunderabad`}
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <a
              href={businessInfo.googleMapsDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white py-4 text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors duration-300"
            >
              <span className="material-symbols-outlined text-base">near_me</span> View Location on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
