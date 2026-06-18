import { Metadata } from "next";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TrustStats } from "@/components/home/TrustStats";
import { CTASection } from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Anirudh Brand Creation, Hyderabad's premier signage and branding company with over 10 years of experience.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gray-50 py-20 md:py-32 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">About Anirudh Brand Creation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate engineers, designers, and craftsmen dedicated to elevating brand visibility across Hyderabad.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-100 shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Company History / Office Image]
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Our Story</h2>
              <h3 className="text-3xl font-bold text-primary mb-6">A Decade of Excellence in Signage</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to revolutionize the signage industry in Hyderabad, Anirudh Brand Creation has grown from a small workshop to a state-of-the-art manufacturing facility. We understand that your sign is often the first interaction a customer has with your business.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to using premium materials, combined with cutting-edge technology like CNC routers and laser cutters, allows us to deliver products that are not only visually stunning but structurally sound and durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustStats />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
