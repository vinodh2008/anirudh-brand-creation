import { businessInfo } from "@/config/businessInfo";

export function MobileStickyCTA() {
  return (
    <nav className="bg-white border-t border-gray-200 md:hidden fixed bottom-0 left-0 right-0 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-3">
        <a
          href={businessInfo.phoneUrl}
          className="flex flex-col items-center justify-center gap-1 py-3 text-black hover:bg-gray-50 active:bg-gray-100 transition-all border-r border-gray-100"
        >
          <span className="material-symbols-outlined text-xl">call</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">Call Now</span>
        </a>
        <a
          href={businessInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-[#25D366] text-white hover:bg-[#1da851] transition-all border-r border-[#1da851]"
        >
          <span className="material-symbols-outlined text-xl">chat</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>
        <a
          href={businessInfo.googleMapsDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-[#fe6b00] text-white hover:bg-orange-600 transition-all"
        >
          <span className="material-symbols-outlined text-xl">near_me</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">Directions</span>
        </a>
      </div>
    </nav>
  );
}
