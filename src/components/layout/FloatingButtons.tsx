"use client";

import { businessInfo } from "@/config/businessInfo";

export function FloatingButtons() {
  return (
    <div className="fixed right-4 bottom-20 md:bottom-8 z-50 flex flex-col gap-3">
      <a
        href={businessInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
      >
        <span className="material-symbols-outlined text-xl md:text-2xl">chat</span>
      </a>
      <a
        href={businessInfo.phoneUrl}
        aria-label="Call Now"
        className="w-12 h-12 md:w-14 md:h-14 bg-[#fe6b00] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
      >
        <span className="material-symbols-outlined text-xl md:text-2xl">call</span>
      </a>
    </div>
  );
}
