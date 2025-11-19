import { useTranslation } from 'react-i18next';
import heroImage from '@/assets/hero-florence.jpg';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/40" />
      </div>
      
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4">
          {t('hero.welcome')}
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90">
          {t('hero.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
