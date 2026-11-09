"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  Compass, 
  Check, 
  MessageCircle, 
  Phone, 
  Mail, 
  ArrowRight,
  ShieldCheck,
  Star,
  Hotel,
  Send
} from "lucide-react";
import styles from "./page.module.css";

const WHATSAPP_PRIMARY = "917406994752";
const WHATSAPP_SECONDARY = "919180462154";
const PHONE_PRIMARY = "+91 74069 94752";
const PHONE_SECONDARY = "+91 91804 62154";
const EMAIL = "hello@sobhavitravel.com";

export default function OnDemandClientExperience() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    travelDates: "",
    duration: "",
    travellers: "2 Adults",
    stayPreference: "Luxury 5-Star / Boutique",
    budget: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const getWaLink = (msg: string) => {
    return `https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
          destination: formData.destination || "On-Demand Custom Journey",
          travelDate: formData.travelDates,
          duration: formData.duration,
          travellers: formData.travellers,
          budget: formData.budget,
          experience: "Bespoke On-Demand",
          specialRequirements: `Stay: ${formData.stayPreference}. Notes: ${formData.notes}`
        })
      });
      setSubmitted(true);
      const waMsg = `Hi Sobhavi Travels! I submitted a Custom On-Demand Trip Request:\nDestination: ${formData.destination}\nName: ${formData.name}\nWhatsApp: ${formData.phone}\nDuration: ${formData.duration}\nTravel Dates: ${formData.travelDates}\nPreferences: ${formData.stayPreference}`;
      window.open(getWaLink(waMsg), "_blank");
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const bespokeStyles = [
    {
      title: "Private Island & Coastal Villas",
      desc: "Overwater bungalows in the Maldives, secluded Andaman coves, and beachfront retreats with private plunge pools and dedicated culinary chefs.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Royal Heritage & Palaces",
      desc: "Live like erstwhile royalty in Rajasthan’s authentic lakeside havelis, Udaipur palaces, and Jaipur royal suites with private heritage historians.",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Himalayan Sanctuaries",
      desc: "Cedar-scented pine luxury chalets in Himachal and Kashmir, private tea estates in Darjeeling, and bespoke high-altitude journeys.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "International Luxury Gateways",
      desc: "Futuristic skylines and penthouse suites in Dubai, Balinese rainforest sanctuaries, or Swiss Alpine retreats curated to your standards.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Curated Group & Family Offsites",
      desc: "Private charters, multi-generational villa takeovers, corporate leadership retreats, and custom celebrations executed seamlessly.",
      image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Wellness & Ayurvedic Havens",
      desc: "World-class holistic rejuvenation in Kerala backwaters, yoga retreats along the Ganges in Rishikesh, and mindful quietude.",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Top Bar Navigation */}
      <nav className={styles.topNav}>
        <Link href="/" className={styles.navBrand}>
          <Image
            src="/logo.png"
            alt="Sobhavi Travels"
            width={145}
            height={52}
            className={styles.navLogo}
            priority
          />
          <span className={styles.navTagline}>On-Demand</span>
        </Link>
        <div className={styles.navActions}>
          <Link href="/" className={styles.navBackBtn}>
            ← Home
          </Link>
          <a
            href={getWaLink("Hello Sobhavi Travels! I would like to design an on-demand bespoke holiday.")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navCtaBtn}
          >
            <MessageCircle size={16} />
            <span>Private Concierge</span>
          </a>
        </div>
      </nav>

      <main className={styles.contentWrapper}>
        {/* 1. HERO SECTION */}
        <section className={styles.heroSection}>
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=85&w=1800&auto=format&fit=crop"
            alt="Luxury On-Demand Travel"
            fill
            className={styles.heroBgImage}
            priority
          />
          <div className={styles.heroOverlay} />

          <div className={styles.heroContent}>
            <div className={styles.heroGoldBadge}>
              <Sparkles size={15} style={{ color: "#D4AF37" }} />
              <span>BESPOKE & ON-DEMAND TRAVEL</span>
            </div>

            <h1 className={styles.heroTitle}>
              Your Vision.
              <span className={styles.heroTitleGold}>Our Unrivaled Execution.</span>
            </h1>

            <p className={styles.heroSubtitle}>
              No rigid packages. No compromises. Whether it’s an exclusive island escape, a private palace sanctuary, or a multi-country expedition — we craft every detail specifically to your personal rhythm.
            </p>

            <div className={styles.heroCtas}>
              <a href="#planner-form" className={styles.btnGold}>
                <Compass size={18} />
                <span>Start Your Itinerary</span>
              </a>
              <a
                href={getWaLink("Hello Sobhavi Travels! I want to consult directly on WhatsApp for an on-demand trip.")}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnOutline}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>
        </section>

        {/* 2. HOW IT WORKS */}
        <section className={styles.howSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionPill}>OUR PROCESS</span>
            <h2 className={styles.sectionTitle}>How On-Demand Travel Works</h2>
            <p className={styles.sectionSub}>
              From first conversation to your return flight, our dedicated travel architects manage every logistical detail with white-glove precision.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNum}>01</div>
              <h3 className={styles.stepTitle}>Tell Us Your Vision</h3>
              <p className={styles.stepDesc}>
                Share your desired destinations, travel dates, pace, and passions. Whether you want private beach dining or VIP fast-track transfers, we listen first.
              </p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNum}>02</div>
              <h3 className={styles.stepTitle}>Bespoke Master Blueprint</h3>
              <p className={styles.stepDesc}>
                We curate a custom day-by-day proposal featuring handpicked 5-star properties, verified private chauffeurs, local insider guides, and transparent pricing.
              </p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNum}>03</div>
              <h3 className={styles.stepTitle}>Effortless Journey & 24/7 Care</h3>
              <p className={styles.stepDesc}>
                You travel with total peace of mind. Your personal Sobhavi concierge remains on standby around the clock to accommodate changes and ensure perfection.
              </p>
            </div>
          </div>
        </section>

        {/* 3. CURATED STYLES */}
        <section className={styles.stylesSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionPill}>TAILORED EXPERIENCES</span>
            <h2 className={styles.sectionTitle}>What We Create For You</h2>
            <p className={styles.sectionSub}>
              Every holiday is an original work of art. Here are some of our travellers’ favorite themes.
            </p>
          </div>

          <div className={styles.stylesGrid}>
            {bespokeStyles.map((item, idx) => (
              <div key={idx} className={styles.styleCard}>
                <div className={styles.styleImgWrapper}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={styles.styleImg}
                  />
                </div>
                <div className={styles.styleContent}>
                  <h3 className={styles.styleTitle}>{item.title}</h3>
                  <p className={styles.styleDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. INTERACTIVE PLANNER FORM */}
        <section id="planner-form" className={styles.formSection}>
          <div className={styles.formCard}>
            <h2 className={styles.formHeading}>Design Your On-Demand Trip</h2>
            <p className={styles.formSubheading}>
              Fill out your trip preferences below, and our senior travel specialist will prepare a customized proposal for you within hours.
            </p>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✨</div>
                <h3 style={{ fontSize: "1.8rem", color: "#F1D479", marginBottom: "12px" }}>
                  Proposal Request Dispatched!
                </h3>
                <p style={{ color: "#B0C2D4", fontSize: "1.05rem", lineHeight: 1.6, maxWidth: "550px", margin: "0 auto 28px" }}>
                  Thank you, {formData.name}. Our bespoke holiday specialist has received your requirements and is crafting your private itinerary. We are also forwarding the details to your WhatsApp for instant review.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className={styles.btnGold}
                >
                  Create Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formGrid}>
                  <div>
                    <label className={styles.formLabel}>Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Singhania"
                      className={styles.formInput}
                    />
                  </div>

                  <div>
                    <label className={styles.formLabel}>WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={styles.formInput}
                    />
                  </div>

                  <div>
                    <label className={styles.formLabel}>Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={styles.formInput}
                    />
                  </div>

                  <div>
                    <label className={styles.formLabel}>Dream Destination(s) *</label>
                    <input
                      type="text"
                      required
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      placeholder="e.g. Switzerland & France / Kerala Backwaters / Bali"
                      className={styles.formInput}
                    />
                  </div>

                  <div>
                    <label className={styles.formLabel}>Estimated Travel Dates / Month</label>
                    <input
                      type="text"
                      value={formData.travelDates}
                      onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                      placeholder="e.g. Late December / Mid February"
                      className={styles.formInput}
                    />
                  </div>

                  <div>
                    <label className={styles.formLabel}>Trip Duration</label>
                    <input
                      type="text"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      placeholder="e.g. 7 Nights / 10 Days"
                      className={styles.formInput}
                    />
                  </div>

                  <div>
                    <label className={styles.formLabel}>Number of Travellers</label>
                    <select
                      value={formData.travellers}
                      onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
                      className={styles.formSelect}
                    >
                      <option value="1 Solo Traveller">1 Solo Traveller</option>
                      <option value="2 Adults (Couple / Friends)">2 Adults (Couple / Friends)</option>
                      <option value="Family (2 Adults + Kids)">Family (2 Adults + Kids)</option>
                      <option value="Small Group (4-8 Travellers)">Small Group (4–8 Travellers)</option>
                      <option value="Large Group / Corporate (9+)">Large Group / Corporate (9+)</option>
                    </select>
                  </div>

                  <div>
                    <label className={styles.formLabel}>Accommodation Standard</label>
                    <select
                      value={formData.stayPreference}
                      onChange={(e) => setFormData({ ...formData, stayPreference: e.target.value })}
                      className={styles.formSelect}
                    >
                      <option value="Luxury 5-Star / Ultra Luxury">Luxury 5-Star / Ultra Luxury</option>
                      <option value="Private Villa / Boutique Estate">Private Villa / Boutique Estate</option>
                      <option value="Comfortable Premium 4-Star">Comfortable Premium 4-Star</option>
                      <option value="Heritage & Palace Stays">Heritage & Palace Stays</option>
                    </select>
                  </div>

                  <div className={styles.formGroupFull}>
                    <label className={styles.formLabel}>Special Notes, Celebrations, or Preferences</label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell us about special occasions (anniversary, honeymoon, milestone birthday), dietary choices, preferred airline, or specific sights."
                      className={styles.formTextarea}
                    />
                  </div>
                </div>

                <div style={{ marginTop: "32px", textAlign: "center" }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.btnGold}
                    style={{ width: "100%", maxWidth: "420px", justifyContent: "center", cursor: isSubmitting ? "not-allowed" : "pointer" }}
                  >
                    <Send size={18} />
                    <span>{isSubmitting ? "Crafting Request..." : "Request Custom Proposal"}</span>
                  </button>
                  <div style={{ marginTop: "14px", fontSize: "0.85rem", color: "#8E9EAF" }}>
                    🔒 100% Private & Confidential. No aggressive sales calls.
                  </div>
                </div>
              </form>
            )}

            {/* Direct Contact Alternatives */}
            <div className={styles.directContactsRow}>
              <a href={`tel:${WHATSAPP_PRIMARY}`} className={styles.directContactPill}>
                <Phone size={18} />
                <span>{PHONE_PRIMARY}</span>
              </a>
              <a href={`tel:${WHATSAPP_SECONDARY}`} className={styles.directContactPill}>
                <Phone size={18} />
                <span>{PHONE_SECONDARY}</span>
              </a>
              <a href={`mailto:${EMAIL}`} className={styles.directContactPill}>
                <Mail size={18} />
                <span>{EMAIL}</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
