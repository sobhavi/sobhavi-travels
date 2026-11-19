import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sobhavi Travels',
  description:
    'Read the Privacy Policy explaining what personal information Sobhavi Travels collects, how we use it, when we share it and the choices available to you.',
  alternates: {
    canonical: 'https://www.sobhavitravel.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Sobhavi Travels',
    description:
      'Read the Privacy Policy explaining what personal information Sobhavi Travels collects, how we use it, when we share it and the choices available to you.',
    url: 'https://www.sobhavitravel.com/privacy',
    siteName: 'Sobhavi Travels',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Sobhavi Travels',
    description:
      'Read the Privacy Policy explaining what personal information Sobhavi Travels collects, how we use it, when we share it and the choices available to you.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const TOC_ITEMS = [
  { id: 'section-1', num: '1', title: 'Information We Collect' },
  { id: 'section-2', num: '2', title: 'How We Use Your Information' },
  { id: 'section-3', num: '3', title: 'How We Share Your Information' },
  { id: 'section-4', num: '4', title: 'Cookies & Website Tracking' },
  { id: 'section-5', num: '5', title: 'Data Sharing & International Transfers' },
  { id: 'section-6', num: '6', title: 'Data Retention & Security' },
  { id: 'section-7', num: '7', title: 'Your Privacy Rights & Choices' },
  { id: 'section-8', num: '8', title: "Children's Privacy" },
  { id: 'section-9', num: '9', title: 'Changes to This Privacy Policy' },
  { id: 'section-10', num: '10', title: 'Grievance Officer & Contact Information' },
];

export default function PrivacyPolicyPage() {
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                TRANSPARENCY &amp; TRUST
              </span>
              <h1 className={styles.heroTitle}>Privacy Policy</h1>
              <p className={styles.heroDesc}>
                Your privacy matters to us. This Privacy Policy explains what personal information Sobhavi Travels collects, how we use it, when we share it and the choices available to you when you interact with our website or use our travel services.
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
                  Your privacy matters to us. This Privacy Policy explains what personal information Sobhavi Travels collects, how we use it, when we share it and the choices available to you when you interact with our website or use our travel services.
                </p>
                <span className={styles.introMeta}>Last updated: 19 November 2026</span>
              </div>

              {/* 1. Information We Collect */}
              <section id="section-1" className={styles.sectionBlock} aria-labelledby="heading-1">
                <h2 id="heading-1" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>1.</span>
                  Information We Collect
                </h2>
                <p className={styles.text}>
                  When you visit our website, enquire about a holiday package or make a booking with Sobhavi Travels, we may collect the following information:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span><strong>Personal Information:</strong> Full name, email address, phone number, WhatsApp number, age and date of birth.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span><strong>Travel Information:</strong> Destination preferences, travel dates, number of travellers, accommodation preferences, meal preferences and special travel requirements.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span><strong>Booking Information:</strong> Flight details, hotel reservations, train and bus bookings, payment confirmations and booking references.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span><strong>Travel Documents:</strong> Passport details, visa-related documents, identification details and other information required to facilitate travel arrangements.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span><strong>Communication Information:</strong> Messages, enquiries, feedback and other information you voluntarily share with us through our website, email, phone or WhatsApp.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span><strong>Technical Information:</strong> IP address, browser type, device information, website usage data and cookies, where applicable.</span>
                  </li>
                </ul>
                <p className={styles.text}>
                  We collect only the information reasonably necessary to provide our services, process bookings and communicate with you.
                </p>
              </section>

              {/* 2. How We Use Your Information */}
              <section id="section-2" className={styles.sectionBlock} aria-labelledby="heading-2">
                <h2 id="heading-2" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>2.</span>
                  How We Use Your Information
                </h2>
                <p className={styles.text}>
                  We use your personal information for the following purposes:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>To respond to travel enquiries and provide customised holiday quotations.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>To process and confirm flight, train, bus, hotel and holiday package bookings.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>To coordinate with airlines, hotels, resorts, DMCs, transport operators and other travel service providers.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>To assist with visa applications, travel insurance and related travel documentation.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>To communicate booking confirmations, itinerary updates, payment reminders and important travel information.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>To understand your travel preferences and improve our services.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>To process payments, refunds and other booking-related transactions.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>To comply with applicable legal, regulatory, taxation and accounting requirements.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>To address customer complaints, disputes and service-related concerns.</span>
                  </li>
                </ul>
                <p className={styles.text}>
                  We do not sell your personal information to third parties.
                </p>
                <p className={styles.text}>
                  We may send promotional offers, travel updates and marketing communications where permitted by applicable law and based on your preferences. You may opt out of such communications at any time.
                </p>
              </section>

              {/* 3. How We Share Your Information */}
              <section id="section-3" className={styles.sectionBlock} aria-labelledby="heading-3">
                <h2 id="heading-3" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>3.</span>
                  How We Share Your Information
                </h2>
                <p className={styles.text}>
                  To provide our travel services, we may share relevant personal information with trusted third parties, including:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span><strong>Airlines and Transport Providers:</strong> To facilitate flight, train, bus and other transportation bookings.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span><strong>Hotels and Resorts:</strong> To confirm accommodation reservations and special requests.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span><strong>Destination Management Companies (DMCs):</strong> To coordinate local arrangements, sightseeing, transfers and holiday experiences.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span><strong>Tour Operators and Activity Providers:</strong> To arrange excursions, activities and other travel experiences.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span><strong>Visa and Travel Insurance Providers:</strong> To facilitate visa assistance and insurance-related services.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span><strong>Payment Service Providers:</strong> To process payments, refunds and booking transactions through applicable payment gateways.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span><strong>Communication Platforms:</strong> Such as WhatsApp Business, email and other communication services used to respond to enquiries and share booking information.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span><strong>Government and Regulatory Authorities:</strong> Where disclosure is required under applicable laws, regulations, legal processes or official requests.</span>
                  </li>
                </ul>
                <p className={styles.text}>
                  Bank transfers and UPI transactions may also be processed independently by the respective banks and payment service providers.
                </p>
                <p className={styles.text}>
                  We share only the information reasonably necessary for the relevant service or legal requirement.
                </p>
                <p className={styles.text}>
                  We do not authorise our travel partners to use your personal information for their own unrelated marketing purposes.
                </p>
              </section>

              {/* 4. Cookies & Website Tracking */}
              <section id="section-4" className={styles.sectionBlock} aria-labelledby="heading-4">
                <h2 id="heading-4" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>4.</span>
                  Cookies &amp; Website Tracking
                </h2>
                <p className={styles.text}>
                  Our website may use cookies and similar technologies to:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Improve website functionality and loading experience.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Understand website traffic and visitor behaviour.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Remember certain preferences and settings.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Improve website performance and user experience.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Measure the effectiveness of our marketing campaigns, where applicable.</span>
                  </li>
                </ul>
                <p className={styles.text}>
                  We may use third-party analytics and advertising tools to understand how visitors interact with our website.
                </p>
                <p className={styles.text}>
                  You can manage or disable cookies through your browser settings. However, disabling certain cookies may affect some website functionalities.
                </p>
                <p className={styles.text}>
                  Where required, we will seek your consent for the use of cookies and similar tracking technologies.
                </p>
              </section>

              {/* 5. Data Sharing & International Transfers */}
              <section id="section-5" className={styles.sectionBlock} aria-labelledby="heading-5">
                <h2 id="heading-5" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>5.</span>
                  Data Sharing &amp; International Transfers
                </h2>
                <p className={styles.text}>
                  As Sobhavi Travels facilitates domestic and international travel, certain personal information may need to be shared with service providers located outside India.
                </p>
                <p className={styles.text}>
                  For example, passport details, traveller names and booking information may be shared with international hotels, airlines, DMCs, visa service providers and other overseas travel partners to fulfil your booking.
                </p>
                <p className={styles.text}>
                  We take reasonable steps to ensure that personal information is shared only for legitimate travel-related purposes and handled in accordance with applicable data protection laws.
                </p>
              </section>

              {/* 6. Data Retention & Security */}
              <section id="section-6" className={styles.sectionBlock} aria-labelledby="heading-6">
                <h2 id="heading-6" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>6.</span>
                  Data Retention &amp; Security
                </h2>
                <p className={styles.text}>
                  We retain personal information only for as long as necessary to fulfil the purposes for which it was collected, including:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Processing enquiries and travel bookings.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Providing post-booking assistance and customer support.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Maintaining financial, taxation and accounting records.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Meeting applicable legal and regulatory requirements.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Resolving disputes and addressing complaints.</span>
                  </li>
                </ul>
                <p className={styles.text}>
                  When personal information is no longer required, we will take reasonable steps to securely delete or anonymise it, subject to applicable legal retention requirements.
                </p>
                <p className={styles.text}>
                  We take reasonable technical and organisational measures to protect personal information against unauthorised access, misuse, disclosure, alteration or loss.
                </p>
                <p className={styles.text}>
                  However, no method of electronic storage or internet transmission can be guaranteed to be completely secure.
                </p>
              </section>

              {/* 7. Your Privacy Rights & Choices */}
              <section id="section-7" className={styles.sectionBlock} aria-labelledby="heading-7">
                <h2 id="heading-7" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>7.</span>
                  Your Privacy Rights &amp; Choices
                </h2>
                <p className={styles.text}>
                  Subject to applicable laws, you may have the right to:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Request access to your personal information held by us.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Request correction or updating of inaccurate or incomplete information.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Request deletion of personal information where legally permissible.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Withdraw consent previously provided for processing your personal information.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Opt out of promotional and marketing communications.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>Raise concerns or submit grievances regarding the handling of your personal information.</span>
                  </li>
                </ul>
                <p className={styles.text}>
                  To exercise these rights, please contact us using the email address provided below.
                </p>
                <p className={styles.text}>
                  We aim to respond to privacy-related requests and grievances within 30 days, subject to applicable legal requirements and the nature of the request.
                </p>
                <p className={styles.text}>
                  Please note that certain information may need to be retained to fulfil legal, taxation, accounting or contractual obligations.
                </p>
              </section>

              {/* 8. Children's Privacy */}
              <section id="section-8" className={styles.sectionBlock} aria-labelledby="heading-8">
                <h2 id="heading-8" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>8.</span>
                  Children&apos;s Privacy
                </h2>
                <p className={styles.text}>
                  Our website and services are not independently directed towards children for the collection of personal information.
                </p>
                <p className={styles.text}>
                  Where travel bookings involve minors, personal information may be collected from or provided by their parent or legal guardian when necessary to arrange travel, accommodation, tickets and related services.
                </p>
                <p className={styles.text}>
                  Parents or legal guardians may contact us regarding the personal information of minors associated with their bookings.
                </p>
                <p className={styles.text}>
                  We handle such information in accordance with applicable data protection laws.
                </p>
              </section>

              {/* 9. Changes to This Privacy Policy */}
              <section id="section-9" className={styles.sectionBlock} aria-labelledby="heading-9">
                <h2 id="heading-9" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>9.</span>
                  Changes to This Privacy Policy
                </h2>
                <p className={styles.text}>
                  Sobhavi Travels reserves the right to update or modify this Privacy Policy from time to time to reflect changes in our business operations, website functionality, technology or applicable laws.
                </p>
                <p className={styles.text}>
                  Any changes will be published on this page along with the revised &ldquo;Last Updated&rdquo; date.
                </p>
                <p className={styles.text}>
                  We encourage visitors and customers to review this page periodically.
                </p>
              </section>

              {/* 10. Grievance Officer & Contact Information */}
              <section id="section-10" className={styles.sectionBlock} aria-labelledby="heading-10">
                <h2 id="heading-10" className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>10.</span>
                  Grievance Officer &amp; Contact Information
                </h2>
                <p className={styles.text}>
                  For questions, concerns, privacy-related requests or grievances regarding the collection and use of your personal information, please contact:
                </p>

                <div className={styles.contactCard}>
                  <h3 className={styles.contactBrandName}>Sobhavi Travels</h3>

                  <div className={styles.contactDetailsGrid}>
                    <div className={styles.contactRow}>
                      <span className={styles.contactLabel}>Grievance Contact:</span>
                      <span className={styles.contactValue}>
                        Proprietor / Designated Grievance Contact, Sobhavi Travels
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

                  <p className={styles.text} style={{ fontStyle: 'italic', color: '#57534e', marginTop: '1rem' }}>
                    We aim to acknowledge and address privacy-related grievances within 30 days, subject to applicable laws.
                  </p>

                  <div className={styles.contactActionPills}>
                    <a
                      href="mailto:hello@sobhavitravel.com"
                      className={styles.actionPill}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                      <span>Email Grievance Officer</span>
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
                  </div>

                  {/* Questions About This Privacy Policy? */}
                  <div className={styles.subCard}>
                    <h4 className={styles.subCardTitle}>Questions About This Privacy Policy?</h4>
                    <p className={styles.text}>
                      If you have any questions about how we collect, use or protect your personal information, please contact us:
                    </p>
                    <div className={styles.contactDetailsGrid}>
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
                        <span className={styles.contactLabel}>WhatsApp:</span>
                        <span className={styles.contactValue}>
                          <a
                            href="https://wa.me/917406994752"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.contactLink}
                          >
                            +91 7406994752
                          </a>
                        </span>
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
                    </div>
                  </div>

                  <div className={styles.brandSignature}>
                    <span className={styles.signatureBrand}>Sobhavi Travels</span>
                    <span className={styles.signatureTagline}>Your Journey. Curated Your Way.</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
