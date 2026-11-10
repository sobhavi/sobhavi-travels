import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import FilmGrain from "@/components/ui/FilmGrain";
import FloatingContact from "@/components/ui/FloatingContact";
import NavigationProgress from "@/components/ui/NavigationProgress";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import Footer from "@/components/layout/Footer";
import ConditionalFooter from "@/components/layout/ConditionalFooter";
import SecretLiveEditor from "@/components/ui/SecretLiveEditor";
import UpcomingTripPopup from "@/components/ui/UpcomingTripPopup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#faf7f2"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sobhavitravel.com"),
  alternates: {
    canonical: "/",
  },
  title: "SOBHAVI TRAVELS | Escape The Routine",
  description: "From quick getaways to international holidays, family vacations to special occasions - we help you plan the trip, while taking care of the details.",
  openGraph: {
    title: "SOBHAVI TRAVELS | Escape The Routine",
    description: "From quick getaways to international holidays, family vacations to special occasions - we help you plan the trip, while taking care of the details.",
    url: "https://www.sobhavitravel.com",
    siteName: "SOBHAVI TRAVELS",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOBHAVI TRAVELS | Escape The Routine",
    description: "From quick getaways to international holidays, family vacations to special occasions - we help you plan the trip, while taking care of the details.",
  },
  verification: {
    google: "lr5HQ7i2Jfk-J7rcrNZVUanwyiFCueWDsVwS3pF3ylo",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="dark-mode-forced">
        <Suspense fallback={null}>
          <NavigationProgress />
          <SecretLiveEditor />
        </Suspense>
        <FilmGrain />
        <FloatingContact />
        <UpcomingTripPopup />
        <SmoothScrollProvider>
          {children}
          <ConditionalFooter>
            <Footer />
          </ConditionalFooter>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
