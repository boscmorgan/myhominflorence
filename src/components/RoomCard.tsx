import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Bed, Bath, Wifi, Snowflake, Monitor, Camera } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface RoomCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  size: string;
  guests: number;
  priceFrom: number;
  photos: number;
  badgeKey?: 'couples' | 'spacious' | 'terrace';
  airbnbUrl?: string;
  bookingUrl?: string;
  showContact?: boolean;
  distanceToCenter?: number;
}

const RoomCard = ({
  title,
  description,
  image,
  imageAlt,
  size,
  guests,
  priceFrom,
  photos,
  badgeKey,
  airbnbUrl,
  bookingUrl,
  showContact,
  distanceToCenter,
}: RoomCardProps) => {
  const { t } = useTranslation();
  const badgeLabel = badgeKey ? t(`rooms.badges.${badgeKey}`) : null;
  const sizeLabel = size ? t('rooms.features.sizeLabel', { size }) : null;
  const priceLabel = t('rooms.fromPriceLabel', { price: priceFrom });
  const photosLabel = t('rooms.photosLabel', { count: photos });

  return (
    <Card className="h-full min-h-[520px] md:min-h-[560px] flex flex-col overflow-hidden border-border/70 shadow-xl rounded-[28px]">
      <div className="relative h-80 md:h-96 overflow-hidden">
        <img src={image} alt={imageAlt || title} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {(badgeLabel || title) && (
            <span className="inline-flex items-center rounded-full bg-background/90 px-4 py-1 text-xs font-semibold tracking-[0.08em] uppercase">
              {badgeLabel || title}
            </span>
          )}
          <span className="inline-flex items-center rounded-full bg-black/70 text-white px-3 py-1 text-xs font-medium">
            {priceLabel}
          </span>
        </div>
        <div className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground shadow">
          <Camera className="h-3.5 w-3.5" />
          {photosLabel}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end">
          <p className="px-6 pb-6 text-2xl md:text-3xl font-semibold text-white">
            {title}
          </p>
        </div>
      </div>

      <div className="bg-card px-6 pt-5 pb-6 flex-1 flex flex-col">
        <p className="text-sm md:text-base text-foreground/90 mb-6 leading-relaxed">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base text-foreground">
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4 text-muted-foreground" />
            <span>{sizeLabel ?? ''}</span>
          </div>
          <div className="flex items-center gap-2">
            <Snowflake className="w-4 h-4 text-muted-foreground" />
            <span>{t('rooms.features.climateControl')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4 text-muted-foreground" />
            <span>{t('rooms.features.privateBathroom')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Monitor className="w-4 h-4 text-muted-foreground" />
            <span>{t('rooms.features.desk')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-muted-foreground" />
            <span>{t('rooms.features.wifi')}</span>
          </div>
          {typeof distanceToCenter === 'number' && (
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-lg leading-none">↔</span>
              <span>{t('rooms.distanceLabel', { distance: distanceToCenter.toFixed(1) })}</span>
            </div>
          )}
        </div>

        <div className="my-6 h-px w-full bg-border" />

        <div className="flex items-center gap-2 text-sm md:text-base text-foreground mb-4">
          <Users className="w-4 h-4 text-muted-foreground" />
          <span className="font-semibold">
            {guests} {guests > 1 ? t('rooms.guestsLabelPlural') : t('rooms.guestsLabel')}
          </span>
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {airbnbUrl && (
              <Button className="px-4 py-2 text-xs md:text-sm bg-[#FF5A5F] text-white hover:bg-[#E0494F]" asChild>
                <a href={airbnbUrl} target="_blank" rel="noreferrer">
                  {t('rooms.platforms.airbnb')}
                </a>
              </Button>
            )}
            {bookingUrl && (
              <Button className="px-4 py-2 text-xs md:text-sm bg-[#003580] text-white hover:bg-[#002452]" asChild>
                <a href={bookingUrl} target="_blank" rel="noreferrer">
                  {t('rooms.platforms.booking')}
                </a>
              </Button>
            )}
          </div>

          {showContact !== false && (
            <Button variant="outline" className="px-5 py-2 text-sm md:text-base" asChild>
              <a href="#contact">{t('rooms.contactHost')}</a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default RoomCard;
