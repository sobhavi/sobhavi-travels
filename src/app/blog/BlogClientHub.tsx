"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blogs';
import styles from './page.module.css';

interface BlogClientHubProps {
  initialBlogs: BlogPost[];
}

export default function BlogClientHub({ initialBlogs }: BlogClientHubProps) {
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);

  useEffect(() => {
    // 1. Merge any custom blogs from localStorage immediately
    const loadLocal = () => {
      try {
        const localCustom = JSON.parse(localStorage.getItem('sobhavi_custom_blogs') || '[]');
        if (Array.isArray(localCustom) && localCustom.length > 0) {
          const seen = new Set<string>();
          const combined: BlogPost[] = [];
          
          for (const raw of localCustom) {
            const p = { ...raw };
            if (p?.title?.toLowerCase()?.includes('haveli') || p?.slug?.includes('haveli')) {
              p.coverImage = '/blogs/rajasthan-haveli-palace.jpg';
            }
            if (p?.title?.toLowerCase()?.includes('rann') || p?.slug?.includes('rann')) {
              p.coverImage = '/blogs/white-rann-kutch.jpg';
            }
            if (p?.slug && !seen.has(p.slug.toLowerCase())) {
              seen.add(p.slug.toLowerCase());
              combined.push(p);
            }
          }
          for (const p of initialBlogs) {
            if (p?.slug && !seen.has(p.slug.toLowerCase())) {
              seen.add(p.slug.toLowerCase());
              combined.push(p);
            }
          }
          setBlogs(combined);
        } else {
          setBlogs(initialBlogs);
        }
      } catch (e) {
        console.error('Error reading local blogs:', e);
      }
    };
    loadLocal();

    // 2. Fetch fresh blogs from API
    fetch('/api/blogs')
      .then(r => r.json())
      .then(d => {
        if (d.success && Array.isArray(d.blogs) && d.blogs.length > 0) {
          const seenSlugs = new Set<string>();
          const sanitized = d.blogs.filter((b: BlogPost) => {
            const slugKey = (b.slug || '').toLowerCase();
            if (!slugKey || seenSlugs.has(slugKey)) return false;
            seenSlugs.add(slugKey);
            return true;
          });
          setBlogs(sanitized);
        }
      })
      .catch(console.error);

    const handleUpdate = () => loadLocal();
    window.addEventListener('sobhavi_blogs_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('sobhavi_blogs_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, [initialBlogs]);

  const featured = blogs[0];
  const remaining = blogs.slice(1);

  return (
    <>
      {/* Featured Story */}
      {featured && (
        <section className={styles.featuredSection}>
          <div className="container">
            <Link href={`/blog/${featured.slug}`} className={styles.featuredCard}>
              <div className={styles.featuredImageWrapper}>
                <img src={featured.coverImage} alt={featured.title} className={styles.featuredImage} />
                <span className={styles.categoryBadge}>{featured.category}</span>
              </div>
              <div className={styles.featuredContent}>
                <div className={styles.metaRow}>
                  <span className={styles.authorName}>{featured.author}</span>
                  <span className={styles.metaDivider}>•</span>
                  <span className={styles.date}>{featured.publishedAt}</span>
                  <span className={styles.metaDivider}>•</span>
                  <span className={styles.readTime}>{featured.readTime}</span>
                </div>
                <h2 className={styles.featuredTitle}>{featured.title}</h2>
                <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                <span className={styles.readStoryBtn}>Read Full Story &rarr;</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Stories Grid */}
      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Latest Stories &amp; Articles</h3>
            <p className={styles.sectionCount}>{blogs.length} Articles Published</p>
          </div>

          <div className={styles.grid}>
            {remaining.map(post => (
              <Link key={post.id || post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                <div className={styles.imageContainer}>
                  <img src={post.coverImage} alt={post.title} className={styles.cardImage} />
                  <span className={styles.cardCategory}>{post.category}</span>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <span>{post.publishedAt}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.authorBadge}>{post.author}</span>
                    <span className={styles.arrowLink}>Read &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
