import type { Metadata } from "next";
import SriLankaClientExperience from "./SriLankaClientExperience";

export const metadata: Metadata = {
  title: "Sri Lanka Group Trip February 2027 | Sobhavi Travels",
  description:
    "Sun, spice & stories for the group chat. Join our 7-day curated international group trip across Colombo, Habarana, Sigiriya, Kandy, South Coast & Galle from 13–19 February 2027 (Ages 21–35).",
  alternates: {
    canonical: "https://www.sobhavitravel.com/trips/sri-lanka-february-2027",
  },
  openGraph: {
    title: "Sri Lanka Group Trip February 2027 | Sobhavi Travels",
    description:
      "7-Day Group Trip (13–19 Feb 2027). Sigiriya Rock, Kandy Temple, Doctor's House Madiha, Parrot Rock & Coconut Tree Hill with 15 verified young travellers (21–35).",
    url: "https://www.sobhavitravel.com/trips/sri-lanka-february-2027",
    siteName: "Sobhavi Travels",
    images: [
      {
        url: "/images/trips/sri-lanka/hero.jpg",
        width: 1200,
        height: 675,
        alt: "Coconut Tree Hill Mirissa - Sri Lanka Group Trip",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Lanka Group Trip February 2027 | Sobhavi Travels",
    description:
      "Sun, spice & stories for the group chat. 13–19 February 2027 · Mixed Group (Ages 21–35). Colombo → Habarana → Kandy → South Coast → Galle.",
    images: ["/images/trips/sri-lanka/hero.jpg"],
  },
};

export default function SriLankaTripPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Sri Lanka 7-Day Group Trip (February 2027)",
    "description":
      "A 7-day international group trip across Sri Lanka including Sigiriya Rock Fortress, Dambulla Cave Temple, Kandy cultural dance, Doctor's House Madiha, Coconut Tree Hill and Mirissa beach.",
    "touristType": "Mixed Group (Ages 21-35)",
    "startDate": "2027-02-13",
    "endDate": "2027-02-19",
    "itinerary": {
      "@type": "ItemList",
      "numberOfItems": 7,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Day 1: Land in Colombo, transfer to Habarana & Dambulla Cave Temple",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Day 2: Sigiriya Rock Fortress, traditional village experience & cooking demo",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Day 3: Matale spice garden, Kandy cultural dance performance",
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Day 4: Temple of the Tooth Relic, Kandy Lake & Peradeniya Botanical Gardens",
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Day 5: Drive to South Coast, sunset hangout at Doctor's House Madiha",
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Day 6: Parrot Rock, Coconut Tree Hill & Mirissa beach leisure",
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Day 7: Galle Fort cobbled streets & airport departure",
        },
      ],
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
      <SriLankaClientExperience />
    </>
  );
}

