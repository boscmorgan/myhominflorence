import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {t('cta.title')}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          {t('cta.description')}
        </p>
        <Button 
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 px-12 py-6 text-lg"
        >
          {t('cta.button')}
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
