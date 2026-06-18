export function FAQ() {
  const faqs = [
    {
      q: "What is the average lead time for a large signage project?",
      a: "Typically, mid-to-large projects take 15-25 business days from design approval to installation. We offer expedited services for retail launches.",
    },
    {
      q: "Do you handle all-India installations?",
      a: "Yes, while our primary manufacturing hub is in Hyderabad, we have a network of certified installers across South India and major metros.",
    },
    {
      q: "Are your LED boards weather-resistant?",
      a: "Absolutely. We use IP67-rated waterproof LEDs and non-corrosive ACP or SS frames designed specifically for the Indian climate.",
    }
  ];

  return (
    <section className="py-[120px] bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-display-md text-headline-lg text-center mb-12">Common Inquiries</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group border-b border-outline-variant/30 pb-4" open={index === 0}>
              <summary className="flex justify-between items-center cursor-pointer list-none py-4">
                <h4 className="font-label-md text-label-md uppercase tracking-wider">{faq.q}</h4>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <p className="font-body-md text-body-md text-on-surface-variant pt-2">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
