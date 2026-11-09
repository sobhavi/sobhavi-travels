"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Check, 
  X, 
  MessageCircle, 
  Phone, 
  Mail, 
  ChevronDown, 
  Sparkles,
  Users,
  Compass,
  Utensils,
  Award
} from "lucide-react";
import styles from "./page.module.css";

const WHATSAPP_PRIMARY = "917406994752";
const WHATSAPP_SECONDARY = "919180462154";
const PHONE_PRIMARY = "+91 74069 94752";
const PHONE_SECONDARY = "+91 91804 62154";
const EMAIL = "hello@sobhavitravel.com";

export default function SriLankaClientExperience() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    travellers: "1 Person",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const getWaLink = (msg: string) => {
    return `https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent(msg)}`;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          whatsapp: formData.phone,
          email: formData.email,
          destination: "Sri Lanka 7-Day Group Trip (13-19 Feb 2027)",
          travellers: formData.travellers,
          duration: "6 Nights / 7 Days",
          specialRequirements: `Departure City: ${formData.city}. Notes: ${formData.notes}`,
          experience: "Mixed Group Trip (Ages 21-35)"
        })
      });
      setSubmitted(true);
      const waMsg = `Hi Sobhavi Travels! I sent an enquiry for the Sri Lanka Group Trip (13-19 Feb 2027).\nName: ${formData.name}\nWhatsApp: ${formData.phone}\nCity: ${formData.city}`;
      window.open(getWaLink(waMsg), "_blank");
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const itineraryDays = [
    {
      day: "DAY 1",
      title: "AYUBOWAN, SRI LANKA!",
      bullets: [
        "Land at Bandaranaike International Airport, where your friendly chauffeur guide and the crew are warmly waiting.",
        "Hit the road to Habarana - first leg of the trip, first round of getting to know everyone.",
        "Stop at the golden Dambulla Cave Temple on the way to marvel at the ancient rock-cut sanctuaries.",
        "Check in, chill and settle in. Easy evening before the grand adventure kicks off."
      ],
      image: "/images/trips/sri-lanka/day-1-dambulla.jpg",
      alt: "Dambulla Cave Temple Stupa"
    },
    {
      day: "DAY 2",
      title: "LION ROCK & VILLAGE LIFE",
      bullets: [
        "Morning climb up the legendary Sigiriya Rock Fortress - the sweeping jungle panorama earns every single step.",
        "Slow down for an authentic traditional village experience, traditional wooden boat ride included.",
        "Learn how authentic island classics and coconut curries are made in an interactive Sri Lankan cooking demonstration.",
        "Back to the hotel for a well-earned lazy poolside evening."
      ],
      image: "/images/trips/sri-lanka/day-2-sigiriya.jpg",
      alt: "Sigiriya Rock Fortress"
    },
    {
      day: "DAY 3",
      title: "SPICE ROUTE TO KANDY",
      bullets: [
        "Leave Habarana for the cool emerald hills, with a fragrant spice garden stop in Matale.",
        "Roll into Kandy, the island's cultural and spiritual heartbeat.",
        "Enjoy a vibrant Kandyan cultural dance performance in the evening with drumming and fire-walking.",
        "Night stay in Kandy."
      ],
      image: "/images/trips/sri-lanka/day-3-dance.jpg",
      alt: "Kandyan Cultural Dance"
    },
    {
      day: "DAY 4",
      title: "KANDY DIARIES",
      bullets: [
        "Visit the sacred Temple of the Sacred Tooth Relic, the spiritual heart of the city.",
        "Stroll scenic Kandy Lake and vibrant local bazaars - shopping for Ceylon teas and batiks is basically cardio.",
        "Green hour at the Royal Botanical Gardens, Peradeniya, wandering giant bamboo groves and orchid canopies.",
        "Free evening to explore charming cafes or just hang out with the group."
      ],
      image: "/images/trips/sri-lanka/day-4-kandy.jpg",
      alt: "Temple of the Tooth Relic Kandy"
    },
    {
      day: "DAY 5",
      title: "COAST CALLING",
      bullets: [
        "Trade the misty hills for the warm Indian Ocean as we head down to the lively south coast.",
        "Check in at our coastal beach retreat and shake off the drive with an ocean breeze.",
        "Evening drop-off at the iconic Doctor's House in Madiha - a classic sunset hangout, your plans, your pace.",
        "Night by the sea."
      ],
      image: "/images/trips/sri-lanka/day-5-madiha.jpg",
      alt: "South Coast Beach and Madiha"
    },
    {
      day: "DAY 6",
      title: "MIRISSA STATE OF MIND",
      bullets: [
        "Climb Parrot Rock and capture the famous Coconut Tree Hill - the postcard view is 100% real.",
        "Beach day in Mirissa: swim, sunbathe, sample fresh coastal seafood, repeat.",
        "Zero rigid agenda, maximum tropical leisure.",
        "Last night with the crew - make it count over island cocktails and group laughs."
      ],
      image: "/images/trips/sri-lanka/day-6-mirissa.jpg",
      alt: "Mirissa Palm Hill and Ocean"
    },
    {
      day: "DAY 7",
      title: "SEE YOU, LANKA",
      bullets: [
        "Check out and wind back towards Colombo airport.",
        "If flight timings allow, enjoy a wander through the UNESCO cobblestone streets and ramparts of Galle Fort.",
        "Transfer to Bandaranaike International Airport for your departure flight.",
        "Reunion soon? 100%."
      ],
      image: "/images/trips/sri-lanka/day-7-galle.jpg",
      alt: "Galle Fort Lighthouse Sunset"
    }
  ];

  const highlights = [
    "Sigiriya Rock Fortress",
    "Dambulla Cave Temple",
    "Village experience & cooking demo",
    "Kandyan dance night",
    "Temple of the Tooth Relic",
    "Peradeniya Botanical Gardens",
    "Evening at Doctor's House, Madiha",
    "Coconut Tree Hill",
    "Parrot Rock",
    "Mirissa beach day",
    "Kandy Lake & markets",
    "Galle Fort (time permitting)"
  ];

  const faqs = [
    {
      q: "What is the age group and crowd vibe?",
      a: "This trip is specifically curated for young professionals, entrepreneurs, and explorers aged 21 to 35. It is a mixed group trip with a balanced, friendly vibe — energetic yet relaxed, with plenty of free time for yourself."
    },
    {
      q: "Do Indian passport holders need a visa for Sri Lanka?",
      a: "Indian citizens can obtain an online Electronic Travel Authorization (ETA) or visa on arrival. Our visa desk assists each confirmed traveller with quick, hassle-free visa processing."
    },
    {
      q: "What kind of hotels and stays are included?",
      a: "We handpick boutique, high-rated stays that capture the local essence of Sri Lanka — heritage and nature stays in Habarana and Kandy, and relaxing beach retreats on the South Coast, on a twin-sharing basis."
    },
    {
      q: "Can I travel solo or with a friend?",
      a: "Both! Roughly half our travellers sign up solo and find their new travel crew, while others come with a friend or partner. We pair solo travellers with same-gender roommates of similar age."
    }
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Official Sobhavi Travels Global Navbar */}
      <Navbar />

      <main className={styles.contentWrapper}>
        {/* 1. CINEMATIC HERO */}
        <section className={styles.heroSection}>
          <Image
            src="/images/trips/sri-lanka/hero.jpg"
            alt="Sri Lanka Mirissa Coconut Coast"
            fill
            className={styles.heroBgImage}
            priority
          />
          <div className={styles.heroOverlay} />

          <div className={styles.heroContent}>
            <div className={styles.heroDeckBadge}>
              <Sparkles size={15} style={{ color: "#F06543" }} />
              <span>7-DAY GROUP TRIP · AGES 21–35</span>
            </div>

            <h1 className={styles.heroMainTitle}>SRI LANKA</h1>

            <div className={styles.heroSubquote}>
              "Sun, spice & stories for the group chat"
            </div>

            <div className={styles.heroTripSpecsRow}>
              <span className={`${styles.specBadge} ${styles.specHighlight}`}>
                <Calendar size={16} />
                13 – 19 February 2027
              </span>
              <span className={styles.specBadge}>
                <Clock size={16} />
                6 Nights / 7 Days
              </span>
              <span className={styles.specBadge}>
                <Users size={16} />
                Mixed Group · 15 Travellers Max
              </span>
            </div>

            <div className={styles.heroRouteStrip}>
              COLOMBO <span className={styles.routeSep}>→</span> 
              HABARANA <span className={styles.routeSep}>→</span> 
              KANDY <span className={styles.routeSep}>→</span> 
              SOUTH COAST <span className={styles.routeSep}>→</span> 
              GALLE <span className={styles.routeSep}>→</span> 
              COLOMBO
            </div>

            <div className={styles.heroActionGroup}>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className={styles.btnPrimaryOrange}
              >
                <Award size={18} />
                <span>Save Your Spot</span>
              </button>
              <a
                href={getWaLink("Hello Sobhavi Travels! Please send me the complete Sri Lanka Group Trip PDF and pricing.")}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondaryOutline}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </section>

        {/* Deckled Edge Divider */}
        <div className={styles.tornDivider} />

        {/* 2. THE PLAN & THE BASICS */}
        <section className={styles.planSection}>
          <div className={styles.planHeader}>
            <h2 className={styles.planTitle}>The Plan</h2>
            <div className={styles.planRouteSub}>
              COLOMBO → HABARANA → KANDY → SOUTH COAST → GALLE → COLOMBO
            </div>
          </div>

          {/* 3 Preview Image Thumbnails from Deck */}
          <div className={styles.previewCardsGrid}>
            <div className={styles.previewCard}>
              <Image
                src="/images/trips/sri-lanka/thumb-sigiriya.png"
                alt="Sigiriya Rock Fortress"
                width={500}
                height={300}
                className={styles.previewImg}
              />
              <div className={styles.previewCaption}>
                Sigiriya Lion Rock Fortress
              </div>
            </div>

            <div className={styles.previewCard}>
              <Image
                src="/images/trips/sri-lanka/thumb-dancer.png"
                alt="Kandyan Cultural Dancer"
                width={500}
                height={300}
                className={styles.previewImg}
              />
              <div className={styles.previewCaption}>
                Kandyan Cultural Traditions
              </div>
            </div>

            <div className={styles.previewCard}>
              <Image
                src="/images/trips/sri-lanka/thumb-mirissa.png"
                alt="Mirissa Coastal Palms"
                width={500}
                height={300}
                className={styles.previewImg}
              />
              <div className={styles.previewCaption}>
                South Coast Ocean Hideouts
              </div>
            </div>
          </div>

          {/* The Basics Specification Row */}
          <div className={styles.basicsGrid}>
            <div className={styles.basicItem}>
              <span className={styles.basicLabel}>DATES</span>
              <span className={styles.basicValue}>13 – 19 Feb 2027</span>
            </div>
            <div className={styles.basicItem}>
              <span className={styles.basicLabel}>DURATION</span>
              <span className={styles.basicValue}>6 nights / 7 days</span>
            </div>
            <div className={styles.basicItem}>
              <span className={styles.basicLabel}>GROUP</span>
              <span className={styles.basicValue}>15 travellers, 21–35</span>
            </div>
            <div className={styles.basicItem}>
              <span className={styles.basicLabel}>STAYS</span>
              <span className={styles.basicValue}>Handpicked stays</span>
            </div>
            <div className={styles.basicItem}>
              <span className={styles.basicLabel}>MEALS</span>
              <span className={styles.basicValue}>6 breakfasts + 4 dinners</span>
            </div>
            <div className={styles.basicItem}>
              <span className={styles.basicLabel}>GUIDE</span>
              <span className={styles.basicValue}>English-speaking national guide</span>
            </div>
          </div>

          {/* Highlights 2-Column Grid */}
          <div className={styles.highlightsWrapper}>
            <h3 className={styles.highlightsTitle}>Highlights</h3>
            <div className={styles.highlightsGrid}>
              {highlights.map((h, i) => (
                <div key={i} className={styles.highlightItem}>
                  <span className={styles.highlightDot}>•</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. DETAILED 7-DAY ITINERARY */}
        <section className={styles.itinerarySection}>
          <h2 className={styles.itineraryMainTitle}>The Seven-Day Expedition</h2>
          <p className={styles.itinerarySubDesc}>
            From ancient mountain citadels and sacred shrines to beach bars and turquoise surf breaks.
          </p>

          <div className={styles.daysColumn}>
            {itineraryDays.map((item, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55 }}
                  className={`${styles.dayCard} ${isEven ? styles.dayCardReverse : ""}`}
                >
                  <div className={styles.dayImageWrapper}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={800}
                      height={500}
                      className={styles.dayImage}
                    />
                  </div>

                  <div className={styles.dayTextCol}>
                    <span className={styles.dayPillBadge}>{item.day}</span>
                    <h3 className={styles.dayCardTitle}>{item.title}</h3>
                    <ul className={styles.dayBullets}>
                      {item.bullets.map((b, bIdx) => (
                        <li key={bIdx} className={styles.dayBulletItem}>
                          <span className={styles.bulletOrange}>•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 4. THE DETAILS (INCLUSIONS / EXCLUSIONS) */}
        <section className={styles.detailsSection}>
          <div className={styles.detailsHeader}>
            <h2 className={styles.detailsTitle}>The Details</h2>
          </div>

          <div className={styles.detailsGrid}>
            {/* WE'VE GOT YOU */}
            <div className={styles.detailsColWeGotYou}>
              <h3 className={`${styles.detailsColHeading} ${styles.headingOrange}`}>
                We've got you
              </h3>
              <ul className={styles.detailsList}>
                <li className={styles.detailsItem}>
                  <span className={styles.detailsCheck}>•</span>
                  <span>Stays on sharing basis, all through the trip</span>
                </li>
                <li className={styles.detailsItem}>
                  <span className={styles.detailsCheck}>•</span>
                  <span>6 breakfasts + 4 dinners</span>
                </li>
                <li className={styles.detailsItem}>
                  <span className={styles.detailsCheck}>•</span>
                  <span>AC coach for the full route</span>
                </li>
                <li className={styles.detailsItem}>
                  <span className={styles.detailsCheck}>•</span>
                  <span>English-speaking national guide</span>
                </li>
                <li className={styles.detailsItem}>
                  <span className={styles.detailsCheck}>•</span>
                  <span>Airport pickup & drop</span>
                </li>
                <li className={styles.detailsItem}>
                  <span className={styles.detailsCheck}>•</span>
                  <span>Sightseeing as per the itinerary (entrance fees extra)</span>
                </li>
              </ul>
            </div>

            {/* ON YOU */}
            <div className={styles.detailsColOnYou}>
              <h3 className={`${styles.detailsColHeading} ${styles.headingDark}`}>
                On you
              </h3>
              <ul className={styles.detailsList}>
                <li className={styles.detailsItem}>
                  <span className={styles.detailsCross}>•</span>
                  <span>Flights & visa</span>
                </li>
                <li className={styles.detailsItem}>
                  <span className={styles.detailsCross}>•</span>
                  <span>Entrance fees at sites</span>
                </li>
                <li className={styles.detailsItem}>
                  <span className={styles.detailsCross}>•</span>
                  <span>Lunches & drinks</span>
                </li>
                <li className={styles.detailsItem}>
                  <span className={styles.detailsCross}>•</span>
                  <span>Shopping and personal spends</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SAVE YOUR SPOT CALLOUT */}
          <div className={styles.saveSpotCard}>
            <h3 className={styles.saveSpotHeading}>Save your spot</h3>
            <p className={styles.saveSpotSub}>
              Spots are strictly limited to 15 travellers — message us to join the group and secure your room.
            </p>

            <div className={styles.spotContactRow}>
              <a href={`tel:${WHATSAPP_PRIMARY}`} className={styles.spotContactLink}>
                📞 {PHONE_PRIMARY}
              </a>
              <span className={styles.spotDivider}>•</span>
              <a href={`tel:${WHATSAPP_SECONDARY}`} className={styles.spotContactLink}>
                📞 {PHONE_SECONDARY}
              </a>
              <span className={styles.spotDivider}>•</span>
              <a href={`mailto:${EMAIL}`} className={styles.spotContactLink}>
                ✉️ {EMAIL}
              </a>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className={styles.btnPrimaryOrange}
              >
                <span>Reserve Your Spot</span>
              </button>
              <a
                href={getWaLink("Hello! I want to join the Sri Lanka 7-Day Group Trip (13-19 Feb 2027).")}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondaryOutline}
              >
                <MessageCircle size={18} />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* 5. FREQUENTLY ASKED QUESTIONS */}
        <section className={styles.faqSection}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 className={styles.itineraryMainTitle}>Common Questions</h2>
          </div>

          <div>
            {faqs.map((faq, index) => (
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
                      color: "#E05A36"
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
      </main>

      {/* QUICK RESERVATION MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(11, 27, 43, 0.75)",
              backdropFilter: "blur(8px)",
              zIndex: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px"
            }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#0E2338",
                color: "#FFFFFF",
                borderRadius: "24px",
                maxWidth: "480px",
                width: "100%",
                padding: "36px 32px",
                boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
                border: "1px solid rgba(240, 101, 67, 0.3)",
                position: "relative"
              }}
            >
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                style={{
                  position: "absolute",
                  top: "18px",
                  right: "18px",
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "none",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#D3E0EA"
                }}
              >
                ✕
              </button>

              {submitted ? (
                <div style={{ textAlign: "center", padding: "20px 0" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>🌴</div>
                  <h3 style={{ fontSize: "1.6rem", color: "#FFFFFF", marginBottom: "8px" }}>
                    Enquiry Dispatched!
                  </h3>
                  <p style={{ color: "#BFD3E4", lineHeight: 1.5, marginBottom: "20px" }}>
                    Thank you, {formData.name}! Our expedition manager is reviewing your spot request for the Sri Lanka Group Trip (13-19 Feb 2027) and will reach out via WhatsApp immediately.
                  </p>
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className={styles.btnPrimaryOrange}
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div style={{ fontSize: "0.82rem", fontWeight: "800", color: "#F06543", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                    SRI LANKA · GROUP TRIP
                  </div>
                  <h3 style={{ fontSize: "1.6rem", color: "#FFFFFF", marginTop: "4px", marginBottom: "18px" }}>
                    Save Your Spot
                  </h3>

                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "4px", color: "#D2E2F0" }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Verma"
                        style={{
                          width: "100%",
                          padding: "11px 14px",
                          borderRadius: "10px",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          fontSize: "0.95rem",
                          background: "rgba(255, 255, 255, 0.08)",
                          color: "#FFFFFF",
                          outline: "none"
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "4px", color: "#D2E2F0" }}>
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        style={{
                          width: "100%",
                          padding: "11px 14px",
                          borderRadius: "10px",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          fontSize: "0.95rem",
                          background: "rgba(255, 255, 255, 0.08)",
                          color: "#FFFFFF",
                          outline: "none"
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "4px", color: "#D2E2F0" }}>
                        City of Departure
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Bengaluru / Mumbai / Delhi"
                        style={{
                          width: "100%",
                          padding: "11px 14px",
                          borderRadius: "10px",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          fontSize: "0.95rem",
                          background: "rgba(255, 255, 255, 0.08)",
                          color: "#FFFFFF",
                          outline: "none"
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "4px", color: "#D2E2F0" }}>
                        Travelling Solo or With Friends?
                      </label>
                      <select
                        value={formData.travellers}
                        onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "11px 14px",
                          borderRadius: "10px",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          fontSize: "0.95rem",
                          background: "#162C42",
                          color: "#FFFFFF",
                          outline: "none"
                        }}
                      >
                        <option value="1 Solo Traveller">Solo Traveller (Match me with roommate)</option>
                        <option value="2 Friends (Twin Room)">2 Friends (Twin Room)</option>
                        <option value="Couple (Double Room)">Couple (Double Room)</option>
                        <option value="Group of 3+">Group of 3+</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={styles.btnPrimaryOrange}
                      style={{ width: "100%", justifyContent: "center", marginTop: "10px", cursor: isSubmitting ? "not-allowed" : "pointer" }}
                    >
                      {isSubmitting ? "Submitting..." : "Join Group & Connect on WhatsApp"}
                    </button>

                    <div style={{ textAlign: "center", fontSize: "0.8rem", color: "#95A9BA" }}>
                      🔒 Zero spam. Instant quote and room confirmation.
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

