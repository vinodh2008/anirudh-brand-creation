"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { businessInfo } from "@/config/businessInfo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    setIsScrolled(window.scrollY > 10);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${
          isScrolled ? "shadow-sm border-b border-gray-100 py-3" : "py-4"
        }`}
      >
        <nav className="flex justify-between items-center w-full px-6 md:px-20 max-w-[1440px] mx-auto">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group z-50 flex-shrink-0 flex items-center gap-3 transition-transform duration-300 hover:scale-105 active:scale-95"
            aria-label="Anirudh Brand Creation – Home"
          >
            <div className="h-12 md:h-[60px] lg:h-[70px] flex-shrink-0">
              <Image
                src="/images/anirudh-logo.png"
                alt="Anirudh Brand Creation logo"
                width={70}
                height={70}
                className="h-full w-auto object-contain transition-all duration-300 brightness-100"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl md:text-2xl font-black text-black leading-none tracking-tight">ANIRUDH</span>
              <span className="text-[10px] md:text-xs font-bold text-[#fe6b00] uppercase tracking-[0.15em] leading-tight mt-0.5">Brand Creation</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-7 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider transition-colors duration-200 text-black hover:text-[#fe6b00]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={businessInfo.phoneUrl}
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 text-black hover:text-[#fe6b00]"
              aria-label={`Call Anirudh Brand Creation at ${businessInfo.phone}`}
            >
              <span className="material-symbols-outlined text-base">call</span>
              {businessInfo.phone}
            </a>
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#1da851] transition-all duration-300 shadow-sm"
              aria-label="WhatsApp Anirudh Brand Creation"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 focus:outline-none text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </nav>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-24 overflow-y-auto">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-2xl font-bold text-black block uppercase tracking-wider hover:text-[#fe6b00] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-6 border-t border-gray-200 space-y-3">
            <a
              href={businessInfo.phoneUrl}
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#fe6b00] text-white text-center px-6 py-4 text-sm font-semibold uppercase tracking-wider w-full flex items-center justify-center gap-2"
              aria-label={`Call us at ${businessInfo.phone}`}
            >
              <span className="material-symbols-outlined">call</span> Call Now: {businessInfo.phone}
            </a>
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#25D366] text-white text-center px-6 py-4 text-sm font-semibold uppercase tracking-wider w-full flex items-center justify-center gap-2"
              aria-label="WhatsApp us"
            >
              <span className="material-symbols-outlined">chat</span> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
