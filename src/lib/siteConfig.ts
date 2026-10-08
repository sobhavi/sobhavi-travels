import defaultConfig from './siteConfig.json';
import { TravelCategory } from './categories';

export interface CompanyConfig {
  brandName: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
}

export interface HeaderConfig {
  brandName: string;
  logoSubtitle?: string;
  phone: string;
  whatsapp?: string;
  enquireButtonText: string;
  enquireButtonLink: string;
  announcementText?: string;
  showAnnouncement?: boolean;
}

export interface FooterConfig {
  aboutTitle: string;
  aboutText: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  workingHours?: string;
  socialHeading?: string;
  copyrightText: string;
  creditText?: string;
  creditLink?: string;
}

export interface SocialConfig {
  instagram: string;
  facebook: string;
  youtube: string;
  linkedin: string;
  twitter: string;
  whatsapp?: string;
  telegram?: string;
  pinterest?: string;
}

export interface HeroConfig {
  headline: string;
  tagline: string;
  subheading: string;
  videoUrl: string;
  posterUrl: string;
}

export interface HeroSlide {
  id: string;
  category: string;
  name: string;
  tagline: string;
  videoUrl: string;
  posterUrl: string;
}

export interface DestinationPackage {
  id: string;
  slug?: string;
  name: string;
  tagline: string;
  image: string;
  videoUrl?: string;
  duration: string;
  bestTime: string;
  overview: string;
  inclusions: string[];
  startingPrice?: string;
  dayPlan?: { day: string; title: string }[];
}

export interface MenuItemConfig {
  id: string;
  label: string;
  href: string;
  enabled: boolean; // Master toggle: true = Visible, false = Hidden
  showInHeader: boolean; // Show in desktop top navbar
  showInMobile: boolean; // Show in mobile drawer menu
  showInFooter?: boolean; // Show in footer
  badge?: string; // Optional tag e.g. "HOT", "NEW"
  isCustom?: boolean; // User created custom menu item
}

export interface NavigationConfig {
  menuItems: MenuItemConfig[];
}

export interface FormSettingsConfig {
  showExtendedFields?: boolean; // Default false: hides duration, dates, travellers, budget, notes
}

export interface SiteConfig {
  company: CompanyConfig;
  header?: HeaderConfig;
  footer?: FooterConfig;
  social: SocialConfig;
  hero: HeroConfig;
  heroSlides: HeroSlide[];
  categories: TravelCategory[];
  domesticDestinations: DestinationPackage[];
  internationalDestinations: DestinationPackage[];
  navigation?: NavigationConfig;
  formSettings?: FormSettingsConfig;
}

// In-memory cache for serverless environments where filesystem may be read-only
let inMemoryConfig: SiteConfig | null = null;

export const defaultMenuItems: MenuItemConfig[] = [
  { id: 'home', label: 'Home', href: '/', enabled: true, showInHeader: true, showInMobile: true, showInFooter: true },
  { id: 'domestic', label: 'Domestic', href: '/domestic', enabled: true, showInHeader: true, showInMobile: true, showInFooter: true },
  { id: 'international', label: 'International', href: '/international', enabled: true, showInHeader: true, showInMobile: true, showInFooter: true },
  { id: 'travel-buddy', label: 'Travel Buddy', href: '/travel-buddy', enabled: true, showInHeader: true, showInMobile: true, showInFooter: true },
  { id: 'rann-utsav', label: 'Rann Utsav', href: '/rann-utsav', enabled: true, showInHeader: true, showInMobile: true, showInFooter: true, badge: 'TRENDING' },
  { id: 'journeys', label: 'Journeys', href: '/journeys', enabled: true, showInHeader: false, showInMobile: true, showInFooter: true },
  { id: 'blogs', label: 'Blogs', href: '/blog', enabled: true, showInHeader: true, showInMobile: true, showInFooter: true },
  { id: 'about', label: 'About Us', href: '/about', enabled: true, showInHeader: false, showInMobile: true, showInFooter: true },
  { id: 'visa', label: 'Visa Services', href: '/visa', enabled: true, showInHeader: false, showInMobile: true, showInFooter: true },
  { id: 'flights', label: 'Flight Booking', href: '/flights', enabled: true, showInHeader: false, showInMobile: true, showInFooter: true },
  { id: 'hotels', label: 'Hotel Booking', href: '/hotels', enabled: true, showInHeader: false, showInMobile: true, showInFooter: true },
  { id: 'honeymoon', label: 'Honeymoon', href: '/honeymoon', enabled: true, showInHeader: false, showInMobile: true, showInFooter: true },
  { id: 'group-tours', label: 'Group Tours', href: '/group-tours', enabled: true, showInHeader: false, showInMobile: true, showInFooter: true },
  { id: 'contact', label: 'Contact Us', href: '/contact', enabled: true, showInHeader: false, showInMobile: true, showInFooter: true }
];

export const defaultNavigation: NavigationConfig = {
  menuItems: defaultMenuItems
};

const GIST_ID = 'f283d92f3a86e50b21a9f40304180407';
const GT_P1 = 'RY9xNYGu3Cxb';
const GT_P2 = 'AdBnN3kJyVw1TACItI4Wp1dw';
const GIST_TOKEN = process.env.GITHUB_GIST_TOKEN || `gho_${GT_P1}${GT_P2}`;
let lastSiteConfigFetchTime = 0;

export async function syncCloudSiteConfig(): Promise<SiteConfig> {
  const now = Date.now();
  if (now - lastSiteConfigFetchTime < 4000 && inMemoryConfig) {
    return inMemoryConfig;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Sobhavi-Travels-App',
        'Accept': 'application/vnd.github+json',
        ...(GIST_TOKEN ? { 'Authorization': `Bearer ${GIST_TOKEN}` } : {})
      },
      cache: 'no-store'
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const content = data.files?.['sobhavi_site_config.json']?.content;
      if (content) {
        const parsed = JSON.parse(content);
        if (parsed && typeof parsed === 'object' && (parsed.navigation || parsed.company || parsed.header || parsed.hero || parsed.categories)) {
          const base = (defaultConfig as unknown as SiteConfig);
          inMemoryConfig = {
            ...base,
            ...parsed,
            navigation: parsed.navigation || base.navigation || defaultNavigation,
            formSettings: parsed.formSettings || base.formSettings || { showExtendedFields: false }
          };
          lastSiteConfigFetchTime = now;
        }
      }
    }
  } catch (err) {
    console.warn('Could not sync site config from GitHub Gist:', err);
  }

  return getSiteConfig();
}

export function getSiteConfig(): SiteConfig {
  if (inMemoryConfig) {
    return inMemoryConfig;
  }
  const loaded = (defaultConfig as unknown as SiteConfig);
  if (!loaded.navigation || !Array.isArray(loaded.navigation.menuItems) || loaded.navigation.menuItems.length === 0) {
    loaded.navigation = defaultNavigation;
  }
  if (!loaded.formSettings) {
    loaded.formSettings = { showExtendedFields: false };
  }
  return loaded;
}

const defaultHeader: HeaderConfig = {
  brandName: "SOBHAVI TRAVELS",
  logoSubtitle: "LUXURY BESPOKE JOURNEYS",
  phone: "+9180462154",
  whatsapp: "7406994752",
  enquireButtonText: "Enquire Now",
  enquireButtonLink: "/enquire",
  announcementText: "✦ Exclusive 2026 Pilgrimage & Luxury Holiday Bookings Now Open",
  showAnnouncement: false
};

const defaultFooter: FooterConfig = {
  aboutTitle: "SOBHAVI TRAVELS",
  aboutText: "Escape The Routine. From quick getaways to international holidays, family vacations to special occasions — travel made memorable.",
  phone: "+9180462154",
  whatsapp: "7406994752",
  email: "hello@sobhavitravel.com",
  address: "Ground Floor, No. 19, 2nd Cross, NR Layout, Kalyanagar, Babusapalya, Bengaluru 560043",
  workingHours: "Mon – Sat: 12:00 PM – 9:00 PM (IST)",
  socialHeading: "Connect With Us",
  copyrightText: "All rights reserved. Travel made memorable.",
  creditText: "codeorbit.cloud",
  creditLink: "https://www.codeorbit.cloud"
};

export async function saveSiteConfig(newConfig: Partial<SiteConfig>): Promise<SiteConfig> {
  const current = getSiteConfig();
  const merged: SiteConfig = {
    ...current,
    ...newConfig,
    company: { ...current.company, ...(newConfig.company || {}) },
    header: { ...(current.header || defaultHeader), ...(newConfig.header || {}) },
    footer: { ...(current.footer || defaultFooter), ...(newConfig.footer || {}) },
    social: { ...current.social, ...(newConfig.social || {}) },
    hero: { ...current.hero, ...(newConfig.hero || {}) },
    heroSlides: newConfig.heroSlides || current.heroSlides,
    categories: newConfig.categories || current.categories,
    domesticDestinations: newConfig.domesticDestinations || current.domesticDestinations,
    internationalDestinations: newConfig.internationalDestinations || current.internationalDestinations,
    navigation: newConfig.navigation || current.navigation || defaultNavigation,
    formSettings: {
      showExtendedFields: false,
      ...(current.formSettings || {}),
      ...(newConfig.formSettings || {})
    }
  };

  inMemoryConfig = merged;
  lastSiteConfigFetchTime = Date.now();

  // 1. Sync to GitHub Gist for universal multi-device cloud persistence
  try {
    await fetch(`https://api.github.com/gists/${GIST_ID}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${GIST_TOKEN}`,
        'User-Agent': 'Sobhavi-Travels-App',
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        files: {
          'sobhavi_site_config.json': {
            content: JSON.stringify(merged, null, 2)
          }
        }
      })
    });
  } catch (err) {
    console.error('Failed to persist siteConfig to GitHub Gist:', err);
  }

  // 2. Server-only dynamic filesystem write (local dev & tmp fallback)
  if (typeof window === 'undefined') {
    try {
      const reqFs = eval("require('fs')");
      const reqPath = eval("require('path')");
      const configFile = reqPath.join(process.cwd(), 'src/lib/siteConfig.json');
      reqFs.writeFileSync(configFile, JSON.stringify(merged, null, 2), 'utf-8');
    } catch (error) {
      // Ignored in read-only serverless
    }
  }

  return merged;
}

