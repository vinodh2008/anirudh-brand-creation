export function ClientLogos() {
  const logos = [
    { name: "AIG Hospitals", image: "/images/aig-hospitals.jpeg" },
    { name: "Care Hospitals", image: "/images/care-hospitals-signage.jpeg" },
    { name: "NMDC", image: "/images/nmdc-corporate-signage.jpeg" },
    { name: "Salarpuria Sattva", image: "/images/sattva-real-estate.jpeg" },
    { name: "Smartworks", image: "/images/smartworks-corporate.jpeg" },
    { name: "Duradoor", image: "/images/durandhar-signage.jpeg" },
    { name: "Nagarjuna Cement", image: "/images/nagarjuna-brand-creation.jpeg" },
    { name: "GoliSoda", image: "/images/golisoda-restaurant.jpeg" },
    { name: "Vessella Group", image: "/images/group-corporate-branding.jpeg" },
    { name: "Orion Farms", image: "/images/farms-signage.jpeg" },
    { name: "TechHub", image: "/images/techhub-corporate.jpeg" },
    { name: "Zafrani Tea", image: "/images/zafani-tea-signage.jpeg" },
  ];

  return (
    <section className="py-8 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-6">
          Trusted by 150+ Brands Across Hyderabad
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex logo-scroll whitespace-nowrap gap-0">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[140px] h-[70px] mx-4 rounded-md overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center group"
            >
              <img
                src={logo.image}
                alt={`${logo.name} signage project by Anirudh Brand Creation Hyderabad`}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
