import Link from "next/link";

export function MobileStickyCTA() {
  return (
    <nav className="bg-white/95 backdrop-blur-md border-t border-outline-variant md:hidden fixed bottom-0 left-0 right-0 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-3 divide-x divide-outline-variant/30">
        <a
          href="tel:+919999999999"
          className="flex flex-col items-center justify-center gap-1 py-3 text-primary hover:text-secondary-container active:bg-surface-container transition-all"
        >
          <span className="material-symbols-outlined text-xl">call</span>
          <span className="font-label-sm text-[11px] uppercase tracking-wider">Call Now</span>
        </a>
        <a
          href="https://wa.me/919999999999?text=Hi%2C%20I%20need%20a%20signage%20quote"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-[#25D366] hover:text-[#1da851] active:bg-surface-container transition-all"
        >
          <span className="material-symbols-outlined text-xl">chat</span>
          <span className="font-label-sm text-[11px] uppercase tracking-wider">WhatsApp</span>
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-secondary-container text-white hover:bg-secondary active:bg-secondary transition-all"
        >
          <span className="material-symbols-outlined text-xl">request_quote</span>
          <span className="font-label-sm text-[11px] uppercase tracking-wider">Quick Quote</span>
        </Link>
      </div>
    </nav>
  );
}
