import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Anirudh Brand Creation | Premium Signage & Branding in Hyderabad",
    template: "%s | Anirudh Brand Creation",
  },
  description: "Top-tier LED sign board manufacturers and branding experts in Hyderabad. Specializing in corporate branding, hospital wayfinding, retail, and real estate signage.",
  keywords: [
    "signage company in Hyderabad",
    "LED sign board manufacturers in Hyderabad",
    "hospital signage solutions",
    "wayfinding signage systems",
    "acrylic sign boards Hyderabad",
    "3D letter signage",
    "corporate branding signage",
    "restaurant signage",
    "retail store signage",
    "real estate signage",
    "ACP cladding services"
  ],
  authors: [{ name: "Anirudh Brand Creation" }],
  creator: "Anirudh Brand Creation",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://anirudhbrandcreation.com",
    siteName: "Anirudh Brand Creation",
    title: "Premium Signage & Branding in Hyderabad",
    description: "Expert signage and branding solutions for corporate, healthcare, retail, and real estate sectors.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://anirudhbrandcreation.com/#organization",
      "name": "Anirudh Brand Creation",
      "url": "https://anirudhbrandcreation.com",
      "logo": "https://anirudhbrandcreation.com/logo.png",
      "description": "Top-tier LED sign board manufacturers and branding experts in Hyderabad.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "Contact via Website",
        "contactType": "Customer Service"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://anirudhbrandcreation.com/#localbusiness",
      "name": "Anirudh Brand Creation",
      "image": "https://anirudhbrandcreation.com/logo.png",
      "telephone": "Contact via Website",
      "url": "https://anirudhbrandcreation.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hyderabad",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500001",
        "addressCountry": "IN"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-body-md bg-surface text-primary selection:bg-secondary-container selection:text-white min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1 pt-[72px]">
          {children}
        </main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
