import { useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const pathname = location.pathname;

  // Redirect old legacy URLs to homepage with appropriate language
  const legacyRedirects: Record<string, string> = {
    '/it/': '/?lang=it',
    '/es/': '/?lang=es',
    '/ru/': '/?lang=ru',
    '/zh/': '/?lang=zh',
  };

  // Check for legacy language paths or listing paths
  for (const [prefix, redirect] of Object.entries(legacyRedirects)) {
    if (pathname.startsWith(prefix)) {
      return <Navigate to={redirect} replace />;
    }
  }

  // Redirect /listing/ paths to homepage
  if (pathname.startsWith('/listing/')) {
    const langMatch = pathname.match(/\/listing\/(it|es|ru|zh)\//);
    const lang = langMatch ? langMatch[1] : null;
    return <Navigate to={lang ? `/?lang=${lang}` : '/'} replace />;
  }

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | My Home in Florence</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://myhomeinflorence.com/" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">{t("notFound.description")}</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            {t("notFound.cta")}
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
