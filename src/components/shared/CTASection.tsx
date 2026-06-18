import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-[100px] bg-primary text-white text-center">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-display-md font-display-md mb-6">Have A Signage Project In Mind?</h2>
        <p className="text-body-lg font-body-lg mb-10 opacity-70 max-w-2xl mx-auto">
          Whether you need LED sign boards, hospital signage, reception branding, or pylon sign boards — get a free quote from Hyderabad&apos;s trusted signage manufacturers within 30 minutes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <a
            href="tel:+919999999999"
            className="flex items-center justify-center gap-3 bg-secondary-container px-10 py-5 font-label-md text-label-md uppercase tracking-widest hover:opacity-90 transition-opacity text-white"
          >
            <span className="material-symbols-outlined">call</span> Call Now
          </a>
          <a
            href="https://wa.me/919999999999?text=Hi%2C%20I%20need%20a%20signage%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] px-10 py-5 font-label-md text-label-md uppercase tracking-widest hover:bg-[#1da851] transition-colors text-white"
          >
            <span className="material-symbols-outlined">chat</span> WhatsApp
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center border border-white text-white px-10 py-5 font-label-md text-label-md uppercase tracking-widest hover:bg-white hover:text-primary transition-all"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
