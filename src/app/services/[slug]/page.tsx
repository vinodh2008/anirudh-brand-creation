import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { businessInfo } from "@/config/businessInfo";
import { CTASection } from "@/components/shared/CTASection";

const services: Record<string, {
  title: string;
  seoTitle: string;
  description: string;
  longDesc: string;
  image: string;
  alt: string;
  features: string[];
}> = {
  "led-signage": {
    title: "LED Sign Boards",
    seoTitle: "LED Sign Board Manufacturers in Hyderabad",
    description: "Premium LED sign boards manufactured in Hyderabad & Secunderabad. High-efficiency Samsung LED sign boards for corporate, retail, and commercial properties.",
    longDesc: "Anirudh Brand Creation designs and manufactures high-impact LED sign boards using Samsung LED technology, high-grade acrylics, and durable profiles. Energy-efficient, long-lasting, and brilliant luminosity that commands attention day and night.",
    image: "/images/sattva-real-estate.jpeg",
    alt: "LED Sign Board Manufacturers in Hyderabad – Salarpuria Sattva building LED facade signage by Anirudh Brand Creation",
    features: ["Samsung LED modules", "IP67 weatherproof rating", "3-year warranty", "Energy-efficient design", "Custom dimensions available", "Day & night visibility"],
  },
  "hospital-signage": {
    title: "Hospital Signage",
    seoTitle: "Hospital Signage Board Manufacturers in Hyderabad",
    description: "Comprehensive hospital signage board solutions in Hyderabad. Wayfinding systems, department directories, emergency signs, and reception branding for healthcare facilities.",
    longDesc: "We provide comprehensive healthcare signage including wayfinding systems, department directories, emergency signs, room identification, and reception branding — all with bilingual support and compliance with accessibility standards.",
    image: "/images/aig-hospitals.jpeg",
    alt: "Hospital Signage Board Manufacturers Hyderabad – AIG Hospitals wayfinding signage system by Anirudh Brand Creation",
    features: ["Complete wayfinding systems", "Bilingual signage", "Emergency & safety signs", "Department directories", "Room identification boards", "ADA-compliant design"],
  },
  "reception-signage": {
    title: "Reception Signage",
    seoTitle: "Reception Signage Manufacturers Hyderabad",
    description: "Premium 3D acrylic and metal reception signage in Hyderabad. Create powerful first impressions for corporate lobbies, hotels, and hospitals.",
    longDesc: "Premium 3D acrylic and metal reception signage that creates powerful first impressions for corporate lobbies and offices. Custom-designed to align with your brand identity and architectural style.",
    image: "/images/care-hospitals-signage.jpeg",
    alt: "Reception Signage Manufacturers Hyderabad – Care Hospitals premium 3D metal reception branding by Anirudh Brand Creation",
    features: ["3D acrylic & metal letters", "Backlit LED options", "Custom brand colours", "Corporate logo integration", "Stainless steel finishes", "Installation included"],
  },
  "wayfinding-signage": {
    title: "Wayfinding Signage",
    seoTitle: "Wayfinding Signage Hyderabad",
    description: "Intuitive wayfinding signage systems in Hyderabad for hospitals, IT parks, malls, and educational institutions. Bilingual support and international compliance.",
    longDesc: "Create seamless journeys for your visitors. Intuitive, modular wayfinding directory systems that simplify navigation within complex environments like hospitals, colleges, hotels, and IT corridors.",
    image: "/images/office-directory-signage.jpeg",
    alt: "Wayfinding Signage Hyderabad – Office directory and floor navigation board by Anirudh Brand Creation",
    features: ["Modular system design", "Bilingual (English + Telugu)", "Floor directory boards", "Overhead hanging signs", "Door identification", "Color-coded zoning"],
  },
  "pylon-sign-boards": {
    title: "Pylon Sign Boards",
    seoTitle: "Pylon Sign Boards Hyderabad",
    description: "Large-scale rooftop and pylon sign boards in Hyderabad. Structural steel framing for maximum brand visibility from long distances.",
    longDesc: "Large-scale rooftop and pylon sign boards with structural steel framing for maximum brand visibility from long distances. Engineered for wind-load stability and designed for landmarks.",
    image: "/images/nagarjuna-brand-creation.jpeg",
    alt: "Pylon Sign Board Manufacturers Hyderabad – Nagarjuna Cement rooftop pylon signage by Anirudh Brand Creation",
    features: ["Structural steel framing", "Wind-load engineered", "LED illumination", "High-visibility from 500m", "Anti-corrosion coating", "Civil foundation included"],
  },
  "acp-cladding": {
    title: "ACP Cladding",
    seoTitle: "ACP Cladding Hyderabad",
    description: "Durable ACP cladding solutions in Hyderabad for building facades. Architectural aesthetics with weather-resistant performance for commercial and corporate buildings.",
    longDesc: "Durable ACP (Aluminium Composite Panel) cladding solutions for building facades combining architectural aesthetics with weather-resistant performance. Ideal for commercial buildings, IT parks, and corporate offices.",
    image: "/images/techhub-corporate.jpeg",
    alt: "ACP Cladding Manufacturers Hyderabad – TechHub building facade ACP cladding by Anirudh Brand Creation",
    features: ["Aluminium composite panels", "UV-resistant coating", "Fire-retardant options", "Multiple colour finishes", "Weather-resistant", "10-year durability"],
  },
  "architectural-signs": {
    title: "Architectural Signs",
    seoTitle: "Architectural Signage Manufacturers Hyderabad",
    description: "Custom architectural signage in Hyderabad. Monumental signs, ACP cladding, metal lettering for corporate headquarters and large-scale properties.",
    longDesc: "Make an architectural statement. Customized pylon signs, ACP cladding, metal lettering, and monumental signage engineered for maximum structural strength and wind-load stability.",
    image: "/images/nagarjuna-brand-creation.jpeg",
    alt: "Architectural Signage Hyderabad – Nagarjuna Cement monumental sign by Anirudh Brand Creation",
    features: ["Monumental sign boards", "Custom metal lettering", "Structural engineering", "Site assessment included", "Premium finishes", "Landmark visibility"],
  },
  "wall-glass-graphics": {
    title: "Wall & Glass Graphics",
    seoTitle: "Corporate Wall & Glass Graphics Hyderabad",
    description: "Custom wall murals and glass graphics in Hyderabad for offices, hospitals, and hotels. High-definition vinyl prints and frosted glass films.",
    longDesc: "Enhance your interior brand spaces with custom wall murals, privacy frosted glass films, and directional signage. High-definition vinyl prints, textured graphics, and custom glass manifestations.",
    image: "/images/speed-signage.jpeg",
    alt: "Corporate Wall and Glass Graphics Hyderabad – Boardroom glass vinyl and wall graphics by Anirudh Brand Creation",
    features: ["Custom wall murals", "Frosted glass films", "Brand wall installations", "Privacy glass solutions", "High-definition print", "Interior signage"],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.seoTitle,
    description: service.description,
    alternates: {
      canonical: `https://anirudhbrandcreation.com/services/${slug}`,
    },
    openGraph: {
      title: `${service.seoTitle} | Anirudh Brand Creation`,
      description: service.description,
      images: [{ url: `https://anirudhbrandcreation.com${service.image}`, alt: service.alt }],
    },
  };
}

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white pt-[120px] pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={service.image} alt={service.alt} fill className="object-cover opacity-20" priority />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20">
          <nav className="text-xs text-white/50 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/80">{service.title}</span>
          </nav>
          <span className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-3 block">Our Services</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">{service.title}</h1>
          <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed mb-8">{service.longDesc}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href={businessInfo.phoneUrl}
              className="flex items-center gap-2 bg-[#fe6b00] text-white px-7 py-4 font-semibold text-sm uppercase tracking-widest hover:bg-orange-600 transition-all duration-300"
              aria-label={`Call us at ${businessInfo.phone}`}
            >
              <span className="material-symbols-outlined text-lg">call</span>
              Call Now
            </a>
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-7 py-4 font-semibold text-sm uppercase tracking-widest hover:bg-[#1da851] transition-all duration-300"
              aria-label="WhatsApp us"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-3 block">Key Features</span>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">{service.seoTitle}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 border border-gray-100 bg-gray-50 rounded">
                    <span className="material-symbols-outlined text-[#fe6b00] text-xl flex-shrink-0">check_circle</span>
                    <span className="text-sm font-medium text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-md shadow-sm border border-gray-100">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
