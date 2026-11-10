import type { Metadata } from 'next';
import UpcomingGroupTripsClient from './UpcomingGroupTripsClient';

export const metadata: Metadata = {
  title: "Upcoming Group Trips 2027 | Andaman & Sri Lanka | Sobhavi Travels",
  description: "Explore curated upcoming group trips for 2027. Join our Andaman Women-Only Strangers Trip (Jan 2027) & Sri Lanka 7-Day Group Trip (Feb 2027). Boutique stays, vetted travelers, and Early Bird rates.",
  alternates: {
    canonical: "https://www.sobhavitravel.com/upcoming-group-trips"
  },
  openGraph: {
    title: "Upcoming Group Trips 2027 | Andaman & Sri Lanka | Sobhavi Travels",
    description: "Explore curated upcoming group trips for 2027. Join our Andaman Women-Only Strangers Trip (Jan 2027) & Sri Lanka 7-Day Group Trip (Feb 2027).",
    url: "https://www.sobhavitravel.com/upcoming-group-trips",
    siteName: "Sobhavi Travels",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.sobhavitravel.com/images/trips/andaman/hero-radhanagar.jpg",
        width: 1200,
        height: 675,
        alt: "Sobhavi Travels Upcoming Group Trips 2027"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Upcoming Group Trips 2027 | Sobhavi Travels",
    description: "Curated group departures: Andaman Women-Only Trip (Jan 2027) & Sri Lanka 7-Day Group Trip (Feb 2027).",
    images: ["https://www.sobhavitravel.com/images/trips/andaman/hero-radhanagar.jpg"]
  }
};

export default function UpcomingGroupTripsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Upcoming Group Trips 2027 - Sobhavi Travels",
    "description": "Curated fixed-date group trips to Andaman and Sri Lanka in early 2027.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Andaman Women-Only Strangers Trip",
        "url": "https://www.sobhavitravel.com/trips/andaman-january-2027"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Sri Lanka 7-Day Group Trip",
        "url": "https://www.sobhavitravel.com/trips/sri-lanka-february-2027"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UpcomingGroupTripsClient />
    </>
  );
}

