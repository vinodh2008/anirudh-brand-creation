import Image from "next/image";
import Link from "next/link";

export function IndustriesGrid() {
  const industries = [
    {
      title: "Hospitals",
      subtitle: "Hospital Signage Board Manufacturers",
      image: "/images/aig-hospitals.jpeg",
      alt: "Hospital Signage Board Manufacturers in Hyderabad - AIG Hospitals wayfinding and directory signage by Anirudh Brand Creation",
      slug: "hospitals"
    },
    {
      title: "Corporate & IT Parks",
      subtitle: "Reception & Facade Branding",
      image: "/images/smartworks-corporate.jpeg",
      alt: "Corporate reception signage manufacturers Hyderabad - Smartworks LED backlit reception branding by Anirudh Brand Creation",
      slug: "corporate"
    },
    {
      title: "Real Estate",
      subtitle: "Pylon Sign Boards & Building Signage",
      image: "/images/durandhar-signage.jpeg",
      alt: "Pylon Sign Board Manufacturers Hyderabad - Duradoor LED building facade signage by Anirudh Brand Creation",
      slug: "real-estate"
    },
    {
      title: "Restaurants & Retail",
      subtitle: "LED Sign Boards & Storefront Signage",
      image: "/images/srivari-hotel-signage.jpeg",
      alt: "Restaurant Signage Manufacturers Hyderabad - Srivari Udupi Hotel LED 3D letter signage by Anirudh Brand Creation",
      slug: "restaurants"
    },
    {
      title: "Education & Auditoriums",
      subtitle: "Institutional Wayfinding Signage",
      image: "/images/auditorium-signage.jpeg",
      alt: "Auditorium and educational institution signage by Anirudh Brand Creation Hyderabad",
      slug: "education"
    },
    {
      title: "Government & PSU",
      subtitle: "Tender-Grade Signage Solutions",
      image: "/images/nmdc-corporate-signage.jpeg",
      alt: "Government signage manufacturers Hyderabad - NMDC corporate office reception branding by Anirudh Brand Creation",
      slug: "government"
    }
  ];

  return (
    <section className="py-[100px] bg-surface" id="industries">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="mb-16">
          <span className="text-label-sm font-label-sm uppercase tracking-widest text-secondary-container mb-4 block">Industries We Serve</span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-display-md mb-4">
            Precision Signage For Every Industry
          </h2>
          <p className="text-body-md text-on-surface-variant font-body-md max-w-2xl">
            From hospital signage board manufacturers to corporate reception branding — we deliver tailored signage solutions across healthcare, IT, real estate, hospitality, education, and government sectors in Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link href={`/industries`} key={industry.title} className="group relative overflow-hidden bg-white aspect-[4/3]">
              <Image
                src={industry.image}
                alt={industry.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-headline-lg-mobile text-headline-lg-mobile mb-1">{industry.title}</h3>
                <p className="text-white/70 text-label-sm font-label-sm uppercase tracking-wider">{industry.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
