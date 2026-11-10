"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Calendar, ArrowRight, X, MapPin } from "lucide-react";
import styles from "./UpcomingTripPopup.module.css";

const STORAGE_KEY = "sobhavi_upcoming_trip_popup_v2027";

export default function UpcomingTripPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Do not show popup on admin panel
    if (pathname?.startsWith("/admin")) return;

    // Check if user has already seen this popup
    try {
      const hasSeen = localStorage.getItem(STORAGE_KEY);
      if (!hasSeen) {
        // Trigger popup smoothly after 1.2s delay on first visit
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // If localStorage is unavailable, fail silently
    }
  }, [pathname]);

  // Handle ESC key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleDismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleDismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {}
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className={styles.backdrop} 
      onClick={handleDismiss} 
      role="dialog" 
      aria-modal="true" 
      aria-label="Upcoming Group Trips Announcement"
    >
      <div 
        className={styles.popupModal} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleDismiss}
          className={styles.closeBtn}
          aria-label="Close Announcement"
        >
          <X size={18} />
        </button>

        {/* Hero Visual Media */}
        <div className={styles.imageWrap}>
          <Image
            src="/images/trips/andaman/hero-radhanagar.jpg"
            alt="Andaman & Nicobar Islands - Upcoming Group Trip January 2027"
            fill
            className={styles.coverImage}
            priority
          />
          <div className={styles.imageOverlay} />
          <div className={styles.tripTag}>
            <Sparkles size={12} style={{ display: "inline", marginRight: "4px", verticalAlign: "middle" }} />
            UPCOMING GROUP TRIPS
          </div>
          <div className={styles.imageBottomPill}>
            <Calendar size={13} />
            <span>JANUARY 2027 · 23–28 JAN</span>
          </div>
        </div>

        {/* Content Body */}
        <div className={styles.bodyContent}>
          <div className={styles.headerRow}>
            <span className={styles.eyebrow}>2027 FEATURED DEPARTURE</span>
            <span className={styles.datePill}>5 Nights / 6 Days</span>
          </div>

          <h2 className={styles.title}>ANDAMAN &amp; NICOBAR</h2>
          <div className={styles.subquote}>
            Women-Only Strangers Trip · "Come solo. Leave with island sisters."
          </div>

          <p className={styles.description}>
            Experience Asia's best beaches, crystal-clear scuba reefs, semi-submarine cruise, and boutique beachfront stays with a curated group of like-minded women travelers.
          </p>

          <div className={styles.routeBox}>
            <MapPin size={14} style={{ color: "#b8972e", flexShrink: 0 }} />
            <span>Port Blair <span className={styles.routeArrow}>→</span> Havelock <span className={styles.routeArrow}>→</span> Neil Island</span>
          </div>

          <div className={styles.pricingRow}>
            <span className={styles.priceLabel}>Early Bird Offer</span>
            <span className={styles.priceAmount}>INR 31,699/-</span>
          </div>

          <div className={styles.actionRow}>
            <Link
              href="/trips/andaman-january-2027"
              onClick={handleDismiss}
              className={styles.exploreBtn}
            >
              <span>Explore Trip</span>
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/upcoming-group-trips"
              onClick={handleDismiss}
              className={styles.allTripsLink}
            >
              View All 2027 Group Trips (Andaman &amp; Sri Lanka) &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

