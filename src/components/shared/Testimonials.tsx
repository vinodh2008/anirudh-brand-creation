export function Testimonials() {
  const testimonials = [
    {
      text: "Anirudh Brand Creation delivered our hospital's entire wayfinding signage system ahead of schedule. Their precision in manufacturing hospital signage boards for high-pressure environments like ours is unmatched in Hyderabad.",
      role: "Infrastructure Head",
      company: "AIG Hospitals"
    },
    {
      text: "The LED sign board they installed at our Knowledge City campus has become a landmark in itself. Exceptional build quality, brilliant luminosity, and their team handled everything from design to installation seamlessly.",
      role: "Sr. Project Manager",
      company: "Salarpuria Sattva"
    },
    {
      text: "Their professional approach to government tender requirements and quality adherence is what sets them apart. The reception signage and office branding they delivered for NMDC was top-class.",
      role: "Director (Projects)",
      company: "NMDC Ltd"
    }
  ];

  return (
    <section className="py-[100px] bg-surface-container">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-16">
          <span className="text-label-sm font-label-sm uppercase tracking-widest text-secondary-container mb-4 block">Client Testimonials</span>
          <h2 className="text-headline-lg font-display-md">Trusted by Hyderabad&apos;s Leading Brands</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 apple-shadow border border-outline-variant/20">
              <span
                className="material-symbols-outlined text-secondary-container mb-4 text-3xl block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                format_quote
              </span>
              <p className="text-body-md font-body-md text-on-surface mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <div className="border-t border-outline-variant/30 pt-4">
                <p className="font-label-md text-label-md uppercase">{t.role}</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
