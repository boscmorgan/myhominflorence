import { useTranslation } from 'react-i18next';
import ImageCarousel from './ImageCarousel';
import room1 from '@/assets/room-1.jpg';
import room2 from '@/assets/room-2.jpg';

const RoomsSection = () => {
  const { t } = useTranslation();

  const images = [
    { src: room1, alt: 'Hotel room' },
    { src: room2, alt: 'Lounge area' },
  ];

  return (
    <section id="rooms" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {t('rooms.title')}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {t('rooms.description')}
        </p>
      </div>
      <ImageCarousel images={images} />
    </section>
  );
};

export default RoomsSection;
