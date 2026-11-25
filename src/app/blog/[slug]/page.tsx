import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import EnquireCtaBanner from '@/components/ui/EnquireCtaBanner';
import DubaiGuideArticle from '@/components/blog/DubaiGuideArticle';
import SoloFemaleTravelGuideArticle from '@/components/blog/SoloFemaleTravelGuideArticle';
import { getBlogBySlug, getAllBlogs, syncCloudBlogs } from '@/lib/blogs';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  await syncCloudBlogs();
  const post = getBlogBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Story Not Found | Sobhavi Travels",
    };
  }

  return {
    title: `${post.title} | Sobhavi Travels`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Sobhavi Travels`,
      description: post.excerpt,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Sobhavi Travels`,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  await syncCloudBlogs();
  const post = getBlogBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const allBlogs = getAllBlogs();
  const related = allBlogs.filter(b => b.id !== post.id).slice(0, 3);

  return (
    <>
      <Navbar />
      
      <main className={styles.main}>
        {/* Article Header */}
        <header className={styles.header}>
          <div className="container">
            <div className={styles.headerContent}>
              <Link href="/blog" className={styles.backLink}>
                ← Back to All Stories
              </Link>
              <span className={styles.categoryBadge}>{post.category}</span>
              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.excerpt}>{post.excerpt}</p>
              
              <div className={styles.authorBar}>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{post.author}</span>
                  <span className={styles.authorRole}>{post.authorRole}</span>
                </div>
                <div className={styles.metaDetails}>
                  <span>Published: {post.publishedAt}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Cover Image */}
        <section className={styles.heroImageSection}>
          <div className="container">
            <div className={styles.coverImageWrapper}>
              <img src={post.coverImage} alt={post.title} className={styles.coverImage} />
            </div>
          </div>
        </section>

        {/* Formatted Article Body */}
        <article className={styles.articleBodySection}>
          <div className="container">
            <div className={styles.contentLayout}>
              <div className={styles.storyContent}>
                {post.slug === 'dubai-travel-guide-for-indians' ? (
                  <DubaiGuideArticle />
                ) : post.slug === 'solo-female-travel-guide' ? (
                  <SoloFemaleTravelGuideArticle />
                ) : (
                  <>
                    {/* Intro with Dropcap */}
                    <p className={styles.introParagraph}>{post.article.intro}</p>

                    {/* Body Paragraphs */}
                    {post.article.body.slice(0, 2).map((para, i) => (
                      <p key={i} className={styles.bodyParagraph}>{para}</p>
                    ))}

                    {post.inArticleImage && (
                      <figure className={styles.inlinePhotoWrapper}>
                        <img src={post.inArticleImage} alt={post.title} className={styles.inlinePhoto} />
                        {post.inArticleCaption && (
                          <figcaption className={styles.inlineCaption}>{post.inArticleCaption}</figcaption>
                        )}
                      </figure>
                    )}

                    {post.article.body.slice(2).map((para, i) => (
                      <p key={i + 2} className={styles.bodyParagraph}>{para}</p>
                    ))}

                    {/* Pull Quote */}
                    {post.article.quote && (
                      <blockquote className={styles.blockquote}>
                        <p className={styles.quoteText}>"{post.article.quote}"</p>
                        <cite className={styles.quoteAuthor}>— {post.article.quoteAuthor}</cite>
                      </blockquote>
                    )}
                  </>
                )}

                {/* Author Signoff Card */}
                <div className={styles.authorSignoff}>
                  <div className={styles.signoffAvatar}>✦</div>
                  <div className={styles.signoffContent}>
                    <h4 className={styles.signoffName}>Curated by {post.author}</h4>
                    <p className={styles.signoffText}>
                      Specializing in bespoke private travel design, luxury expeditions, and authentic cultural experiences for Sobhavi Travels guests worldwide.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar: Direct Contact & Trip Link */}
              <aside className={styles.sidebar}>
                <div className={styles.sidebarBox}>
                  <span className={styles.sidebarBadge}>PLAN YOUR TRIP</span>
                  <h3 className={styles.sidebarTitle}>Experience This Story</h3>
                  <p className={styles.sidebarDesc}>
                    Every destination and experience in our journal can be woven into your private, tailor-made itinerary.
                  </p>
                  <a href="#enquiry-box" className={styles.planTripBtn}>
                    Inquire for Custom Dates
                  </a>
                  <a 
                    href={`https://wa.me/917406994752?text=${encodeURIComponent(`Hello! I read your journal article: "${post.title}" and would like to plan a similar journey.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.waSpecialistBtn}
                  >
                    WhatsApp Concierge Desk
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* Related Stories */}
        {related.length > 0 && (
          <section className={styles.relatedSection}>
            <div className="container">
              <h3 className={styles.relatedTitle}>More Stories from the Journal</h3>
              <div className={styles.relatedGrid}>
                {related.map(item => (
                  <Link key={item.id} href={`/blog/${item.slug}`} className={styles.relatedCard}>
                    <div className={styles.relatedImageWrapper}>
                      <img src={item.coverImage} alt={item.title} className={styles.relatedImage} />
                      <span className={styles.relatedCategory}>{item.category}</span>
                    </div>
                    <h4 className={styles.relatedCardTitle}>{item.title}</h4>
                    <span className={styles.relatedReadLink}>Read Story →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Enquire CTA Banner */}
        <EnquireCtaBanner title="Inspired by This Story? Let's Plan Your Journey" />
      </main>
    </>
  );
}
