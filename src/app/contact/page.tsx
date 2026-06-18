import { Metadata } from "next";
import { ContactForm } from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | LED Sign Board Manufacturers Hyderabad | Anirudh Brand Creation",
  description: "Contact Anirudh Brand Creation for LED sign boards, hospital signage, reception signage, pylon sign boards, and ACP cladding in Hyderabad. Quick response within 15–30 minutes.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-[140px] pb-16 bg-[#f9f9f9]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Get a free quote for LED sign boards, hospital signage, reception signage, and more. We respond within 15–30 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Big CTAs + Info */}
            <div>
              {/* Primary CTAs */}
              <div className="space-y-4 mb-10">
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-4 bg-[#fe6b00] text-white px-8 py-5 text-sm font-semibold uppercase tracking-wider hover:bg-orange-600 transition-all duration-300 shadow-lg w-full justify-center"
                >
                  <span className="material-symbols-outlined text-2xl">call</span>
                  <div>
                    <p className="text-lg font-bold">Call Now</p>
                    <p className="text-xs text-white/80 normal-case tracking-normal">+91 99999 99999</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/919999999999?text=Hi%2C%20I%20need%20a%20signage%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#25D366] text-white px-8 py-5 text-sm font-semibold uppercase tracking-wider hover:bg-[#1da851] transition-all duration-300 shadow-lg w-full justify-center"
                >
                  <span className="material-symbols-outlined text-2xl">chat</span>
                  <div>
                    <p className="text-lg font-bold">WhatsApp Now</p>
                    <p className="text-xs text-white/80 normal-case tracking-normal">Quick response within 15–30 minutes</p>
                  </div>
                </a>
              </div>

              {/* Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-2">Office Address</h3>
                  <p className="text-gray-600">Anirudh Brand Creation<br />Jubilee Hills, Road No. 36<br />Hyderabad, Telangana – 500033</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-2">Email</h3>
                  <a href="mailto:projects@anirudhbrand.com" className="text-gray-600 hover:text-[#fe6b00] transition-colors">projects@anirudhbrand.com</a>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-2">Working Hours</h3>
                  <p className="text-gray-600">Mon – Sat: 9:00 AM – 7:00 PM<br />Sun: By Appointment</p>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 h-[250px] rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3!2d78.4!3d17.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzQ4LjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Anirudh Brand Creation Office Location"
                />
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <h2 className="text-xl font-bold text-black mb-1">Send Us an Inquiry</h2>
              <p className="text-xs text-gray-500 mb-6">⚡ We&apos;ll respond within 15–30 minutes</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
