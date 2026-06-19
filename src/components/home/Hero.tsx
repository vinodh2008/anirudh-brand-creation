"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { businessInfo } from "@/config/businessInfo";

const slides = [
  {
    image: "/images/nagarjuna-brand-creation.jpeg",
    alt: "Nagarjuna Cement rooftop pylon sign board by Anirudh Brand Creation – LED Sign Board Manufacturers in Hyderabad",
    client: "Nagarjuna Cement",
    category: "Pylon Sign Board",
  },
  {
    image: "/images/aig-hospitals.jpeg",
    alt: "AIG Hospitals wayfinding signage system – Hospital Signage Board Manufacturers in Hyderabad",
    client: "AIG Hospitals",
    category: "Hospital Wayfinding",
  },
  {
    image: "/images/smartworks-corporate.jpeg",
    alt: "Smartworks LED reception branding – Reception Signage Manufacturers Hyderabad",
    client: "Smartworks",
    category: "Reception Signage",
  },
  {
    image: "/images/sattva-real-estate.jpeg",
    alt: "Salarpuria Sattva LED building signage – LED Sign Board Manufacturers Hyderabad",
    client: "Salarpuria Sattva",
    category: "LED Building Signage",
  },
  {
    image: "/images/durandhar-signage.jpeg",
    alt: "Duradoor LED facade signage – Sign Board Manufacturers in Hyderabad",
    client: "Duradoor",
    category: "LED Facade Signage",
  },
  {
    image: "/images/care-hospitals-signage.jpeg",
    alt: "Care Hospitals 3D metal reception signage – Hospital Signage Hyderabad",
    client: "Care Hospitals",
    category: "Hospital Branding",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 150, suffix: "+", label: "Corporate Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "+", label: "Cities Served" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [value]);
  return <>{count}{suffix}</>;
}

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-black pt-[96px]" aria-label="Hero">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center max-w-[1440px] mx-auto px-6 md:px-20 pb-28 md:pb-0">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <span className="inline-block px-4 py-1.5 mb-6 border border-white/30 text-white/80 text-xs uppercase tracking-widest">
            {slides[current].client} — {slides[current].category}
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            We Create Signs That<br />
            <span className="text-[#fe6b00]">Create Brands.</span>
          </h1>

          <p className="text-base md:text-lg text-white/80 mb-4 max-w-xl leading-relaxed">
            Premium LED Sign Board Manufacturers in Secunderabad &amp; Hyderabad — specialising in Hospital Signage, Reception Signage, Wayfinding, Pylon Sign Boards &amp; ACP Cladding.
          </p>
          <p className="text-sm text-white/60 mb-8">
            From design to installation — complete signage solutions delivered on time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={businessInfo.phoneUrl}
              className="flex items-center gap-2 bg-[#fe6b00] text-white px-7 py-4 font-semibold text-sm uppercase tracking-widest hover:bg-orange-600 transition-all duration-300 shadow-lg"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              Call Now
            </a>
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-7 py-4 font-semibold text-sm uppercase tracking-widest hover:bg-[#1da851] transition-all duration-300 shadow-lg"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              WhatsApp
            </a>
            <Link
              href="/projects"
              className="flex items-center gap-2 border border-white text-white px-7 py-4 font-semibold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              View Projects
            </Link>
          </div>

          <p className="mt-5 text-white/50 text-xs tracking-wider uppercase">
            ⚡ Quick Response Within 15–30 Minutes
          </p>
        </div>
      </div>

      {/* Subtle Brand Watermark */}
      <div className="absolute right-[-10%] bottom-[-10%] opacity-[0.03] pointer-events-none z-10 hidden lg:block">
        <Image
          src="/images/anirudh-logo.png"
          alt=""
          width={800}
          height={800}
          className="object-contain"
        />
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/10 hover:bg-[#fe6b00] border border-white/20 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
      >
        <span className="material-symbols-outlined text-xl">chevron_left</span>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/10 hover:bg-[#fe6b00] border border-white/20 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
      >
        <span className="material-symbols-outlined text-xl">chevron_right</span>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${i === current ? "w-6 h-2 bg-[#fe6b00]" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 bg-black/70 backdrop-blur-md border-t border-white/10 hidden md:block">
        <div className="max-w-[1440px] mx-auto px-20 py-5 grid grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-6">
              <p className="text-2xl font-bold text-[#fe6b00]">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white/60 text-xs uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
