import Image from "next/image";
import Link from "next/link";

const serviceBlocks = [
  {
    title: "LED Signage",
    seoTitle: "LED Sign Board Manufacturers in Hyderabad",
    desc: "Anirudh Brand Creation designs and manufactures high-impact, premium LED sign boards for commercial spaces, retail storefronts, and corporate offices. Using Samsung LED technology combined with high-grade acrylics and durable profiles, we ensure energy-efficiency, extreme longevity, and brilliant uniform brightness that commands attention day and night.",
    image: "/images/sattva-real-estate.jpeg",
    alt: "LED Sign Board Manufacturers in Hyderabad - Salarpuria Sattva building LED facade signage by Anirudh Brand Creation",
    reverse: false,
  },
  {
    title: "Architectural Signs",
    seoTitle: "Architectural & Pylon Sign Board Manufacturers",
    desc: "Make an architectural statement. Our customized pylon signs, ACP cladding, metal lettering, and monumental signage are engineered for maximum structural strength and wind-load stability. Perfect for corporate headquarters, IT Parks, and large-scale industrial properties looking to project a premium, enduring brand presence.",
    image: "/images/nagarjuna-brand-creation.jpeg",
    alt: "Pylon Sign Board Manufacturers in Hyderabad - Nagarjuna Cement landmark architectural signage by Anirudh Brand Creation",
    reverse: true,
  },
  {
    title: "Wall & Glass Graphics",
    seoTitle: "Corporate Wall & Glass Graphics Hyderabad",
    desc: "Enhance your interior brand spaces with custom wall murals, privacy frosted glass films, and directional signage. We design and install high-definition vinyl prints, textured graphics, and custom glass manifestations that enrich office interiors, hospital wards, and meeting rooms with a sophisticated corporate aesthetic.",
    image: "/images/speed-signage.jpeg",
    alt: "Corporate Wall and Glass Graphics - Boardroom glass vinyl and wall graphics by Anirudh Brand Creation Hyderabad",
    reverse: false,
  },
  {
    title: "Wayfinding Signage",
    seoTitle: "Wayfinding Signage Hyderabad",
    desc: "Create seamless journeys for your visitors. We design intuitive, modular wayfinding directory systems that simplify navigation within complex environments like hospitals, colleges, hotels, and IT corridors. Fully compliant with international standards, featuring clear typography and high-contrast styling.",
    image: "/images/office-directory-signage.jpeg",
    alt: "Wayfinding Signage Hyderabad - Office directory and floor navigation board by Anirudh Brand Creation",
    reverse: true,
  },
];

export function ServicesDetail() {
  return (
    <section className="py-20 bg-white" id="services-detail">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-4 block">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Premium Architectural Branding &amp; Signage
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Leading sign board manufacturers in Hyderabad supplying end-to-end design, high-precision manufacturing, and expert installation.
          </p>
        </div>

        <div className="space-y-24">
          {serviceBlocks.map((block, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
            >
              <div className={`${block.reverse ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-md shadow-sm border border-gray-100">
                  <Image
                    src={block.image}
                    alt={block.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={`${block.reverse ? "lg:order-1" : ""}`}>
                <span className="text-xs uppercase tracking-[0.15em] text-[#fe6b00] font-semibold mb-3 block">
                  {block.seoTitle}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">{block.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed mb-6">{block.desc}</p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-[#fe6b00] transition-colors duration-300"
                  >
                    Know More
                  </Link>
                  <a
                    href={`https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20inquire%20about%20${encodeURIComponent(block.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:border-[#25D366] hover:text-[#25D366] transition-colors duration-300"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
