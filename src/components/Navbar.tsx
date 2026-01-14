import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo_002.png';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [heroHeight, setHeroHeight] = useState(0);
  const lastScrollY = useRef(0);
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  // On non-home pages, always use dark text since there's no dark hero
  const [isDarkMenuText, setIsDarkMenuText] = useState(!isHomePage);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Reset dark menu text state when navigating between pages
  useEffect(() => {
    if (!isHomePage) {
      setIsDarkMenuText(true);
    } else {
      // On home page, check scroll position
      const currentScrollY = window.scrollY;
      const hero = document.getElementById('hero');
      const heroH = hero ? hero.offsetHeight : window.innerHeight;
      setIsDarkMenuText(currentScrollY >= heroH);
    }
  }, [isHomePage]);

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
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // On non-home pages, always use dark text since there's no dark hero
      const shouldUseDarkText = !isHomePage || (heroHeight > 0 ? currentScrollY >= heroHeight : false);
      setIsDarkMenuText(shouldUseDarkText);

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

  const navTextClass = isDarkMenuText ? 'text-foreground' : 'text-primary-foreground';
  const navMutedTextClass = isDarkMenuText ? 'text-foreground/80' : 'text-primary-foreground/80';

  // Use light background on non-home pages or when scrolled past hero
  const navBgStyle = isDarkMenuText
    ? { backgroundColor: 'hsla(var(--background), 0.95)' }
    : { backgroundColor: 'hsla(var(--foreground), 0.92)' };

  return (
    <nav
      style={navBgStyle}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 border-b border-border/60 backdrop-blur-xl bg-opacity-90 transform transition-transform duration-300 ease-in-out',
        navTextClass,
        isHidden ? '-translate-y-full' : 'translate-y-0',
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 py-2">
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          {isHomePage ? (
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2 sm:gap-3 min-w-0"
            >
              <img src={logo} alt={t('nav.logoAlt')} className="h-10 sm:h-12 w-auto flex-shrink-0" />
              <div className="text-left text-primary w-fit flex flex-col gap-0 min-w-0">
                <span className={cn('font-semibold text-base sm:text-lg leading-none block truncate', navTextClass)}>
                  Lorenzo &amp; Lorenzo
                </span>
                <span className={cn('block text-[0.65rem] sm:text-xs tracking-[0.08em] uppercase leading-tight', navMutedTextClass)}>
                  {t('nav.tagline')}
                </span>
              </div>
            </button>
          ) : (
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 min-w-0"
            >
              <img src={logo} alt={t('nav.logoAlt')} className="h-10 sm:h-12 w-auto flex-shrink-0" />
              <div className="text-left text-primary w-fit flex flex-col gap-0 min-w-0">
                <span className={cn('font-semibold text-base sm:text-lg leading-none block truncate', navTextClass)}>
                  Lorenzo &amp; Lorenzo
                </span>
                <span className={cn('block text-[0.65rem] sm:text-xs tracking-[0.08em] uppercase leading-tight', navMutedTextClass)}>
                  {t('nav.tagline')}
                </span>
              </div>
            </Link>
          )}

          <div className="flex items-center gap-3 sm:gap-4">
            {isHomePage ? (
              <Button
                variant="glass"
                size="default"
                onClick={() => scrollToSection('contact')}
                className={cn('px-6 py-2.5 sm:px-7 sm:py-3', navTextClass)}
              >
                {t('cta.button')}
              </Button>
            ) : (
              <Link to="/#contact">
                <Button
                  variant="glass"
                  size="default"
                  className={cn('px-6 py-2.5 sm:px-7 sm:py-3', navTextClass)}
                >
                  {t('cta.button')}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
