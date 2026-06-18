import { Hero } from "@/components/home/Hero";
import { ClientLogos } from "@/components/home/ClientLogos";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ServicesDetail } from "@/components/home/ServicesDetail";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Testimonials } from "@/components/shared/Testimonials";
import { FAQ } from "@/components/shared/FAQ";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <ServicesGrid />
      <ServicesDetail />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}
