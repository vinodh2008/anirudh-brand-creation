import Link from "next/link";
import { businessInfo } from "@/config/businessInfo";

export const metadata = {
  title: "Page Not Found – 404 | Anirudh Brand Creation",
  description: "The page you are looking for doesn't exist. Return to Anirudh Brand Creation – LED Sign Board Manufacturers in Hyderabad.",
};

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[#fe6b00] font-semibold mb-4">Error 404</p>
        <h1 className="text-8xl md:text-9xl font-bold text-black mb-4 leading-none">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Page Not Found</h2>
        <p className="text-base text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto">
          The page you are looking for doesn&apos;t exist, has been moved, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-semibold text-sm uppercase tracking-wider hover:bg-[#fe6b00] transition-colors"
          >
            <span className="material-symbols-outlined text-lg">home</span>
            Back to Homepage
          </Link>
          <a
            href={businessInfo.phoneUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#fe6b00] text-white font-semibold text-sm uppercase tracking-wider hover:bg-orange-600 transition-colors"
            aria-label={`Call us at ${businessInfo.phone}`}
          >
            <span className="material-symbols-outlined text-lg">call</span>
            Call Us Now
          </a>
        </div>

        <p className="text-xs text-gray-500">
          Need help?{" "}
          <a href={businessInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline font-medium">
            WhatsApp us
          </a>{" "}
          or call{" "}
          <a href={businessInfo.phoneUrl} className="text-[#fe6b00] hover:underline font-medium">
            {businessInfo.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
