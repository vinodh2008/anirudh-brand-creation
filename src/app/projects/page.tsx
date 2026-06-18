import { Metadata } from "next";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { CTASection } from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Our Projects Portfolio | Anirudh Brand Creation",
  description: "Browse our extensive portfolio of completed signage and branding projects across Hyderabad, featuring AIG Hospitals, NMDC, and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-surface-container-lowest pt-[160px] pb-[60px] border-b border-outline-variant/30">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 text-center">
          <h1 className="text-display-md md:text-display-lg font-display-md text-primary mb-6">Our Work Portfolio</h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl mx-auto">
            Explore our recent projects and see how we've transformed the visual identity of leading brands in Hyderabad with premium LED signage and architectural branding.
          </p>
        </div>
      </section>

      <ProjectGallery />
      <CTASection />
    </>
  );
}
