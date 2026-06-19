import Image from "next/image";
import Link from "next/link";

export function FeaturedProjects() {
  const projects = [
    {
      title: "AIG Hospitals Wayfinding System",
      category: "Healthcare • Gachibowli",
      image: "/images/aig-hospitals.jpeg",
      alt: "AIG Hospitals wayfinding signage board in Hyderabad by Anirudh Brand Creation – Hospital Signage Board Manufacturers",
      slug: "/projects/aig-hospital-wayfinding",
    },
    {
      title: "Nagarjuna Pylon Sign Board",
      category: "Industrial • Rooftop",
      image: "/images/nagarjuna-brand-creation.jpeg",
      alt: "Nagarjuna Cement rooftop pylon sign board Hyderabad by Anirudh Brand Creation – Pylon Sign Board Manufacturers",
      slug: "/projects/nagarjuna-pylon-board",
    },
    {
      title: "Salarpuria Sattva LED Signage",
      category: "Real Estate • HITEC City",
      image: "/images/sattva-real-estate.jpeg",
      alt: "Salarpuria Sattva LED building signage Hyderabad by Anirudh Brand Creation – LED Sign Board Manufacturers",
      slug: "/projects/salarpuria-led-signage",
    },
    {
      title: "Care Hospitals Reception Signage",
      category: "Healthcare • Banjara Hills",
      image: "/images/care-hospitals-signage.jpeg",
      alt: "Care Hospitals 3D metal reception signage Hyderabad by Anirudh Brand Creation – Hospital Signage Manufacturers",
      slug: "/projects/care-hospitals-reception-signage",
    },
    {
      title: "GoliSoda Franchise Signage",
      category: "Restaurant • Retail",
      image: "/images/golisoda-restaurant.jpeg",
      alt: "GoliSoda franchise LED signage board Hyderabad by Anirudh Brand Creation – Restaurant Signage Manufacturers",
      slug: "/projects/golisoda-franchise-signage",
    },
    {
      title: "Smartworks Reception Branding",
      category: "Corporate • HITEC City",
      image: "/images/smartworks-corporate.jpeg",
      alt: "Smartworks LED reception branding Hyderabad by Anirudh Brand Creation – Reception Signage Manufacturers",
      slug: "/projects/smartworks-reception-branding",
    },
  ];

  return (
    <section className="py-[100px] bg-surface-container-lowest" id="featured-work">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-label-sm font-label-sm uppercase tracking-widest text-secondary-container mb-4 block">Featured Projects</span>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-display-md mb-4">
              Masterworks Across Hyderabad
            </h2>
            <p className="text-body-md text-on-surface-variant font-body-md max-w-xl">
              A gallery of our finest LED sign boards, hospital signage, and corporate branding projects for Hyderabad&apos;s most iconic brands.
            </p>
          </div>
          <Link
            href="/projects"
            className="font-label-md text-label-md uppercase tracking-wider text-secondary-container border-b border-secondary-container pb-1 hover:text-primary transition-colors shrink-0"
          >
            See All Work →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link href={project.slug} key={index} className="group bg-white apple-shadow overflow-hidden block hover:shadow-md transition-shadow duration-300">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <p className="text-label-sm font-label-sm uppercase text-secondary-container mb-1">{project.category}</p>
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary group-hover:text-[#fe6b00] transition-colors">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
