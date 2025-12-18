import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import NeighborhoodSection from '@/components/NeighborhoodSection';
import RoomsSection from '@/components/RoomsSection';
import HostsSection from '@/components/HostsSection';
import ParkingSection from '@/components/ParkingSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

const Index = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Update document language
    document.documentElement.lang = i18n.language;
    
    // Inject JSON-LD structured data
    const existingScript = document.getElementById('structured-data');
    if (existingScript) existingScript.remove();

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LodgingBusiness",
          "@id": "https://myhomeinflorence.com/#lodging",
          "name": "Lorenzo & Lorenzo Rooms & Apartments",
          "alternateName": "myhomeinflorence.com",
          "description": t('hero.valueProp'),
          "url": "https://myhomeinflorence.com",
          "telephone": ["+39 055 2638097", "+39 339 1554694", "+39 389 0108370"],
          "email": "lorenzoelorenzo@libero.it",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via di San Niccolò 63",
            "addressLocality": "Florence",
            "addressRegion": "Tuscany",
            "postalCode": "50125",
            "addressCountry": "IT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 43.7646,
            "longitude": 11.2611
          },
          "image": "https://myhomeinflorence.com/og-image.jpg",
          "priceRange": "€€",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.68",
            "reviewCount": "1700",
            "bestRating": "5"
          },
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi" },
            { "@type": "LocationFeatureSpecification", "name": "Self Check-in" },
            { "@type": "LocationFeatureSpecification", "name": "Luggage Storage" },
            { "@type": "LocationFeatureSpecification", "name": "Air Conditioning" },
            { "@type": "LocationFeatureSpecification", "name": "Parking Available" }
          ],
          "checkinTime": "14:00",
          "checkoutTime": "10:00",
          "availableLanguage": ["English", "Italian", "Spanish", "Russian", "Chinese"],
          "areaServed": {
            "@type": "City",
            "name": "Florence",
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "Tuscany"
            }
          }
        },
        {
          "@type": "ParkingFacility",
          "@id": "https://myhomeinflorence.com/#parking",
          "name": "Lorenzo & Lorenzo Parking Florence",
          "description": "Affordable parking outside Florence ZTL near historic center. Daily €20, weekly €120.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Florence",
            "addressRegion": "Tuscany",
            "addressCountry": "IT"
          },
          "priceRange": "€20-€120"
        },
        {
          "@type": "Service",
          "@id": "https://myhomeinflorence.com/#property-management",
          "name": "Airbnb & Vacation Rental Property Management Florence",
          "description": "Professional property management services for Airbnb hosts and vacation rental owners in Florence and Tuscany. Guest hosting, listing optimization, and full management.",
          "provider": {
            "@type": "Organization",
            "name": "Lorenzo & Lorenzo"
          },
          "areaServed": ["Florence", "Tuscany", "Italy"],
          "serviceType": ["Airbnb Management", "Vacation Rental Management", "Property Management"]
        },
        {
          "@type": "FAQPage",
          "@id": "https://myhomeinflorence.com/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is there a tourist tax in Florence?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, guests pay a tourist tax (tassa di soggiorno) starting from €6.00 per person per night, up to 7 nights. It is set by the Municipality of Florence. Contact us for specific details."
              }
            },
            {
              "@type": "Question",
              "name": "Do you have parking in Florence?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We offer private parking just outside the ZTL (limited traffic zone) at €20/day or €120/week. Strategic location near the historic center."
              }
            },
            {
              "@type": "Question",
              "name": "Can I arrive late to check-in?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Late arrivals are no problem—just let us know your expected arrival time and we'll coordinate self check-in directly with you."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer luggage storage?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we can usually store your luggage before check-in or after check-out. Let us know in advance so we can arrange it."
              }
            }
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://myhomeinflorence.com/#website",
          "url": "https://myhomeinflorence.com",
          "name": "Lorenzo & Lorenzo - myhomeinflorence.com",
          "description": "Affordable rooms and apartments in Florence city center. Alternative to Airbnb with direct booking. Property management services.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://myhomeinflorence.com/?search={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://myhomeinflorence.com/#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://myhomeinflorence.com"
            }
          ]
        }
      ]
    };

    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('structured-data');
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, [i18n.language, t]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <NeighborhoodSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <RoomsSection />
      </ScrollReveal>
      <ScrollReveal>
        <ParkingSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <HostsSection />
      </ScrollReveal>
      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>
      <Footer />
    </div>
  );
};

export default Index;
