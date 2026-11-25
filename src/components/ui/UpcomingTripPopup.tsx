"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, X } from "lucide-react";
import styles from "./UpcomingTripPopup.module.css";

interface TripItem {
  num?: string;
  label: string;
  href: string;
}

const UPCOMING_TRIPS: TripItem[] = [
  {
    label: "Andaman and Nicobar Islands - Jan 2027",
    href: "/trips/andaman-january-2027",
  },
];

export default function UpcomingTripPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const hasShownThisLoadRef = useRef(false);
  const pathname = usePathname();

  const handleDismiss = useCallback(() => {
    hasShownThisLoadRef.current = true;
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (pathname?.startsWith("/admin")) return;
    if (hasShownThisLoadRef.current) return;

    const timer = setTimeout(() => {
      hasShownThisLoadRef.current = true;
      setIsOpen(true);
    }, 600);

    return () => clearTimeout(timer);
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
        <div className={styles.headerRow}>
          <h2 className={styles.title}>Upcoming Group Trips</h2>
          <button
            type="button"
            onClick={handleDismiss}
            className={styles.closeBtn}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <ul className={styles.tripList}>
          {UPCOMING_TRIPS.map((trip) => (
            <li key={trip.href}>
              <Link
                href={trip.href}
                onClick={handleDismiss}
                className={styles.tripLink}
              >
                <span className={styles.tripText}>
                  {trip.num && <span className={styles.tripNum}>{trip.num}</span>}
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
