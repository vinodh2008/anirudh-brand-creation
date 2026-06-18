import { Metadata } from "next";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { CTASection } from "@/components/shared/CTASection";
import { FAQ } from "@/components/shared/FAQ";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our comprehensive range of signage and branding services including LED signs, ACP cladding, hospital wayfinding, and corporate branding.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gray-50 py-20 md:py-32 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Premium Signage Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From design and manufacturing to installation and maintenance, we offer end-to-end branding solutions for your business.
          </p>
        </div>
      </section>

      <ServicesGrid />

      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Manufacturing Process</h2>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
              {[
                { step: "01", title: "Consultation & Site Visit", desc: "We understand your brand requirements and inspect the installation site for accurate measurements." },
                { step: "02", title: "Design & Prototyping", desc: "Our design team creates 3D renders and technical drawings for your approval." },
                { step: "03", title: "In-House Manufacturing", desc: "Using premium materials and CNC technology, we craft your signage with precision." },
                { step: "04", title: "Professional Installation", desc: "Our trained technicians ensure safe, compliant, and perfect installation of your brand assets." }
              ].map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-accent text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                    {item.step}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-lg text-primary mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <CTASection />
    </>
  );
}
