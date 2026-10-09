"use client";

import { useState, useEffect } from 'react';
import styles from './SinglePageForm.module.css';

interface SinglePageFormProps {
  initialDestination?: string;
  initialService?: string;
  initialDuration?: string;
}

const SERVICES = [
  "Visa Services",
  "International Holiday",
  "Domestic Holiday",
  "Flight Booking",
  "Hotel Booking",
  "Honeymoon Package",
  "Group Tour",
  "Corporate Travel",
  "Cruise",
  "Customized Tour",
  "Other"
];

const HEAR_ABOUT_US_OPTIONS = [
  "Google Search",
  "Social Media (Instagram / Facebook)",
  "Referred by Friend or Family",
  "YouTube / Online Video",
  "Word of mouth / Existing Customer",
  "Other"
];

const TARGET_WHATSAPP = "917406994752";
const ALT_WHATSAPP = "919180462154";
const DISPLAY_PHONE = "+91 74069 94752";
const DISPLAY_ALT_PHONE = "+91 9180462154";
const DISPLAY_EMAIL = "hello@sobhavitravel.com";

export default function SinglePageForm({ initialDestination = "", initialService = "", initialDuration = "" }: SinglePageFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService || '',
    destination: initialDestination || '',
    duration: initialDuration || '',
    travelDates: '',
    travellers: '',
    budget: '',
    hearAboutUs: '',
    referrerName: '',
    referrerPhone: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastWaUrl, setLastWaUrl] = useState<string>('');
  const [showExtendedFields, setShowExtendedFields] = useState<boolean>(false);

  // Sync form visibility settings from siteConfig (Admin controllable)
  useEffect(() => {
    const applyConfig = () => {
      const local = localStorage.getItem('sobhavi_site_config');
      if (local) {
        try {
          const parsed = JSON.parse(local);
          if (parsed.formSettings?.showExtendedFields !== undefined) {
            setShowExtendedFields(Boolean(parsed.formSettings.showExtendedFields));
          }
        } catch {}
      }
    };

    applyConfig();

    fetch('/api/site-config', { cache: 'no-store' })
      .then(r => r.json())
      .then(d => {
        if (d.success && d.config?.formSettings?.showExtendedFields !== undefined) {
          setShowExtendedFields(Boolean(d.config.formSettings.showExtendedFields));
        }
      })
      .catch(() => {});

    window.addEventListener('sobhavi_site_config_updated', applyConfig);
    window.addEventListener('storage', applyConfig);
    return () => {
      window.removeEventListener('sobhavi_site_config_updated', applyConfig);
      window.removeEventListener('storage', applyConfig);
    };
  }, []);

  useEffect(() => {
    if (initialDestination) {
      setFormData(prev => ({ ...prev, destination: initialDestination }));
    }
  }, [initialDestination]);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialDuration) {
      setFormData(prev => ({ ...prev, duration: initialDuration }));
    }
  }, [initialDuration]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please provide your name and mobile / WhatsApp number.");
      return;
    }

    if (!formData.email.trim()) {
      alert("Please provide your email address. Email ID is mandatory.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      alert("Please enter a valid email address (e.g. name@example.com).");
      return;
    }

    if (!formData.service) {
      alert("Please select a service you are interested in.");
      return;
    }

    // Build concise, professional WhatsApp message
    const messageLines = [
      "*New Travel Enquiry - SOBHAVI TRAVELS*",
      "",
      `*Your name:* ${formData.name.trim()}`,
      `*Mobile / WhatsApp:* ${formData.phone.trim()}`,
      `*Email:* ${formData.email.trim()}`,
      `*Interested in:* ${formData.service}`,
      formData.destination.trim() ? `*Destination(s):* ${formData.destination.trim()}` : null,
      formData.duration.trim() ? `*Trip Duration / Package:* ${formData.duration.trim()}` : null,
      formData.travelDates.trim() ? `*Approx. travel dates:* ${formData.travelDates.trim()}` : null,
      formData.travellers.trim() ? `*Number of travellers:* ${formData.travellers.trim()}` : null,
      formData.budget.trim() ? `*Approximate budget (per person):* ${formData.budget.trim()}` : null,
      formData.hearAboutUs ? `*Found us via:* ${formData.hearAboutUs}` : null,
      (formData.hearAboutUs === "Referred by Friend or Family" && (formData.referrerName || formData.referrerPhone))
        ? `*Referred by:* ${formData.referrerName.trim()} ${formData.referrerPhone ? `(${formData.referrerPhone.trim()})` : ''}`
        : null,
      formData.notes.trim() ? `*Notes / Special Requests:* ${formData.notes.trim()}` : null
    ].filter(Boolean) as string[];

    const waText = messageLines.join("\n");
    const waUrl = `https://wa.me/${TARGET_WHATSAPP}?text=${encodeURIComponent(waText)}`;
    setLastWaUrl(waUrl);

    // Payload for Google Sheet & Database Sync
    const payload = {
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      whatsapp: formData.phone.trim(),
      email: formData.email.trim(),
      service: formData.service,
      destination: formData.destination.trim() || 'Not specified',
      duration: formData.duration.trim() || 'Not specified',
      travelDates: formData.travelDates.trim() || 'Flexible',
      travellers: formData.travellers.trim() || 'Not specified',
      budget: formData.budget.trim() || 'Not specified',
      referralSource: formData.hearAboutUs || 'Not specified',
      referrerName: formData.referrerName.trim() || '',
      referrerPhone: formData.referrerPhone.trim() || '',
      notes: formData.notes.trim() || 'None'
    };

    // 1. INSTANT WHATSAPP OPEN (<50ms): Direct in synchronous click thread to prevent browser popup blockers!
    try {
      window.open(waUrl, '_blank');
    } catch (popupErr) {
      console.warn("Direct window open blocked:", popupErr);
    }
    setSubmitted(true);

    // 2. INSTANT PARALLEL BACKEND SYNC: Keepalive ensures Google Sheets & DB sync complete reliably in <1s
    try {
      fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true
      }).catch(err => {
        console.error("Enquiry background sync error:", err);
      });
    } catch (err) {
      console.error("Enquiry dispatch error:", err);
    }
  };

  return (
    <div className={styles.enquirySectionWrapper}>
      <div className={styles.enquiryGrid}>
        
        {/* LEFT COLUMN: FORM CARD */}
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Send us an enquiry</h2>

          {submitted ? (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>✓</div>
              <h3 className={styles.successTitle}>Enquiry Sent!</h3>
              <p className={styles.successDesc}>
                Your details have been registered and opened directly in WhatsApp. If WhatsApp did not open automatically, click below:
              </p>
              {lastWaUrl ? (
                <a 
                  href={lastWaUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.submitBtn}
                  style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                >
                  💬 Continue in WhatsApp
                </a>
              ) : (
                <button 
                  type="button" 
                  onClick={handleSubmit} 
                  className={styles.submitBtn}
                  style={{ marginTop: '1.25rem' }}
                >
                  Send Enquiry
                </button>
              )}
              <button 
                type="button" 
                onClick={() => setSubmitted(false)} 
                className={styles.resetBtn}
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              
              {/* Your name* */}
              <div className={styles.formGroup}>
                <label className={styles.label}>Your name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Sharma"
                  required
                  className={styles.input}
                />
              </div>

              {/* Mobile / WhatsApp* */}
              <div className={styles.formGroup}>
                <label className={styles.label}>Mobile / WhatsApp*</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98765 43210"
                  required
                  className={styles.input}
                />
              </div>

              {/* Email ID* */}
              <div className={styles.formGroup}>
                <label className={styles.label}>Email ID*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. rahul.sharma@gmail.com"
                  required
                  className={styles.input}
                />
              </div>

              {/* Interested in* */}
              <div className={styles.formGroup}>
                <label className={styles.label}>Interested in*</label>
                <div className={styles.selectWrapper}>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className={styles.select}
                  >
                    <option value="" disabled>Select a service</option>
                    {SERVICES.map(svc => (
                      <option key={svc} value={svc}>{svc}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Destination(s) */}
              <div className={styles.formGroup}>
                <label className={styles.label}>Destination(s)</label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="e.g. Dubai, Rajasthan, or Bali"
                  className={styles.input}
                />
              </div>

              {/* Extended Form Fields (Toggled via Admin Panel, Hidden by default for fast conversion) */}
              {showExtendedFields && (
                <>
                  {/* Trip Duration / Package */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Trip Duration / Package</label>
                    <input
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      placeholder="e.g. 2 Nights / 3 Days, 3N/4D, 1 Week"
                      className={styles.input}
                    />
                  </div>

                  {/* Approx. travel dates */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Approx. travel dates</label>
                    <input
                      type="text"
                      name="travelDates"
                      value={formData.travelDates}
                      onChange={handleChange}
                      placeholder="e.g. 15-22 December 2026"
                      className={styles.input}
                    />
                  </div>

                  {/* Number of travellers */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Number of travellers</label>
                    <input
                      type="text"
                      name="travellers"
                      value={formData.travellers}
                      onChange={handleChange}
                      placeholder="e.g. 2 adults + 1 child"
                      className={styles.input}
                    />
                  </div>

                  {/* Approximate budget (per person) */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Approximate budget (per person)</label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g. ₹20,000–₹25,000"
                      className={styles.input}
                    />
                  </div>

                  {/* How did you hear about us? */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>How did you hear about us?</label>
                    <div className={styles.selectWrapper}>
                      <select
                        name="hearAboutUs"
                        value={formData.hearAboutUs}
                        onChange={handleChange}
                        className={styles.select}
                      >
                        <option value="">Select how you found us (Optional)</option>
                        {HEAR_ABOUT_US_OPTIONS.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Optional Referrer Fields (shown when friend/family selected) */}
                  {formData.hearAboutUs === "Referred by Friend or Family" && (
                    <div className={styles.referrerBox}>
                      <div className={styles.referrerHeader}>
                        <span className={styles.referrerTitle}>🤝 Referrer Details</span>
                        <span className={styles.optionalTag}>Optional (Not Mandatory)</span>
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>Referrer&apos;s Name</label>
                        <input
                          type="text"
                          name="referrerName"
                          value={formData.referrerName}
                          onChange={handleChange}
                          placeholder="e.g. Ramesh Sharma"
                          className={styles.input}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>Referrer&apos;s Mobile / Phone</label>
                        <input
                          type="tel"
                          name="referrerPhone"
                          value={formData.referrerPhone}
                          onChange={handleChange}
                          placeholder="e.g. +91 98765 43210"
                          className={styles.input}
                        />
                      </div>
                    </div>
                  )}

                  {/* Anything else we should know? */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Anything else we should know?</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Dietary preferences, mobility needs, honeymoon-specific requests, prior visa rejections, etc."
                      rows={4}
                      className={styles.textarea}
                    />
                  </div>
                </>
              )}

              {/* Submit Button */}
              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSubmitting}
                style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
              >
                {isSubmitting ? "Submitting Enquiry..." : "Send Enquiry"}
              </button>
            </form>
          )}
        </div>

        {/* RIGHT COLUMN: OTHER WAYS TO REACH US */}
        <div className={styles.infoColumn}>
          <h2 className={styles.infoHeading} style={{ whiteSpace: 'nowrap' }}>Other ways to reach us</h2>

          {/* Card 1: WhatsApp (fastest) */}
          <div className={styles.contactCard}>
            <div className={styles.cardIconBox} style={{ background: 'transparent', border: 'none' }}>
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none" style={{ display: 'block' }}>
                <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.68.75 5.19 2.05 7.33L2.27 30.13l7.03-1.74A13.92 13.92 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#25D366"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M22.58 19.34c-.36-.18-2.12-1.05-2.45-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.89-1.78-1.07-.95-1.79-2.13-2-2.49-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.81-.61l-.69-.01c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3 0 1.77 1.29 3.48 1.47 3.72.18.24 2.54 3.88 6.15 5.44.86.37 1.53.59 2.05.76.86.27 1.65.23 2.27.14.69-.1 2.12-.87 2.42-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42z" fill="#FFFFFF"/>
              </svg>
            </div>
            <div className={styles.cardDetails}>
              <div className={styles.cardTitle}>WhatsApp (fastest)</div>
              <div className={styles.cardText}>
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.45rem', fontSize: '0.94rem', fontWeight: 600 }}>
                  <a 
                    href={`https://wa.me/${TARGET_WHATSAPP}?text=Hello%20Sobhavi%20Travels,%20I%20would%20like%20a%20travel%20quote.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.amberLink}
                  >
                    {DISPLAY_PHONE}
                  </a>
                  <span style={{ color: '#cbd5e1', fontWeight: 400 }}>·</span>
                  <a 
                    href={`https://wa.me/${ALT_WHATSAPP}?text=Hello%20Sobhavi%20Travels,%20I%20would%20like%20a%20travel%20quote.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.amberLink}
                  >
                    {DISPLAY_ALT_PHONE}
                  </a>
                </div>
                <div style={{ marginTop: '0.28rem', fontSize: '0.82rem', color: '#78716c', lineHeight: 1.4 }}>
                  WhatsApp us for a travel quote · Also available on both numbers
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className={styles.contactCard}>
            <div className={styles.cardIconBox}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#334155">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div className={styles.cardDetails}>
              <div className={styles.cardTitle}>Email</div>
              <div className={styles.cardText}>
                <a href={`mailto:${DISPLAY_EMAIL}`} className={styles.amberLink}>
                  {DISPLAY_EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Card 4: Bengaluru Office */}
          <div className={styles.contactCard}>
            <div className={styles.cardIconBox}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#334155">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className={styles.cardDetails}>
              <div className={styles.cardTitle}>Bengaluru Office</div>
              <div className={styles.addressBlock}>
                <div><strong>SOBHAVI TRAVELS</strong></div>
                <div>Ground Floor, No. 19, 2nd Cross, NR Layout,</div>
                <div>Kalyanagar, Babusapalya,</div>
                <div>Bengaluru 560043, Karnataka, India</div>
              </div>
            </div>
          </div>

          {/* Card 5: Office hours */}
          <div className={styles.contactCard}>
            <div className={styles.cardIconBox}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#334155">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
            </div>
            <div className={styles.cardDetails}>
              <div className={styles.cardTitle}>Office hours</div>
              <div className={styles.addressBlock}>
                <div>Monday–Saturday: 12:00 PM – 9:00 PM (IST)</div>
                <div>Sunday: Closed | WhatsApp Concierge Available</div>
              </div>
            </div>
          </div>

          {/* Card 6: Social */}
          <div className={styles.contactCard}>
            <div className={styles.cardIconBox}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#334155">
                <circle cx="12" cy="12" r="10" stroke="#334155" strokeWidth="1.5" fill="none"/>
                <line x1="2" y1="12" x2="22" y2="12" stroke="#334155" strokeWidth="1.5"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#334155" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <div className={styles.cardDetails}>
              <div className={styles.cardTitle}>Social</div>
              <div className={styles.socialLinks}>
                <a href="https://www.instagram.com/sobhavitravels?stkn=d3Z2Y3RtdTRqOTFj&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a>
                <span className={styles.dotSeparator}>·</span>
                <a href="https://www.facebook.com/p/Sobhavi-Travels-61594440384684/" target="_blank" rel="noopener noreferrer">Facebook</a>
                <span className={styles.dotSeparator}>·</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
