import type { Metadata } from "next";
import OnDemandClientExperience from "./OnDemandClientExperience";

export const metadata: Metadata = {
  title: "Custom & On-Demand Travel Experiences | Sobhavi Travels",
  description:
    "Design your dream journey on demand. Private island retreats, royal heritage palace stays, bespoke honeymoons, and international luxury adventures crafted to your rhythm.",
  alternates: {
    canonical: "https://www.sobhavitravel.com/on-demand",
  },
  openGraph: {
    title: "Custom & On-Demand Travel Experiences | Sobhavi Travels",
    description:
      "Your vision, our unrivaled execution. Bespoke luxury travel planned by seasoned destination specialists with 24/7 private concierge.",
    url: "https://www.sobhavitravel.com/on-demand",
    siteName: "Sobhavi Travels",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 675,
        alt: "Custom On-Demand Luxury Travel - Sobhavi Travels",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom & On-Demand Travel Experiences | Sobhavi Travels",
    description:
      "Tailor-made itineraries, private luxury villas, VIP transfers, and 24/7 personal concierge support.",
    images: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function OnDemandPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "On-Demand & Bespoke Luxury Travel Planning",
    "provider": {
      "@type": "TravelAgency",
      "name": "Sobhavi Travels",
      "url": "https://www.sobhavitravel.com",
      "telephone": "+917406994752",
      "email": "hello@sobhavitravel.com",
    },
    "description":
      "Tailor-made private travel itineraries, handpicked luxury accommodations, private vehicle transfers and dedicated concierge planning.",
    "serviceType": "Custom Luxury Travel",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <OnDemandClientExperience />
    </>
  );
}
