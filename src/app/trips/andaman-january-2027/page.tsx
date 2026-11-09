import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import AndamanClientExperience from "./AndamanClientExperience";

export const metadata: Metadata = {
  title: "Andaman Women Only Group Trip January 2027 | Sobhavi Travels",
  description:
    "Come solo. Leave with island sisters. Experience 6 unforgettable days across Port Blair, Havelock & Neil Island on this exclusive women-only group trip from 23–28 January 2027.",
  alternates: {
    canonical: "https://www.sobhavitravel.com/trips/andaman-january-2027",
  },
  openGraph: {
    title: "Andaman Women Only Group Trip January 2027 | Sobhavi Travels",
    description:
      "A women-only strangers trip to the Andaman Islands (23–28 Jan 2027). Radhanagar sunsets, Elephanta semi-submarine cruise, Neil Island corals and sisterhood.",
    url: "https://www.sobhavitravel.com/trips/andaman-january-2027",
    siteName: "Sobhavi Travels",
    images: [
      {
        url: "/images/trips/andaman/hero-radhanagar.jpg",
        width: 1200,
        height: 675,
        alt: "Radhanagar Beach, Havelock - Andaman Women Only Trip",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andaman Women Only Group Trip January 2027 | Sobhavi Travels",
    description:
      "Come solo. Leave with island sisters. 23–28 January 2027 across Port Blair, Havelock and Neil Island.",
    images: ["/images/trips/andaman/hero-radhanagar.jpg"],
  },
};

export default function AndamanTripPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Andaman Women-Only Group Trip (January 2027)",
    "description":
      "A 6-day women-only strangers trip across Port Blair, Havelock, and Neil Island with catamaran ferries, comfortable 3-star stays, semi-submarine cruise, and meals.",
    "touristType": "Women-Only",
    "startDate": "2027-01-23",
    "endDate": "2027-01-28",
    "itinerary": {
      "@type": "ItemList",
      "numberOfItems": 6,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Day 1: Port Blair, Cellular Jail & Corbyn's Cove",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Day 2: Premium catamaran to Havelock & Radhanagar Beach",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Day 3: Semi-submarine cruise to Elephanta Beach & water activities",
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Day 4: Neil Island, Bharatpur Beach, Laxmanpur Beach & Natural Bridge",
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Day 5: Ferry back to Port Blair & Cellular Jail Light & Sound Show",
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Day 6: Breakfast, hugs, farewells and airport departure",
        },
      ],
    },
    "offers": {
      "@type": "Offer",
      "price": "31699",
      "priceCurrency": "INR",
      "priceValidUntil": "2026-11-14",
      "availability": "https://schema.org/InStock",
      "url": "https://www.sobhavitravel.com/trips/andaman-january-2027",
    },
    "provider": {
      "@type": "TravelAgency",
      "name": "Sobhavi Travels",
      "url": "https://www.sobhavitravel.com",
      "telephone": "+917406994752",
      "email": "hello@sobhavitravel.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AndamanClientExperience />
    </>
  );
}
