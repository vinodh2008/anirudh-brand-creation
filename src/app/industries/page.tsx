import { Metadata } from "next";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { CTASection } from "@/components/shared/CTASection";
import { Testimonials } from "@/components/shared/Testimonials";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Specialized signage solutions for healthcare, corporate, real estate, retail, and hospitality sectors in Hyderabad.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-gray-50 py-20 md:py-32 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Industries We Serve</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored signage solutions engineered to meet the unique demands and compliance standards of your specific industry.
          </p>
        </div>
      </section>

      <IndustriesGrid />
      <Testimonials />
      <CTASection />
    </>
  );
}
