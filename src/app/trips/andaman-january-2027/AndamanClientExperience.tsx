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
  ArrowRight,
  ShieldCheck,
  Heart,
  Users,
  Award
} from "lucide-react";
import styles from "./page.module.css";

const WHATSAPP_PRIMARY = "917406994752";
const WHATSAPP_SECONDARY = "919180462154";
const PHONE_PRIMARY = "+91 74069 94752";
const PHONE_SECONDARY = "+91 91804 62154";
const EMAIL = "hello@sobhavitravel.com";

export default function AndamanClientExperience() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    travellers: "1 Solo Sister",
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
          destination: "Andaman Women-Only Group Trip (23-28 Jan 2027)",
          travellers: formData.travellers,
          duration: "5 Nights / 6 Days",
          specialRequirements: `City: ${formData.city}. Notes: ${formData.notes}`,
          experience: "Women-Only Strangers Trip"
        })
      });
      setSubmitted(true);
      // Auto open whatsapp
      const waMsg = `Hi Sobhavi Travels! I submitted my enquiry for the Andaman Women-Only Trip (23-28 Jan 2027).\nName: ${formData.name}\nPhone: ${formData.phone}\nFrom: ${formData.city}`;
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
      date: "SAT 23 JAN",
      title: "Hello, islands!",
      points: [
        "Land in Port Blair and breathe in that tropical sea air.",
        "Check in, freshen up, and take it slow.",
        "Icebreaker games and get to know your fellow travellers.",
        "Step into history at the Cellular Jail: the Kalapani stories + a breathtaking 360° view from the top terrace.",
        "Golden-hour stroll at Corbyn's Cove, the city's serene palm-fringed beach."
      ],
      stayTag: "Night 1 · Port Blair | dinner + breakfast sorted",
      image: "/images/trips/andaman/day-1-cellular-jail.jpg",
      caption: "Cellular Jail, Port Blair",
      alt: "Cellular Jail Port Blair"
    },
    {
      day: "DAY 2",
      date: "SUN 24 JAN",
      title: "Ferry day + the blue-flag beach",
      points: [
        "Morning premium catamaran to Havelock (Swaraj Dweep) - azure sea views on the house.",
        "Check in and slow right down to island time.",
        "Afternoon at Radhanagar Beach: globally celebrated blue-flag certified stretch made for dips and epic sunsets.",
        "Pack a change of clothes + towels - you'll definitely want the water."
      ],
      stayTag: "Nights 2-3 · Havelock | dinner + breakfast sorted",
      image: "/images/trips/andaman/day-2-radhanagar.jpg",
      caption: "Radhanagar Beach, Havelock",
      alt: "Radhanagar Beach Havelock"
    },
    {
      day: "DAY 3",
      date: "MON 25 JAN",
      title: "Under the sea (almost)",
      points: [
        "Semi-submarine cruise to Elephanta Beach in air-conditioned comfort with priority entry.",
        "Packed lunch on board + professional photos to take home as keepsakes.",
        "Snorkelling, jet ski, banana rides + sea walk on the beach (optional, at your own pace).",
        "Weather playing spoilsport? We smoothly swap to the equally stunning Kala Pathar Beach."
      ],
      stayTag: "Night 3 · Havelock | packed lunch + dinner + breakfast",
      image: "/images/trips/andaman/day-3-snorkelling.jpg",
      caption: "snorkelling · optional extra",
      alt: "Snorkelling and Marine Reefs"
    },
    {
      day: "DAY 4",
      date: "TUE 26 JAN",
      title: "Neil Island, naturally",
      points: [
        "Ferry to Neil Island (Shaheed Dweep), check in and head out exploring.",
        "Bharatpur Beach: pristine white powder sand + shallow lagoon blue water made for wading.",
        "Golden sunset spectacle at Laxmanpur Beach.",
        "The Natural Bridge at low tide - millions of years of living corals sculpting natural architecture."
      ],
      stayTag: "Night 4 · Neil Island | dinner + breakfast sorted",
      image: "/images/trips/andaman/day-4-natural-bridge.jpg",
      caption: "Natural Bridge, Neil Island",
      alt: "Natural Bridge Neil Island"
    },
    {
      day: "DAY 5",
      date: "WED 27 JAN",
      title: "Back to Port Blair, with a show",
      points: [
        "Easy morning ferry ride back to Port Blair, check in and relax.",
        "Evening at the Cellular Jail Light & Sound Show - Kalapani's poignant story narrated under the stars.",
        "Last island night: group celebratory dinner, photo swaps + lifelong travel sisterhood."
      ],
      stayTag: "Night 5 · Port Blair | dinner + breakfast sorted",
      image: "/images/trips/andaman/day-5-light-sound.jpg",
      caption: "Light & Sound Show, Cellular Jail",
      alt: "Cellular Jail Light and Sound Show"
    },
    {
      day: "DAY 6",
      date: "THU 28 JAN",
      title: "Until next time, island sisters",
      points: [
        "Slow breakfast together, heartfelt hugs, and phone-number swaps.",
        "Airport transfers sorted - we get you there with plenty of time to spare.",
        "Fly home with a camera roll overflowing with Andaman blues (reach airport ~2 hrs early)."
      ],
      stayTag: "Day 6 · fly home | breakfast included",
      image: "/images/trips/andaman/day-6-departure.jpg",
      caption: "One last look at that water",
      alt: "Andaman crystal clear sea"
    }
  ];

  const faqs = [
    {
      q: "Can I join solo? Is it safe for single women?",
      a: "Yes! In fact, most women join completely solo. That is the whole spirit of our 'Strangers to Sisters' trips. You are welcomed into an all-female, supportive, verified travel circle with 24/7 on-ground female-friendly chaperones and private transfers throughout."
    },
    {
      q: "What is the room sharing arrangement?",
      a: "The early bird package is based on double sharing in comfortable, verified 3-star handpicked properties with twin beds and private attached bathrooms. If you prefer a private room for yourself, a single supplement can be arranged on request."
    },
    {
      q: "Are flights included?",
      a: "Flights to and from Port Blair (IXZ) are not included, allowing travellers to fly from any city in India (Delhi, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad, etc.) or use their preferred airlines/credit card points. We will advise you on the recommended flight arrival/departure windows."
    },
    {
      q: "What is the booking deposit & cancellation policy?",
      a: "You can block your seat with an initial deposit. Because spots on this island catamaran & hotel block are strictly limited to a boutique group size, we recommend locking in the early bird offer before 14th November 2026."
    }
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Official Sobhavi Travels Global Navbar */}
      <Navbar />

      <main className={styles.contentWrapper}>
        {/* 1. CINEMATIC HERO (Identical to Sri Lanka Design) */}
        <section className={styles.heroSection}>
          <Image
            src="/images/trips/andaman/hero-radhanagar.jpg"
            alt="Radhanagar Beach Andaman"
            fill
            className={styles.heroBgImage}
            priority
          />
          <div className={styles.heroOverlay} />

          <div className={styles.heroContent}>
            <div className={styles.heroDeckBadge}>
              <Sparkles size={15} style={{ color: "#dfb74a" }} />
              <span>A WOMEN-ONLY STRANGERS TRIP · 23–28 JAN 2027</span>
            </div>

            <h1 className={styles.heroMainTitle}>THE ANDAMANS</h1>

            <div className={styles.heroSubquote}>
              "Come solo. Leave with island sisters."
            </div>

            <div className={styles.heroTripSpecsRow}>
              <span className={`${styles.specBadge} ${styles.specHighlight}`}>
                <Calendar size={16} />
                23 – 28 January 2027
              </span>
              <span className={styles.specBadge}>
                <Clock size={16} />
                5 Nights / 6 Days
              </span>
              <span className={styles.specBadge}>
                <Users size={16} />
                Women Only · Island Sisters
              </span>
              <span className={`${styles.specBadge} ${styles.specHighlight}`}>
                <Award size={16} />
                Early Bird: INR 31,699/-
              </span>
            </div>

            <div className={styles.heroRouteStrip}>
              PORT BLAIR <span className={styles.routeSep}>→</span> 
              HAVELOCK <span className={styles.routeSep}>→</span> 
              NEIL ISLAND <span className={styles.routeSep}>→</span> 
              PORT BLAIR
            </div>

            <div className={styles.heroActionGroup}>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className={styles.btnPrimaryGold}
              >
                <Sparkles size={18} />
                <span>Reserve Your Seat</span>
              </button>
              <a
                href={getWaLink("Hello Sobhavi Travels! I want to join the Andaman Women-Only Trip (23-28 January 2027). Please share details.")}
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

        {/* 2. THE FEELING SECTION */}
        <section className={styles.feelingSection}>
          <div className={styles.feelingGrid}>
            <div className={styles.stickyNoteCard}>
              <div className={styles.feelingLabel}>THE FEELING</div>
              <h2 className={styles.feelingHeadline}>
                No plus-ones needed.
                <span className={styles.feelingHeadlineAccent}>Just a yes to something new.</span>
              </h2>
              <p className={styles.feelingDesc}>
                Six days of tropical island time with a curated group of like-minded women who start out as strangers on day one, and leave as lifelong island sisters by day six.
              </p>
              <p className={styles.feelingDesc}>
                Whether you’re taking your first solo trip, celebrating personal time, or craving the turquoise Andaman blues — leave the logistics, ferry bookings, and itineraries to us.
              </p>
              <div className={styles.sisterPill}>
                ✦ Come solo — most of us are. Strangers on Day 1, island sisters by Day 6.
              </div>
            </div>

            <div className={styles.polaroidWrapper}>
              <div className={`${styles.polaroidFrame} ${styles.polaroidFrameAlt}`}>
                <Image
                  src="/images/trips/andaman/polaroid-bharatpur.jpg"
                  alt="Bharatpur Beach, Neil Island"
                  width={600}
                  height={500}
                  className={styles.polaroidImg}
                />
                <div className={styles.polaroidCaption}>
                  Bharatpur Beach · Neil Island
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. ISLAND MAP & THE WEEK IN NOTES */}
        <section className={styles.mapSection}>
          <div className={styles.mapCard}>
            <div className={styles.mapVisualCol}>
              <h3 className={styles.mapVisualTitle}>Island Route & Visual Map</h3>
              <div style={{ position: "relative" }}>
                <Image
                  src="/images/trips/andaman/island-map.jpg"
                  alt="Andaman Island Map - Port Blair, Havelock, Neil Island"
                  width={600}
                  height={450}
                  className={styles.islandMapIllustration}
                />
              </div>
            </div>

            <div className={styles.weekNotesCard}>
              <h4 className={styles.weekNotesHeading}>THE WEEK, IN NOTES</h4>
              <ul className={styles.notesList}>
                <li className={styles.noteItem}>
                  <span className={styles.noteNum}>01</span>
                  <span className={styles.noteText}>Land in Port Blair + Cellular Jail + Corbyn's Cove</span>
                </li>
                <li className={styles.noteItem}>
                  <span className={styles.noteNum}>02</span>
                  <span className={styles.noteText}>Ferry to Havelock + Radhanagar Beach sunsets</span>
                </li>
                <li className={styles.noteItem}>
                  <span className={styles.noteNum}>03</span>
                  <span className={styles.noteText}>Semi-submarine cruise + Elephanta Beach reefs</span>
                </li>
                <li className={styles.noteItem}>
                  <span className={styles.noteNum}>04</span>
                  <span className={styles.noteText}>Neil Island + Bharatpur, Laxmanpur + Natural Bridge</span>
                </li>
                <li className={styles.noteItem}>
                  <span className={styles.noteNum}>05</span>
                  <span className={styles.noteText}>Ferry back to Port Blair + Light & Sound Show</span>
                </li>
                <li className={styles.noteItem}>
                  <span className={styles.noteNum}>06</span>
                  <span className={styles.noteText}>Hugs, goodbyes + airport drop</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. COMPLETE 6-DAY ITINERARY */}
        <section className={styles.itinerarySection}>
          <div className={styles.sectionHeadingWrapper}>
            <span className={styles.sectionPill}>DAY BY DAY STORY</span>
            <h2 className={styles.sectionMainTitle}>Six Days in Island Paradise</h2>
            <p className={styles.sectionSubDesc}>
              Crafted with a relaxed rhythm — just the right mix of sightseeing, ocean dips, shared laughs, and personal downtime.
            </p>
          </div>

          <div className={styles.daysGrid}>
            {itineraryDays.map((item, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className={`${styles.dayCard} ${isEven ? styles.dayCardReverse : ""}`}
                >
                  <div className={styles.dayTextCol}>
                    <div className={styles.dayHeaderRow}>
                      <span className={styles.dayTag}>{item.day} · {item.date}</span>
                    </div>

                    <h3 className={styles.dayTitle}>{item.title}</h3>

                    <ul className={styles.dayBulletList}>
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className={styles.dayBulletItem}>
                          <span className={styles.bulletDot}>•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={styles.dayFooterPill}>
                      <Sparkles size={14} style={{ color: "#b8972e" }} />
                      <span>{item.stayTag}</span>
                    </div>
                  </div>

                  <div className={styles.polaroidWrapper}>
                    <div className={`${styles.polaroidFrame} ${isEven ? styles.polaroidFrameAlt : ""}`}>
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={500}
                        height={400}
                        className={styles.polaroidImg}
                      />
                      <div className={styles.polaroidCaption}>
                        {item.caption}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 5. THE PRACTICAL BITS (INCLUSIONS / EXCLUSIONS) */}
        <section className={styles.practicalSection}>
          <div className={styles.sectionHeadingWrapper}>
            <span className={styles.sectionPill}>TRANSPARENT DETAILS</span>
            <h2 className={styles.sectionMainTitle}>The Practical Bits</h2>
            <p className={styles.sectionSubDesc}>
              No hidden costs or unexpected surprises. Exactly what is included and what is on you.
            </p>
          </div>

          <div className={styles.practicalGrid}>
            {/* INCLUDED */}
            <div className={styles.includedCard}>
              <h3 className={`${styles.practicalHeading} ${styles.includedHeading}`}>
                <Check size={22} className={styles.checkIcon} />
                <span>INCLUDED</span>
              </h3>
              <ul className={styles.practicalList}>
                <li className={styles.practicalItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>5 nights' stay</strong> in comfortable 3-star handpicked properties across Port Blair, Havelock + Neil Island</span>
                </li>
                <li className={styles.practicalItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Daily breakfast + dinner</strong> freshly prepared at verified restaurants and hotels</span>
                </li>
                <li className={styles.practicalItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Packed lunch + photos</strong> on the Elephanta semi-submarine cruise</span>
                </li>
                <li className={styles.practicalItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Airport + jetty transfers</strong> in comfortable air-conditioned private vehicles</span>
                </li>
                <li className={styles.practicalItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>All sightseeing + entry tickets</strong> as per the confirmed itinerary</span>
                </li>
                <li className={styles.practicalItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Premium catamaran ferries</strong> (Makruzz / Green Ocean / Nautika) between islands</span>
                </li>
                <li className={styles.practicalItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Semi-submarine cruise</strong> to Elephanta Beach for coral viewing</span>
                </li>
                <li className={styles.practicalItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Cellular Jail Light & Sound Show</strong> reserved tickets</span>
                </li>
                <li className={styles.practicalItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Meet + greet</strong> by warm local island crew at airport + each jetty</span>
                </li>
              </ul>
            </div>

            {/* NOT INCLUDED */}
            <div className={styles.notIncludedCard}>
              <h3 className={`${styles.practicalHeading} ${styles.notIncludedHeading}`}>
                <X size={22} className={styles.crossIcon} />
                <span>NOT INCLUDED</span>
              </h3>
              <ul className={styles.practicalList}>
                <li className={styles.practicalItem}>
                  <span className={styles.crossIcon}>✗</span>
                  <span>Flights to + from Port Blair (we guide you on the best flight timing)</span>
                </li>
                <li className={styles.practicalItem}>
                  <span className={styles.crossIcon}>✗</span>
                  <span>Optional water sports: scuba diving, snorkelling, sea walk, kayaking, Sea Kart</span>
                </li>
                <li className={styles.practicalItem}>
                  <span className={styles.crossIcon}>✗</span>
                  <span>Personal expenses, extra meals, alcoholic beverages + dinner transfers beyond itinerary</span>
                </li>
                <li className={styles.practicalItem}>
                  <span className={styles.crossIcon}>✗</span>
                  <span>Anything not specifically listed under Included</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. ISLAND PASS / TICKET CTA */}
        <section className={styles.ticketSection}>
          <div className={styles.ticketContainer}>
            <div className={styles.ticketLeft}>
              <div className={styles.ticketPassHeader}>
                SOBHAVI TRAVELS · ISLAND PASS
              </div>
              <h2 className={styles.ticketRouteTitle}>
                PORT BLAIR → HAVELOCK → NEIL
              </h2>
              <div className={styles.ticketSpecs}>
                <div><strong>Dates:</strong> 23 – 28 January 2027 · 5 nights / 6 days</div>
                <div><strong>Group:</strong> Women-only group · double-sharing rooms</div>
                <div><strong>Inclusions:</strong> Ferries, stays, sightseeing + most meals sorted</div>
              </div>

              <div className={styles.earlyBirdBanner}>
                <div className={styles.earlyBirdPrice}>
                  Early Bird: INR 31,699/-
                </div>
                <div className={styles.earlyBirdDeadline}>
                  ★ Special rate locked until 14th November 2026. Limited seats available!
                </div>
              </div>

              <div style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className={styles.primaryBookBtn}
                >
                  <Heart size={18} />
                  <span>Reserve Your Seat</span>
                </button>
                <a
                  href={getWaLink("Hello! I want to book the Early Bird seat (INR 31,699) for the Andaman Women-Only Trip.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryWaBtn}
                >
                  <MessageCircle size={18} />
                  <span>Book on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className={styles.ticketRight}>
              <div>
                <div className={styles.contactBoxTitle}>BOOKINGS & ENQUIRIES</div>
                <div style={{ fontWeight: "700", marginBottom: "8px", color: "#382F32" }}>Sobhavi Travels Concierge</div>
                <a href={`tel:${WHATSAPP_PRIMARY}`} className={styles.contactPhoneLink}>
                  📞 {PHONE_PRIMARY}
                </a>
                <a href={`tel:${WHATSAPP_SECONDARY}`} className={styles.contactPhoneLink}>
                  📞 {PHONE_SECONDARY}
                </a>
                <a href={`mailto:${EMAIL}`} className={styles.contactPhoneLink} style={{ fontSize: "0.95rem" }}>
                  ✉️ {EMAIL}
                </a>
              </div>

              <div>
                <div className={styles.contactBoxTitle} style={{ marginTop: "24px" }}>FOLLOW OUR JOURNEYS</div>
                <div className={styles.socialRowAndaman}>
                  <a
                    href="https://www.instagram.com/sobhavitravels?stkn=d3Z2Y3RtdTRqOTFj&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtnAndaman}
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/p/Sobhavi-Travels-61594440384684/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtnAndaman}
                  >
                    Facebook
                  </a>
                  <Link href="/" className={styles.socialBtnAndaman}>
                    Website
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FREQUENTLY ASKED QUESTIONS */}
        <section className={styles.faqSection}>
          <div className={styles.sectionHeadingWrapper}>
            <span className={styles.sectionPill}>HAVE QUESTIONS?</span>
            <h2 className={styles.sectionMainTitle}>Frequently Asked Questions</h2>
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
              backgroundColor: "rgba(28, 25, 23, 0.65)",
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
                background: "#ffffff",
                color: "#1c1917",
                borderRadius: "24px",
                maxWidth: "480px",
                width: "100%",
                padding: "36px 32px",
                boxShadow: "0 24px 60px rgba(0,0,0,0.2)",
                border: "1.5px solid rgba(180, 150, 100, 0.35)",
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
                  background: "rgba(0, 0, 0, 0.05)",
                  border: "none",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#57534e"
                }}
              >
                ✕
              </button>

              {submitted ? (
                <div style={{ textAlign: "center", padding: "20px 0" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>🎉</div>
                  <h3 style={{ fontSize: "1.5rem", color: "#1c1917", marginBottom: "8px" }}>
                    Seat Enquiry Received!
                  </h3>
                  <p style={{ color: "#57534e", lineHeight: 1.5, marginBottom: "20px" }}>
                    Thank you, {formData.name}! Our team has registered your interest for the Andaman Women-Only Group Trip (23-28 Jan 2027). A concierge sister is contacting you right away.
                  </p>
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className={styles.btnPrimaryGold}
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div style={{ fontSize: "0.82rem", fontWeight: "800", color: "#b8972e", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    ANDAMAN · WOMEN ONLY (23–28 JAN 2027)
                  </div>
                  <h3 style={{ fontSize: "1.5rem", color: "#1c1917", marginTop: "4px", marginBottom: "18px" }}>
                    Reserve Your Spot · Early Bird ₹31,699/-
                  </h3>

                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "4px", color: "#292524" }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ananya Sharma"
                        style={{
                          width: "100%",
                          padding: "11px 14px",
                          borderRadius: "12px",
                          border: "1.5px solid rgba(180, 150, 100, 0.3)",
                          fontSize: "0.95rem",
                          background: "#FFFFFF",
                          outline: "none"
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "4px", color: "#292524" }}>
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
                          borderRadius: "12px",
                          border: "1.5px solid rgba(180, 150, 100, 0.3)",
                          fontSize: "0.95rem",
                          background: "#FFFFFF",
                          outline: "none"
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "4px", color: "#292524" }}>
                        Departure City
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Bengaluru / Delhi / Mumbai"
                        style={{
                          width: "100%",
                          padding: "11px 14px",
                          borderRadius: "12px",
                          border: "1.5px solid rgba(180, 150, 100, 0.3)",
                          fontSize: "0.95rem",
                          background: "#FFFFFF",
                          outline: "none"
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "4px", color: "#292524" }}>
                        Notes / Room Preferences
                      </label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Traveling solo / with friend, diet preferences, etc."
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: "12px",
                          border: "1.5px solid rgba(180, 150, 100, 0.3)",
                          fontSize: "0.9rem",
                          background: "#FFFFFF",
                          outline: "none",
                          resize: "none"
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={styles.btnPrimaryGold}
                      style={{ width: "100%", justifyContent: "center", marginTop: "10px", cursor: isSubmitting ? "not-allowed" : "pointer" }}
                    >
                      {isSubmitting ? "Submitting..." : "Submit & Connect on WhatsApp"}
                    </button>

                    <div style={{ textAlign: "center", fontSize: "0.8rem", color: "#78716c" }}>
                      🔒 Zero spam. We protect your privacy. Women-only space.
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

