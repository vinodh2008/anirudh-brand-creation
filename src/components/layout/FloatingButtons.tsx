"use client";

import { businessInfo } from "@/config/businessInfo";

export function FloatingButtons() {
  return (
    <div className="fixed right-4 bottom-6 md:bottom-8 z-50 flex flex-col gap-3">
      <div className="group relative flex items-center">
        <span className="absolute right-full mr-3 whitespace-nowrap bg-black/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          WhatsApp
        </span>
        <a
          href={businessInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-10 h-10 md:w-12 md:h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        >
          <span className="material-symbols-outlined text-lg md:text-xl">chat</span>
        </a>
      </div>
      <div className="group relative flex items-center">
        <span className="absolute right-full mr-3 whitespace-nowrap bg-black/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Call Now
        </span>
        <a
          href={businessInfo.phoneUrl}
          aria-label="Call Now"
          className="w-10 h-10 md:w-12 md:h-12 bg-[#fe6b00] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        >
          <span className="material-symbols-outlined text-lg md:text-xl">call</span>
        </a>
      </div>
    </div>
  );
}
