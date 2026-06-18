import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | Anirudh Brand Creation",
  description: "Thank you for reaching out to Anirudh Brand Creation. We will get back to you shortly.",
};

export default function ThankYouPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm border border-green-100">
          <CheckCircle2 size={48} className="text-green-500" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Thank You!</h1>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          Your inquiry has been successfully submitted. Our team of signage experts is reviewing your requirements and will contact you within the next 24 business hours.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-md font-medium hover:bg-black transition-colors"
          >
            Return to Homepage
          </Link>
          <Link 
            href="/projects" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-medium rounded-md border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Explore Our Projects
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
