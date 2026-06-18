export function ClientLogos() {
  const logos = [
    "AIG HOSPITALS",
    "NMDC",
    "VESSELLA",
    "SATTVA",
    "DURADOOR",
    "SALARPURIA"
  ];

  return (
    <section className="py-20 border-y border-outline-variant/30 overflow-hidden bg-white">
      <div className="logo-scroll flex items-center whitespace-nowrap">
        {/* Double the list to create a seamless scrolling loop */}
        <div className="flex gap-24 items-center px-12">
          {logos.map((logo, index) => (
            <span key={`first-${index}`} className="text-headline-lg font-bold text-outline-variant/50">
              {logo}
            </span>
          ))}
        </div>
        <div className="flex gap-24 items-center px-12">
          {logos.map((logo, index) => (
            <span key={`second-${index}`} className="text-headline-lg font-bold text-outline-variant/50">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
