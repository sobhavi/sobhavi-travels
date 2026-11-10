"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  Sparkles, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  Heart, 
  Award,
  ChevronDown
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import styles from "./page.module.css";

const UPCOMING_TRIPS = [
  {
    id: "andaman-jan-2027",
    title: "THE ANDAMANS",
    tagline: "Come solo. Leave with island sisters.",
    badge: "🌸 WOMEN-ONLY STRANGERS TRIP",
    badgeClass: styles.badgeAndaman,
    dates: "23 – 28 January 2027",
    duration: "5 Nights / 6 Days",
    groupType: "Women Only · Solo Explorers",
    route: "Port Blair → Havelock → Neil Island → Port Blair",
    image: "/images/trips/andaman/hero-radhanagar.jpg",
    earlyBirdPrice: "INR 31,699/-",
    highlights: [
      "Historic Cellular Jail & Corbyn's Cove Beach",
      "Premium Catamaran cruise to Havelock Island",
      "Radhanagar Beach sunset (Asia's top ranked beach)",
      "Semi-submarine coral reef cruise & Elephanta Beach",
      "Neil Island Bharatpur, Laxmanpur & Natural Coral Bridge"
    ],
    detailsUrl: "/trips/andaman-january-2027",
    waMessage: "Hello Sobhavi Travels! I want to join the Andaman Women-Only Group Trip (23-28 January 2027). Please share details."
  },
  {
    id: "sri-lanka-feb-2027",
    title: "SRI LANKA",
    tagline: "Sun, spice & stories for the group chat.",
    badge: "🌴 GROUP TRIP · AGES 21–35",
    badgeClass: styles.badgeSriLanka,
    dates: "13 – 19 February 2027",
    duration: "6 Nights / 7 Days",
    groupType: "Mixed Group · Ages 21–35",
    route: "Colombo → Habarana → Kandy → South Coast → Galle → Colombo",
    image: "/images/trips/sri-lanka/hero.jpg",
    earlyBirdPrice: "INR 59,999/-",
    highlights: [
      "Sigiriya Lion Rock Fortress & Habarana Village experience",
      "Golden Temple of Dambulla & Matale Spice Gardens",
      "Kandyan Cultural Dance & Temple of the Sacred Tooth Relic",
      "Doctor's House Madiha sunset & South Coast ocean vibes",
      "Coconut Tree Hill Mirissa, Parrot Rock & UNESCO Galle Fort"
    ],
    detailsUrl: "/trips/sri-lanka-february-2027",
    waMessage: "Hello Sobhavi Travels! I want to join the Sri Lanka Group Trip (13-19 February 2027). Please share details."
  }
];

const PERKS = [
  {
    icon: "🤝",
    title: "Curated Group Vibes",
    desc: "Over 60% of our travelers join solo. You arrive as strangers on Day 1 and leave with lifelong friendships and an active group chat."
  },
  {
    icon: "🏝️",
    title: "Zero Logistics Stress",
    desc: "All inter-island ferries, private AC transport, premium stays, entry tickets, and permits are handled end-to-end by our team."
  },
  {
    icon: "⭐",
    title: "Handpicked Boutique Stays",
    desc: "No boring sterile chain hotels. We select character-rich beachfront villas, lush heritage retreats, and scenic eco-lodges."
  },
  {
    icon: "🧭",
    title: "Dedicated Trip Lead",
    desc: "An experienced trip coordinator travels alongside your group to handle restaurant bookings, photo spots, and smooth daily execution."
  }
];

const FAQS = [
  {
    q: "Can I travel completely solo on these group trips?",
    a: "Yes! More than half of our guests sign up solo. We pair solo travelers with a same-gender roommate of similar age in twin-sharing accommodations. If you prefer your own private room, a single-supplement room upgrade is also available."
  },
  {
    q: "What is the age criteria and vibe of the trips?",
    a: "Our Andaman departure (23–28 Jan 2027) is an exclusive Women-Only Strangers Trip with an open age policy for spirited female travelers. Our Sri Lanka departure (13–19 Feb 2027) is a mixed group curated specifically for young professionals and travelers aged 21 to 35."
  },
  {
    q: "What is included in the package price?",
    a: "Our packages include boutique accommodations on twin sharing, daily breakfasts (and select dinners/lunches as outlined in each itinerary), all internal ground transportation, private catamarans/ferries, sightseeing permits, entry tickets, and an experienced tour manager."
  },
  {
    q: "Are flights included?",
    a: "Base package prices do not include airfare so travelers can fly in from any city (Bengaluru, Delhi, Mumbai, Chennai, etc.). However, our ticketing desk provides full assistance in finding the best flight timings and group fare deals."
  },
  {
    q: "How do I reserve my seat and what is the payment process?",
    a: "You can reserve your seat with an initial token deposit. The remaining balance can be completed closer to departure. Since group sizes are strictly limited (12–15 seats per departure), we recommend locking in the Early Bird rates early."
  }
];

export default function UpcomingGroupTripsClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const getWaLink = (msg: string) => {
    return `https://wa.me/917406994752?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      <main className={styles.contentWrapper}>
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <Image
            src="/images/trips/andaman/hero-radhanagar.jpg"
            alt="Sobhavi Travels Upcoming Group Trips"
            fill
            className={styles.heroBgImage}
            priority
          />
          <div className={styles.heroOverlay} />

          <div className={styles.heroContent}>
            <div className={styles.heroDeckBadge}>
              <Sparkles size={15} style={{ color: "#dfb74a" }} />
              <span>2027 FIXED DEPARTURES · NAMMA ESCAPES</span>
            </div>

            <h1 className={styles.heroMainTitle}>UPCOMING GROUP TRIPS</h1>

            <p className={styles.heroSubquote}>
              Handcrafted group expeditions designed to escape the routine. Join solo or with friends — experience island sunsets, cultural wonders, and authentic travel memories.
            </p>

            <div className={styles.heroSpecsRow}>
              <span className={`${styles.specPill} ${styles.specPillHighlight}`}>
                <Calendar size={15} style={{ display: "inline", marginRight: "6px" }} />
                January & February 2027
              </span>
              <span className={styles.specPill}>
                <Users size={15} style={{ display: "inline", marginRight: "6px" }} />
                Small Groups (Max 15 Travellers)
              </span>
              <span className={styles.specPill}>
                <Award size={15} style={{ display: "inline", marginRight: "6px" }} />
                Early Bird Pricing Active
              </span>
            </div>

            <div className={styles.heroCtaRow}>
              <a href="#trips" className={styles.btnPrimaryGold}>
                <span>Explore Departures</span>
                <ArrowRight size={17} />
              </a>
              <a 
                href={getWaLink("Hello Sobhavi Travels! I want to enquire about your upcoming 2027 group trips.")}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondaryOutline}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>
        </section>

        {/* SHOWCASE SECTION */}
        <section id="trips" className={styles.showcaseSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>CURATED DEPARTURES</span>
            <h2 className={styles.sectionTitle}>NAMMA ESCAPES 2027</h2>
            <p className={styles.sectionSubtitle}>
              Two unforgettable itineraries with complete logistics, boutique accommodations, and transparent pricing.
            </p>
          </div>

          <div className={styles.tripsGrid}>
            {UPCOMING_TRIPS.map((trip) => (
              <div key={trip.id} className={styles.tripCard}>
                <div className={styles.tripMediaWrap}>
                  <div className={trip.badgeClass}>
                    {trip.badge}
                  </div>
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className={styles.tripImage}
                  />
                  <div className={styles.tripMediaOverlay} />
                </div>

                <div className={styles.tripCardBody}>
                  <div className={styles.tripDateRow}>
                    <Calendar size={15} />
                    <span>{trip.dates} · {trip.duration}</span>
                  </div>

                  <h3 className={styles.tripTitle}>{trip.title}</h3>
                  <p className={styles.tripQuote}>"{trip.tagline}"</p>

                  <div className={styles.tripRouteStrip}>
                    <MapPin size={15} style={{ display: "inline", marginRight: "6px", verticalAlign: "middle", color: "#b8972e" }} />
                    {trip.route}
                  </div>

                  <ul className={styles.tripHighlightsList}>
                    {trip.highlights.map((item, idx) => (
                      <li key={idx} className={styles.tripHighlightItem}>
                        <span className={styles.highlightDot}>✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.tripFooterRow}>
                    <div className={styles.priceCol}>
                      <span className={styles.priceLabel}>Early Bird Rate</span>
                      <span className={styles.priceValue}>{trip.earlyBirdPrice}</span>
                    </div>

                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <Link href={trip.detailsUrl} className={styles.cardCtaPill}>
                        <span>View Details</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY TRAVEL WITH US */}
        <section className={styles.perksSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>THE SOBHAVI EXPERIENCE</span>
            <h2 className={styles.sectionTitle}>WHY CHOOSE OUR GROUP TRIPS?</h2>
            <p className={styles.sectionSubtitle}>
              We craft journeys where you never feel like a tour bus tourist. It feels like an adventure with friends you just hadn't met yet.
            </p>
          </div>

          <div className={styles.perksGrid}>
            {PERKS.map((perk, i) => (
              <div key={i} className={styles.perkCard}>
                <div className={styles.perkIcon}>{perk.icon}</div>
                <h3 className={styles.perkTitle}>{perk.title}</h3>
                <p className={styles.perkDesc}>{perk.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQS SECTION */}
        <section className={styles.faqSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>HAVE QUESTIONS?</span>
            <h2 className={styles.sectionTitle}>FREQUENTLY ASKED QUESTIONS</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to know before locking in your spot for our 2027 departures.
            </p>
          </div>

          <div className={styles.faqAccordion}>
            {FAQS.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className={styles.faqQuestion}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: activeFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                      color: "#b8972e"
                    }}
                  />
                </button>
                {activeFaq === index && (
                  <div className={styles.faqAnswer}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className={styles.bottomCtaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaHeading}>Ready To Escape The Routine?</h2>
            <p className={styles.ctaSub}>
              Seats are strictly capped at 15 travelers per departure to maintain our intimate, high-quality group dynamic. Connect with our concierge to book or ask any questions.
            </p>
            <div className={styles.ctaButtonRow}>
              <a
                href={getWaLink("Hello Sobhavi Travels! I want to join an upcoming group trip. Please help me with booking.")}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimaryGold}
              >
                <MessageCircle size={18} />
                <span>Chat On WhatsApp</span>
              </a>
              <Link href="/enquire" className={styles.btnSecondaryOutline}>
                <span>Send Custom Enquiry</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

