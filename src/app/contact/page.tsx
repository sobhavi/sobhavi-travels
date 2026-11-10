import Navbar from '@/components/layout/Navbar';
import SinglePageForm from '@/components/ui/SinglePageForm';
import styles from './page.module.css';

// Force dynamic rendering so mobile browsers and CDN always serve fresh changes
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>GET IN TOUCH</span>
              <h1 className={styles.heroTitle}>Talk to a travel consultant.</h1>
              <p className={styles.heroDesc}>
                Share your destination, dates and travel preferences. Our private travel specialists will design a custom itinerary with 5-star stays, private transfers, and curated excursions.
              </p>
            </div>
          </div>
        </section>

        {/* UNIFIED ENQUIRY & CONTACT SECTION */}
        <section style={{ padding: '3.5rem 0 8rem', backgroundColor: 'var(--background, #faf7f2)' }}>
          <div className="container">
            <SinglePageForm />
          </div>
        </section>
      </main>
    </>
  );
}
