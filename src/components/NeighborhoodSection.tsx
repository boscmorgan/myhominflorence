import { useTranslation } from 'react-i18next';
import ImageCarousel from './ImageCarousel';
import quartiere1 from '@/assets/quartiere_1.jpg';
import quartiere2 from '@/assets/quartiere_2.jpg';
import quartiere3 from '@/assets/quartiere_3.jpg';
import quartiere4 from '@/assets/quartiere_4.jpg';
import quartiere5 from '@/assets/quartiere_5.jpg';

const NeighborhoodSection = () => {
  const { t } = useTranslation();

  const images = [
    { src: quartiere1, alt: t('neighborhood.images.gallery') },
    { src: quartiere2, alt: t('neighborhood.images.gallery') },
    { src: quartiere3, alt: t('neighborhood.images.gallery') },
    { src: quartiere4, alt: t('neighborhood.images.gallery') },
    { src: quartiere5, alt: t('neighborhood.images.piazza') }
  ];

  return (
    <section id="location" className="py-20 bg-secondary">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t('neighborhood.title')}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-8">
          {t('neighborhood.description')}
        </p>
        <div className="text-center mb-8">
          <a
            href="https://maps.app.goo.gl/ZZRadRGhYZgpDtgs9"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal underline underline-offset-4"
          >
            {t('neighborhood.mapLink')}
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-background/80 text-sm font-medium">
            {t('neighborhood.chips.ponteVecchio')}
          </span>
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-background/80 text-sm font-medium">
            {t('neighborhood.chips.michelangelo')}
          </span>
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-background/80 text-sm font-medium">
            {t('neighborhood.chips.boboli')}
          </span>
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-background/80 text-sm font-medium">
            {t('neighborhood.chips.uffizi')}
          </span>
        </div>

        <ImageCarousel images={images} />
      </div>
    </section>
  );
};

export default NeighborhoodSection;
