import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import heroImage from '@/assets/hero-reception.jpg';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const [welcomeText, setWelcomeText] = useState('');

  const welcomeTranslations = {
    it: 'Benvenuti',
    en: 'Welcome',
    es: 'Bienvenidos',
    ru: 'Добро пожаловать',
    zh: '欢迎'
  };

  useEffect(() => {
    const languages = ['it', 'en', 'es', 'ru', 'zh'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      setWelcomeText(welcomeTranslations[languages[currentIndex] as keyof typeof welcomeTranslations]);
      currentIndex = (currentIndex + 1) % languages.length;
    }, 2000);

    // Set initial text
    setWelcomeText(welcomeTranslations[i18n.language as keyof typeof welcomeTranslations] || welcomeTranslations.it);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/40" />
      </div>
      
      <div className="relative z-10 text-center px-6">
        <h1 className="font-teko text-6xl md:text-8xl font-bold text-primary-foreground mb-4 transition-opacity duration-500">
          {welcomeText}
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
          {t('hero.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
