export function Process() {
  const steps = [
    { num: "01", title: "Consultation", desc: "Understanding your vision and space." },
    { num: "02", title: "Site Audit", desc: "Precise measurements and light study." },
    { num: "03", title: "Design", desc: "3D renders and architectural specs." },
    { num: "04", title: "Production", desc: "Crafted using premium materials." },
    { num: "05", title: "Installation", desc: "Expert deployment at scale." },
    { num: "06", title: "Support", desc: "Maintenance and LED servicing." },
  ];

  return (
    <section className="py-[120px] bg-surface-container-lowest" id="process">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <h2 className="font-display-md text-headline-lg-mobile md:text-headline-lg text-center mb-20">The Precision Workflow</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center font-display-md text-headline-lg-mobile mb-6">
                {step.num}
              </div>
              <h4 className="font-label-md text-label-md uppercase mb-2">{step.title}</h4>
              <p className="text-label-sm font-label-sm text-on-surface-variant">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
