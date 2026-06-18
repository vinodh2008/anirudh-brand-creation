import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Testimonials } from "@/components/shared/Testimonials";
import { ClientLogos } from "@/components/home/ClientLogos";
import { Process } from "@/components/home/Process";
import { FAQ } from "@/components/shared/FAQ";
import { CTASection } from "@/components/shared/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <IndustriesGrid />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <ClientLogos />
      <Process />
      <FAQ />
      <CTASection />
    </>
  );
}
