import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { businessInfo } from "@/config/businessInfo";
import { CTASection } from "@/components/shared/CTASection";

const projectsData: Record<string, {
  title: string;
  client: string;
  industry: string;
  service: string;
  location: string;
  duration: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  alt: string;
}> = {
  "aig-hospital-wayfinding": {
    title: "AIG Hospitals Wayfinding System",
    client: "AIG Hospitals",
    industry: "Healthcare",
    service: "Hospital Wayfinding Signage",
    location: "Gachibowli, Hyderabad",
    duration: "4 Weeks",
    description: "Complete design, manufacturing, and installation of internal and external wayfinding signage for the 1000-bed AIG Hospitals facility in Gachibowli.",
    challenge: "Navigating a massive multi-block hospital can be stressful for patients and visitors. The challenge was to create an intuitive, universally understandable signage system that works for all age groups including non-English speakers.",
    solution: "We implemented a colour-coded zonal wayfinding system using premium acrylic and non-reflective finishes for maximum readability under hospital lighting, with bilingual (English + Telugu) labelling throughout.",
    results: [
      "Reduced patient navigation time by 40%",
      "Improved patient satisfaction scores",
      "Seamless integration with hospital architecture",
      "Bilingual accessibility for all visitors",
    ],
    image: "/images/aig-hospitals.jpeg",
    alt: "AIG Hospitals wayfinding signage board in Hyderabad by Anirudh Brand Creation – Hospital Signage Board Manufacturers",
  },
  "nagarjuna-pylon-board": {
    title: "Nagarjuna Cement Pylon Sign Board",
    client: "Nagarjuna Cement",
    industry: "Industrial / Manufacturing",
    service: "Rooftop Pylon Sign Board",
    location: "Hyderabad",
    duration: "3 Weeks",
    description: "Design and installation of a landmark rooftop pylon sign board for Nagarjuna Cement, visible from long distances across the Hyderabad skyline.",
    challenge: "Creating a rooftop installation that withstands heavy winds and monsoon conditions while maintaining brilliant LED illumination and brand impact.",
    solution: "Structural steel framing with wind-load engineering, anti-corrosion coating, and high-brightness Samsung LED modules were used to ensure longevity and visibility.",
    results: [
      "Visible from over 500 metres away",
      "Zero maintenance in first 2 years",
      "Enhanced brand presence at national highway",
      "Delivered 5 days ahead of schedule",
    ],
    image: "/images/nagarjuna-brand-creation.jpeg",
    alt: "Nagarjuna Cement rooftop pylon sign board Hyderabad by Anirudh Brand Creation – Pylon Sign Board Manufacturers",
  },
  "salarpuria-led-signage": {
    title: "Salarpuria Sattva LED Building Signage",
    client: "Salarpuria Sattva",
    industry: "Real Estate",
    service: "LED Building Facade Signage",
    location: "HITEC City, Hyderabad",
    duration: "2 Weeks",
    description: "Premium LED facade signage for the Salarpuria Sattva Knowledge City campus, creating a landmark presence in HITEC City.",
    challenge: "Aligning large-scale LED signage with the building's architectural design while ensuring long-term durability and premium aesthetics.",
    solution: "Custom-profiled aluminium channels with high-efficiency LED modules were installed to precisely match the building facade with uniform illumination.",
    results: [
      "Became a landmark visual in HITEC City",
      "Exceptional build quality and luminosity",
      "Design-to-installation completed seamlessly",
      "3-year maintenance-free performance",
    ],
    image: "/images/sattva-real-estate.jpeg",
    alt: "Salarpuria Sattva LED building signage Hyderabad by Anirudh Brand Creation – LED Sign Board Manufacturers",
  },
  "care-hospitals-reception-signage": {
    title: "Care Hospitals Reception Signage",
    client: "Care Hospitals",
    industry: "Healthcare",
    service: "Reception & Lobby Signage",
    location: "Banjara Hills, Hyderabad",
    duration: "10 Days",
    description: "Premium 3D metal reception branding and lobby signage for Care Hospitals at their Banjara Hills facility.",
    challenge: "Creating reception signage that conveys professionalism and warmth simultaneously, while matching the hospital's interior design language.",
    solution: "Stainless steel 3D letters with brushed gold finish and subtle LED backlighting were installed, complementing the hospital's interior colour palette.",
    results: [
      "Elevated first impression for patients and visitors",
      "Perfect brand colour accuracy",
      "Delivered within tight construction timeline",
      "Received high praise from hospital management",
    ],
    image: "/images/care-hospitals-signage.jpeg",
    alt: "Care Hospitals 3D metal reception signage Hyderabad by Anirudh Brand Creation – Hospital Signage Manufacturers",
  },
  "golisoda-franchise-signage": {
    title: "GoliSoda Franchise Signage",
    client: "GoliSoda",
    industry: "Restaurant / F&B",
    service: "Franchise LED Signage",
    location: "Multiple Locations, Hyderabad",
    duration: "7 Days per outlet",
    description: "Consistent LED franchise signage rollout for GoliSoda across multiple outlets in Hyderabad, ensuring brand consistency at scale.",
    challenge: "Maintaining exact brand colour accuracy and signage consistency across multiple franchise locations with varying shopfront dimensions.",
    solution: "We created standardised signage templates and fabricated custom-fitted LED sign boards for each location while maintaining brand integrity.",
    results: [
      "12 outlets branded consistently",
      "Increased foot traffic at all locations",
      "Brand recognition improved significantly",
      "Rapid 7-day turnaround per outlet",
    ],
    image: "/images/golisoda-restaurant.jpeg",
    alt: "GoliSoda franchise LED signage board Hyderabad by Anirudh Brand Creation – Restaurant Signage Manufacturers",
  },
  "smartworks-reception-branding": {
    title: "Smartworks Reception Branding",
    client: "Smartworks",
    industry: "Co-working / Corporate",
    service: "Reception & Office Branding",
    location: "HITEC City, Hyderabad",
    duration: "2 Weeks",
    description: "Complete reception branding for Smartworks co-working spaces in HITEC City, including 3D LED letters, wall graphics, and directional signage.",
    challenge: "Creating a modern, energetic brand environment for a co-working space that appeals to startups and enterprise clients alike.",
    solution: "A combination of illuminated 3D logo letters, custom wall murals, frosted glass graphics, and clean directional signage was installed throughout the space.",
    results: [
      "Premium first impression for enterprise clients",
      "Seamless brand consistency throughout the space",
      "Positive client feedback and referrals",
      "Completed on schedule before launch",
    ],
    image: "/images/smartworks-corporate.jpeg",
    alt: "Smartworks LED reception branding Hyderabad by Anirudh Brand Creation – Reception Signage Manufacturers",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug];
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Portfolio`,
    description: `${project.description} by Anirudh Brand Creation – ${project.service} in ${project.location}.`,
    alternates: {
      canonical: `https://anirudhbrandcreation.com/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Anirudh Brand Creation`,
      description: project.description,
      images: [{ url: `https://anirudhbrandcreation.com${project.image}`, alt: project.alt }],
    },
  };
}

export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData[slug];
  if (!project) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white pt-[120px] pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={project.image} alt={project.alt} fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20">
          <nav className="text-xs text-white/50 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-white/80">{project.title}</span>
          </nav>
          <span className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-3 block">{project.industry}</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{project.title}</h1>
          <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">{project.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2">
              <div className="relative aspect-video overflow-hidden rounded-md shadow-sm border border-gray-100 mb-10">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-black mb-3">The Challenge</h2>
                  <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-black mb-3">Our Solution</h2>
                  <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-black mb-4">Key Results</h2>
                  <ul className="space-y-3">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-[#fe6b00] text-xl flex-shrink-0 mt-0.5">check_circle</span>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-gray-50 p-6 border border-gray-100 sticky top-24">
                <h3 className="text-sm font-bold text-black mb-5 pb-4 border-b border-gray-200 uppercase tracking-wider">Project Overview</h3>
                <div className="space-y-5">
                  {[
                    { label: "Client", value: project.client },
                    { label: "Industry", value: project.industry },
                    { label: "Service", value: project.service },
                    { label: "Location", value: project.location },
                    { label: "Duration", value: project.duration },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-0.5">{label}</p>
                      <p className="text-sm font-semibold text-black">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
                  <p className="text-xs text-gray-600 font-medium">Want similar results for your brand?</p>
                  <a
                    href={businessInfo.phoneUrl}
                    className="flex items-center justify-center gap-2 w-full bg-[#fe6b00] text-white py-3 text-xs font-semibold uppercase tracking-wider hover:bg-orange-600 transition-colors"
                    aria-label={`Call us at ${businessInfo.phone}`}
                  >
                    <span className="material-symbols-outlined text-base">call</span> Call Now
                  </a>
                  <a
                    href={businessInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 text-xs font-semibold uppercase tracking-wider hover:bg-[#1da851] transition-colors"
                    aria-label="WhatsApp us"
                  >
                    <span className="material-symbols-outlined text-base">chat</span> WhatsApp
                  </a>
                  <Link
                    href="/projects"
                    className="flex items-center justify-center gap-2 w-full border border-gray-300 text-gray-700 py-3 text-xs font-semibold uppercase tracking-wider hover:border-black hover:text-black transition-colors"
                  >
                    ← View All Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
