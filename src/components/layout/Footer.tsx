import Link from "next/link";
import Image from "next/image";
import { businessInfo } from "@/config/businessInfo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-gray-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-6 md:px-20 py-12 max-w-[1440px] mx-auto">

        {/* Column 1: Logo & Branding */}
        <div className="flex flex-col gap-5 md:col-span-1">
          <Link
            href="/"
            className="group relative inline-flex items-center transition-transform duration-300 hover:scale-[1.02] h-[60px] md:h-[70px] w-[260px] md:w-[300px] mb-4"
            aria-label="Anirudh Brand Creation – Home"
          >
            <Image
              src="/images/anirude-logo.png"
              alt="Anirudh Brand Creation Logo"
              fill
              className="object-contain object-left invert mix-blend-screen scale-[1.35] origin-left"
              loading="lazy"
            />
          </Link>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-white mt-1">We Create Signs That Create Brands.</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Leading LED Sign Board Manufacturers in Hyderabad &amp; Secunderabad delivering premium signage and branding solutions.
            </p>
          </div>
          <div className="flex gap-2.5 mt-2">
            <a
              href={businessInfo.phoneUrl}
              className="w-8 h-8 rounded bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-[#fe6b00] hover:border-[#fe6b00] transition-all duration-300"
              aria-label={`Call us at ${businessInfo.phone}`}
            >
              <span className="material-symbols-outlined text-sm">call</span>
            </a>
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300"
              aria-label="Chat on WhatsApp"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
            </a>
            <a
              href={businessInfo.emailUrl}
              className="w-8 h-8 rounded bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-[#fe6b00] hover:border-[#fe6b00] transition-all duration-300"
              aria-label={`Email us at ${businessInfo.email}`}
            >
              <span className="material-symbols-outlined text-sm">mail</span>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Solutions */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
            <li><Link href="/services/led-signage" className="hover:text-white transition-colors">LED Sign Boards</Link></li>
            <li><Link href="/services/hospital-signage" className="hover:text-white transition-colors">Hospital Signage</Link></li>
            <li><Link href="/services/reception-signage" className="hover:text-white transition-colors">Reception Signage</Link></li>
            <li><Link href="/services/wayfinding-signage" className="hover:text-white transition-colors">Wayfinding Signage</Link></li>
            <li><Link href="/services/pylon-sign-boards" className="hover:text-white transition-colors">Pylon Sign Boards</Link></li>
            <li><Link href="/services/acp-cladding" className="hover:text-white transition-colors">ACP Cladding</Link></li>
          </ul>
        </div>

        {/* Column 4: Service Areas */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-4">Service Areas</h4>
          <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
            <li><span className="hover:text-white transition-colors cursor-default">Hyderabad</span></li>
            <li><span className="hover:text-white transition-colors cursor-default">Secunderabad</span></li>
            <li><span className="hover:text-white transition-colors cursor-default">Bholakpur</span></li>
            <li><span className="hover:text-white transition-colors cursor-default">Gachibowli</span></li>
            <li><span className="hover:text-white transition-colors cursor-default">Hitech City</span></li>
            <li><span className="hover:text-white transition-colors cursor-default">Jubilee Hills</span></li>
            <li><span className="hover:text-white transition-colors cursor-default">Kukatpally</span></li>
          </ul>
        </div>

        {/* Column 5: Contact Info */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-4">Contact Info</h4>
          <address className="not-italic">
            <p className="text-xs text-gray-400 mb-3 leading-relaxed">
              <strong className="text-gray-300">Address:</strong><br />
              {businessInfo.name},<br />
              {businessInfo.address.street},<br />
              {businessInfo.address.area},<br />
              {businessInfo.address.city},<br />
              {businessInfo.address.state} – {businessInfo.address.postalCode},<br />
              {businessInfo.address.country}
            </p>
            <a href={businessInfo.googleMapsDirectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#fe6b00] hover:text-white transition-colors mb-3 font-semibold">
              <span className="material-symbols-outlined text-[12px]">directions</span> Get Directions
            </a>
            <p className="text-xs text-gray-400 mb-2">
              <strong className="text-gray-300">Phone:</strong>{" "}
              <a href={businessInfo.phoneUrl} className="hover:text-[#fe6b00] transition-colors">{businessInfo.phone}</a>
            </p>
            <p className="text-xs text-gray-400 mb-2">
              <strong className="text-gray-300">WhatsApp:</strong>{" "}
              <a href={businessInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#fe6b00] transition-colors">{businessInfo.whatsapp}</a>
            </p>
            <p className="text-xs text-gray-400 mb-2">
              <strong className="text-gray-300">Email:</strong>{" "}
              <a href={businessInfo.emailUrl} className="hover:text-[#fe6b00] transition-colors">{businessInfo.email}</a>
            </p>
            <p className="text-xs text-gray-400">
              <strong className="text-gray-300">Hours:</strong>{" "}{businessInfo.hours}
            </p>
          </address>
        </div>

      </div>

      <div className="border-t border-gray-950 py-4 text-center px-6">
        <p className="text-[10px] text-gray-500 font-medium">
          © {currentYear} {businessInfo.name}. LED Sign Board Manufacturers in Secunderabad &amp; Hyderabad. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
