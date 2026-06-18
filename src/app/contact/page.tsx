import { Metadata } from "next";
import { businessInfo } from "@/config/businessInfo";

export const metadata: Metadata = {
  title: "Contact Us | LED Sign Board Manufacturers Hyderabad | Anirudh Brand Creation",
  description: `${businessInfo.seoDescription} Contact us for instant Call, WhatsApp support, or view our Secunderabad location.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-[140px] pb-20 bg-[#f9f9f9]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-3 block">Get In Touch</span>
            <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">Contact Anirudh Brand Creation</h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              We prioritize direct phone call and WhatsApp conversions for instant support, quotes, and site visits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Left Column: Direct Call & WhatsApp CTAs */}
            <div className="bg-white border border-gray-100 p-8 md:p-10 flex flex-col justify-between shadow-sm rounded-lg">
              <div>
                <h2 className="text-xl font-bold text-black mb-6 uppercase tracking-wider">Direct Actions</h2>
                
                <div className="space-y-4 mb-8">
                  {/* Call button */}
                  <a
                    href={businessInfo.phoneUrl}
                    className="flex items-center gap-4 bg-[#fe6b00] text-white px-6 py-5 text-sm font-semibold uppercase tracking-wider hover:bg-orange-600 transition-all duration-300 shadow-md w-full justify-center rounded"
                  >
                    <span className="material-symbols-outlined text-2xl">call</span>
                    <div className="text-left">
                      <p className="text-base font-bold">Call Now</p>
                      <p className="text-xs text-white/80 normal-case tracking-normal">Direct Line: {businessInfo.phone}</p>
                    </div>
                  </a>

                  {/* WhatsApp button */}
                  <a
                    href={businessInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-[#25D366] text-white px-6 py-5 text-sm font-semibold uppercase tracking-wider hover:bg-[#1da851] transition-all duration-300 shadow-md w-full justify-center rounded"
                  >
                    <span className="material-symbols-outlined text-2xl">chat</span>
                    <div className="text-left">
                      <p className="text-base font-bold">WhatsApp Now</p>
                      <p className="text-xs text-white/80 normal-case tracking-normal">Chat instantly with our team</p>
                    </div>
                  </a>

                  {/* Google Maps direct button */}
                  <a
                    href={businessInfo.googleMapsDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 border border-gray-300 text-gray-700 px-6 py-5 text-sm font-semibold uppercase tracking-wider hover:border-black hover:text-black transition-all duration-300 w-full justify-center rounded"
                  >
                    <span className="material-symbols-outlined text-2xl text-gray-500">near_me</span>
                    <div className="text-left">
                      <p className="text-base font-bold text-gray-900">View on Google Maps</p>
                      <p className="text-xs text-gray-500 normal-case tracking-normal">Get instant driving directions</p>
                    </div>
                  </a>
                </div>

                {/* Address & Hours details */}
                <div className="space-y-6 pt-6 border-t border-gray-100">
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-2">Office Address</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium">
                      {businessInfo.name}<br />
                      {businessInfo.address.street},<br />
                      {businessInfo.address.area},<br />
                      {businessInfo.address.city}, {businessInfo.address.state} – {businessInfo.address.postalCode}, {businessInfo.address.country}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-2">Email Address</h3>
                    <a href={businessInfo.emailUrl} className="text-gray-600 hover:text-[#fe6b00] transition-colors text-sm font-medium">
                      {businessInfo.email}
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-2">Working Hours</h3>
                    <p className="text-gray-600 text-sm font-medium">{businessInfo.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Google Maps Embed */}
            <div className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm flex flex-col justify-between">
              {/* Replace with final Google Maps embed URL as requested. Configured map source points to Krishna Nagar Colony, Secunderabad. */}
              <div className="relative w-full h-[350px] lg:h-full min-h-[300px] bg-gray-50 rounded overflow-hidden border border-gray-100">
                <iframe
                  src={businessInfo.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${businessInfo.name} Contact Page Map`}
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
