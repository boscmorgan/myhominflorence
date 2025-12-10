import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useState } from 'react';
import heroImage from '@/assets/reception_003.jpg';
import { Button } from '@/components/ui/button';
import { supportedLanguages, type SupportedLanguage } from '@/i18n/config';

const heroRotationOrder: SupportedLanguage[] = [
  'it',
  ...supportedLanguages.filter((lang) => lang !== 'it')
];

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const [welcomeText, setWelcomeText] = useState('');
  const [isGreetingVisible, setIsGreetingVisible] = useState(true);
  const greetingMap = useMemo(() => {
    return heroRotationOrder.reduce((acc, lang) => {
      acc[lang] = t(`hero.greetings.${lang}`);
      return acc;
    }, {} as Record<SupportedLanguage, string>);
  }, [t]);

  const email = t('footer.email');

  useEffect(() => {
    const initialIndex = heroRotationOrder.indexOf(i18n.language as SupportedLanguage);
    const safeInitialIndex = initialIndex === -1 ? 0 : initialIndex;
    const initialKey = heroRotationOrder[safeInitialIndex];
    const defaultGreeting = greetingMap[initialKey] ?? greetingMap.it ?? '';

    setWelcomeText(defaultGreeting);
    setIsGreetingVisible(true);

    let index = safeInitialIndex;
    const maxRotations = 3; // full cycles through all languages
    const totalSteps = heroRotationOrder.length * maxRotations;
    let step = 0;

    const intervalId = window.setInterval(() => {
      if (step >= totalSteps) {
        // stop on the user's original language
        setIsGreetingVisible(false);
        window.setTimeout(() => {
          setWelcomeText(defaultGreeting);
          setIsGreetingVisible(true);
        }, 200);
        window.clearInterval(intervalId);
        return;
      }

      setIsGreetingVisible(false);
      window.setTimeout(() => {
        index = (index + 1) % heroRotationOrder.length;
        const key = heroRotationOrder[index];
        setWelcomeText(greetingMap[key] ?? defaultGreeting);
        setIsGreetingVisible(true);
      }, 200);

      step += 1;
    }, 2800);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [greetingMap, i18n.language]);

  const handleScrollToRooms = () => {
    const el = document.getElementById('rooms');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Reception area of Lorenzo & Lorenzo"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-end w-full max-w-5xl h-full py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="space-y-3 sm:space-y-4 text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="font-teko text-[2rem] sm:text-[2.6rem] md:text-[3.4rem] leading-[1.05] font-bold text-primary-foreground mb-2 flex flex-wrap justify-center gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-2">
            <span
              className={`inline-block min-w-[10ch] sm:min-w-[12ch] text-center transition-opacity duration-300 ${
                isGreetingVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {welcomeText}
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
        className="group absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-[0.65rem] sm:text-xs md:text-sm text-primary-foreground/80"
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
