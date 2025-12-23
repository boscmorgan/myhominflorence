import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/logo_002.png';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [heroHeight, setHeroHeight] = useState(0);
  const lastScrollY = useRef(0);
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      style={{ backgroundColor: 'hsla(var(--foreground), 0.92)' }}
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border/60 text-primary-foreground backdrop-blur-xl bg-opacity-90 transform transition-transform duration-300 ease-in-out ${
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
            <div className="text-left text-primary w-fit flex flex-col gap-0 min-w-0">
              <span className="font-semibold text-base sm:text-lg leading-none block truncate text-primary-foreground">
                Lorenzo &amp; Lorenzo
              </span>
              <span className="block text-[0.65rem] sm:text-xs tracking-[0.08em] uppercase leading-tight text-primary-foreground/80">
                {t('nav.tagline')}
              </span>
            </div>
          </button>

          <Button
            variant="glass"
            size="default"
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2.5 sm:px-7 sm:py-3"
          >
            {t('cta.button')}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
