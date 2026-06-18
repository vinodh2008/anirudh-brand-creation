import Link from "next/link";

export function ContactSection() {
  return (
    <section className="py-20 bg-black text-white" id="contact">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your One-Stop Solution for All Branding Needs</h2>
          <p className="text-white/60 max-w-xl mx-auto">Get in touch with Hyderabad&apos;s trusted LED sign board manufacturers and branding experts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-4">Address</h4>
            <p className="text-white/80 leading-relaxed">
              Anirudh Brand Creation<br />
              Jubilee Hills, Road No. 36<br />
              Hyderabad, Telangana – 500033
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-4">Phone</h4>
            <a href="tel:+919999999999" className="text-white/80 hover:text-[#fe6b00] transition-colors block mb-2">+91 99999 99999</a>
            <a href="tel:+919999999999" className="text-white/80 hover:text-[#fe6b00] transition-colors block">+91 99999 99999</a>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-4">Email</h4>
            <a href="mailto:projects@anirudhbrand.com" className="text-white/80 hover:text-[#fe6b00] transition-colors block">projects@anirudhbrand.com</a>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-[300px] bg-gray-800 rounded-lg overflow-hidden mb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3!2d78.4!3d17.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzQ4LjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Anirudh Brand Creation Location Map Hyderabad"
          />
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+919999999999"
            className="flex items-center gap-2 bg-[#fe6b00] text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-orange-600 transition-all duration-300 shadow-lg"
          >
            <span className="material-symbols-outlined text-lg">call</span> Call Now
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#1da851] transition-all duration-300 shadow-lg"
          >
            <span className="material-symbols-outlined text-lg">chat</span> WhatsApp
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 border border-white text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
