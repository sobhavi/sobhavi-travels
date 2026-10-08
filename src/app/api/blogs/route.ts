import { NextResponse } from 'next/server';
import { getAllBlogs, saveBlog, deleteBlog, syncCloudBlogs } from '@/lib/blogs';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await syncCloudBlogs();
    const blogs = getAllBlogs();
    return NextResponse.json({ success: true, blogs });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, excerpt, coverImage, inArticleImage, inArticleCaption, category, author, authorRole, readTime, intro, bodyParagraphs, quote, quoteAuthor } = body;

    if (!title || !title.trim() || !excerpt || !excerpt.trim()) {
      return NextResponse.json({ success: false, error: 'Title and excerpt are required.' }, { status: 400 });
    }

    const defaultCover = 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=72&w=720&auto=format&fit=crop';
    const finalCover = (coverImage && typeof coverImage === 'string' && coverImage.trim()) ? coverImage.trim() : defaultCover;

    const rawBody = bodyParagraphs || body.content || body.body || '';
    const paragraphs = Array.isArray(rawBody) 
      ? rawBody 
      : (typeof rawBody === 'string' ? rawBody.split('\n\n').map((p: string) => p.trim()).filter(Boolean) : []);

    const created = await saveBlog({
      title: title.trim(),
      slug: body.slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
      excerpt: excerpt.trim(),
      coverImage: finalCover,
      inArticleImage: inArticleImage || undefined,
      inArticleCaption: inArticleCaption || undefined,
      category: category || 'Bespoke Travel',
      author: author || 'Sobhavi Travel Specialist',
      authorRole: authorRole || 'Senior Editorial Curator',
      readTime: readTime || '5 min read',
      article: {
        intro: intro || excerpt,
        body: paragraphs.length > 0 ? paragraphs : [excerpt],
        quote: quote || 'The journey not the arrival matters.',
        quoteAuthor: quoteAuthor || author || 'Sobhavi Travel Specialist'
      }
    });

    return NextResponse.json({ success: true, blog: created });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json({ success: false, error: 'Failed to save blog post' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ success: false, error: 'Blog ID is required' }, { status: 400 });
    }
    const success = await deleteBlog(id);
    return NextResponse.json({ success });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete blog post' }, { status: 500 });
  }
}
