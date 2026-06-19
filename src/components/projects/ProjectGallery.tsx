"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { businessInfo } from "@/config/businessInfo";

const allProjects = [
  { title: "AIG Hospitals Wayfinding System", category: "Hospitals", image: "/images/aig-hospitals.jpeg", alt: "AIG Hospitals wayfinding signage board in Hyderabad by Anirudh Brand Creation – Hospital Signage Board Manufacturers", location: "Gachibowli, Hyderabad", slug: "/projects/aig-hospital-wayfinding" },
  { title: "Care Hospitals Reception Branding", category: "Hospitals", image: "/images/care-hospitals-signage.jpeg", alt: "Care Hospitals 3D metal reception signage Hyderabad by Anirudh Brand Creation", location: "Banjara Hills, Hyderabad", slug: "/projects/care-hospitals-reception-signage" },
  { title: "Hospital Wayfinding Directory", category: "Hospitals", image: "/images/hospital-wayfinding.jpeg", alt: "Hospital wayfinding directory signage board manufacturers Hyderabad – Anirudh Brand Creation", location: "Hyderabad", slug: "/projects/aig-hospital-wayfinding" },
  { title: "GoliSoda Franchise Signage", category: "Restaurants", image: "/images/golisoda-restaurant.jpeg", alt: "GoliSoda LED retail signage board Hyderabad by Anirudh Brand Creation – Restaurant Signage Manufacturers", location: "Chilkanagar, Hyderabad", slug: "/projects/golisoda-franchise-signage" },
  { title: "Srivari Udupi Hotel Signage", category: "Restaurants", image: "/images/srivari-hotel-signage.jpeg", alt: "Srivari Udupi Hotel LED 3D letter restaurant signage Hyderabad", location: "Hyderabad", slug: "/projects/golisoda-franchise-signage" },
  { title: "Dheeksha Restaurant Signage", category: "Restaurants", image: "/images/restaurant-signage.jpeg", alt: "Dheeksha Restaurant LED backlit signage board Hyderabad", location: "Hyderabad", slug: "/projects/golisoda-franchise-signage" },
  { title: "Zafrani Tea LED Signage", category: "Restaurants", image: "/images/zafani-tea-signage.jpeg", alt: "Zafrani Tea LED illuminated signage board Hyderabad", location: "Hyderabad", slug: "/projects/golisoda-franchise-signage" },
  { title: "Smartworks Reception Branding", category: "Corporate", image: "/images/smartworks-corporate.jpeg", alt: "Smartworks LED backlit corporate reception signage Hyderabad by Anirudh Brand Creation", location: "HITEC City, Hyderabad", slug: "/projects/smartworks-reception-branding" },
  { title: "NMDC Office Branding", category: "Corporate", image: "/images/nmdc-corporate-signage.jpeg", alt: "NMDC corporate office reception signage Hyderabad – Anirudh Brand Creation", location: "Masab Tank, Hyderabad", slug: "/projects/smartworks-reception-branding" },
  { title: "Scale at Speed Boardroom", category: "Corporate", image: "/images/speed-signage.jpeg", alt: "Scale at Speed 3D acrylic letter boardroom branding Hyderabad – Anirudh Brand Creation", location: "Hyderabad", slug: "/projects/smartworks-reception-branding" },
  { title: "TechHub Building Signage", category: "Corporate", image: "/images/techhub-corporate.jpeg", alt: "TechHub ACP cladding corporate building signage Hyderabad", location: "Hyderabad", slug: "/projects/smartworks-reception-branding" },
  { title: "Salarpuria Sattva LED Signage", category: "Real Estate", image: "/images/sattva-real-estate.jpeg", alt: "Salarpuria Sattva LED building signage Hyderabad by Anirudh Brand Creation", location: "HITEC City, Hyderabad", slug: "/projects/salarpuria-led-signage" },
  { title: "Nagarjuna Cement Pylon Board", category: "Real Estate", image: "/images/nagarjuna-brand-creation.jpeg", alt: "Nagarjuna Cement pylon rooftop sign board Hyderabad by Anirudh Brand Creation", location: "Hyderabad", slug: "/projects/nagarjuna-pylon-board" },
  { title: "Duradoor LED Facade Signage", category: "Real Estate", image: "/images/durandhar-signage.jpeg", alt: "Duradoor LED building facade signage Hyderabad – Anirudh Brand Creation", location: "Hyderabad", slug: "/projects/nagarjuna-pylon-board" },
  { title: "Auditorium Facade Branding", category: "Education", image: "/images/auditorium-signage.jpeg", alt: "Auditorium facade signage and institutional branding Hyderabad – Anirudh Brand Creation", location: "Hyderabad", slug: "/projects" },
  { title: "Office Directory System", category: "Education", image: "/images/office-directory-signage.jpeg", alt: "Office directory wayfinding board for institution Hyderabad – Anirudh Brand Creation", location: "Hyderabad", slug: "/projects" },
  { title: "Vessella Group Reception", category: "Retail", image: "/images/group-corporate-branding.jpeg", alt: "Vessella Group 3D acrylic reception branding Hyderabad – Anirudh Brand Creation", location: "Hyderabad", slug: "/projects" },
  { title: "Orion Farms Event Signage", category: "Retail", image: "/images/farms-signage.jpeg", alt: "Orion Farms LED outdoor signage Hyderabad – Anirudh Brand Creation", location: "Hyderabad", slug: "/projects" },
  { title: "Open Form Branding", category: "Retail", image: "/images/open-form-branding.jpeg", alt: "Open Form outdoor branding signage Hyderabad – Anirudh Brand Creation", location: "Hyderabad", slug: "/projects" },
];

const categories = ["All", "Hospitals", "Restaurants", "Corporate", "Real Estate", "Education", "Retail"];
const INITIAL_SHOW = 8;

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = activeCategory === "All"
    ? allProjects
    : allProjects.filter((p) => p.category === activeCategory);

  const displayed = showAll ? filtered : filtered.slice(0, INITIAL_SHOW);

  return (
    <section className="py-20 bg-[#f9f9f9]" id="portfolio">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-4 block">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Real Projects. Real Clients.
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Browse our portfolio of LED sign boards, hospital signage, reception signage, and pylon sign boards delivered across Hyderabad.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setShowAll(false); }}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#fe6b00] hover:text-[#fe6b00]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {displayed.map((project, index) => (
            <Link
              href={project.slug}
              key={index}
              className="group bg-white border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 block"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-[#fe6b00] text-white text-[10px] font-semibold px-2.5 py-1 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider bg-black/60 px-3 py-1.5">View Project</span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-black group-hover:text-[#fe6b00] transition-colors">{project.title}</h3>
                <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-xs">location_on</span>
                  {project.location}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View More */}
        {!showAll && filtered.length > INITIAL_SHOW && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 border-2 border-black text-black px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300"
            >
              View More Projects
              <span className="material-symbols-outlined text-base">expand_more</span>
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12 pt-10 border-t border-gray-200">
          <p className="text-gray-600 mb-4 font-medium">Have a similar project in mind?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={businessInfo.phoneUrl}
              className="flex items-center gap-2 bg-[#fe6b00] text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-orange-600 transition-all"
              aria-label={`Call us at ${businessInfo.phone}`}
            >
              <span className="material-symbols-outlined text-base">call</span> Call Now
            </a>
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-[#1da851] transition-all"
              aria-label="WhatsApp us"
            >
              <span className="material-symbols-outlined text-base">chat</span> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
