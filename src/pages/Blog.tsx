import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAllBlogPosts } from '@/data/blogPosts';
import { Calendar, Clock } from 'lucide-react';

const Blog = () => {
  const posts = getAllBlogPosts();

  return (
    <>
      <Helmet>
        <title>Florence Travel Guide & Tips | My Home in Florence Blog</title>
        <meta
          name="description"
          content="Practical guides for visiting Florence: parking, neighborhoods, tourist tax, booking tips, and local insights from experienced Florence hosts."
        />
        <meta
          name="keywords"
          content="Florence travel guide, Florence tips, parking Florence, San Niccolò, Florence tourist tax, book direct Florence"
        />
        <link rel="canonical" href="https://www.myhomeinflorence.com/blog" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Florence Travel Guide & Tips | My Home in Florence Blog" />
        <meta
          property="og:description"
          content="Practical guides for visiting Florence from local hosts: parking, neighborhoods, tourist tax, and booking tips."
        />
        <meta property="og:url" content="https://www.myhomeinflorence.com/blog" />
        <meta property="og:image" content="https://www.myhomeinflorence.com/og-image.jpg" />

        {/* Schema.org Blog markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": "https://www.myhomeinflorence.com/blog#blog",
            "url": "https://www.myhomeinflorence.com/blog",
            "name": "My Home in Florence Blog",
            "description": "Travel guides and tips for visiting Florence, Italy",
            "publisher": {
              "@type": "Organization",
              "name": "Lorenzo & Lorenzo",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.myhomeinflorence.com/favicon.png"
              }
            },
            "blogPost": posts.map(post => ({
              "@type": "BlogPosting",
              "@id": `https://www.myhomeinflorence.com/blog/${post.slug}#article`,
              "url": `https://www.myhomeinflorence.com/blog/${post.slug}`,
              "headline": post.title,
              "description": post.description,
              "datePublished": post.publishedDate,
              "dateModified": post.lastModified,
              "author": {
                "@type": "Organization",
                "name": post.author
              }
            }))
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Florence Travel Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Practical tips and local insights for your Florence visit
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <Link to={`/blog/${post.slug}`} className="group">
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.publishedDate}>
                        {new Date(post.publishedDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>5 min read</span>
                    </div>
                  </div>
                  <div className="mt-4 text-primary font-medium group-hover:underline">
                    Read more →
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-muted rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Visit Florence?</h2>
            <p className="text-muted-foreground mb-6">
              Book your stay in authentic San Niccolò neighborhood
            </p>
            <Link
              to="/"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View Our Accommodations
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
