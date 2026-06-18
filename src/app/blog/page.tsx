import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Insights | Signage Trends",
  description: "Read the latest insights on signage trends, LED boards, hospital wayfinding, and corporate branding from Anirudh Brand Creation.",
};

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Hospital Wayfinding Systems in 2024",
    excerpt: "Discover how modern hospitals are using color-coded, strategic signage to reduce patient anxiety and improve facility navigation.",
    date: "June 15, 2024",
    author: "Anirudh Team",
    category: "Healthcare",
    slug: "guide-to-hospital-wayfinding",
  },
  {
    id: 2,
    title: "Why ACP Cladding is Essential for Modern Corporate Headquarters",
    excerpt: "Learn the benefits of Aluminum Composite Panels for building facades, from durability to energy efficiency and sleek aesthetics.",
    date: "June 02, 2024",
    author: "Anirudh Team",
    category: "Corporate",
    slug: "benefits-of-acp-cladding",
  },
  {
    id: 3,
    title: "LED Sign Boards vs. Traditional Neon: Which is Better?",
    excerpt: "A comprehensive breakdown of energy consumption, maintenance costs, and brightness levels between LED and Neon signage.",
    date: "May 20, 2024",
    author: "Anirudh Team",
    category: "Retail",
    slug: "led-vs-neon-sign-boards",
  }
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-gray-50 py-20 md:py-32 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Signage Insights & News</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and case studies in the world of branding and manufacturing.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 group flex flex-col">
                <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm group-hover:scale-105 transition-transform duration-500 bg-gray-200">
                    [Blog Featured Image]
                  </div>
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-accent shadow-sm">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors leading-tight">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-accent font-medium hover:text-blue-800 transition-colors mt-auto">
                    Read Full Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
