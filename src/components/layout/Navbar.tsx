"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Portfolio", href: "/projects" },
    { name: "Process", href: "/services#process" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <header
        className={`bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 docked full-width top-0 fixed z-50 transition-all duration-300 w-full ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <nav className="flex justify-between items-center w-full px-6 md:px-20 py-6 max-w-[1440px] mx-auto">
          <Link href="/" className="h-10 md:h-16 z-50">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKypJLaU2tyUYVBmlA96KZDRpDzNhh3qBQ_XIPgvEbL2ym3HA13gwjrz6jJ4goJjtMr8-izjDaoo7i-BYkKaU1ivyQeMTA4yf19yurz_BjNpPWwNBY6tPexGpU6wLPNCODukDxOIjKEXVNo525Hkks-iHaSaVhWzLA4V9GIuG5ImYBiQ1-5vZa9rdm8QT8PRPSG1t7yhEC3V3O6PqICMvP1lOYpnEVFjTXxTob3LLI2XMlhj6TNAoMrr5uMgdH8U_SmR6GLgVDca-z" 
              alt="Anirudh Brand Creation Logo" 
              className="h-full w-auto object-contain"
            />
          </Link>
          
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-label-md text-label-md uppercase tracking-wider text-on-surface transition-colors duration-200 hover:text-secondary"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link 
              href="/contact"
              className="bg-primary text-on-primary px-6 py-3 font-label-md text-label-md uppercase tracking-widest hover:bg-secondary-container transition-all duration-300 inline-block"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 text-on-surface focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 bg-surface z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full pt-32 px-6 pb-6 overflow-y-auto">
          <ul className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-headline-lg-mobile font-headline-lg-mobile text-on-surface block uppercase tracking-wider"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-8 border-t border-outline-variant/30 flex flex-col gap-4">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary text-on-primary text-center px-6 py-5 font-label-md text-label-md uppercase tracking-widest w-full"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
