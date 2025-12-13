import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useState, useRef, useCallback } from 'react';
import heroImage from '@/assets/reception_003.jpg';
import { Button } from '@/components/ui/button';
import { supportedLanguages, type SupportedLanguage } from '@/i18n/config';

const heroRotationOrder: SupportedLanguage[] = [
  'it',
  ...supportedLanguages.filter((lang) => lang !== 'it')
];

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const [displayedText, setDisplayedText] = useState('');
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger zoom animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Parallax scroll effect
  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    const scrollY = window.scrollY;
    const sectionHeight = sectionRef.current.offsetHeight;
    
    // Only apply parallax when hero is in view
    if (scrollY <= sectionHeight) {
      setParallaxOffset(scrollY * 0.4);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const greetingMap = useMemo(() => {
    return heroRotationOrder.reduce((acc, lang) => {
      acc[lang] = t(`hero.greetings.${lang}`);
      return acc;
    }, {} as Record<SupportedLanguage, string>);
  }, [t]);

  // Typewriter effect
  useEffect(() => {
    const initialIndex = heroRotationOrder.indexOf(i18n.language as SupportedLanguage);
    const safeInitialIndex = initialIndex === -1 ? 0 : initialIndex;
    const defaultGreeting = greetingMap[heroRotationOrder[safeInitialIndex]] ?? greetingMap.it ?? '';

    const maxRotations = 3;
    const totalSteps = heroRotationOrder.length * maxRotations;
    let step = 0;
    let currentIndex = safeInitialIndex;
    let charIndex = 0;
    let isTyping = true;
    let currentWord = greetingMap[heroRotationOrder[currentIndex]] ?? defaultGreeting;

    const typeSpeed = 80;
    const deleteSpeed = 40;
    const pauseAfterType = 1500;
    const pauseAfterDelete = 300;

    let timeoutId: number;

    const tick = () => {
      if (step >= totalSteps) {
        // Final word - type it and stop
        currentWord = defaultGreeting;
        if (charIndex < currentWord.length) {
          charIndex++;
          setDisplayedText(currentWord.slice(0, charIndex));
          timeoutId = window.setTimeout(tick, typeSpeed);
        }
        return;
      }

      if (isTyping) {
        if (charIndex < currentWord.length) {
          charIndex++;
          setDisplayedText(currentWord.slice(0, charIndex));
          timeoutId = window.setTimeout(tick, typeSpeed);
        } else {
          // Finished typing, pause then start deleting
          isTyping = false;
          timeoutId = window.setTimeout(tick, pauseAfterType);
        }
      } else {
        if (charIndex > 0) {
          charIndex--;
          setDisplayedText(currentWord.slice(0, charIndex));
          timeoutId = window.setTimeout(tick, deleteSpeed);
        } else {
          // Finished deleting, move to next word
          step++;
          currentIndex = (currentIndex + 1) % heroRotationOrder.length;
          currentWord = greetingMap[heroRotationOrder[currentIndex]] ?? defaultGreeting;
          isTyping = true;
          timeoutId = window.setTimeout(tick, pauseAfterDelete);
        }
      }
    };

    tick();

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [greetingMap, i18n.language]);

  const email = t('footer.email');

  const handleScrollToRooms = () => {
    const el = document.getElementById('rooms');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Reception area of Lorenzo & Lorenzo"
          className={`w-full h-[120%] object-cover will-change-transform transition-transform duration-[2000ms] ease-out ${
            isLoaded ? 'scale-100' : 'scale-110'
          }`}
          style={{ transform: `translateY(${parallaxOffset}px) scale(${isLoaded ? 1 : 1.1})` }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-end w-full max-w-5xl h-full py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="space-y-3 sm:space-y-4 text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="font-teko text-[2rem] sm:text-[2.6rem] md:text-[3.4rem] leading-[1.05] font-bold text-primary-foreground mb-2 flex flex-wrap justify-center gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-2">
            <span className="inline-block min-w-[10ch] sm:min-w-[12ch] text-center">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
            <span className="text-center leading-tight">
              {t('hero.mainTitle', 'rooms & apartments\nin San Niccolò, Florence')}
            </span>
          </h1>
          <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-background/90 text-[0.7rem] sm:text-xs md:text-sm font-medium">
              <span className="text-sm sm:text-base">★</span>
              {t('hero.ratingBadge')}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <Button
              size="lg"
              className="bg-teal text-primary-foreground hover:bg-teal/90 px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg"
              onClick={handleScrollToRooms}
            >
              {t('hero.checkRooms')}
            </Button>
            <p className="text-[0.7rem] sm:text-xs md:text-sm text-primary-foreground/80 text-center px-2">
              <button
                type="button"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="underline underline-offset-2 font-semibold"
              >
                {t('hero.writeUs')}
              </button>
              {' '}
              <a 
                href={`mailto:${email}`} 
                className="font-medium hover:text-primary-foreground transition-colors break-all sm:break-normal"
              >
                {email}
              </a>
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleScrollToRooms}
        className="group absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-[0.65rem] sm:text-xs md:text-sm text-primary-foreground/80 animate-float"
      >
        <span className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[0.6rem] sm:text-[0.7rem]">
          {t('hero.scrollHint')}
        </span>
        <span className="block h-5 sm:h-6 w-px bg-primary-foreground/40 group-hover:bg-primary-foreground transition-colors" />
      </button>
    </section>
  );
};

export default HeroSection;
