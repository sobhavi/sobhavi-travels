import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy | Sobhavi Travels',
  description:
    'Read the Cancellation & Refund Policy explaining how booking deposits, cancellations, amendments and refunds are handled at Sobhavi Travels.',
  alternates: {
    canonical: 'https://www.sobhavitravel.com/cancellation-and-refund-policy',
  },
  openGraph: {
    title: 'Cancellation & Refund Policy | Sobhavi Travels',
    description:
      'Read the Cancellation & Refund Policy explaining how booking deposits, cancellations, amendments and refunds are handled at Sobhavi Travels.',
    url: 'https://www.sobhavitravel.com/cancellation-and-refund-policy',
    siteName: 'Sobhavi Travels',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Cancellation & Refund Policy | Sobhavi Travels',
    description:
      'Read the Cancellation & Refund Policy explaining how booking deposits, cancellations, amendments and refunds are handled at Sobhavi Travels.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const TOC_ITEMS = [
  { id: 'section-1', num: '1', title: 'Booking Deposits & Payments' },
  { id: 'section-2', num: '2', title: 'Cancellations by the Traveller' },
  { id: 'section-3', num: '3', title: 'Trip Cancellations or Changes by Sobhavi Travels' },
  { id: 'section-4', num: '4', title: 'Force Majeure & Unforeseen Circumstances' },
  { id: 'section-5', num: '5', title: 'Flight Bookings, Visa & Travel Insurance' },
  { id: 'section-6', num: '6', title: 'Accommodation & On-Ground Services' },
  { id: 'section-7', num: '7', title: 'Group Trips & Fixed Departures' },
  { id: 'section-8', num: '8', title: 'Refund Processing & Timelines' },
  { id: 'section-9', num: '9', title: 'How to Request a Cancellation or Refund' },
  { id: 'section-10', num: '10', title: 'Policy Updates' },
];

export default function CancellationRefundPolicyPage() {
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
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                  <path d="M3 3v5h5"/>
                  <path d="M12 7v5l4 2"/>
                </svg>
                TRANSPARENCY &amp; FAIRNESS
              </span>
              <h1 className={styles.heroTitle}>Cancellation &amp; Refund Policy</h1>
              <p className={styles.heroDesc}>
                At Sobhavi Travels, we understand that travel plans can change. This policy explains how booking deposits, cancellations, amendments and refunds are handled for our domestic and international holiday packages, group trips and other travel-related services.
              </p>
              <div className={styles.effectiveBadge}>
                <span className={styles.effectiveDot}></span>
                <span>Effective from: 19 November 2026</span>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK NAVIGATION / TABLE OF CONTENTS */}
        <nav aria-label="Table of Contents" className={styles.tocSection}>
          <div className={styles.tocContainer}>
            <div className={styles.tocHeader}>
              <span className={styles.tocTitle}>Table of Contents &middot; 10 Sections</span>
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
                  At Sobhavi Travels, we understand that travel plans can change. This policy explains how booking deposits, cancellations, amendments and refunds are handled for our domestic and international holiday packages, group trips and other travel-related services.
                </p>
                <span className={styles.introMeta}>Effective from: 19 November 2026</span>
              </div>

              {/* 1. Booking Deposits & Payments */}
              <section id="section-1" className={styles.sectionBlock} aria-labelledby="heading-1">
                <h2 id="heading-1" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>1.</span>
                  Booking Deposits &amp; Payments
                </h2>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>A booking is confirmed only after the required advance payment or booking deposit has been received and confirmation has been communicated by Sobhavi Travels.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Booking deposits and payment schedules may vary depending on the destination, package, service provider and nature of the booking.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>The applicable deposit amount, instalment schedule and final payment deadline will be communicated in the individual quotation or booking confirmation.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Certain bookings, including promotional offers, special hotel rates, group departures and fixed-departure packages, may require non-refundable deposits.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Any non-refundable amounts or applicable cancellation conditions will be communicated before the booking is confirmed.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Failure to complete payments within the agreed timeline may result in cancellation of the booking, subject to the applicable supplier cancellation policy and any disclosed charges.</span>
                  </li>
                </ul>
              </section>

              {/* 2. Cancellations by the Traveller */}
              <section id="section-2" className={styles.sectionBlock} aria-labelledby="heading-2">
                <h2 id="heading-2" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>2.</span>
                  Cancellations by the Traveller
                </h2>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>If a traveller wishes to cancel a confirmed booking, the cancellation request must be submitted in writing to Sobhavi Travels through the officially communicated email or WhatsApp contact details.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Cancellation charges will depend on the applicable terms and conditions of the airline, hotel, DMC, transport provider, tour operator or other service provider involved.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Any non-refundable deposits, advance payments, supplier penalties or cancellation charges will be deducted from the amount paid, as applicable and disclosed.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Certain bookings may be completely non-refundable, particularly promotional fares, special hotel rates, fixed-departure group packages and services with strict supplier cancellation conditions.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Refund eligibility may vary depending on how far in advance the cancellation is requested.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Any administrative or service charges, where applicable, will be communicated at the time of booking.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Failure to travel or report for a confirmed departure without prior cancellation (no-show) may result in the booking being treated as non-refundable, subject to the supplier&apos;s policy.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Refunds, wherever applicable, will be processed after the relevant service provider has approved and released the refundable amount.</span>
                  </li>
                </ul>
              </section>

              {/* 3. Trip Cancellations or Changes by Sobhavi Travels */}
              <section id="section-3" className={styles.sectionBlock} aria-labelledby="heading-3">
                <h2 id="heading-3" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>3.</span>
                  Trip Cancellations or Changes by Sobhavi Travels
                </h2>
                <p className={styles.text}>
                  In certain circumstances, Sobhavi Travels may need to modify or cancel a confirmed trip.
                </p>
                <p className={styles.text} style={{ fontWeight: 600 }}>
                  This may happen due to:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Insufficient participation for a group departure, where a minimum group size applies.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Unavailability of confirmed hotels, transportation or other essential services.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Operational or logistical challenges.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Safety concerns or unforeseen circumstances.</span>
                  </li>
                </ul>
                <p className={styles.text}>
                  If Sobhavi Travels needs to cancel a trip entirely for reasons within our control, we will communicate the situation to affected travellers and work towards a fair resolution.
                </p>
                <p className={styles.text} style={{ fontWeight: 600 }}>
                  Depending on the circumstances, available options may include:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>A full or partial refund.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Credit towards a future trip, subject to mutual agreement.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>An alternative itinerary or travel arrangement, subject to the traveller&apos;s approval.</span>
                  </li>
                </ul>
                <p className={styles.text}>
                  Any refund or alternative arrangement will be handled in accordance with applicable laws and the specific circumstances of the booking.
                </p>
              </section>

              {/* 4. Force Majeure & Unforeseen Circumstances */}
              <section id="section-4" className={styles.sectionBlock} aria-labelledby="heading-4">
                <h2 id="heading-4" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>4.</span>
                  Force Majeure &amp; Unforeseen Circumstances
                </h2>
                <p className={styles.text}>
                  Certain circumstances beyond the reasonable control of Sobhavi Travels or its service providers may affect travel arrangements.
                </p>
                <p className={styles.text} style={{ fontWeight: 600 }}>
                  These may include:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Natural disasters, floods, earthquakes or extreme weather conditions.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Political unrest, civil disturbances or security-related restrictions.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Government-imposed travel restrictions or border closures.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Strikes, transport disruptions or airline cancellations.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Public health emergencies or other unforeseen events.</span>
                  </li>
                </ul>
                <p className={styles.text} style={{ fontWeight: 600 }}>
                  In such situations:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Itineraries, accommodation or transportation arrangements may need to be modified.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Alternative arrangements may be offered wherever reasonably possible.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Refunds, credits or rescheduling options will depend on the applicable supplier policies and available recoveries.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Additional expenses arising from such disruptions will be communicated to travellers.</span>
                  </li>
                </ul>
                <p className={styles.text}>
                  Sobhavi Travels will make reasonable efforts to assist affected travellers and minimise inconvenience.
                </p>
                <p className={styles.text}>
                  Nothing in this section overrides any mandatory refund or compensation rights available under applicable law.
                </p>
              </section>

              {/* 5. Flight Bookings, Visa Assistance & Travel Insurance */}
              <section id="section-5" className={styles.sectionBlock} aria-labelledby="heading-5">
                <h2 id="heading-5" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>5.</span>
                  Flight Bookings, Visa Assistance &amp; Travel Insurance
                </h2>

                <h3 className={styles.subHeading}>Flights</h3>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Flight cancellation and refund eligibility are determined by the airline and the fare type selected at the time of booking.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Non-refundable flight tickets may not qualify for a refund, except where applicable airline rules or laws provide otherwise.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Airline cancellation, rescheduling, name correction and date change charges will be governed by the airline&apos;s policies.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Any applicable service or administrative charges will be communicated separately.</span>
                  </li>
                </ul>

                <h3 className={styles.subHeading}>Visa Assistance</h3>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Sobhavi Travels may provide visa assistance, documentation support and application guidance.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Visa approval or rejection is solely at the discretion of the respective embassy, consulate or immigration authority.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Visa application fees, embassy charges and third-party processing fees are generally non-refundable once paid, subject to the relevant authority&apos;s policies.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>A visa rejection does not automatically make associated flight, hotel or package bookings refundable. Their respective cancellation conditions will apply.</span>
                  </li>
                </ul>

                <h3 className={styles.subHeading}>Travel Insurance</h3>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Travel insurance, once issued, is subject to the insurer&apos;s cancellation and refund conditions.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Insurance premiums are generally non-refundable once the policy has commenced or been issued, subject to the insurer&apos;s terms and applicable law.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Travellers are encouraged to review their insurance coverage and exclusions before purchasing a policy.</span>
                  </li>
                </ul>
              </section>

              {/* 6. Accommodation & On-Ground Services */}
              <section id="section-6" className={styles.sectionBlock} aria-labelledby="heading-6">
                <h2 id="heading-6" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>6.</span>
                  Accommodation &amp; On-Ground Services
                </h2>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Accommodation, sightseeing, transfers, activities and other on-ground services are subject to the cancellation and amendment policies of the respective service providers.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Hotel cancellation charges depend on the selected property&apos;s booking conditions and reservation type.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Promotional, special-rate and non-refundable hotel reservations may not qualify for refunds.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Room upgrades, additional meals, optional excursions and itinerary changes requested by travellers may involve additional costs.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Early check-in and late check-out are subject to hotel availability and may attract additional charges.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Changes to on-ground arrangements must be communicated to Sobhavi Travels or the relevant service provider in advance.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>The inclusions and exclusions for each holiday package will be specified in the individual quotation or itinerary.</span>
                  </li>
                </ul>
              </section>

              {/* 7. Group Trips & Fixed Departures */}
              <section id="section-7" className={styles.sectionBlock} aria-labelledby="heading-7">
                <h2 id="heading-7" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>7.</span>
                  Group Trips &amp; Fixed Departures
                </h2>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Group trips and fixed-departure packages may have specific cancellation and refund conditions due to advance commitments made with hotels, airlines, transport providers and local operators.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>A participant&apos;s seat is confirmed only after receipt of the stipulated booking deposit.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Deposits may be non-refundable where this has been communicated before booking.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Cancellation charges will depend on the individual group&apos;s booking conditions and supplier commitments.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Slot transfers or replacement participants are subject to prior approval from Sobhavi Travels and the relevant service providers.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Refunds for cancelled group bookings will be processed according to the specific departure&apos;s cancellation policy.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Travellers are advised to review the departure-specific payment and cancellation schedule before making a booking.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>The cancellation terms for each group departure will be shared separately wherever they differ from this general policy.</span>
                  </li>
                </ul>
              </section>

              {/* 8. Refund Processing & Timelines */}
              <section id="section-8" className={styles.sectionBlock} aria-labelledby="heading-8">
                <h2 id="heading-8" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>8.</span>
                  Refund Processing &amp; Timelines
                </h2>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Refunds will be initiated only after the applicable refund has been approved and received from the respective service provider, wherever supplier approval is required.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Processing timelines may vary depending on the airline, hotel, DMC, payment gateway, bank or other service provider.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Refunds will generally be made through the original payment method wherever possible.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Applicable non-refundable supplier charges, disclosed administrative fees and non-recoverable transaction charges may be deducted where permitted.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Foreign currency refunds may be subject to exchange rate fluctuations and bank charges.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Travellers will be informed of the applicable refund amount and processing status.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Sobhavi Travels will make reasonable efforts to coordinate and process eligible refunds as promptly as possible.</span>
                  </li>
                </ul>
              </section>

              {/* 9. How to Request a Cancellation or Refund */}
              <section id="section-9" className={styles.sectionBlock} aria-labelledby="heading-9">
                <h2 id="heading-9" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>9.</span>
                  How to Request a Cancellation or Refund
                </h2>
                <p className={styles.text}>
                  To request a cancellation, amendment or refund, please contact Sobhavi Travels through email or WhatsApp.
                </p>
                <p className={styles.text} style={{ fontWeight: 600 }}>
                  Please include the following details:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Traveller&apos;s full name.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Booking reference or confirmation number.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Destination and travel dates.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Details of the service or package booked.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Reason for cancellation or amendment.</span>
                  </li>
                </ul>
                <div style={{ margin: '1.25rem 0' }}>
                  <p className={styles.text}>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:hello@sobhavitravel.com" className={styles.contactLink}>
                      hello@sobhavitravel.com
                    </a>
                  </p>
                  <p className={styles.text}>
                    <strong>WhatsApp:</strong>{' '}
                    <a href="https://wa.me/917406994752" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                      +91 7406994752
                    </a>
                  </p>
                </div>
                <p className={styles.text}>
                  All cancellation requests will be acknowledged and processed in accordance with the applicable booking conditions.
                </p>
              </section>

              {/* 10. Policy Updates */}
              <section id="section-10" className={styles.sectionBlock} aria-labelledby="heading-10">
                <h2 id="heading-10" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>10.</span>
                  Policy Updates
                </h2>
                <p className={styles.text}>
                  Sobhavi Travels reserves the right to update or modify this Cancellation &amp; Refund Policy from time to time to reflect changes in our business operations, supplier policies or applicable laws.
                </p>
                <p className={styles.text}>
                  Any updates will be published on this page with the revised effective date.
                </p>
                <p className={styles.text}>
                  The cancellation conditions specifically communicated and agreed upon at the time of booking will apply to that booking, subject to applicable law.
                </p>

                {/* Questions About This Policy? */}
                <div className={styles.contactCard}>
                  <h3 className={styles.contactBrandName}>Questions About This Policy?</h3>
                  <p className={styles.text}>
                    For any questions regarding cancellations, amendments or refunds, please contact:
                  </p>

                  <div className={styles.contactDetailsGrid}>
                    <div className={styles.contactRow}>
                      <span className={styles.contactLabel}>Company:</span>
                      <span className={styles.contactValue}>Sobhavi Travels</span>
                    </div>

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
                      <span>Call Concierge</span>
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
