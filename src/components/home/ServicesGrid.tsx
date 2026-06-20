import Image from "next/image";
import Link from "next/link";

export function ServicesGrid() {
  const services = [
    {
      icon: "lightbulb",
      title: "LED Sign Boards",
      desc: "High-efficiency Samsung LED sign boards with long-lasting illumination for corporate buildings, malls, and commercial facades.",
      image: "/images/bajaj-electronics-signage.jpg",
      alt: "LED Sign Board Manufacturers in Hyderabad – Bajaj Electronics illuminated building signage by Anirudh Brand Creation",
      seoKeyword: "LED Sign Board Manufacturers in Hyderabad",
      slug: "/services/led-signage",
    },
    {
      icon: "emergency",
      title: "Hospital Signage",
      desc: "Comprehensive hospital signage board solutions including wayfinding, department directories, and emergency signs for healthcare facilities.",
      image: "/images/care-hospitals-signage.jpeg",
      alt: "Hospital Signage Board Manufacturers – AIG Hospitals wayfinding signage system manufactured by Anirudh Brand Creation Hyderabad",
      seoKeyword: "Hospital Signage Board Manufacturers",
      slug: "/services/hospital-signage",
    },
    {
      icon: "badge",
      title: "Reception Signage",
      desc: "Premium 3D acrylic and metal reception signage that creates powerful first impressions for corporate lobbies and offices.",
      image: "/images/group-corporate-branding.jpeg",
      alt: "Reception Signage Manufacturers Hyderabad – Care Hospitals premium 3D metal reception branding by Anirudh Brand Creation",
      seoKeyword: "Reception Signage",
      slug: "/services/reception-signage",
    },
    {
      icon: "directions",
      title: "Wayfinding Signage",
      desc: "Intuitive wayfinding signage systems with bilingual support designed for hospitals, IT parks, malls, and educational institutions.",
      image: "/images/office-directory-signage.jpeg",
      alt: "Wayfinding Signage Manufacturers – Office directory wayfinding board system by Anirudh Brand Creation Hyderabad",
      seoKeyword: "Wayfinding Signage",
      slug: "/services/wayfinding-signage",
    },
    {
      icon: "flag",
      title: "Pylon Sign Boards",
      desc: "Large-scale rooftop and pylon sign boards with structural steel framing for maximum brand visibility from long distances.",
      image: "/images/block-c-directory.jpg",
      alt: "Pylon Sign Board Manufacturers Hyderabad – Block-C Directory pylon signage installation by Anirudh Brand Creation",
      seoKeyword: "Pylon Sign Boards",
      slug: "/services/pylon-sign-boards",
    },
    {
      icon: "apartment",
      title: "ACP Cladding",
      desc: "Durable ACP cladding solutions for building facades combining architectural aesthetics with weather-resistant performance.",
      image: "/images/techhub-corporate.jpeg",
      alt: "ACP Cladding Manufacturers Hyderabad – TechHub building facade with ACP cladding and corporate signage by Anirudh Brand Creation",
      seoKeyword: "ACP Cladding",
      slug: "/services/acp-cladding",
    },
    {
      icon: "abc",
      title: "3D Letters & Signage",
      desc: "Custom-crafted 3D acrylic and metal letters with LED backlighting for premium brand displays and storefront signage.",
      image: "/images/speed-signage.jpeg",
      alt: "3D Letter Signage Hyderabad – Scale at Speed premium 3D acrylic letter boardroom branding by Anirudh Brand Creation",
      seoKeyword: "3D Letter Signage",
      slug: "/services/wall-glass-graphics",
    },
    {
      icon: "storefront",
      title: "Restaurant & Retail Signage",
      desc: "Eye-catching LED and acrylic signage for restaurants, retail stores, and food chains that drive foot traffic and brand recall.",
      image: "/images/zafani-tea-signage.jpeg",
      alt: "Restaurant Signage Manufacturers Hyderabad – Zafani Tea retail LED signage board by Anirudh Brand Creation",
      seoKeyword: "Restaurant Signage",
      slug: "/services/led-signage",
    },
  ];

  return (
    <section className="py-[100px] bg-surface-container-lowest" id="services">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-16">
          <span className="text-label-sm font-label-sm uppercase tracking-widest text-secondary-container mb-4 block">Our Signage Solutions</span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-display-md mb-4">
            LED Sign Board Manufacturers in Hyderabad
          </h2>
          <p className="text-body-md text-on-surface-variant font-body-md max-w-2xl mx-auto">
            From hospital signage boards to pylon sign boards, reception signage to ACP cladding — we deliver end-to-end signage solutions for every industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              href={service.slug}
              key={index}
              className="group bg-white border border-outline-variant/30 overflow-hidden hover:border-secondary-container transition-all duration-300 hover:shadow-lg block"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-2xl text-secondary-container">{service.icon}</span>
                  <h3 className="font-label-md text-label-md uppercase">{service.title}</h3>
                </div>
                <p className="text-label-sm font-label-sm text-on-surface-variant leading-relaxed mb-3">{service.desc}</p>
                <span className="text-xs font-semibold text-secondary-container uppercase tracking-wider group-hover:underline">
                  Know More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
