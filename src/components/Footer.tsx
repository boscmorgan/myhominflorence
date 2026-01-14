import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { cn } from '@/lib/utils';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'it', label: 'IT' },
  { code: 'es', label: 'ES' },
  { code: 'ru', label: 'RU' },
  { code: 'zh', label: '中文' }
] as const;

type LanguageCode = (typeof languages)[number]['code'];

const getLanguageByCode = (code: string) =>
  languages.find((lang) => lang.code === code) ?? languages[0];

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const languageSelectorRef = useRef<HTMLDivElement>(null);
  const selectedLanguage = getLanguageByCode(i18n.language);
  const phonesResult = t('footer.phones', { returnObjects: true }) as string[] | string;
  const phoneList = Array.isArray(phonesResult)
    ? phonesResult
    : phonesResult
      ? [phonesResult]
      : [];
  const email = t('footer.email');
  const whatsappLabel = t('footer.whatsapp');
  const propertyIntro = t('footer.propertyCTA.intro');
  const propertyInvite = t('footer.propertyCTA.invite');
  const propertyConnector = t('footer.propertyCTA.connector');
  const propertyApproachLabel = t('footer.propertyCTA.approachLinkLabel');
  const propertyDeckLabel = t('footer.propertyCTA.deckLinkLabel');
  const approachLink =
    'https://www.canva.com/design/DAGgSS1Ym1k/8SyOyyiFxmPg-D829_psvg/edit?utm_content=DAGgSS1Ym1k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton';
  const deckLink =
    'https://www.canva.com/design/DAGgSVBFAc4/kIzpvEqMjxYVO9eT9WygFw/view?utm_content=DAGgSVBFAc4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h05c240ebf0';
  const whatsappLink = 'https://wa.me/393890108370';

  const emailHref = `mailto:${email}`;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const storedLanguage = window.localStorage.getItem('preferredLanguage') as LanguageCode | null;
    if (storedLanguage) {
      const lang = getLanguageByCode(storedLanguage);
      if (lang.code !== i18n.language) {
        i18n.changeLanguage(lang.code);
      }
    }
  }, [i18n]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageSelectorRef.current &&
        !languageSelectorRef.current.contains(event.target as Node)
      ) {
        setIsLangOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLangOpen(false);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <footer id="contact" className="bg-teal text-primary-foreground py-10 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-8 sm:gap-10 md:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{t('footer.contact')}</h3>
            <div className="space-y-2 text-sm sm:text-base md:text-lg">
              <p>{t('footer.address')}</p>
              <p>{t('footer.city')}</p>
              <div className="mt-3 sm:mt-4 space-y-2">
                {phoneList.map((phone) => {
                  const normalizedPhoneHref = `tel:${phone.replace(/[^+\d]/g, '')}`;
                  return (
                    <p key={phone}>
                      <a href={normalizedPhoneHref} className="underline underline-offset-4">
                        {phone}
                      </a>
                    </p>
                  );
                })}
              </div>
              <p>
                <a href={emailHref} className="underline underline-offset-4 break-all sm:break-normal">
                  {email}
                </a>
              </p>
              <p>
                <a
                  href={whatsappLink}
                  className="underline underline-offset-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  {whatsappLabel}
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 md:text-right">
            <p className="text-xs sm:text-sm md:text-base text-primary-foreground/80">
              {t('footer.touristTaxNote')}
            </p>
            <p className="text-xs sm:text-sm text-primary-foreground/90 leading-relaxed pt-2 border-t border-primary-foreground/20 md:border-none md:pt-4">
              <span className="font-semibold block mb-1">{propertyIntro}</span>
              {propertyInvite}{' '}
              <a
                href={approachLink}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 font-semibold"
              >
                {propertyApproachLabel}
              </a>{' '}
              {propertyConnector}{' '}
              <a
                href={deckLink}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 font-semibold"
              >
                {propertyDeckLabel}
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 border-t border-primary-foreground/20 text-xs sm:text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <p className="text-primary-foreground/80">{t('footer.copyright')}</p>
            <span className="hidden sm:inline text-primary-foreground/40">|</span>
            <Link to="/blog" className="text-primary-foreground/80 hover:text-primary-foreground underline underline-offset-4">
              {t('footer.blogLink')}
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[0.55rem] font-semibold uppercase tracking-[0.5em] text-primary-foreground/60">
              {t('nav.language')}
            </span>
            <div className="relative" ref={languageSelectorRef}>
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isLangOpen}
                onClick={() => setIsLangOpen((prev) => !prev)}
                className="inline-flex items-center gap-1 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-primary-foreground transition hover:bg-primary-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span>{selectedLanguage.label}</span>
                <ChevronDown size={14} className="text-primary-foreground/70" />
              </button>
              {isLangOpen && (
                <ul
                  role="listbox"
                  aria-label={t('nav.language')}
                  className="absolute right-0 z-10 bottom-full mb-2 w-32 space-y-1 rounded-2xl border border-border bg-card/95 shadow-lg p-2 text-sm text-foreground"
                >
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={selectedLanguage.code === lang.code}
                        onClick={() => {
                          i18n.changeLanguage(lang.code);
                          if (typeof window !== 'undefined') {
                            window.localStorage.setItem('preferredLanguage', lang.code);
                          }
                          setIsLangOpen(false);
                        }}
                        className={cn(
                          "w-full text-left rounded-xl px-3 py-2 text-foreground transition-colors",
                          selectedLanguage.code === lang.code
                            ? "bg-teal/10 text-teal font-semibold"
                            : "hover:bg-foreground/5",
                        )}
                      >
                        {lang.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
