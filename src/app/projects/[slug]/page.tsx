import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/shared/CTASection";

// Mock data for project details. In a real app, this would come from a CMS or database.
const projectsData: Record<string, any> = {
  "aig-hospitals": {
    title: "AIG Hospitals Wayfinding",
    client: "AIG Hospitals",
    industry: "Healthcare",
    service: "Hospital Wayfinding",
    duration: "4 Weeks",
    description: "Complete design, manufacturing, and installation of internal and external wayfinding signage for the 1000-bed facility.",
    challenge: "Navigating a massive multi-block hospital can be stressful for patients. The challenge was to create an intuitive, universally understandable signage system.",
    solution: "We implemented a color-coded zonal wayfinding system using premium acrylic and non-reflective finishes for maximum readability under hospital lighting.",
    results: [
      "Reduced patient navigation time by 40%",
      "Improved patient satisfaction scores",
      "Seamless integration with hospital architecture"
    ]
  },
  "nmdc": {
    title: "NMDC Corporate Branding",
    client: "National Mineral Development Corporation",
    industry: "Corporate",
    service: "Corporate Branding & 3D Letters",
    duration: "3 Weeks",
    description: "Premium metallic 3D letters and corporate identity branding for their new headquarters.",
    challenge: "Creating a monumental sign that reflects the strength and stature of a Navratna Public Sector Enterprise.",
    solution: "Used high-grade SS (Stainless Steel) with titanium coating to withstand weather elements while maintaining a premium gold-finish look.",
    results: [
      "Zero maintenance requirement",
      "High visibility from 500 meters away",
      "Enhanced corporate prestige"
    ]
  }
};

type Props = {
  params: { slug: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectsData[params.slug];
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projectsData[params.slug] || {
    title: "Project Name",
    client: "Client Name",
    industry: "Industry",
    service: "Service Type",
    duration: "Duration",
    description: "Detailed description of the project will go here.",
    challenge: "Challenge details.",
    solution: "Solution details.",
    results: ["Result 1", "Result 2"]
  };

  return (
    <>
      <section className="bg-gray-50 py-12 md:py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/projects" className="inline-flex items-center text-accent font-medium hover:text-blue-800 transition-colors mb-8">
            <ArrowLeft size={16} className="mr-2" /> Back to Projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{project.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl">{project.description}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="rounded-2xl overflow-hidden aspect-video bg-gray-100 shadow-xl mb-12 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Main Project Showcase Image]
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-12">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">[Gallery Image 1]</div>
                </div>
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">[Gallery Image 2]</div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-600">
                <h3 className="text-2xl font-bold text-primary mb-4">The Challenge</h3>
                <p className="mb-8">{project.challenge}</p>

                <h3 className="text-2xl font-bold text-primary mb-4">Our Solution</h3>
                <p className="mb-8">{project.solution}</p>

                <h3 className="text-2xl font-bold text-primary mb-4">Key Results</h3>
                <ul className="space-y-3">
                  {project.results.map((result: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="text-accent shrink-0 mt-1 mr-3" size={20} />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 sticky top-32">
                <h3 className="text-xl font-bold text-primary mb-6 border-b border-gray-200 pb-4">Project Overview</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Client</p>
                    <p className="font-semibold text-gray-900">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Industry</p>
                    <p className="font-semibold text-gray-900">{project.industry}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Services Provided</p>
                    <p className="font-semibold text-gray-900">{project.service}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Project Duration</p>
                    <p className="font-semibold text-gray-900">{project.duration}</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-600 mb-4">Want similar results for your brand?</p>
                  <Link href="/contact" className="block w-full text-center bg-primary text-white py-3 rounded-md font-medium hover:bg-black transition-colors">
                    Discuss Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
