import Link from "next/link";
import Image from "next/image";
import { businessInfo } from "@/config/businessInfo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-20 py-16 max-w-[1440px] mx-auto">
        <div className="md:col-span-1">
          <div className="h-10 mb-4">
            <Image
              src="/images/anirudh-logo.png"
              alt={`${businessInfo.name} Logo`}
              width={140}
              height={40}
              className="h-full w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            Leading LED Sign Board Manufacturers in Secunderabad &amp; Hyderabad. Delivering premium signage and branding solutions for over a decade.
          </p>
          <div className="flex gap-3">
            <a href={businessInfo.phoneUrl} className="w-9 h-9 bg-gray-800 flex items-center justify-center hover:bg-[#fe6b00] transition-colors" aria-label="Call">
              <span className="material-symbols-outlined text-sm">call</span>
            </a>
            <a href={businessInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 flex items-center justify-center hover:bg-[#25D366] transition-colors" aria-label="WhatsApp">
              <span className="material-symbols-outlined text-sm">chat</span>
            </a>
            <a href={businessInfo.emailUrl} className="w-9 h-9 bg-gray-800 flex items-center justify-center hover:bg-[#fe6b00] transition-colors" aria-label="Email">
              <span className="material-symbols-outlined text-sm">mail</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-5">Solutions</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/services" className="hover:text-white transition-colors">LED Sign Boards</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Hospital Signage</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Reception Signage</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Wayfinding Signage</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Pylon Sign Boards</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">ACP Cladding</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-5">Company</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">Our Projects</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-5">Contact Info</h4>
          <p className="text-sm text-gray-400 mb-3 leading-relaxed">
            {businessInfo.address.street},<br />
            {businessInfo.address.area}, {businessInfo.address.city},<br />
            {businessInfo.address.state} – {businessInfo.address.postalCode}, {businessInfo.address.country}
          </p>
          <p className="text-sm text-gray-400 mb-1">
            <a href={businessInfo.phoneUrl} className="hover:text-[#fe6b00] transition-colors">T: {businessInfo.phone}</a>
          </p>
          <p className="text-sm text-gray-400">
            <a href={businessInfo.emailUrl} className="hover:text-[#fe6b00] transition-colors">E: {businessInfo.email}</a>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 py-5 text-center px-6">
        <p className="text-xs text-gray-500">
          © {currentYear} {businessInfo.name}. LED Sign Board Manufacturers in Secunderabad &amp; Hyderabad. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
