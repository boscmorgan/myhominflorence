import { useTranslation } from 'react-i18next';
import ImageCarousel from './ImageCarousel';
import neighborhood1 from '@/assets/neighborhood-1.jpg';
import neighborhood2 from '@/assets/neighborhood-2.jpg';

const NeighborhoodSection = () => {
  const { t } = useTranslation();

  const images = [
    { src: neighborhood1, alt: 'Florence neighborhood' },
    { src: neighborhood2, alt: 'Florence piazza' },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center px-6">
          {t('neighborhood.title')}
        </h2>
        <ImageCarousel images={images} />
      </div>
    </section>
  );
};

export default NeighborhoodSection;
