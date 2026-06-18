"use client";

export function FloatingButtons() {
  return (
    <div className="fixed right-4 bottom-24 md:bottom-8 z-50 flex-col gap-3 hidden md:flex">
      <a
        href="https://wa.me/919999999999?text=Hi%2C%20I%20need%20a%20signage%20quote"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
      >
        <span className="material-symbols-outlined text-2xl">chat</span>
      </a>
      <a
        href="tel:+919999999999"
        aria-label="Call Now"
        className="w-14 h-14 bg-[#fe6b00] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
      >
        <span className="material-symbols-outlined text-2xl">call</span>
      </a>
    </div>
  );
}
