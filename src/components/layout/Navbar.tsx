"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Portfolio", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <nav className="flex justify-between items-center w-full px-6 md:px-20 py-4 max-w-[1440px] mx-auto">
          <Link href="/" className="h-10 md:h-12 z-50 flex-shrink-0">
            <Image
              src="/images/anirudh-logo.png"
              alt="Anirudh Brand Creation Logo - LED Sign Board Manufacturers Hyderabad"
              width={160}
              height={48}
              className="h-full w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex gap-7 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-200 hover:text-[#fe6b00] ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919999999999"
              className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                isScrolled ? "text-black hover:text-[#fe6b00]" : "text-white hover:text-[#fe6b00]"
              }`}
            >
              <span className="material-symbols-outlined text-base">call</span>
              Call
            </a>
            <Link
              href="/contact"
              className="bg-[#fe6b00] text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-orange-600 transition-all duration-300"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`material-symbols-outlined text-2xl ${isScrolled || isMobileMenuOpen ? "text-black" : "text-white"}`}>
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </nav>
      </header>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-24 overflow-y-auto">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-2xl font-bold text-black block uppercase tracking-wider"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-6 border-t border-gray-200 space-y-3">
            <a
              href="tel:+919999999999"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#fe6b00] text-white text-center px-6 py-4 text-sm font-semibold uppercase tracking-wider w-full flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">call</span> Call Now
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#25D366] text-white text-center px-6 py-4 text-sm font-semibold uppercase tracking-wider w-full flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">chat</span> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
