"use client";

import { useState } from "react";
import Script from "next/script";

const faqs = [
  {
    q: "What types of sign boards do you manufacture?",
    a: "We manufacture LED sign boards, hospital signage, reception signage, wayfinding signage, pylon sign boards, ACP cladding, 3D letters, digital signage, and restaurant signage. As one of the leading sign board manufacturers in Hyderabad, we deliver complete branding solutions from design to installation.",
  },
  {
    q: "How long does a typical signage project take?",
    a: "Typically, mid-to-large signage projects take 15–25 business days from design approval to installation. Smaller projects like reception signage or 3D letter boards may take 7–10 days. We offer expedited services for urgent retail and restaurant launches.",
  },
  {
    q: "Do you handle hospital signage projects?",
    a: "Yes, we are experienced hospital signage board manufacturers in Hyderabad. We provide comprehensive healthcare signage including wayfinding systems, department directories, emergency signs, room identification, and reception branding — all with bilingual support and ADA compliance.",
  },
  {
    q: "Are your LED sign boards weatherproof?",
    a: "Absolutely. We use IP67-rated waterproof Samsung LED modules, non-corrosive ACP or stainless steel frames, and UV-resistant printing specifically designed for the Indian climate. All our LED sign boards come with a 3-year warranty.",
  },
  {
    q: "Do you provide installation services across India?",
    a: "While our primary manufacturing hub is in Hyderabad, we have a network of certified installers across South India and major metros. We handle complete logistics and installation for all project sizes.",
  },
  {
    q: "What industries do you serve?",
    a: "We serve hospitals, corporate offices, IT parks, real estate developers, restaurants, retail stores, educational institutions, and government organisations. Our clients include AIG Hospitals, NMDC, Salarpuria Sattva, Smartworks, and 150+ other leading brands.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-4 block">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 bg-white">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="flex justify-between items-center w-full text-left px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <h4 className="font-semibold text-sm text-black pr-4">{faq.q}</h4>
                <span className={`material-symbols-outlined text-xl text-gray-400 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`}>
                  expand_more
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}`}>
                <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
