"use client";

import { useState } from "react";
import Image from "next/image";

const allProjects = [
  // Hospitals
  { title: "AIG Hospitals Wayfinding System", category: "Hospitals", image: "/images/aig-hospitals.jpeg", alt: "AIG Hospitals wayfinding signage board system Hyderabad by Anirudh Brand Creation", location: "Gachibowli, Hyderabad" },
  { title: "Care Hospitals Reception Branding", category: "Hospitals", image: "/images/care-hospitals-signage.jpeg", alt: "Care Hospitals 3D metal reception signage Hyderabad by Anirudh Brand Creation", location: "Banjara Hills, Hyderabad" },
  { title: "Hospital Wayfinding Directory", category: "Hospitals", image: "/images/hospital-wayfinding.jpeg", alt: "Hospital wayfinding directory signage board manufacturers Hyderabad", location: "Hyderabad" },
  // Restaurants
  { title: "GoliSoda Franchise Signage", category: "Restaurants", image: "/images/golisoda-restaurant.jpeg", alt: "GoliSoda LED retail signage board Hyderabad by Anirudh Brand Creation", location: "Chilkanagar, Hyderabad" },
  { title: "Srivari Udupi Hotel Signage", category: "Restaurants", image: "/images/srivari-hotel-signage.jpeg", alt: "Srivari Udupi Hotel LED 3D letter restaurant signage by Anirudh Brand Creation", location: "Hyderabad" },
  { title: "Dheeksha Restaurant Signage", category: "Restaurants", image: "/images/restaurant-signage.jpeg", alt: "Dheeksha Restaurant LED backlit signage board by Anirudh Brand Creation Hyderabad", location: "Hyderabad" },
  { title: "Zafrani Tea LED Signage", category: "Restaurants", image: "/images/zafani-tea-signage.jpeg", alt: "Zafrani Tea LED illuminated signage board by Anirudh Brand Creation", location: "Hyderabad" },
  // Corporate
  { title: "Smartworks Reception Branding", category: "Corporate", image: "/images/smartworks-corporate.jpeg", alt: "Smartworks LED backlit corporate reception signage by Anirudh Brand Creation Hyderabad", location: "HITEC City, Hyderabad" },
  { title: "NMDC Office Branding", category: "Corporate", image: "/images/nmdc-corporate-signage.jpeg", alt: "NMDC corporate office reception signage by Anirudh Brand Creation Hyderabad", location: "Masab Tank, Hyderabad" },
  { title: "Scale at Speed Boardroom", category: "Corporate", image: "/images/speed-signage.jpeg", alt: "Scale at Speed 3D acrylic letter boardroom branding by Anirudh Brand Creation", location: "Hyderabad" },
  { title: "TechHub Building Signage", category: "Corporate", image: "/images/techhub-corporate.jpeg", alt: "TechHub ACP cladding corporate building signage by Anirudh Brand Creation Hyderabad", location: "Hyderabad" },
  // Real Estate
  { title: "Salarpuria Sattva LED Signage", category: "Real Estate", image: "/images/sattva-real-estate.jpeg", alt: "Salarpuria Sattva LED building signage by Anirudh Brand Creation Hyderabad", location: "HITEC City, Hyderabad" },
  { title: "Nagarjuna Cement Pylon Board", category: "Real Estate", image: "/images/nagarjuna-brand-creation.jpeg", alt: "Nagarjuna Cement pylon rooftop sign board by Anirudh Brand Creation Hyderabad", location: "Hyderabad" },
  { title: "NCL Pearl Building Letters", category: "Real Estate", image: "/images/company-work-manufacturing.jpeg", alt: "NCL Pearl 3D building letters installation by Anirudh Brand Creation Hyderabad", location: "Hyderabad" },
  { title: "Duradoor LED Facade Signage", category: "Real Estate", image: "/images/durandhar-signage.jpeg", alt: "Duradoor LED building facade signage by Anirudh Brand Creation Hyderabad", location: "Hyderabad" },
  // Education
  { title: "Auditorium Facade Branding", category: "Education", image: "/images/auditorium-signage.jpeg", alt: "Auditorium facade signage and institutional branding by Anirudh Brand Creation Hyderabad", location: "Hyderabad" },
  { title: "Office Directory System", category: "Education", image: "/images/office-directory-signage.jpeg", alt: "Office directory wayfinding board for educational institution by Anirudh Brand Creation", location: "Hyderabad" },
  // Retail
  { title: "Vessella Group Branding", category: "Retail", image: "/images/group-corporate-branding.jpeg", alt: "Vessella Group 3D acrylic reception branding by Anirudh Brand Creation Hyderabad", location: "Hyderabad" },
  { title: "Orion Farms Event Signage", category: "Retail", image: "/images/farms-signage.jpeg", alt: "Orion Farms LED illuminated outdoor signage by Anirudh Brand Creation Hyderabad", location: "Hyderabad" },
  { title: "Open Form Branding", category: "Retail", image: "/images/open-form-branding.jpeg", alt: "Open Form outdoor branding signage by Anirudh Brand Creation", location: "Hyderabad" },
];

const categories = ["All", "Hospitals", "Restaurants", "Corporate", "Real Estate", "Education", "Retail"];

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? allProjects
    : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-[100px] bg-surface" id="portfolio">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-12">
          <span className="text-label-sm font-label-sm uppercase tracking-widest text-secondary-container mb-4 block">Our Work</span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-display-md mb-4">
            Real Projects. Real Clients. Real Trust.
          </h2>
          <p className="text-body-md text-on-surface-variant font-body-md max-w-2xl mx-auto">
            Browse our portfolio of LED sign boards, hospital signage, reception signage, pylon sign boards, and ACP cladding projects delivered across Hyderabad.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 font-label-md text-label-sm uppercase tracking-wider transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-primary text-on-primary border-primary"
                  : "bg-white text-on-surface border-outline-variant/30 hover:border-secondary-container hover:text-secondary-container"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((project, index) => (
            <div key={index} className="group bg-white border border-outline-variant/20 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-secondary-container text-white text-label-sm font-label-sm px-3 py-1 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-label-md text-label-md text-primary mb-1">{project.title}</h3>
                <p className="text-label-sm font-label-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA under gallery */}
        <div className="text-center mt-12">
          <p className="text-body-md text-on-surface-variant font-body-md mb-4">Have a similar project in mind?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 bg-secondary-container text-white px-8 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-secondary transition-all duration-300"
            >
              <span className="material-symbols-outlined">call</span> Call Now
            </a>
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20need%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-[#1da851] transition-all"
            >
              <span className="material-symbols-outlined">chat</span> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
