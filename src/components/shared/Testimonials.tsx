"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    logo: "/images/aig-hospitals.jpeg",
    companyName: "AIG Hospitals",
    text: "Anirudh Brand Creation delivered our hospital's entire wayfinding signage system ahead of schedule. Their precision in manufacturing hospital signage boards for high-pressure healthcare environments is unmatched in Hyderabad.",
    name: "Infrastructure Head",
    designation: "AIG Hospitals, Hyderabad",
  },
  {
    logo: "/images/sattva-real-estate.jpeg",
    companyName: "Salarpuria Sattva",
    text: "The LED sign board they installed at our Knowledge City campus has become a landmark. Exceptional build quality, brilliant luminosity, and their team handled everything from design to installation seamlessly.",
    name: "Sr. Project Manager",
    designation: "Salarpuria Sattva, HITEC City",
  },
  {
    logo: "/images/nmdc-corporate-signage.jpeg",
    companyName: "NMDC Ltd",
    text: "Their professional approach to government tender requirements and quality adherence is what sets them apart. The reception signage and office branding they delivered for NMDC was top-class.",
    name: "Director (Projects)",
    designation: "NMDC Ltd, Hyderabad",
  },
  {
    logo: "/images/care-hospitals-signage.jpeg",
    companyName: "Apollo Hospitals",
    text: "Anirudh Brand Creation provided phenomenal emergency and department signage for our new wing. The materials are durable, and the visibility is exactly what a premium healthcare facility needs.",
    name: "Operations Head",
    designation: "Apollo Hospitals",
  },
  {
    logo: "/images/smartworks-corporate.jpeg",
    companyName: "Smartworks",
    text: "As a premium co-working space, our brand image is everything. They executed our complex reception 3D lettering and frosted glass graphics perfectly and within our tight launch timeline.",
    name: "Facility Manager",
    designation: "Smartworks, HITEC City",
  },
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, clientWidth } = containerRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(index);
  };

  const scrollTo = (index: number) => {
    if (!containerRef.current) return;
    const { clientWidth } = containerRef.current;
    containerRef.current.scrollTo({
      left: index * clientWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <section className="py-20 bg-gray-50/50" id="testimonials">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-3 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black">Trusted by Hyderabad&apos;s Leading Brands</h2>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:shadow-md transition-shadow duration-300 rounded-lg"
            >
              <div>
                {/* Logo Area */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200 flex-shrink-0 bg-gray-50">
                    <Image
                      src={t.logo}
                      alt={`${t.companyName} – verified signage client of Anirudh Brand Creation`}
                      fill
                      sizes="48px"
                      className="object-cover grayscale"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-black">{t.companyName}</h4>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Verified Client</span>
                  </div>
                </div>
                {/* Testimonial Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Person Details */}
              <div className="mt-auto">
                <p className="font-semibold text-xs uppercase tracking-wider text-black">{t.name}</p>
                <p className="text-xs text-[#fe6b00] mt-0.5">{t.designation}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View: Swipeable Carousel */}
        <div className="block md:hidden">
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 snap-center bg-white p-6 border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.02)] rounded-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200 flex-shrink-0 bg-gray-50">
                      <Image
                        src={t.logo}
                        alt={`${t.companyName} – verified signage client of Anirudh Brand Creation`}
                        fill
                        sizes="40px"
                        className="object-cover grayscale"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-black">{t.companyName}</h4>
                      <span className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider">Verified Client</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[10px] uppercase tracking-wider text-black">{t.name}</p>
                  <p className="text-[10px] text-[#fe6b00] mt-0.5">{t.designation}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to testimonial slide ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? "bg-[#fe6b00] w-4" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
