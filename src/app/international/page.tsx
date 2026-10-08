import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { getSiteConfig } from '@/lib/siteConfig';
import styles from './page.module.css';

export const revalidate = 0; // Fresh content

export const metadata = {
  title: "International Luxury Tour Packages | Sobhavi Travels",
  description: "Curated international holidays across Dubai, Singapore, Bali, Maldives, and Vietnam. 5-star luxury resorts, private transfers, visa assistance, and dedicated concierge support."
};

interface DayPlan {
  day: string;
  title: string;
}

interface IntlDest {
  name: string;
  tagline: string;
  image: string;
  videoUrl?: string;
  duration: string;
  bestTime: string;
  startingPrice: string;
  overview: string;
  dayPlan: DayPlan[];
  inclusions: string[];
}

const FALLBACK_INTERNATIONAL: IntlDest[] = [
  {
    name: "Dubai & Abu Dhabi",
    tagline: "Futuristic Skylines, Luxury Desert Safari & Royal Marina",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=900&auto=format&fit=crop",
    videoUrl: "/videos/destinations/dubai.mp4",
    duration: "5 Nights / 6 Days",
    bestTime: "October – April",
    startingPrice: "Starting at ₹25,000",
    overview: "Ascend Burj Khalifa's 124th & 125th floor At The Top, race across golden red dunes in private 4x4 desert safaris with starlit BBQ dinner, cruise Dubai Marina on a private luxury yacht, and explore Abu Dhabi's Sheikh Zayed Grand Mosque.",
    dayPlan: [
      { day: "Day 1", title: "Arrive in Dubai — Private Chauffeur Airport Pickup & Marina Sunset Dhow Cruise" },
      { day: "Day 2", title: "Dubai Frame, Museum of the Future & Burj Khalifa 124th Floor at Sunset" },
      { day: "Day 3", title: "Red Dunes 4x4 Desert Safari — Dune Bashing, Camel Ride, Belly Dance & Royal BBQ" },
      { day: "Day 4", title: "Abu Dhabi Full Day Tour — Sheikh Zayed Grand Mosque, Ferrari World & Louvre" },
      { day: "Day 5", title: "Dubai Miracle Garden, Atlantis Aquaventure & Luxury Yacht Marina Charter" },
      { day: "Day 6", title: "Gold & Spice Souks Shopping & Airport Drop" }
    ],
    inclusions: ["5-Star Downtown / Marina Hotel Stay", "Daily International Buffet Breakfast", "Private AC Luxury Vehicle for All Airport & City Tours", "Burj Khalifa Entry & Desert Safari with VIP Dinner", "Dubai Tourist eVisa Assistance"]
  },
  {
    name: "Singapore & Sentosa",
    tagline: "Gardens by the Bay, Marina Bay Sands & Sentosa Island",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=900&auto=format&fit=crop",
    videoUrl: "/videos/destinations/singapore.mp4",
    duration: "4 Nights / 5 Days",
    bestTime: "Year-Round",
    startingPrice: "Starting at ₹25,000",
    overview: "Marvel at Avatar-like Supertree structures, walk through the cooled Cloud Forest and Flower Dome, take a scenic cable car across to Sentosa Island, enjoy Universal Studios thrills, and dine along vibrant Clarke Quay.",
    dayPlan: [
      { day: "Day 1", title: "Arrive at Changi Jewel Airport — Check-in & Night Safari Tram Experience" },
      { day: "Day 2", title: "City Tour & Gardens by the Bay — Cloud Forest, Flower Dome & Light Show" },
      { day: "Day 3", title: "Sentosa Island Day Tour — Cable Car, SEA Aquarium & Wings of Time Show" },
      { day: "Day 4", title: "Universal Studios Singapore VIP Passes & Evening Marina Bay Observation Deck" },
      { day: "Day 5", title: "Orchard Road Shopping & Changi Airport Jewel Rain Vortex Departure" }
    ],
    inclusions: ["5-Star Hotel near Marina Bay / Orchard Road", "Daily Buffet Breakfast Included", "Private AC Airport & Sightseeing Transfers", "Universal Studios & Gardens by the Bay Combo Passes", "Singapore Tourist eVisa Processing"]
  },
  {
    name: "Bali: The Island of Gods",
    tagline: "Private Pool Villas, Sacred Temples & Nusa Penida Cliffs",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=900&auto=format&fit=crop",
    videoUrl: "/videos/destinations/bali.mp4",
    duration: "6 Nights / 7 Days",
    bestTime: "April – October",
    startingPrice: "Starting at ₹25,000",
    overview: "Wake up in a private jungle pool villa in Ubud, visit the dramatic sea temple at Tanah Lot and Uluwatu with Kecak fire dance, swing over emerald Tegallalang rice terraces, and speedboat to the white sands of Nusa Penida.",
    dayPlan: [
      { day: "Day 1", title: "Arrive in Denpasar — Transfer to Luxury Ubud Jungle Resort with Flower Bath" },
      { day: "Day 2", title: "Ubud Culture & Nature — Sacred Monkey Forest, Tegallalang Rice Terraces & Jungle Swing" },
      { day: "Day 3", title: "Kintamani Volcano View, Tirta Empul Holy Water Temple & Coffee Plantation Tour" },
      { day: "Day 4", title: "Transfer to Seminyak Beachfront Villa — Tanah Lot Sunset Temple" },
      { day: "Day 5", title: "Nusa Penida Island Excursion — Kelingking T-Rex Beach, Broken Beach & Angel's Billabong" },
      { day: "Day 6", title: "Uluwatu Clifftop Temple & Spectacular Sunset Kecak Fire Dance & Jimbaran Seafood Dinner" },
      { day: "Day 7", title: "Balinese Spa Session & Airport Farewell" }
    ],
    inclusions: ["Private Luxury Pool Villa (Ubud & Seminyak)", "Daily Floating Breakfast & Candlelight Dinners", "Private Dedicated AC Chauffeur & English Guide", "Nusa Penida Island Speedboat Day Cruise", "Indonesian Visa on Arrival Guidance"]
  },
  {
    name: "Maldives: Barefoot Luxury",
    tagline: "Overwater Coral Villas & All-Inclusive Island Indulgence",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=900&auto=format&fit=crop",
    videoUrl: "/videos/destinations/maldives.mp4",
    duration: "4 Nights / 5 Days",
    bestTime: "November – April",
    startingPrice: "Starting at ₹25,000",
    overview: "Pure tropical barefoot luxury. Sleep directly above vibrant turquoise lagoons in private overwater pool villas, snorkel with sea turtles and manta rays, and enjoy curated private sandbank dining.",
    dayPlan: [
      { day: "Day 1", title: "Arrive in Malé — Scenic Speedboat/Seaplane Transfer to Luxury Island Resort" },
      { day: "Day 2", title: "Overwater Villa Relaxation, Coral Reef Snorkeling & Sunset Cocktail Cruise" },
      { day: "Day 3", title: "Water Sports Adventure — Jet Ski, Kayaking & Complimentary Dolphin Watching Safari" },
      { day: "Day 4", title: "Rejuvenating Overwater Spa Treatment & Private Candlelight Sandbank Dinner" },
      { day: "Day 5", title: "Seaplane Transfer back to Malé International Airport" }
    ],
    inclusions: ["Private Luxury Overwater Pool Villa", "All-Inclusive Plan: Breakfast, Lunch, Gourmet Dinner & Drinks", "Return Scenic Seaplane / Speedboat Transfers Included", "Complimentary Snorkeling Equipment & Dolphin Cruise", "Free 30-Day Visa on Arrival for Indian Nationals"]
  },
  {
    name: "Thailand & Vietnam Explorer",
    tagline: "Bangkok Temples, Phuket Beaches & Ha Long Bay Cruise",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=900&auto=format&fit=crop",
    duration: "7 Nights / 8 Days",
    bestTime: "November – April",
    startingPrice: "Starting at ₹25,000",
    overview: "Combine the dazzling golden temples and street food wonders of Bangkok with the limestone karst waters of Ha Long Bay and the world-famous beaches of Phuket and Phi Phi Island.",
    dayPlan: [
      { day: "Day 1", title: "Arrive in Bangkok — Chaophraya River Luxury Dinner Cruise" },
      { day: "Day 2", title: "Grand Palace, Wat Pho Reclining Buddha & Bangkok Sky Dining" },
      { day: "Day 3", title: "Flight to Phuket — Patong Beach Sunset & Simon Cabaret Show" },
      { day: "Day 4", title: "Speedboat Day Tour to Phi Phi Islands & Maya Bay Lagoon Snorkeling" },
      { day: "Day 5", title: "Fly to Hanoi, Vietnam — French Quarter Walk & Water Puppet Theater" },
      { day: "Day 6", title: "Ha Long Bay Overnight Luxury Cruise — Kayaking through Limestone Caves" },
      { day: "Day 7", title: "Ha Long Bay Sunrise Tai Chi & Return to Hanoi" },
      { day: "Day 8", title: "Departure Flight to India" }
    ],
    inclusions: ["5-Star Beach Resorts & 5-Star Luxury Ha Long Cruise", "Daily Buffet Breakfast & All Meals on Cruise", "Private Airport & Sightseeing Transfers", "Phi Phi Island Speedboat & Cave Kayaking Fees", "Fast-Track Visa Assistance"]
  }
];

const INTERNATIONAL_FAQS = [
  {
    q: "Do you handle visa processing for international holidays?",
    a: "Yes. Our international visa concierge manages end-to-end visa applications, including Dubai 30/60 days e-visas, Singapore e-visas, Thailand Visa-on-Arrival assistance, and Schengen/US tourist visa appointments and document verification."
  },
  {
    q: "Can we include international flights in our holiday package?",
    a: "Absolutely. We book international flights from Delhi, Mumbai, Bengaluru, Chennai, and other Indian hubs directly with partner airlines like Emirates, Singapore Airlines, Qatar Airways, and Air India at competitive corporate tariffs."
  },
  {
    q: "Are the airport transfers and city tours private or shared?",
    a: "At Sobhavi Travels, we prioritize luxury, comfort, and privacy. All airport pickups, drops, and sightseeing excursions are conducted in dedicated private, air-conditioned vehicles with professional chauffeurs."
  },
  {
    q: "How can I customize an international package?",
    a: "Simply tap 'Book This Package' or message our WhatsApp concierge at +917406994752. We adjust trip lengths, select your preferred 5-star resorts, and add special experiences like helicopter charters, yacht rentals, or private romantic dining."
  }
];

export default function InternationalPage() {
  const config = getSiteConfig();
  const destinations = (config.internationalDestinations && config.internationalDestinations.length > 0)
    ? config.internationalDestinations
    : FALLBACK_INTERNATIONAL;

  const phone = config.company?.phone || "+917406994752";
  const cleanWa = (config.company?.whatsapp || "7406994752").replace(/[^0-9]/g, '');

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": INTERNATIONAL_FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <Navbar />

      <main className={styles.main}>
        {/* CLEAN LUXURY HERO SECTION */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                GLOBAL ESCAPES
              </span>
              <h1 className={styles.heroTitle}>Explore Beyond Borders.</h1>
              <p className={styles.heroDesc}>
                Bespoke international journeys across Dubai, Singapore, Bali, Maldives, and Vietnam — complete with 5-star resort stays, private luxury transfers, gourmet dining, and complete visa support.
              </p>

              <div className={styles.heroActions}>
                <Link href="/enquire?destination=Dubai" className="btn-gold">
                  Plan International Trip &rarr;
                </Link>
                <a 
                  href={`https://wa.me/${cleanWa.startsWith('91') ? cleanWa : '91' + cleanWa}?text=Hello%20Sobhavi%20Travels!%20I%20want%20to%20plan%20an%20International%20holiday.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  WhatsApp Concierge
                </a>
              </div>

              <div className={styles.perksRow}>
                <div className={styles.perkItem}>
                  <span className={styles.perkIcon}>✓</span>
                  <span>5-Star World Resorts</span>
                </div>
                <div className={styles.perkItem}>
                  <span className={styles.perkIcon}>✓</span>
                  <span>Private Chauffeur Transfers</span>
                </div>
                <div className={styles.perkItem}>
                  <span className={styles.perkIcon}>✓</span>
                  <span>Complete Visa Support</span>
                </div>
                <div className={styles.perkItem}>
                  <span className={styles.perkIcon}>✓</span>
                  <span>Global Concierge Desk: {phone}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERNATIONAL DESTINATIONS LIST */}
        <section className={styles.destinationsSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>WHERE WE SERVE</span>
              <h2 className={styles.sectionTitle}>Featured International Itineraries</h2>
              <p className={styles.sectionDesc}>
                From dazzling futuristic skylines to secluded turquoise overwater villas, every itinerary is handcrafted for discerning global travelers.
              </p>
            </div>

            <div className={styles.grid}>
              {destinations.map((dest) => (
                <div 
                  key={dest.name} 
                  id={dest.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')} 
                  className={styles.destCard}
                >
                  <div 
                    className={styles.imageWrapper}
                    style={{ backgroundImage: `url(${dest.image})` }}
                  >
                    <div className={styles.imageOverlay} />
                    <span className={styles.destBadge} data-editable="true">{dest.duration} • {dest.bestTime}</span>

                    {/* Top Right Floating Price Banner */}
                    <div className={styles.topRightPriceBanner}>
                      <span className={styles.priceBannerLabel}>Starting From</span>
                      <span className={styles.priceBannerAmount} data-editable="true">
                        {dest.startingPrice ? dest.startingPrice.replace(/Starting\s*(at)?\s*/i, '') : '₹25,000'}
                      </span>
                    </div>
                  </div>

                  <div className={styles.cardContent}>
                    <h3 className={styles.destName} data-editable="true">{dest.name}</h3>
                    <div className={styles.destTagline} data-editable="true">{dest.tagline}</div>

                    <p className={styles.destOverview} data-editable="true">{dest.overview}</p>

                    {dest.dayPlan && dest.dayPlan.length > 0 && (
                      <div className={styles.dayPlanList}>
                        <strong style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#d4af37' }}>
                          Itinerary Highlights:
                        </strong>
                        {dest.dayPlan.slice(0, 4).map((d: DayPlan, i: number) => (
                          <div key={i} className={styles.dayPlanItem}>
                            <span className={styles.dayNumber}>{d.day}:</span>
                            <span data-editable="true">{d.title}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className={styles.inclusionsBox}>
                      <div className={styles.inclusionsTitle} data-editable="true">Package Inclusions:</div>
                      <div className={styles.inclusionsList}>
                        {dest.inclusions.map((inc, i) => (
                          <div key={i} className={styles.inclusionItem}>
                            <span className={styles.checkIcon}>✓</span>
                            <span data-editable="true">{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={styles.cardActions}>
                      <Link 
                        href={`/enquire?destination=${encodeURIComponent(dest.name)}`} 
                        className={styles.bookBtn}
                      >
                        Book This Package
                      </Link>
                      <a 
                        href={`https://wa.me/${cleanWa.startsWith('91') ? cleanWa : '91' + cleanWa}?text=Hello%20Sobhavi%20Travels,%20I%20am%20interested%20in%20the%20${encodeURIComponent(dest.name)}%20package.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.whatsappBtn}
                        aria-label="WhatsApp"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO FAQ SECTION */}
        <section className={styles.faqSection}>
          <div className="container">
            <div className={styles.faqHeader}>
              <span className={styles.sectionEyebrow}>COMMON QUESTIONS</span>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <p className={styles.sectionDesc}>Everything you need to know about booking international holidays with Sobhavi Travels.</p>
            </div>

            <div className={styles.faqGrid}>
              {INTERNATIONAL_FAQS.map((faq, idx) => (
                <div key={idx} className={styles.faqCard}>
                  <h3 className={styles.faqQuestion}>{faq.q}</h3>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
