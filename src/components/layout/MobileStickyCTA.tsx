import Link from "next/link";

export function MobileStickyCTA() {
  return (
    <nav className="bg-white border-t border-gray-200 md:hidden fixed bottom-0 left-0 right-0 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-3">
        <a
          href="tel:+919999999999"
          className="flex flex-col items-center justify-center gap-1 py-3 text-black hover:bg-gray-50 active:bg-gray-100 transition-all"
        >
          <span className="material-symbols-outlined text-xl">call</span>
          <span className="text-[10px] font-semibold uppercase tracking-wider">Call</span>
        </a>
        <a
          href="https://wa.me/919999999999?text=Hi%2C%20I%20need%20a%20signage%20quote"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-[#25D366] text-white hover:bg-[#1da851] transition-all"
        >
          <span className="material-symbols-outlined text-xl">chat</span>
          <span className="text-[10px] font-semibold uppercase tracking-wider">WhatsApp</span>
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-[#fe6b00] text-white hover:bg-orange-600 transition-all"
        >
          <span className="material-symbols-outlined text-xl">request_quote</span>
          <span className="text-[10px] font-semibold uppercase tracking-wider">Get Quote</span>
        </Link>
      </div>
    </nav>
  );
}
