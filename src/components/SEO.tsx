import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export const SEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = 'https://www.myhomeinflorence.com/og-image.jpg',
  canonicalUrl = 'https://www.myhomeinflorence.com'
}: SEOProps) => {
  const { t, i18n } = useTranslation();

  const seoTitle = title || t('seo.title');
  const seoDescription = description || t('seo.description');
  const seoKeywords = keywords || t('seo.keywords');
  const seoOgTitle = ogTitle || t('seo.ogTitle');
  const seoOgDescription = ogDescription || t('seo.ogDescription');

  const currentLang = i18n.language;
  const langSuffix = currentLang !== 'en' ? `?lang=${currentLang}` : '';
  const fullCanonicalUrl = `${canonicalUrl}${langSuffix}`;

  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={seoOgTitle} />
      <meta property="og:description" content={seoOgDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={currentLang === 'en' ? 'en_US' : currentLang === 'it' ? 'it_IT' : currentLang === 'es' ? 'es_ES' : currentLang === 'ru' ? 'ru_RU' : 'zh_CN'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={seoOgTitle} />
      <meta name="twitter:description" content={seoOgDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Hreflang tags */}
      <link rel="alternate" hrefLang="en" href="https://www.myhomeinflorence.com" />
      <link rel="alternate" hrefLang="it" href="https://www.myhomeinflorence.com?lang=it" />
      <link rel="alternate" hrefLang="es" href="https://www.myhomeinflorence.com?lang=es" />
      <link rel="alternate" hrefLang="ru" href="https://www.myhomeinflorence.com?lang=ru" />
      <link rel="alternate" hrefLang="zh" href="https://www.myhomeinflorence.com?lang=zh" />
      <link rel="alternate" hrefLang="x-default" href="https://www.myhomeinflorence.com" />
    </Helmet>
  );
};
