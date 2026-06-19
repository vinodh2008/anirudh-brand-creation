"use client";

import Image from "next/image";

export function ClientLogos() {
  const clients = [
    { name: "AIG Hospitals", logo: "/images/aig-hospitals.jpeg" },
    { name: "Apollo Hospitals", logo: "/images/care-hospitals-signage.jpeg" },
    { name: "NMDC Ltd", logo: "/images/nmdc-corporate-signage.jpeg" },
    { name: "Salarpuria Sattva", logo: "/images/sattva-real-estate.jpeg" },
    { name: "Smartworks", logo: "/images/smartworks-corporate.jpeg" },
    { name: "Care Hospitals", logo: "/images/care-hospitals-signage.jpeg" },
    { name: "Duradoor", logo: "/images/durandhar-signage.jpeg" },
    { name: "Nagarjuna Cement", logo: "/images/nagarjuna-brand-creation.jpeg" },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden" aria-label="Our trusted clients">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 mb-8">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px bg-orange-200 flex-1 max-w-[100px]" />
          <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-800 font-bold">
            TRUSTED BY LEADING BRANDS
          </p>
          <div className="h-px bg-orange-200 flex-1 max-w-[100px]" />
        </div>
      </div>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex logo-scroll whitespace-nowrap gap-12 logo-scroll-paused-on-hover items-center">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[180px] h-[80px] flex items-center justify-center group"
            >
              <div className="relative w-full h-full opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                <Image
                  src={client.logo}
                  alt={`${client.name} - Anirudh Brand Creation Client`}
                  fill
                  sizes="180px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
