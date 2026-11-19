import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Sobhavi Travels',
  description:
    'Read the Terms & Conditions governing bookings, holiday packages, group trips and travel services offered by Sobhavi Travels.',
  alternates: {
    canonical: 'https://www.sobhavitravel.com/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms & Conditions | Sobhavi Travels',
    description:
      'Read the Terms & Conditions governing bookings, holiday packages, group trips and travel services offered by Sobhavi Travels.',
    url: 'https://www.sobhavitravel.com/terms-and-conditions',
    siteName: 'Sobhavi Travels',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Terms & Conditions | Sobhavi Travels',
    description:
      'Read the Terms & Conditions governing bookings, holiday packages, group trips and travel services offered by Sobhavi Travels.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const TOC_ITEMS = [
  { id: 'section-1', num: '1', title: 'About These Terms' },
  { id: 'section-2', num: '2', title: 'Enquiries, Bookings & Confirmation' },
  { id: 'section-3', num: '3', title: 'Payments & Payment Schedules' },
  { id: 'section-4', num: '4', title: 'Cancellation, Amendments & Refunds' },
  { id: 'section-5', num: '5', title: 'Group Trips & Fixed Departures' },
  { id: 'section-6', num: '6', title: 'Traveller Responsibilities & Travel Documents' },
  { id: 'section-7', num: '7', title: 'Hotels, Flights & Third-Party Providers' },
  { id: 'section-8', num: '8', title: 'Travel Insurance' },
  { id: 'section-9', num: '9', title: 'Health, Safety & Conduct' },
  { id: 'section-10', num: '10', title: 'Personal Belongings & Luggage' },
  { id: 'section-11', num: '11', title: 'Itinerary Changes & Force Majeure' },
  { id: 'section-12', num: '12', title: 'Pricing, Inclusions & Exclusions' },
  { id: 'section-13', num: '13', title: 'Website Content & IP' },
  { id: 'section-14', num: '14', title: 'Limitation of Liability' },
  { id: 'section-15', num: '15', title: 'Privacy & Personal Information' },
  { id: 'section-16', num: '16', title: 'Governing Law & Jurisdiction' },
  { id: 'section-17', num: '17', title: 'Contact Information' },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                LEGAL &amp; COMPLIANCE
              </span>
              <h1 className={styles.heroTitle}>Terms &amp; Conditions</h1>
              <p className={styles.heroDesc}>
                These Terms and Conditions govern bookings, travel arrangements and services provided by Sobhavi Travels. Please read them carefully before making a booking.
              </p>
              <div className={styles.lastUpdatedBadge}>
                <span className={styles.lastUpdatedDot}></span>
                <span>Last Updated: 19 November 2026</span>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK NAVIGATION / TABLE OF CONTENTS */}
        <nav aria-label="Table of Contents" className={styles.tocSection}>
          <div className={styles.tocContainer}>
            <div className={styles.tocHeader}>
              <span className={styles.tocTitle}>Table of Contents &middot; 17 Sections</span>
            </div>
            <div className={styles.tocGrid}>
              {TOC_ITEMS.map((item) => (
                <a key={item.id} href={`#${item.id}`} className={styles.tocPill}>
                  <span className={styles.tocPillNumber}>{item.num}.</span>
                  <span>{item.title}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* CONTENT SECTION */}
        <section className={styles.contentSection}>
          <div className="container">
            <div className={styles.contentContainer}>
              {/* INTRO BOX */}
              <div className={styles.introBox}>
                <p className={styles.introText}>
                  These Terms and Conditions govern bookings, travel arrangements and services provided by Sobhavi Travels. Please read them carefully before making a booking.
                </p>
                <span className={styles.introMeta}>Last updated: 19 November 2026</span>
              </div>

              {/* 1. About These Terms */}
              <section id="section-1" className={styles.sectionBlock} aria-labelledby="heading-1">
                <h2 id="heading-1" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>1.</span>
                  About These Terms
                </h2>
                <p className={styles.text}>
                  These Terms and Conditions govern your use of the Sobhavi Travels website and your booking of any travel-related service, holiday package, group trip or customised itinerary offered through Sobhavi Travels.
                </p>
                <p className={styles.text}>
                  Sobhavi Travels (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a sole proprietorship operating in India.
                </p>
                <p className={styles.text}>
                  Our services include, but are not limited to:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Domestic and international holiday packages.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Group tours and fixed-departure trips.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Customised travel itineraries.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Flight, train and bus bookings.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Hotel and resort reservations.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Visa assistance and travel insurance facilitation.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Sightseeing, transfers and other travel-related arrangements.</span>
                  </li>
                </ul>
                <p className={styles.text}>
                  By accessing our website, requesting a quotation, making a payment or confirming a booking, you acknowledge that you have read and agreed to these Terms and Conditions.
                </p>
              </section>

              {/* 2. Enquiries, Bookings & Confirmation */}
              <section id="section-2" className={styles.sectionBlock} aria-labelledby="heading-2">
                <h2 id="heading-2" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>2.</span>
                  Enquiries, Bookings &amp; Confirmation
                </h2>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>All bookings are subject to availability and confirmation by the respective service providers.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>A booking will be considered confirmed only after the required advance payment or deposit has been received and confirmation has been communicated by Sobhavi Travels.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Quotations are based on the availability and prices applicable at the time of preparation and may change before booking confirmation.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Prices may vary due to fluctuations in airline fares, hotel tariffs, foreign exchange rates, taxes, government charges and supplier pricing.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Any special requests, including room preferences, dietary requirements, accessibility arrangements or specific seating requests, are subject to confirmation by the respective service provider.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Travellers are advised to verify all booking details, including names, dates, destinations and travel arrangements, before confirming their bookings.</span>
                  </li>
                </ul>
              </section>

              {/* 3. Payments & Payment Schedules */}
              <section id="section-3" className={styles.sectionBlock} aria-labelledby="heading-3">
                <h2 id="heading-3" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>3.</span>
                  Payments &amp; Payment Schedules
                </h2>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Payment schedules may vary depending on the destination, package, supplier and nature of the booking.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>The applicable deposit amount, instalment schedule and final payment deadline will be communicated in the individual quotation or booking confirmation.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>A booking is confirmed only upon receipt of the stipulated deposit or payment.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Failure to make payments within the agreed timelines may result in cancellation of the booking, subject to the applicable supplier cancellation policy.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Any cancellation charges, administrative fees or non-recoverable supplier costs may be deducted from the amount paid, as disclosed in the applicable booking terms.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Additional expenses arising from changes in government taxes, fuel surcharges, foreign exchange fluctuations or supplier pricing may be payable by the traveller.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>All payments must be made through officially communicated payment channels of Sobhavi Travels.</span>
                  </li>
                </ul>
              </section>

              {/* 4. Cancellation, Amendments & Refunds */}
              <section id="section-4" className={styles.sectionBlock} aria-labelledby="heading-4">
                <h2 id="heading-4" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>4.</span>
                  Cancellation, Amendments &amp; Refunds
                </h2>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Cancellation and amendment requests must be submitted to Sobhavi Travels in writing through the officially communicated contact channels.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Cancellation charges will depend on the individual package, airline, hotel, transport provider, DMC or other service provider involved.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Certain bookings, including promotional fares, special hotel rates, group departures and fixed-departure packages, may be partially refundable or strictly non-refundable.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Any non-refundable deposits, advance payments or supplier charges will be communicated before booking confirmation.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Refunds, wherever applicable, will be processed after receiving the corresponding refund from the relevant service provider.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Processing timelines may vary depending on the supplier, bank and payment method.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Any applicable bank charges, payment gateway fees, foreign exchange losses or non-recoverable transaction charges may be deducted where applicable and disclosed.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Date changes, name corrections, itinerary modifications and other amendments are subject to supplier approval and additional charges.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Sobhavi Travels will communicate the applicable cancellation and refund conditions before confirming a booking.</span>
                  </li>
                </ul>
              </section>

              {/* 5. Group Trips & Fixed Departures */}
              <section id="section-5" className={styles.sectionBlock} aria-labelledby="heading-5">
                <h2 id="heading-5" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>5.</span>
                  Group Trips &amp; Fixed Departures
                </h2>
                <p className={styles.text}>
                  For group trips, fixed departures and community travel experiences, the following additional conditions apply:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Each group trip will have a specified minimum and/or maximum participant capacity, where applicable.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>A participant&apos;s seat is confirmed only after the required booking deposit has been received.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Payment deadlines and instalment schedules will be communicated separately for each departure.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Group departures may have specific cancellation and refund policies, which will be shared before booking.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Travellers are expected to follow the instructions and schedules communicated by the trip coordinator or tour leader.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Changes to the itinerary may be necessary due to weather, local conditions, operational requirements or other unforeseen circumstances.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Travellers must respect fellow participants, local communities, tour leaders and service providers.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Sobhavi Travels reserves the right to refuse participation or remove a traveller from a group activity in cases of serious misconduct, harassment, unsafe behaviour or violation of applicable laws, subject to applicable law and the circumstances.</span>
                  </li>
                </ul>
              </section>

              {/* 6. Traveller Responsibilities & Travel Documents */}
              <section id="section-6" className={styles.sectionBlock} aria-labelledby="heading-6">
                <h2 id="heading-6" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>6.</span>
                  Traveller Responsibilities &amp; Travel Documents
                </h2>
                <p className={styles.text}>
                  Travellers are responsible for ensuring that they possess all necessary travel documents and meet the entry requirements of their destination.
                </p>
                <p className={styles.textSubheading}>
                  For international travel:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Passports must be valid for the period required by the destination country and relevant authorities.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Travellers must obtain the necessary visas, permits and other entry approvals.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Travellers must comply with immigration, customs, health and other applicable regulations.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Travellers are responsible for carrying their passports, identification documents, tickets and booking confirmations.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Any visa rejection, immigration denial, entry refusal or travel restriction arising from the traveller&apos;s circumstances remains the traveller&apos;s responsibility.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Sobhavi Travels may assist with visa applications and related documentation; however, visa approval is solely at the discretion of the relevant embassy, consulate or immigration authority.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Travellers must provide accurate personal details and disclose any relevant requirements before booking.</span>
                  </li>
                </ul>
              </section>

              {/* 7. Hotels, Flights & Third-Party Service Providers */}
              <section id="section-7" className={styles.sectionBlock} aria-labelledby="heading-7">
                <h2 id="heading-7" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>7.</span>
                  Hotels, Flights &amp; Third-Party Service Providers
                </h2>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Sobhavi Travels works with independent third-party service providers, including airlines, hotels, resorts, transport operators, local tour operators, destination management companies (DMCs), guides and activity providers.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>All services are subject to the respective provider&apos;s terms, conditions and operational policies.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Hotel check-in and check-out times, room categories, meal plans and amenities are determined by the respective property.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Airlines may change flight schedules, routes, aircraft, baggage allowances or other operational details.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Transport arrangements may be subject to changes due to traffic, road conditions, weather or operational circumstances.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Any service-related complaint will be communicated to the relevant service provider for resolution.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Sobhavi Travels will make reasonable efforts to assist travellers in coordinating with service providers and resolving issues. However, we do not directly operate or control independent third-party services.</span>
                  </li>
                </ul>
              </section>

              {/* 8. Travel Insurance */}
              <section id="section-8" className={styles.sectionBlock} aria-labelledby="heading-8">
                <h2 id="heading-8" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>8.</span>
                  Travel Insurance
                </h2>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Travellers are strongly advised to obtain suitable travel insurance for domestic and international trips.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>For international travel, insurance covering medical emergencies, accidents, baggage loss, trip cancellation, travel delays and other relevant risks is particularly recommended.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Where travel insurance is arranged through Sobhavi Travels, the policy terms, coverage, exclusions and claims process will be governed by the respective insurance provider.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Travellers are responsible for reviewing their policy coverage before departure.</span>
                  </li>
                </ul>
              </section>

              {/* 9. Health, Safety & Personal Conduct */}
              <section id="section-9" className={styles.sectionBlock} aria-labelledby="heading-9">
                <h2 id="heading-9" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>9.</span>
                  Health, Safety &amp; Personal Conduct
                </h2>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Travellers must comply with local laws, safety instructions and regulations at all destinations.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Consumption or possession of prohibited narcotics, illegal substances, explosives or other restricted items is strictly prohibited.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Travellers are expected to behave respectfully towards fellow travellers, trip leaders, local guides, hotel staff and local communities.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Any behaviour involving harassment, discrimination, violence, threats or deliberate damage to property will not be tolerated.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Travellers are responsible for informing Sobhavi Travels of any relevant accessibility, dietary or special assistance requirements before booking.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Sobhavi Travels reserves the right to take appropriate action in cases of serious misconduct or safety concerns, in accordance with applicable law and the circumstances.</span>
                  </li>
                </ul>
              </section>

              {/* 10. Personal Belongings & Luggage */}
              <section id="section-10" className={styles.sectionBlock} aria-labelledby="heading-10">
                <h2 id="heading-10" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>10.</span>
                  Personal Belongings &amp; Luggage
                </h2>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Travellers are responsible for the security of their personal belongings, valuables, travel documents and luggage.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Baggage allowances and restrictions are determined by the respective airlines and transport providers.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Travellers should take reasonable precautions to safeguard their belongings during transfers, sightseeing and accommodation stays.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Any loss, theft or damage should be reported immediately to the relevant service provider and, where appropriate, local authorities.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Sobhavi Travels is not responsible for loss or damage caused by third-party negligence or circumstances beyond its reasonable control, subject to applicable law.</span>
                  </li>
                </ul>
              </section>

              {/* 11. Itinerary Changes & Force Majeure */}
              <section id="section-11" className={styles.sectionBlock} aria-labelledby="heading-11">
                <h2 id="heading-11" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>11.</span>
                  Itinerary Changes &amp; Force Majeure
                </h2>
                <p className={styles.text}>
                  Sobhavi Travels makes reasonable efforts to ensure that the itinerary and services confirmed at the time of booking are delivered as planned.
                </p>
                <p className={styles.textSubheading}>
                  However, circumstances beyond our reasonable control may require changes, including:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Adverse weather conditions and natural disasters.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Flight cancellations, delays or transport disruptions.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Strikes, civil unrest, political instability or security concerns.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Government restrictions, border closures or regulatory changes.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Public health emergencies.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Other unforeseen operational or force majeure circumstances.</span>
                  </li>
                </ul>
                <p className={styles.textSubheading}>
                  In such situations:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>We reserve the right to make reasonable changes to itineraries, accommodation, transportation or sightseeing arrangements.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Alternative arrangements may be offered wherever reasonably possible.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Any refunds, credits or compensation will be subject to applicable law and the relevant supplier&apos;s policies.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Additional expenses arising from such disruptions will be communicated to travellers.</span>
                  </li>
                </ul>
                <p className={styles.text}>
                  Sobhavi Travels will make reasonable efforts to minimise inconvenience and assist travellers during unforeseen disruptions.
                </p>
              </section>

              {/* 12. Pricing, Inclusions & Exclusions */}
              <section id="section-12" className={styles.sectionBlock} aria-labelledby="heading-12">
                <h2 id="heading-12" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>12.</span>
                  Pricing, Inclusions &amp; Exclusions
                </h2>
                <p className={styles.text}>
                  Each package quotation will specify the services included and excluded.
                </p>
                <p className={styles.textSubheading}>
                  Unless explicitly mentioned in the quotation, package prices do not include:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Personal expenses and shopping.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Meals not specified in the itinerary.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Optional activities and excursions.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Tips and gratuities.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Early check-in or late check-out charges.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Visa fees and travel insurance.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Additional baggage charges.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Expenses arising from itinerary changes or personal requests.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Any other service not specifically mentioned as an inclusion.</span>
                  </li>
                </ul>
                <p className={styles.text}>
                  Any additional costs will be communicated wherever reasonably possible.
                </p>
              </section>

              {/* 13. Website Content & Intellectual Property */}
              <section id="section-13" className={styles.sectionBlock} aria-labelledby="heading-13">
                <h2 id="heading-13" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>13.</span>
                  Website Content &amp; Intellectual Property
                </h2>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>All information, itineraries, photographs, descriptions, logos and other content displayed on the Sobhavi Travels website are intended for informational and promotional purposes.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Images used on the website may be illustrative or representational and may not depict the exact hotel, room, activity or destination experience included in a particular package.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Prices, availability, itineraries and package details may change without prior notice.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Website content, branding, written material and original creative assets may not be reproduced, distributed or used commercially without prior written permission from Sobhavi Travels.</span>
                  </li>
                </ul>
              </section>

              {/* 14. Limitation of Liability */}
              <section id="section-14" className={styles.sectionBlock} aria-labelledby="heading-14">
                <h2 id="heading-14" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>14.</span>
                  Limitation of Liability
                </h2>
                <p className={styles.text}>
                  Sobhavi Travels will exercise reasonable care and diligence in coordinating and arranging travel services.
                </p>
                <p className={styles.textSubheading}>
                  However, to the extent permitted under applicable law, Sobhavi Travels shall not be responsible for losses, injuries, delays, additional expenses or disruptions arising from:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Acts or omissions of independent third-party service providers.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Accidents, theft, weather conditions or natural disasters.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Airline or transport delays, cancellations or breakdowns.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Government restrictions, strikes or political disturbances.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Immigration or visa-related decisions.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Circumstances beyond our reasonable control.</span>
                  </li>
                </ul>
                <p className={styles.text}>
                  Nothing in these Terms and Conditions excludes or limits any rights or remedies available to consumers under applicable Indian law, or any liability that cannot legally be excluded or limited.
                </p>
              </section>

              {/* 15. Privacy & Personal Information */}
              <section id="section-15" className={styles.sectionBlock} aria-labelledby="heading-15">
                <h2 id="heading-15" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>15.</span>
                  Privacy &amp; Personal Information
                </h2>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Sobhavi Travels may collect personal information, including names, contact details, passport information and other travel-related documents, for the purpose of processing bookings and coordinating travel services.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Such information may be shared with relevant airlines, hotels, DMCs, transport providers, visa service providers, insurance providers and other necessary service partners for fulfilling the requested services.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>We will handle personal information in accordance with applicable data protection and privacy laws.</span>
                  </li>
                </ul>
              </section>

              {/* 16. Governing Law & Jurisdiction */}
              <section id="section-16" className={styles.sectionBlock} aria-labelledby="heading-16">
                <h2 id="heading-16" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>16.</span>
                  Governing Law &amp; Jurisdiction
                </h2>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>These Terms and Conditions shall be governed by and interpreted in accordance with the laws of India.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Subject to applicable consumer protection laws and the jurisdiction of competent consumer dispute redressal authorities, courts in Bengaluru, Karnataka shall have jurisdiction over disputes arising from these Terms and Conditions.</span>
                  </li>
                </ul>
              </section>

              {/* 17. Contact Information */}
              <section id="section-17" className={styles.sectionBlock} aria-labelledby="heading-17">
                <h2 id="heading-17" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>17.</span>
                  Contact Information
                </h2>
                <p className={styles.text}>
                  For booking enquiries, cancellations, amendments, refunds or questions regarding these Terms and Conditions, please contact us:
                </p>

                <div className={styles.contactCard}>
                  <h3 className={styles.contactBrandName}>Sobhavi Travels</h3>

                  <div className={styles.contactDetailsGrid}>
                    <div className={styles.contactRow}>
                      <span className={styles.contactLabel}>Website:</span>
                      <span className={styles.contactValue}>
                        <a
                          href="https://sobhavitravel.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.contactLink}
                        >
                          https://sobhavitravel.com
                        </a>
                      </span>
                    </div>

                    <div className={styles.contactRow}>
                      <span className={styles.contactLabel}>Email:</span>
                      <span className={styles.contactValue}>
                        <a
                          href="mailto:hello@sobhavitravel.com"
                          className={styles.contactLink}
                        >
                          hello@sobhavitravel.com
                        </a>
                      </span>
                    </div>

                    <div className={styles.contactRow}>
                      <span className={styles.contactLabel}>Phone / WhatsApp:</span>
                      <span className={styles.contactValue}>
                        <a
                          href="tel:+917406994752"
                          className={styles.contactLink}
                        >
                          +91 7406994752
                        </a>
                      </span>
                    </div>

                    <div className={styles.contactRow}>
                      <span className={styles.contactLabel}>Registered Business Address:</span>
                      <span className={styles.contactValue}>
                        Ground Floor, No. 19, 2nd Cross, NR Layout, Ambedkar Road, Kalyanagar, Babusapalya, Bengaluru, Karnataka, India.
                      </span>
                    </div>
                  </div>

                  <div className={styles.contactActionPills}>
                    <a
                      href="mailto:hello@sobhavitravel.com"
                      className={styles.actionPill}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                      <span>Send Email</span>
                    </a>
                    <a
                      href="tel:+917406994752"
                      className={styles.actionPill}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      <span>Call Now</span>
                    </a>
                    <a
                      href="https://wa.me/917406994752"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.actionPill}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      <span>WhatsApp Us</span>
                    </a>
                    <a
                      href="https://sobhavitravel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.actionPill}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="2" y1="12" x2="22" y2="12"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                      <span>Visit Website</span>
                    </a>
                  </div>

                  <p className={styles.thankYouNote}>
                    Thank you for choosing Sobhavi Travels.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
