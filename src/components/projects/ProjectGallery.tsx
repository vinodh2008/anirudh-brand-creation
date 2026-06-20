"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/config/projectsData";

const categories = ["All", "Hospitals", "Restaurants", "Corporate", "Real Estate", "Education", "Retail"];
const INITIAL_SHOW = 8;

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = activeCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

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
              className="group bg-white border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 block w-full"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
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

        {/* View More / Show Less */}
        {filtered.length > INITIAL_SHOW && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 border-2 border-black text-black px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300"
            >
              {showAll ? "Show Less Projects" : "View More Projects"}
              <span className="material-symbols-outlined text-base">
                {showAll ? "expand_less" : "expand_more"}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
