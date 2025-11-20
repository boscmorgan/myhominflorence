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

  const amenityGroups = [
    {
      key: 'essentials',
      title: t('amenities.groups.essentials'),
      items: [
        { icon: Wifi, label: t('amenities.wifi') },
        { icon: Luggage, label: t('amenities.luggage') },
        { icon: CheckCircle, label: t('amenities.checkin') },
        { icon: Droplet, label: t('amenities.toiletries') },
        { icon: Bath, label: t('amenities.shower') },
        { icon: Sparkles, label: t('amenities.towels') }
      ]
    },
    {
      key: 'comfort',
      title: t('amenities.groups.comfort'),
      items: [
        { icon: AirVent, label: t('amenities.ac') },
        { icon: Wind, label: t('amenities.hairdryer') },
        { icon: Shirt, label: t('amenities.iron') },
        { icon: UtensilsCrossed, label: t('amenities.kitchen') }
      ]
    },
    {
      key: 'extras',
      title: t('amenities.groups.extras'),
      items: [
        { icon: Piano, label: t('amenities.piano') },
        { icon: BookOpen, label: t('amenities.books') }
      ]
    }
  ];

  return (
    <section id="amenities" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t('amenities.title')}
        </h2>

        <p className="text-center text-lg md:text-xl text-muted-foreground mb-12">
          {t('amenities.subtitle')}
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {amenityGroups.map((group) => (
            <div key={group.key} className="rounded-3xl bg-background/70 p-6 shadow-sm border border-border">
              <h3 className="text-lg font-semibold mb-4 text-teal">
                {group.title}
              </h3>
              <div className="space-y-3">
                {group.items.map((amenity, index) => {
                  const Icon = amenity.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-teal">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <p className="text-sm md:text-base font-medium">{amenity.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
