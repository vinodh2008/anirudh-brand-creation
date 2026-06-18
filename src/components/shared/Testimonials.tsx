export function Testimonials() {
  const testimonials = [
    {
      text: "Anirudh Brand Creation delivered our hospital's entire wayfinding signage system ahead of schedule. Their precision in manufacturing hospital signage boards for high-pressure healthcare environments is unmatched in Hyderabad.",
      name: "Infrastructure Head",
      designation: "AIG Hospitals, Hyderabad",
    },
    {
      text: "The LED sign board they installed at our Knowledge City campus has become a landmark. Exceptional build quality, brilliant luminosity, and their team handled everything from design to installation seamlessly.",
      name: "Sr. Project Manager",
      designation: "Salarpuria Sattva, HITEC City",
    },
    {
      text: "Their professional approach to government tender requirements and quality adherence is what sets them apart. The reception signage and office branding they delivered for NMDC was top-class.",
      name: "Director (Projects)",
      designation: "NMDC Ltd, Hyderabad",
    },
  ];

  return (
    <section className="py-20 bg-[#f5f5f5]" id="testimonials">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-4 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black">What They Have to Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="text-[#fe6b00] text-4xl mb-4 leading-none">&ldquo;</div>
              <p className="text-gray-600 text-base leading-relaxed mb-6">{t.text}</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-sm text-black">{t.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{t.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
