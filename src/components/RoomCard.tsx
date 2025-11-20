import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Bed, Bath, Wifi, Snowflake, Monitor } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface RoomFeature {
  icon: React.ReactNode;
  label: string;
}

interface RoomCardProps {
  title: string;
  description: string;
  image: string;
  size: string;
  guests: number;
  priceFrom: number;
  photos: number;
  badgeKey?: 'couples' | 'spacious' | 'terrace';
  airbnbUrl?: string;
  bookingUrl?: string;
  showContact?: boolean;
  distanceToCenter?: number;
  features: RoomFeature[];
}

const RoomCard = ({
  title,
  description,
  image,
  size,
  guests,
  priceFrom,
  photos,
  badgeKey,
  airbnbUrl,
  bookingUrl,
  showContact,
  distanceToCenter,
  features
}: RoomCardProps) => {
  const { t } = useTranslation();
  const badgeLabel = badgeKey ? t(`rooms.badges.${badgeKey}`) : null;
  const bookingHref = airbnbUrl || bookingUrl;

  return (
    <Card className="h-full min-h-[500px] md:min-h-[540px] flex flex-col overflow-hidden bg-card border-border shadow-sm">
      <div className="relative h-80 md:h-84 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-background/90 px-4 py-1 text-xs font-semibold tracking-[0.08em] uppercase">
            {badgeLabel || title}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
          <p className="px-6 pb-5 text-2xl md:text-3xl font-bold text-white">
            {title}
          </p>
        </div>
      </div>

      <div className="bg-card px-6 pt-5 pb-6 flex-1 flex flex-col">
        <p className="text-sm md:text-base text-foreground/90 mb-6">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base text-foreground">
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4 text-muted-foreground" />
            <span>Average room size: {size}</span>
          </div>
          <div className="flex items-center gap-2">
            <Snowflake className="w-4 h-4 text-muted-foreground" />
            <span>Climate control</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4 text-muted-foreground" />
            <span>Private bathroom with shower</span>
          </div>
          <div className="flex items-center gap-2">
            <Monitor className="w-4 h-4 text-muted-foreground" />
            <span>Desk</span>
          </div>
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-muted-foreground" />
            <span>Wi‑Fi</span>
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
              <Button
                className="px-4 py-2 text-xs md:text-sm bg-[#FF5A5F] text-white hover:bg-[#E0494F]"
                asChild
              >
                <a href={airbnbUrl} target="_blank" rel="noreferrer">
                  Airbnb
                </a>
              </Button>
            )}
            {bookingUrl && (
              <Button
                className="px-4 py-2 text-xs md:text-sm bg-[#003580] text-white hover:bg-[#002452]"
                asChild
              >
                <a href={bookingUrl} target="_blank" rel="noreferrer">
                  Booking.com
                </a>
              </Button>
            )}
          </div>

          <Button
            variant="outline"
            className="px-5 py-2 text-sm md:text-base"
            asChild
          >
            <a href="#contact">
              {t('rooms.contactHost')}
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default RoomCard;
