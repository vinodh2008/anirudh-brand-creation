import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  slug: string;
  imagePlaceholder: string;
}

export function ProjectCard({ title, category, slug, imagePlaceholder }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="group block">
      <div className="relative rounded-xl overflow-hidden bg-gray-100 aspect-square sm:aspect-[4/3] mb-4">
        {/* Placeholder until real images are uploaded */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium text-sm group-hover:scale-105 transition-transform duration-500 bg-gray-200">
          [{imagePlaceholder}]
        </div>
        
        {/* Overlay for hover effect */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
      </div>
      
      <div>
        <div className="text-xs font-semibold text-accent mb-1 uppercase tracking-wider">{category}</div>
        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{title}</h3>
        <div className="inline-flex items-center text-sm font-medium text-gray-600 group-hover:text-primary transition-colors">
          View Details <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
