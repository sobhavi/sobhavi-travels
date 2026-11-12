"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, X } from "lucide-react";
import styles from "./UpcomingTripPopup.module.css";

const STORAGE_KEY = "sobhavi_upcoming_trips_popup_v2";

const UPCOMING_TRIPS = [
  {
    num: "1.",
    label: "Andaman and Nicobar Islands - Jan 2027",
    href: "/trips/andaman-january-2027",
  },
  {
    num: "2.",
    label: "Sri Lanka - Feb 2027",
    href: "/trips/sri-lanka-february-2027",
  },
];

export default function UpcomingTripPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleDismiss = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Ignore storage write errors
    }
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (pathname?.startsWith("/admin")) return;

    try {
      const hasSeen = localStorage.getItem(STORAGE_KEY);
      if (!hasSeen) {
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 600);
        return () => clearTimeout(timer);
      }
    } catch {
      // If localStorage is unavailable, fail silently
    }
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleDismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleDismiss]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.backdrop}
      onClick={handleDismiss}
      role="dialog"
      aria-modal="true"
      aria-label="Upcoming Group Trips"
    >
      <div
        className={styles.popupModal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleDismiss}
          className={styles.closeBtn}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <h2 className={styles.title}>Upcoming Group Trips</h2>

        <ul className={styles.tripList}>
          {UPCOMING_TRIPS.map((trip) => (
            <li key={trip.href}>
              <Link
                href={trip.href}
                onClick={handleDismiss}
                className={styles.tripLink}
              >
                <span className={styles.tripText}>
                  <span className={styles.tripNum}>{trip.num}</span>
                  <span>{trip.label}</span>
                </span>
                <ArrowRight size={17} className={styles.tripArrow} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
