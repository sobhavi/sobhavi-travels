'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { CityRoute } from '@/lib/rannUtsavRoutes';
import styles from './RannCityPackages.module.css';

interface RannCityPackagesProps {
  routes: CityRoute[];
}

export default function RannCityPackages({ routes }: RannCityPackagesProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'South India' | 'West India'>('All');
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const filteredRoutes = selectedCategory === 'All'
    ? routes
    : routes.filter(r => r.category === selectedCategory);

  const southCount = routes.filter(r => r.category === 'South India').length;
  const westCount = routes.filter(r => r.category === 'West India').length;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.section}>
      {/* Category Tabs */}
      <div className={styles.categoryFilterBar} role="tablist" aria-label="City Departure Categories">
        <button
          type="button"
          role="tab"
          aria-selected={selectedCategory === 'All'}
          className={`${styles.categoryTab} ${selectedCategory === 'All' ? styles.activeTab : ''}`}
          onClick={() => setSelectedCategory('All')}
        >
          All Departures <span className={styles.tabCount}>{routes.length}</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={selectedCategory === 'South India'}
          className={`${styles.categoryTab} ${selectedCategory === 'South India' ? styles.activeTab : ''}`}
          onClick={() => setSelectedCategory('South India')}
        >
          🌴 South India Hubs <span className={styles.tabCount}>{southCount}</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={selectedCategory === 'West India'}
          className={`${styles.categoryTab} ${selectedCategory === 'West India' ? styles.activeTab : ''}`}
          onClick={() => setSelectedCategory('West India')}
        >
          🏙️ West India Hubs <span className={styles.tabCount}>{westCount}</span>
        </button>
      </div>

      {/* Mobile Swipe Notice */}
      <div className={styles.swipeNotice}>
        <span>👉 <strong>Swipe horizontally</strong> to explore all {filteredRoutes.length} departure hubs</span>
        <span className={styles.swipeArrowHint}>&rarr;</span>
      </div>

      {/* Cards Slider / Grid */}
      <div className={styles.cardsGrid} ref={scrollContainerRef}>
        {filteredRoutes.map((route) => (
          <article key={route.slug} className={styles.cityCard}>
            {/* Distinct Popular City Image */}
            <div className={styles.cardImgWrapper}>
              <img
                src={route.image}
                alt={`${route.cityName} to Rann Utsav`}
                loading="lazy"
                className={styles.cardImg}
              />
              <div className={styles.cardImgOverlay} />
              <span className={styles.floatingCategoryBadge}>{route.category}</span>
              <span className={styles.floatingCodeBadge}>{route.cityCode}</span>
            </div>

            <div className={styles.cardBody}>
              <div>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cityName}>{route.cityName}</h3>
                  <span className={styles.stateLabel}>{route.state} Departure</span>
                </div>

                <div className={styles.routeMeta}>
                  <div className={styles.metaRow}>
                    <span className={styles.metaIcon}>✈️</span>
                    <span><strong>Flight:</strong> Via Ahmedabad / Bhuj Direct</span>
                  </div>
                  <div className={styles.metaRow}>
                    <span className={styles.metaIcon}>🚌</span>
                    <span><strong>Transfers:</strong> Bhuj Station/Airport to Dhordo</span>
                  </div>
                  <div className={styles.metaRow}>
                    <span className={styles.metaIcon}>⏱️</span>
                    <span><strong>Stay:</strong> 2N/3D or 3N/4D (Recommended)</span>
                  </div>
                </div>

                <ul className={styles.featuresList}>
                  <li>Luxury Tent City Dhordo stay</li>
                  <li>Full Moon &amp; Sunset White Desert</li>
                  <li>Kala Dungar &amp; Kutchi Artisan Hamlets</li>
                </ul>
              </div>

              <div className={styles.cardActionsStack}>
                <Link
                  href={`/enquire?destination=${encodeURIComponent('Rann Utsav (' + route.cityName + ')')}&service=Domestic+Holiday`}
                  className={styles.cardEnquireBtn}
                >
                  ✦ Enquire for {route.cityName.split(' ')[0]} &rarr;
                </Link>
                <a
                  href={`https://wa.me/917406994752?text=Hello%20Sobhavi%20Travels,%20I%20am%20interested%20in%20the%20Rann%20Utsav%20package%20from%20${encodeURIComponent(route.cityName)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardActionBtn}
                >
                  💬 WhatsApp Specialist
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
