"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { getSiteConfig, SiteConfig } from '@/lib/siteConfig';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [config, setConfig] = useState<SiteConfig>(() => getSiteConfig());

  useEffect(() => {
    let lastScrolled = window.scrollY > 50;
    setScrolled(lastScrolled);

    const handleScroll = () => {
      const isOver = window.scrollY > 50;
      if (isOver !== lastScrolled) {
        lastScrolled = isOver;
        setScrolled(isOver);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Sync siteConfig updates in real-time
  useEffect(() => {
    const loadConfig = () => {
      try {
        const saved = localStorage.getItem('sobhavi_site_config');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.company?.phone) parsed.company.phone = parsed.company.phone.replace(/\s+/g, '');
          if (parsed.header?.phone) parsed.header.phone = parsed.header.phone.replace(/\s+/g, '');
          if (parsed.footer?.phone) parsed.footer.phone = parsed.footer.phone.replace(/\s+/g, '');
          if (parsed.company?.tagline === "Your journey. Our expertise.") parsed.company.tagline = "Escape The Routine";
          if (typeof parsed.footer?.aboutText === 'string' && parsed.footer.aboutText.includes("Your journey. Our expertise.")) {
            parsed.footer.aboutText = parsed.footer.aboutText.replace(/Your journey\. Our expertise\./g, "Escape The Routine.");
          }
          localStorage.setItem('sobhavi_site_config', JSON.stringify(parsed));
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
      .catch(err => console.warn('Could not sync remote siteConfig in Navbar:', err));

    const handleStorage = () => loadConfig();
    window.addEventListener('storage', handleStorage);
    window.addEventListener('sobhavi_site_config_updated', handleStorage);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('sobhavi_site_config_updated', handleStorage);
    };
  }, []);

  const isSolid = !isHomePage || scrolled || mobileMenuOpen;

  const header = config.header || {
    brandName: config.company?.brandName || "SOBHAVI TRAVELS",
    logoSubtitle: "LUXURY BESPOKE JOURNEYS",
    phone: config.company?.phone || "+917406994752",
    whatsapp: config.company?.whatsapp || "7406994752",
    enquireButtonText: "Enquire Now",
    enquireButtonLink: "/enquire",
    announcementText: "",
    showAnnouncement: false
  };

  const brandName = header.brandName || config.company?.brandName || "SOBHAVI TRAVELS";

  const rawPhone = header.phone || config.company?.phone || "+917406994752";
  const directPhone = rawPhone.replace(/\s+/g, '');
  const cleanPhone = directPhone.replace(/[^0-9+]/g, '');

  const cleanWa = (header.whatsapp || config.company?.whatsapp || '7406994752').replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanWa.startsWith('91') ? cleanWa : '91' + cleanWa}?text=${encodeURIComponent('Hello ' + brandName + '! I want to plan a luxury trip.')}`;

  const allMenuItems = config.navigation?.menuItems && config.navigation.menuItems.length > 0 
    ? config.navigation.menuItems 
    : [
        { id: "home", label: "Home", href: "/", enabled: true, showInHeader: true, showInMobile: true },
        { id: "andaman-trip", label: "Andaman '27", href: "/trips/andaman-january-2027", enabled: true, showInHeader: true, showInMobile: true },
        { id: "sri-lanka-trip", label: "Sri Lanka '27", href: "/trips/sri-lanka-february-2027", enabled: true, showInHeader: true, showInMobile: true },
        { id: "domestic", label: "Domestic", href: "/domestic", enabled: true, showInHeader: true, showInMobile: true },
        { id: "international", label: "International", href: "/international", enabled: true, showInHeader: true, showInMobile: true },
        { id: "rann-utsav", label: "Rann Utsav", href: "/rann-utsav", enabled: true, showInHeader: true, showInMobile: true, badge: "TRENDING" },
        { id: "travel-buddy", label: "Travel Buddy", href: "/travel-buddy", enabled: true, showInHeader: false, showInMobile: true },
        { id: "blogs", label: "Blogs", href: "/blog", enabled: true, showInHeader: true, showInMobile: true },
        { id: "about", label: "About Us", href: "/about", enabled: true, showInHeader: false, showInMobile: true },
        { id: "visa", label: "Visa Services", href: "/visa", enabled: true, showInHeader: false, showInMobile: true },
        { id: "flights", label: "Flight Booking", href: "/flights", enabled: true, showInHeader: false, showInMobile: true },
        { id: "hotels", label: "Hotel Booking", href: "/hotels", enabled: true, showInHeader: false, showInMobile: true },
        { id: "honeymoon", label: "Honeymoon", href: "/honeymoon", enabled: true, showInHeader: false, showInMobile: true },
        { id: "group-tours", label: "Group Tours", href: "/group-tours", enabled: true, showInHeader: false, showInMobile: true },
        { id: "contact", label: "Contact Us", href: "/contact", enabled: true, showInHeader: false, showInMobile: true }
      ];

  // Desktop Links: only enabled and configured for header
  const desktopLinks = allMenuItems.filter(item => item.enabled !== false && item.showInHeader !== false);

  // Mobile Links: only enabled and configured for mobile drawer
  const mobileLinks = allMenuItems.filter(item => item.enabled !== false && item.showInMobile !== false);

  return (
    <>
      {header.showAnnouncement && header.announcementText && (
        <div className={styles.announcementBar}>
          {header.announcementText}
        </div>
      )}
      <nav className={`${styles.navbar} ${isSolid ? styles.scrolled : ''}`} style={header.showAnnouncement && header.announcementText ? { top: '32px' } : undefined}>
        <div className={styles.navContainer}>
          {/* Left: Dynamic Brand Logo */}
          <Link href="/" className={styles.logo} aria-label={brandName}>
            <Image
              src="/logo.png"
              alt={brandName}
              width={160}
              height={70}
              className={styles.logoImage}
              priority
            />
          </Link>

          {/* Center: Desktop Links */}
          <div className={styles.centerLinks}>
            {desktopLinks.map((link) => (
              <Link
                key={link.id || link.href}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.activeNavLink : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Actions */}
          <div className={styles.rightActions}>
            <a href={`tel:${cleanPhone}`} className={styles.phone}>
              {directPhone}
            </a>
            <Link href={header.enquireButtonLink || "/enquire"} className="btn-gold">
              {header.enquireButtonText || "Enquire Now"}
            </Link>
          </div>

          {/* Mobile controls */}
          <div className={styles.mobileRight}>
            <Link href={header.enquireButtonLink || "/enquire"} className={`btn-gold ${styles.mobileEnquire}`}>
              {header.enquireButtonText || "Enquire"}
            </Link>
            <button 
              type="button" 
              className={styles.hamburgerBtn}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.line1Open : ''}`} />
              <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.line2Open : ''}`} />
              <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.line3Open : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={styles.mobileDrawer}
            >
              <div className={styles.mobileDrawerContent}>
                {mobileLinks.map((link) => (
                  <Link
                    key={link.id || link.href}
                    href={link.href}
                    className={`${styles.mobileNavLink} ${pathname === link.href ? styles.mobileActive : ''}`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className={styles.mobileContactBox}>
                  <a 
                    href={waUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.mobileWaBtn}
                  >
                    WhatsApp Concierge
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
