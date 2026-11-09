import type { MetadataRoute } from 'next';
import { LEISURE_DESTINATIONS } from '@/lib/destinationsData';
import { featuredDestinations, popularJourneys } from '@/lib/data';
import { travelCategories } from '@/lib/categories';
import { getAllBlogs } from '@/lib/blogs';
import { CITY_ROUTES } from '@/lib/rannUtsavRoutes';

const BASE_URL = 'https://www.sobhavitravel.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // 1. Core / Main Landing Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/trips/andaman-january-2027`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/trips/sri-lanka-february-2027`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/on-demand`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/domestic`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/international`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/destinations`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/rann-utsav`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/hotels`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/flights`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/visa`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/honeymoon`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/group-tours`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/travel-buddy`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/journeys`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/enquire`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // 2. All Destinations
  const destinationSlugs = new Set<string>();
  LEISURE_DESTINATIONS.forEach(d => {
    if (d?.slug) destinationSlugs.add(d.slug.toLowerCase().trim());
  });
  featuredDestinations.forEach(d => {
    if (d?.slug) destinationSlugs.add(d.slug.toLowerCase().trim());
  });

  const destinationRoutes: MetadataRoute.Sitemap = Array.from(destinationSlugs).map(slug => ({
    url: `${BASE_URL}/destinations/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 3. All Blog Articles
  const blogRoutes: MetadataRoute.Sitemap = getAllBlogs().map(b => ({
    url: `${BASE_URL}/blog/${b.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 4. Travel Categories
  const categoryRoutes: MetadataRoute.Sitemap = travelCategories.map(c => ({
    url: `${BASE_URL}/categories/${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.75,
  }));

  // 5. Popular Journeys
  const journeyRoutes: MetadataRoute.Sitemap = popularJourneys.map(j => ({
    url: `${BASE_URL}/journeys/${j.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.75,
  }));

  // 6. Rann Utsav City Departure Packages
  const rannCityRoutes: MetadataRoute.Sitemap = CITY_ROUTES.map(r => ({
    url: `${BASE_URL}/rann-utsav/${r.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [
    ...staticRoutes,
    ...destinationRoutes,
    ...blogRoutes,
    ...categoryRoutes,
    ...journeyRoutes,
    ...rannCityRoutes,
  ];
}

