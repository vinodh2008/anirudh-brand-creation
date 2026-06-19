import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { businessInfo } from "@/config/businessInfo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const baseUrl = "https://anirudhbrandcreation.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Anirudh Brand Creation | LED Sign Board Manufacturers in Hyderabad & Secunderabad",
    template: "%s | Anirudh Brand Creation",
  },
  description: `Leading LED Sign Board Manufacturers in Hyderabad & Secunderabad. ${businessInfo.seoDescription} Specialists in Hospital Signage, Reception Signage, Wayfinding Signage, Pylon Sign Boards, ACP Cladding & Corporate Branding.`,
  keywords: [
    "LED Sign Board Manufacturers in Hyderabad",
    "Sign Board Manufacturers in Hyderabad",
    "LED Sign Board Manufacturers in Secunderabad",
    "Sign Board Manufacturers in Secunderabad",
    "Hospital Signage Board Manufacturers in Hyderabad",
    "Reception Signage Hyderabad",
    "Wayfinding Signage Hyderabad",
    "Pylon Sign Boards Hyderabad",
    "ACP Cladding Hyderabad",
    "Corporate Branding Signage",
    "Restaurant Signage Hyderabad",
    "Digital Signage Solutions Hyderabad",
    "3D Letter Signage Hyderabad",
    "real estate signage Hyderabad",
    "Anirudh Brand Creation",
  ],
  authors: [{ name: "Anirudh Brand Creation", url: baseUrl }],
  creator: "Anirudh Brand Creation",
  publisher: "Anirudh Brand Creation",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: "Anirudh Brand Creation",
    title: "LED Sign Board Manufacturers in Hyderabad & Secunderabad | Anirudh Brand Creation",
    description:
      "Premium signage and branding solutions for hospitals, corporate offices, restaurants, retail, and real estate projects across Secunderabad and Hyderabad. 500+ projects completed.",
    images: [
      {
        url: `${baseUrl}/images/anirude-logo.png`,
        width: 1200,
        height: 630,
        alt: "Anirudh Brand Creation – LED Sign Board Manufacturers in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LED Sign Board Manufacturers in Hyderabad | Anirudh Brand Creation",
    description:
      "Premium signage solutions for hospitals, corporates, restaurants & real estate. 500+ projects. Call: +91 9133721319",
    images: [`${baseUrl}/images/anirude-logo.png`],
  },
  icons: {
    icon: "/images/anirude-logo.png",
    shortcut: "/images/anirude-logo.png",
    apple: "/images/anirude-logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#localbusiness`,
      "name": businessInfo.name,
      "image": `${baseUrl}/images/anirude-logo.png`,
      "telephone": "+91 9133721319",
      "email": businessInfo.email,
      "url": baseUrl,
      "description": businessInfo.seoDescription,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": businessInfo.address.street,
        "addressLocality": businessInfo.address.city,
        "addressRegion": businessInfo.address.state,
        "postalCode": businessInfo.address.postalCode,
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 17.4262,
        "longitude": 78.4908,
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00",
      },
      "priceRange": "₹₹₹",
      "sameAs": [],
      "areaServed": [
        { "@type": "City", "name": "Hyderabad" },
        { "@type": "City", "name": "Secunderabad" },
        { "@type": "City", "name": "Bholakpur" },
        { "@type": "City", "name": "Gachibowli" },
        { "@type": "City", "name": "Hitech City" },
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
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ACP Cladding" } },
        ],
      },
    },
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": businessInfo.name,
      "url": baseUrl,
      "logo": `${baseUrl}/images/anirude-logo.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 9133721319",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Telugu"],
      },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": `${baseUrl}/services`,
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Projects",
          "item": `${baseUrl}/projects`,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-white text-black min-h-screen flex flex-col antialiased`}>
        <Navbar />
        <main className="flex-1 pt-[72px]">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
