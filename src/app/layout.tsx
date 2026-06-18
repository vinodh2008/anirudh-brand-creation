import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { businessInfo } from "@/config/businessInfo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Anirudh Brand Creation | LED Sign Board Manufacturers in Hyderabad & Secunderabad",
    template: "%s | Anirudh Brand Creation",
  },
  description: `${businessInfo.seoDescription} Leading manufacturers of Hospital Signage, Reception Signage, Wayfinding Signage, Pylon Sign Boards, ACP Cladding, and Digital Signage.`,
  keywords: [
    "LED Sign Board Manufacturers in Hyderabad",
    "Sign Board Manufacturers in Hyderabad",
    "LED Sign Board Manufacturers in Secunderabad",
    "Sign Board Manufacturers in Secunderabad",
    "Hospital Signage Board Manufacturers in Hyderabad",
    "Reception Signage Board Manufacturers",
    "Wayfinding Signage Hyderabad",
    "Pylon Sign Boards Hyderabad",
    "ACP Cladding Hyderabad",
    "Digital Signage Solutions Hyderabad",
    "3D Letter Signage Hyderabad",
    "corporate branding signage",
    "restaurant signage Hyderabad",
    "real estate signage Hyderabad",
  ],
  authors: [{ name: "Anirudh Brand Creation" }],
  creator: "Anirudh Brand Creation",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://anirudhbrandcreation.com",
    siteName: "Anirudh Brand Creation",
    title: "LED Sign Board Manufacturers in Hyderabad & Secunderabad | Anirudh Brand Creation",
    description: "Premium signage and branding solutions for hospitals, corporate offices, restaurants, retail, and real estate projects across Secunderabad and Hyderabad. 500+ projects.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://anirudhbrandcreation.com/#localbusiness",
      "name": "Anirudh Brand Creation",
      "image": "https://anirudhbrandcreation.com/images/anirudh-logo.png",
      "telephone": businessInfo.phone,
      "email": businessInfo.email,
      "url": "https://anirudhbrandcreation.com",
      "description": businessInfo.seoDescription,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": businessInfo.address.street,
        "addressLocality": businessInfo.address.city,
        "addressRegion": businessInfo.address.state,
        "postalCode": businessInfo.address.postalCode,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 17.4262,
        "longitude": 78.4908
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      "priceRange": "₹₹₹",
      "sameAs": [],
      "areaServed": [
        {
          "@type": "City",
          "name": "Hyderabad"
        },
        {
          "@type": "City",
          "name": "Secunderabad"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Signage Solutions",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LED Sign Boards" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hospital Signage" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Reception Signage" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wayfinding Signage" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pylon Sign Boards" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ACP Cladding" } }
        ]
      }
    },
    {
      "@type": "Organization",
      "@id": "https://anirudhbrandcreation.com/#organization",
      "name": "Anirudh Brand Creation",
      "url": "https://anirudhbrandcreation.com",
      "logo": "https://anirudhbrandcreation.com/images/anirudh-logo.png"
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
      <body className={`${inter.variable} font-sans bg-white text-black min-h-screen flex flex-col antialiased`}>
        <Navbar />
        <main className="flex-1 pt-[72px] pb-[56px] md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileStickyCTA />
        <FloatingButtons />
      </body>
    </html>
  );
}
