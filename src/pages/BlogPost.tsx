import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getBlogPost } from '@/data/blogPosts';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { t, i18n } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const articleUrl = `https://www.myhomeinflorence.com/blog/${post.slug}`;

  return (
    <>
      <Helmet>
        <title>{post.title} | My Home in Florence</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords.join(', ')} />
        <meta name="author" content={post.author} />
        <link rel="canonical" href={articleUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:image" content="https://www.myhomeinflorence.com/og-image.jpg" />
        <meta property="article:published_time" content={post.publishedDate} />
        <meta property="article:modified_time" content={post.lastModified} />
        <meta property="article:author" content={post.author} />
        {post.keywords.map(keyword => (
          <meta key={keyword} property="article:tag" content={keyword} />
        ))}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />

        {/* Schema.org Article markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": `${articleUrl}#article`,
            "url": articleUrl,
            "headline": post.title,
            "description": post.description,
            "image": "https://www.myhomeinflorence.com/og-image.jpg",
            "datePublished": post.publishedDate,
            "dateModified": post.lastModified,
            "author": {
              "@type": "Organization",
              "name": post.author,
              "url": "https://www.myhomeinflorence.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Lorenzo & Lorenzo",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.myhomeinflorence.com/favicon.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": articleUrl
            },
            "keywords": post.keywords.join(', '),
            "articleSection": "Travel Guide",
            "inLanguage": post.language
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background pt-20">
        <article className="container mx-auto px-4 py-16 max-w-3xl">
          {/* Back to Blog */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('blog.backToBlog')}
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {post.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-b py-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.publishedDate}>
                  {new Date(post.publishedDate).toLocaleDateString(i18n.language === 'zh' ? 'zh-CN' : i18n.language, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{t('blog.readTime', { minutes: 5 })}</span>
              </div>
              <div className="ml-auto">
                {t('blog.byAuthor', { author: post.author })}
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
                ),
                li: ({ children }) => (
                  <li className="text-muted-foreground">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-foreground">{children}</strong>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Article Footer / CTA */}
          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-bold mb-2">{t('blog.postCta.heading')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('blog.postCta.description')}
            </p>
            <Link
              to="/"
              className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {t('blog.postCta.button')}
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold mb-4">{t('blog.relatedHeading')}</h3>
            <Link
              to="/blog"
              className="text-primary hover:underline"
            >
              {t('blog.viewAll')}
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;
