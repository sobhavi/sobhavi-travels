"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getSiteConfig, SiteConfig } from '@/lib/siteConfig';
import styles from './Footer.module.css';

export default function Footer() {
  const [config, setConfig] = useState<SiteConfig>(() => getSiteConfig());

  useEffect(() => {
    const loadConfig = () => {
      try {
        const saved = localStorage.getItem('sobhavi_site_config');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.company?.tagline === "Your journey. Our expertise.") parsed.company.tagline = "Escape The Routine";
          if (typeof parsed.footer?.aboutText === 'string' && parsed.footer.aboutText.includes("Your journey. Our expertise.")) {
            parsed.footer.aboutText = parsed.footer.aboutText.replace(/Your journey\. Our expertise\./g, "Escape The Routine.");
          }
          setConfig(parsed);
        }
      } catch (e) {
        console.error(e);
      }
    };
    loadConfig();

    // Live remote sync with cloud/server siteConfig
    fetch('/api/site-config', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
        if (data.success && data.config) {
          const remote = data.config;
          if (remote.company?.tagline === "Your journey. Our expertise.") remote.company.tagline = "Escape The Routine";
          if (typeof remote.footer?.aboutText === 'string' && remote.footer.aboutText.includes("Your journey. Our expertise.")) {
            remote.footer.aboutText = remote.footer.aboutText.replace(/Your journey\. Our expertise\./g, "Escape The Routine.");
          }
          localStorage.setItem('sobhavi_site_config', JSON.stringify(remote));
          setConfig(remote);
        }
      })
      .catch(err => console.warn('Could not sync remote siteConfig in Footer:', err));

    const handleStorage = () => loadConfig();
    window.addEventListener('storage', handleStorage);
    window.addEventListener('sobhavi_site_config_updated', handleStorage);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('sobhavi_site_config_updated', handleStorage);
    };
  }, []);

  const company = config.company || {
    brandName: "SOBHAVI TRAVELS",
    tagline: "Bespoke luxury travel curated with precision, elegance, and uncompromised comfort. From private Indian escapes to iconic international holidays.",
    phone: "+917406994752",
    whatsapp: "7406994752",
    email: "hello@sobhavitravel.com",
    address: "Ground Floor, No. 19, 2nd Cross, NR Layout, Kalyanagar, Babusapalya, Bengaluru 560043"
  };

  const footer = config.footer || {
    aboutTitle: company.brandName || "SOBHAVI TRAVELS",
    aboutText: company.tagline || "Bespoke luxury travel curated with precision, elegance, and uncompromised comfort. From private Indian escapes to iconic international holidays.",
    phone: company.phone || "+917406994752",
    whatsapp: company.whatsapp || "7406994752",
    email: company.email || "hello@sobhavitravel.com",
    address: company.address || "Ground Floor, No. 19, 2nd Cross, NR Layout, Kalyanagar, Babusapalya, Bengaluru 560043",
    workingHours: "Mon – Sat: 12:00 PM – 9:00 PM (IST)",
    socialHeading: "Connect With Our Concierge",
    copyrightText: "All rights reserved. Travel made memorable.",
    creditText: "codeorbit.cloud",
    creditLink: "https://www.codeorbit.cloud"
  };

  const social = config.social || {
    instagram: "https://www.instagram.com/sobhavitravels?stkn=d3Z2Y3RtdTRqOTFj&utm_source=qr",
    facebook: "https://www.facebook.com/p/Sobhavi-Travels-61594440384684/",
    linkedin: "https://linkedin.com"
  };

  const cleanPhone = (footer.phone || company.phone || "+917406994752").replace(/[^0-9+]/g, '');
  const cleanWa = (footer.whatsapp || company.whatsapp || '7406994752').replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanWa.startsWith('91') ? cleanWa : '91' + cleanWa}`;

  return (
    <footer className={styles.footer}>

      {/* 2. Main Luxury 4-Column Section */}
      <div className={styles.mainWrapper}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Column 1: Brand & Headquarters */}
            <div className={styles.brandCol}>
              <Link href="/" className={styles.logoLink} aria-label={footer.aboutTitle || company.brandName || "SOBHAVI TRAVELS"}>
                <Image
                  src="/logo.png"
                  alt={footer.aboutTitle || company.brandName || "SOBHAVI TRAVELS"}
                  width={210}
                  height={90}
                  className={styles.logoImg}
                />
              </Link>
              
              <p className={styles.brandTagline}>
                {footer.aboutText || company.tagline || "Bespoke luxury travel curated with precision, elegance, and uncompromised comfort. From private Indian escapes to iconic international holidays."}
              </p>

              {/* Office Location Box */}
              <div className={styles.infoCard}>
                <div className={styles.infoCardIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className={styles.infoCardText}>
                  <span className={styles.infoCardLabel}>Corporate Office</span>
                  <span className={styles.infoCardValue}>{footer.address || company.address}</span>
                </div>
              </div>

              {/* Working Hours */}
              <div className={styles.infoCard}>
                <div className={styles.infoCardIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className={styles.infoCardText}>
                  <span className={styles.infoCardLabel}>Office Hours</span>
                  <span className={styles.infoCardValue}>{footer.workingHours || "Mon – Sat: 12:00 PM – 9:00 PM (IST)"}</span>
                </div>
              </div>

              {/* Contact Direct */}
              <div className={styles.directContactRow}>
                <a href={`tel:${cleanPhone}`} className={styles.contactItemPill}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>{footer.phone || company.phone}</span>
                </a>
                <a href={`mailto:${footer.email || company.email}`} className={styles.contactItemPill}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  <span>{footer.email || company.email}</span>
                </a>
              </div>

              {/* Social Channels (Instagram, Facebook, LinkedIn, WhatsApp only) */}
              <div className={styles.socialBlock}>
                <span className={styles.socialHeading}>Connect With Us</span>
                <div className={styles.socialRow}>
                  <a
                    href={social.instagram || "https://www.instagram.com/sobhavitravels?stkn=d3Z2Y3RtdTRqOTFj&utm_source=qr"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialRing}
                    aria-label="Instagram"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href={social.facebook || "https://www.facebook.com/p/Sobhavi-Travels-61594440384684/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialRing}
                    aria-label="Facebook"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialRing}
                    aria-label="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.socialRing} ${styles.socialRingWa}`}
                    aria-label="WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Luxury Holidays */}
            <div className={styles.navCol}>
              <h4 className={styles.colHeader}>Curated Holidays</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/trips/andaman-january-2027" className={`${styles.navLink} ${styles.highlightLink}`}>
                    <span>🌸 Andaman (Jan 2027)</span>
                    <span className={styles.specialTag}>WOMEN ONLY</span>
                  </Link>
                </li>
                <li>
                  <Link href="/trips/sri-lanka-february-2027" className={`${styles.navLink} ${styles.highlightLink}`}>
                    <span>🌴 Sri Lanka (Feb 2027)</span>
                    <span className={styles.specialTag}>GROUP TRIP</span>
                  </Link>
                </li>
                <li>
                  <Link href="/on-demand" className={`${styles.navLink} ${styles.highlightLink}`}>
                    <span>✨ On-Demand Bespoke</span>
                    <span className={styles.newTag}>HOT</span>
                  </Link>
                </li>
                <li>
                  <Link href="/domestic" className={styles.navLink}>Domestic Escapes</Link>
                </li>
                <li>
                  <Link href="/international" className={styles.navLink}>International Gateways</Link>
                </li>
                <li>
                  <Link href="/rann-utsav" className={`${styles.navLink} ${styles.highlightLink}`}>
                    <span>Rann Utsav 2026–27</span>
                    <span className={styles.specialTag}>★ SPECIAL</span>
                  </Link>
                </li>
                <li>
                  <Link href="/journeys" className={styles.navLink}>Signature Journeys</Link>
                </li>
                <li>
                  <Link href="/destinations" className={styles.navLink}>Destinations Directory</Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className={styles.navCol}>
              <h4 className={styles.colHeader}>Services</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/hotels" className={styles.navLink}>5-Star Hotels & Stays</Link>
                </li>
                <li>
                  <Link href="/visa" className={styles.navLink}>Fast-Track Visa Assistance</Link>
                </li>
                <li>
                  <Link href="/honeymoon" className={styles.navLink}>Honeymoon Packages</Link>
                </li>
                <li>
                  <Link href="/group-tours" className={styles.navLink}>Group Tours & Offsites</Link>
                </li>
                <li>
                  <Link href="/travel-buddy" className={`${styles.navLink} ${styles.highlightLink}`}>
                    <span>Dedicated Travel Buddy</span>
                    <span className={styles.newTag}>NEW</span>
                  </Link>
                </li>
                <li>
                  <Link href="/enquire" className={styles.navLink}>Custom Package Enquiry</Link>
                </li>
              </ul>
            </div>

            {/* Column 4: The Atelier & Directory */}
            <div className={styles.navCol}>
              <h4 className={styles.colHeader}>The Atelier</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/about" className={styles.navLink}>About Sobhavi Travels</Link>
                </li>
                <li>
                  <Link href="/contact" className={styles.navLink}>Contact Concierge</Link>
                </li>
                <li>
                  <Link href="/blog" className={`${styles.navLink} ${styles.goldJournalLink}`}>
                    <span>Travel Journal & Insights</span>
                    <span className={styles.goldDot}>•</span>
                  </Link>
                </li>
              </ul>

              {/* Dedicated Popular Destinations (29) Feature Card */}
              <div className={styles.directoryCardWrapper}>
                <Link
                  href="/destinations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.directoryCard}
                  title="Open Complete Destinations Directory in a New Tab"
                >
                  <div className={styles.directoryCardTop}>
                    <div className={styles.directoryCardTitleGroup}>
                      <span className={styles.directoryBadge}>DIRECT ACCESS</span>
                      <h5 className={styles.directoryCardTitle}>Popular Destinations (29)</h5>
                    </div>
                    <span className={styles.directoryOpenIcon}>↗</span>
                  </div>
                  <p className={styles.directoryCardSummary}>
                    Complete guide to 22 Indian state circuits and 7 global holiday escapes.
                  </p>
                  <div className={styles.directoryCardFooter}>
                    <span>Opens Directory in New Page</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Legal & Copyright Bar */}
      <div className={styles.bottomBarWrapper}>
        <div className={styles.container}>
          <div className={styles.bottomBar}>
            <p className={styles.copyrightText}>
              &copy; {new Date().getFullYear()} {footer.aboutTitle || company.brandName || "SOBHAVI TRAVELS"}. {footer.copyrightText || "All rights reserved. Travel made memorable."}
            </p>
            <div className={styles.legalGroup}>
              <span className={styles.creditItem}>
                Engineered by{' '}
                <a
                  href="https://codeorbit.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.creditLink}
                >
                  codeorbit.cloud
                </a>
              </span>
              <span className={styles.divider}>•</span>
              <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
              <span className={styles.divider}>•</span>
              <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
