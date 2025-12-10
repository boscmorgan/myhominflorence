import { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/logo_002.png';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'it', label: 'IT' },
  { code: 'es', label: 'ES' },
  { code: 'ru', label: 'RU' },
  { code: 'zh', label: '中文' }
] as const;

type LanguageCode = (typeof languages)[number]['code'];

const menuSections = [
  { id: 'rooms', label: 'nav.rooms' },
  { id: 'location', label: 'nav.location' },
  { id: 'contact', label: 'nav.contact' }
] as const;

const getLanguageByCode = (code: string) =>
  languages.find((lang) => lang.code === code) ?? languages[0];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [heroHeight, setHeroHeight] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { t, i18n } = useTranslation();
  const languageSelectorRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const selectedLanguage = getLanguageByCode(i18n.language);

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
    type SectionId = typeof menuSections[number]['id'];
    const sectionIds = menuSections.map((section) => section.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id as SectionId;
            if (sectionIds.includes(id)) {
              setActiveSection(id);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const updateHeroHeight = () => {
      const hero = document.getElementById('hero');
      if (hero) {
        setHeroHeight(hero.offsetHeight);
      } else {
        setHeroHeight(window.innerHeight);
      }
    };

    updateHeroHeight();
    window.addEventListener('resize', updateHeroHeight);

    return () => {
      window.removeEventListener('resize', updateHeroHeight);
    };
  }, []);

  useEffect(() => {
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= heroHeight) {
        setIsHidden(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > heroHeight) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [heroHeight]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/90 border-b border-border backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-2">
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 sm:gap-3 min-w-0"
          >
            <img src={logo} alt={t('nav.logoAlt')} className="h-10 sm:h-12 w-auto flex-shrink-0" />
            <div className="text-left text-black w-fit flex flex-col gap-0 min-w-0">
              <span className="font-semibold text-base sm:text-lg leading-none block truncate">
                Lorenzo &amp; Lorenzo
              </span>
              <span className="block text-[0.65rem] sm:text-xs tracking-[0.08em] uppercase leading-tight">
                {t('nav.tagline')}
              </span>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-6">
            {menuSections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-medium pb-1 border-b-2 transition-colors ${
                    isActive
                      ? 'text-teal border-teal'
                      : 'text-foreground/80 border-transparent hover:text-teal hover:border-teal/60'
                  }`}
                >
                  {t(section.label)}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative" ref={languageSelectorRef}>
              <span className="sr-only">{t('nav.language')}</span>
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isLangOpen}
                onClick={() => setIsLangOpen((prev) => !prev)}
                className="hidden md:inline-flex items-center gap-2 text-xs font-medium bg-background/80 border border-border rounded-full px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow text-foreground/80"
              >
                <span>{selectedLanguage.label}</span>
                <ChevronDown size={16} className="text-foreground/70" />
              </button>
              {isLangOpen && (
                <ul
                  role="listbox"
                  aria-label={t('nav.language')}
                  className="absolute right-0 mt-2 w-32 space-y-1 rounded-2xl bg-background border border-border shadow-lg p-2 text-sm"
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
                        className={`w-full text-left rounded-xl px-3 py-2 ${
                        selectedLanguage.code === lang.code
                          ? 'bg-teal/10 text-teal'
                          : 'hover:bg-foreground/5'
                      }`}
                      >
                        {lang.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="hidden md:block">
              <Button
                className="bg-teal text-primary-foreground hover:bg-teal/90 px-5"
                size="default"
                onClick={() => scrollToSection('rooms')}
              >
                {t('cta.button')}
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t('nav.menuToggle')}
              className="border border-border bg-background/70 text-foreground/80 backdrop-blur-sm transition-colors duration-200 hover:bg-foreground/5 hover:text-foreground focus-visible:ring-teal/70 md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-4 pb-6 flex flex-col items-center gap-3 w-full px-4 py-4">
            {menuSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-center py-3 text-base font-semibold uppercase tracking-[0.05em] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/70 rounded-xl ${
                  activeSection === section.id
                    ? 'text-teal bg-teal/5'
                    : 'text-black active:bg-muted/50'
                }`}
              >
                {t(section.label)}
              </button>
            ))}

            <div className="w-full border-t border-border/60 pt-4 mt-1" />

            <Button
              className="mt-1 w-full bg-teal text-primary-foreground hover:bg-teal/90 md:hidden py-6 text-base"
              size="lg"
              onClick={() => scrollToSection('rooms')}
            >
              {t('cta.button')}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
