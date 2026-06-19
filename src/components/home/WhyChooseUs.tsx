import Image from "next/image";
import { businessInfo } from "@/config/businessInfo";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: "verified",
      title: "Premium Materials",
      desc: "Using top-grade acrylics, non-rusting alloys, and high-efficiency Samsung LEDs for all LED sign boards and hospital signage.",
    },
    {
      icon: "engineering",
      title: "In-House Manufacturing",
      desc: "State-of-the-art CNC and laser cutting facility in Hyderabad for total quality control of every signage project.",
    },
    {
      icon: "schedule",
      title: "Strict Timelines",
      desc: "Enterprise-level project management to ensure on-time delivery of pylon sign boards, ACP cladding, and reception signage.",
    },
    {
      icon: "support_agent",
      title: "End-to-End Service",
      desc: "From site assessment and design to manufacturing, installation, and annual maintenance — all under one roof.",
    },
  ];

  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-label-sm font-label-sm uppercase tracking-widest text-secondary-container mb-4 block">Why Choose Us</span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-display-md mb-6">
            Why Hyderabad&apos;s Top Brands Choose Anirudh Brand Creation
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant mb-10">
            We don&apos;t just manufacture sign boards — we engineer trust and visibility for industry leaders like AIG Hospitals, NMDC, Salarpuria Sattva, and 150+ more clients.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div key={index}>
                <span className="material-symbols-outlined text-secondary-container text-4xl mb-3 block">{reason.icon}</span>
                <h4 className="font-label-md text-label-md uppercase mb-2">{reason.title}</h4>
                <p className="text-label-sm font-label-sm text-on-surface-variant leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>

          {/* Lead gen CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={businessInfo.phoneUrl}
              className="flex items-center gap-2 bg-primary text-on-primary px-6 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-secondary-container transition-all duration-300"
              aria-label={`Call us at ${businessInfo.phone}`}
            >
              <span className="material-symbols-outlined">call</span> Talk to Expert
            </a>
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-primary text-primary px-6 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-surface-container transition-all duration-300"
              aria-label="WhatsApp us"
            >
              <span className="material-symbols-outlined">chat</span> WhatsApp
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded">
            <Image
              src="/images/working-manufacturing.jpeg"
              alt="Anirudh Brand Creation in-house signage manufacturing facility Hyderabad – LED sign board production"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-primary p-8 text-white hidden md:block shadow-xl">
            <p className="text-display-md font-bold">10+</p>
            <p className="font-label-md text-label-md uppercase tracking-widest">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
