import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-20 py-[120px] max-w-[1440px] mx-auto">
        <div className="md:col-span-1">
          <div className="h-12 mb-6">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKypJLaU2tyUYVBmlA96KZDRpDzNhh3qBQ_XIPgvEbL2ym3HA13gwjrz6jJ4goJjtMr8-izjDaoo7i-BYkKaU1ivyQeMTA4yf19yurz_BjNpPWwNBY6tPexGpU6wLPNCODukDxOIjKEXVNo525Hkks-iHaSaVhWzLA4V9GIuG5ImYBiQ1-5vZa9rdm8QT8PRPSG1t7yhEC3V3O6PqICMvP1lOYpnEVFjTXxTob3LLI2XMlhj6TNAoMrr5uMgdH8U_SmR6GLgVDca-z" 
              alt="Anirudh Brand Creation Logo" 
              className="h-full w-auto object-contain"
            />
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            Delivering architectural signage excellence in Hyderabad for over a decade.
          </p>
          <div className="flex gap-4">
            <Link href="/" className="w-10 h-10 rounded border border-outline-variant flex items-center justify-center hover:bg-secondary-container hover:text-white transition-all text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">public</span>
            </Link>
            <a href="mailto:projects@anirudhbrand.com" className="w-10 h-10 rounded border border-outline-variant flex items-center justify-center hover:bg-secondary-container hover:text-white transition-all text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">mail</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-label-md text-label-md uppercase mb-8 text-primary">Solutions</h4>
          <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
            <li><Link href="/services" className="hover:text-secondary-container transition-colors">Strategic Branding</Link></li>
            <li><Link href="/industries" className="hover:text-secondary-container transition-colors">Hospitality Signage</Link></li>
            <li><Link href="/industries" className="hover:text-secondary-container transition-colors">IT Parks</Link></li>
            <li><Link href="/services#process" className="hover:text-secondary-container transition-colors">Manufacturing Process</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-label-md text-label-md uppercase mb-8 text-primary">Company</h4>
          <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
            <li><Link href="/about" className="hover:text-secondary-container transition-colors">About Enterprise</Link></li>
            <li><Link href="/projects" className="hover:text-secondary-container transition-colors">Client Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-secondary-container transition-colors">Contact Enterprise</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-secondary-container transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-label-md text-label-md uppercase mb-8 text-primary">Contact</h4>
          <p className="font-body-md text-body-md text-on-surface-variant mb-4">
            Jubilee Hills, Road No. 36<br />
            Hyderabad, TS - 500033
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            <Link href="/contact" className="hover:text-secondary-container transition-colors">T: Contact Us for Sales</Link><br />
            E: projects@anirudhbrand.com
          </p>
        </div>
      </div>

      <div className="border-t border-outline-variant py-8 text-center px-6">
        <p className="font-label-sm text-label-sm text-on-surface-variant opacity-80">
          © {currentYear} Anirudh Brand Creation. Architectural Precision in Signage.
        </p>
      </div>
    </footer>
  );
}
