import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { LucideIcon } from 'lucide-react';
import {
  Users,
  Bed,
  Bath,
  Wifi,
  Snowflake,
  Monitor,
  Home,
  Ruler,
  Tv,
  CookingPot,
  Utensils,
  ShowerHead,
  BedDouble,
  Waves,
  ChefHat,
  Laptop,
  Car
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export type RoomAmenityKey =
  | 'sizeLabel'
  | 'climateControl'
  | 'privateBathroom'
  | 'desk'
  | 'wifi'
  | 'entireApartment'
  | 'sizeValue'
  | 'flatScreenTv'
  | 'freeWifi'
  | 'airConditioning'
  | 'privateKitchen'
  | 'privateKitchenette'
  | 'kitchenware'
  | 'bathOrShower'
  | 'doubleBed'
  | 'riverView'
  | 'kitchen'
  | 'workspace'
  | 'parking';

const defaultAmenities: RoomAmenityKey[] = ['sizeLabel', 'climateControl', 'privateBathroom', 'desk', 'wifi'];

interface RoomCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  size: string;
  guests: number;
  badgeKey?: 'couples' | 'spacious' | 'terrace';
  airbnbUrl?: string;
  bookingUrl?: string;
  showContact?: boolean;
  distanceToCenter?: number;
  amenityKeys?: RoomAmenityKey[];
}

const RoomCard = ({
  title,
  description,
  image,
  imageAlt,
  size,
  guests,
  badgeKey,
  airbnbUrl,
  bookingUrl,
  showContact,
  distanceToCenter,
  amenityKeys,
}: RoomCardProps) => {
  const { t } = useTranslation();
  const badgeLabel = badgeKey ? t(`rooms.badges.${badgeKey}`) : null;
  const sizeLabel = size ? t('rooms.features.sizeLabel', { size }) : null;
  const amenities = amenityKeys ?? defaultAmenities;

  const amenityIconMap: Record<RoomAmenityKey, LucideIcon> = {
    sizeLabel: Bed,
    climateControl: Snowflake,
    privateBathroom: Bath,
    desk: Monitor,
    wifi: Wifi,
    entireApartment: Home,
    sizeValue: Ruler,
    flatScreenTv: Tv,
    freeWifi: Wifi,
    airConditioning: Snowflake,
    privateKitchen: CookingPot,
    privateKitchenette: CookingPot,
    kitchenware: Utensils,
    bathOrShower: ShowerHead,
    doubleBed: BedDouble,
    riverView: Waves,
    kitchen: ChefHat,
    workspace: Laptop,
    parking: Car
  };

  interface FeatureItem {
    icon: LucideIcon;
    label: string;
  }

  const featureItems: FeatureItem[] = amenities
    .map((key) => {
      switch (key) {
        case 'sizeLabel':
          if (!sizeLabel) {
            return null;
          }
          return { icon: amenityIconMap[key], label: sizeLabel };
        case 'sizeValue':
          if (!size) {
            return null;
          }
          return { icon: amenityIconMap[key], label: size };
        case 'climateControl':
          return { icon: amenityIconMap[key], label: t('rooms.features.climateControl') };
        case 'privateBathroom':
          return { icon: amenityIconMap[key], label: t('rooms.features.privateBathroom') };
        case 'desk':
          return { icon: amenityIconMap[key], label: t('rooms.features.desk') };
        case 'wifi':
          return { icon: amenityIconMap[key], label: t('rooms.features.wifi') };
        case 'entireApartment':
          return { icon: amenityIconMap[key], label: t('rooms.features.entireApartment') };
        case 'flatScreenTv':
          return { icon: amenityIconMap[key], label: t('rooms.features.flatScreenTv') };
        case 'freeWifi':
          return { icon: amenityIconMap[key], label: t('rooms.features.freeWifi') };
        case 'airConditioning':
          return { icon: amenityIconMap[key], label: t('rooms.features.airConditioning') };
        case 'privateKitchen':
          return { icon: amenityIconMap[key], label: t('rooms.features.privateKitchen') };
        case 'privateKitchenette':
          return { icon: amenityIconMap[key], label: t('rooms.features.privateKitchenette') };
        case 'kitchenware':
          return { icon: amenityIconMap[key], label: t('rooms.features.kitchenware') };
        case 'bathOrShower':
          return { icon: amenityIconMap[key], label: t('rooms.features.bathOrShower') };
        case 'doubleBed':
          return { icon: amenityIconMap[key], label: t('rooms.features.doubleBed') };
        case 'riverView':
          return { icon: amenityIconMap[key], label: t('rooms.features.riverView') };
        case 'kitchen':
          return { icon: amenityIconMap[key], label: t('rooms.features.kitchen') };
        case 'workspace':
          return { icon: amenityIconMap[key], label: t('rooms.features.workspace') };
        case 'parking':
          return { icon: amenityIconMap[key], label: t('rooms.features.parking') };
        default:
          return null;
      }
    })
    .filter((item): item is FeatureItem => item !== null);

  return (
    <Card className="h-full min-h-[420px] sm:min-h-[480px] md:min-h-[520px] flex flex-col overflow-hidden border-border/70 shadow-xl rounded-xl">
      <div className="relative h-52 sm:h-72 md:h-[22rem] overflow-hidden">
        <img src={image} alt={imageAlt || title} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 flex flex-col gap-2">
          {(badgeLabel || title) && (
            <span className="inline-flex items-center rounded-full bg-background/90 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[0.6rem] sm:text-[0.65rem] font-semibold tracking-[0.08em] uppercase">
              {badgeLabel || title}
            </span>
          )}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-foreground/90 via-foreground/60 to-transparent flex items-end">
          <p className="px-3.5 sm:px-5 pb-3.5 sm:pb-5 text-lg sm:text-xl md:text-2xl font-semibold text-primary-foreground">
            {title}
          </p>
        </div>
      </div>

      <div className="bg-card px-3.5 sm:px-5 pt-3 sm:pt-4 pb-4 sm:pb-5 flex-1 flex flex-col">
        <p className="text-[0.8rem] sm:text-[0.9rem] md:text-base text-foreground/90 mb-4 sm:mb-5 leading-relaxed line-clamp-3 sm:line-clamp-none">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-2 sm:gap-2.5 text-[0.75rem] sm:text-[0.9rem] md:text-sm text-foreground">
          {featureItems.slice(0, 6).map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-1.5 sm:gap-2">
              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" />
              <span className="truncate">{label}</span>
            </div>
          ))}
          {typeof distanceToCenter === 'number' && (
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-muted-foreground text-base sm:text-lg leading-none">↔</span>
              <span className="truncate">{t('rooms.distanceLabel', { distance: distanceToCenter.toFixed(1) })}</span>
            </div>
          )}
        </div>

        <div className="my-4 sm:my-6 h-px w-full bg-border" />

        <div className="flex items-center gap-1.5 sm:gap-2 text-[0.85rem] sm:text-[0.95rem] md:text-base text-foreground mb-3 sm:mb-4">
          <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
          <span className="font-semibold">
            {guests} {guests > 1 ? t('rooms.guestsLabelPlural') : t('rooms.guestsLabel')}
          </span>
        </div>

        <div className="mt-auto flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-between gap-2 sm:gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {airbnbUrl && (
              <Button variant="airbnb" className="px-3 sm:px-4 py-2 text-[0.7rem] sm:text-xs md:text-sm flex-1 sm:flex-none" asChild>
                <a href={airbnbUrl} target="_blank" rel="noopener noreferrer" aria-label={`Book ${title} on Airbnb`}>
                  {t('rooms.platforms.airbnb')}
                </a>
              </Button>
            )}
            {bookingUrl && (
              <Button variant="booking" className="px-3 sm:px-4 py-2 text-[0.7rem] sm:text-xs md:text-sm flex-1 sm:flex-none" asChild>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" aria-label={`Book ${title} on Booking.com`}>
                  {t('rooms.platforms.booking')}
                </a>
              </Button>
            )}
          </div>

          {showContact !== false && (
            <Button variant="outline" className="px-4 sm:px-5 py-2 text-[0.75rem] sm:text-sm md:text-base" asChild>
              <a href="#contact">{t('rooms.contactHost')}</a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default RoomCard;
