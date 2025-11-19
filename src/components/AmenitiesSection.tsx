import { useTranslation } from 'react-i18next';
import { 
  Wifi, 
  Luggage, 
  CheckCircle, 
  UtensilsCrossed,
  Droplet,
  Bath,
  Wind,
  Shirt,
  Piano,
  BookOpen,
  Sparkles,
  AirVent
} from 'lucide-react';

const AmenitiesSection = () => {
  const { t } = useTranslation();

  const amenities = [
    { icon: Wifi, label: t('amenities.wifi') },
    { icon: Luggage, label: t('amenities.luggage') },
    { icon: CheckCircle, label: t('amenities.checkin') },
    { icon: UtensilsCrossed, label: t('amenities.kitchen') },
    { icon: Droplet, label: t('amenities.toiletries') },
    { icon: Bath, label: t('amenities.shower') },
    { icon: Sparkles, label: t('amenities.towels') },
    { icon: Wind, label: t('amenities.hairdryer') },
    { icon: AirVent, label: t('amenities.ac') },
    { icon: Shirt, label: t('amenities.iron') },
    { icon: Piano, label: t('amenities.piano') },
    { icon: BookOpen, label: t('amenities.books') },
  ];

  return (
    <section id="amenities" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          {t('amenities.title')}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center gap-4">
                <Icon size={48} className="text-foreground" strokeWidth={1.5} />
                <p className="text-sm md:text-base font-medium">{amenity.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
