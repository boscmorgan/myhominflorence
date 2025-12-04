import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import RoomCard, { type RoomAmenityKey } from './RoomCard';
import executiveRoom from '@/assets/dbl_room_ext_bath.jpg';
import deluxeRoom from '@/assets/deluxe_apartment.jpg';
import penthouseRoom from '@/assets/studio_apartment.jpg';
import torrettaApartment from '@/assets/torretta.avif';
import rifrediApartment from '@/assets/rifredi.avif';
import sanFredianoApartment from '@/assets/san_frediano.avif';
import sanNiccoloStudio from '@/assets/studio_sn.avif';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoomTranslation {
  id: string;
  title: string;
  description: string;
  size: string;
}

interface BaseRoom {
  id: string;
  image: string;
  imageAlt: string;
  guests: number;
  photos: number;
  badgeKey: 'couples' | 'spacious' | 'terrace';
  airbnbUrl?: string;
  bookingUrl?: string;
  showContact?: boolean;
  distanceToCenter?: number;
}

const baseRooms: BaseRoom[] = [
  {
    id: 'executive',
    image: executiveRoom,
    imageAlt: 'Double room with private external bathroom',
    guests: 2,
    photos: 12,
    badgeKey: 'couples' as const,
    bookingUrl: 'https://www.booking.com/hotel/it/b-amp-b-lorenzo-amp-lorenzo-vol-2.en-gb.html?aid=318615&label=New_English_EN_IT_26745747385-mY8Q8To9xAXnCVG_*ibqjgS217290659413%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-134679269545%3Alp9198557%3Ali%3Adec%3Adm&sid=b7ef72085cad0116d5e600096c006dfa&dest_id=-117543&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1763631058&srpvid=8bb96e10de87af0922e0f6efc8d68669&type=total&ucfs=1&chal_t=1764016931986&force_referer=#RD237544903',
    showContact: true,
    distanceToCenter: 1
  },
  {
    id: 'deluxe',
    image: deluxeRoom,
    imageAlt: 'Deluxe apartment with bright living area',
    guests: 4,
    photos: 15,
    badgeKey: 'spacious' as const,
    bookingUrl: 'https://www.booking.com/hotel/it/suite-san-niccolo.en-gb.html?chal_t=1764016931581&force_referer=&lang=en-gb&soz=1&lang_changed=1#RD214313902',
    showContact: true,
    distanceToCenter: 1
  },
  {
    id: 'penthouse',
    image: penthouseRoom,
    imageAlt: 'Studio apartment with terrace and kitchenette',
    guests: 4,
    photos: 18,
    badgeKey: 'terrace' as const,
    bookingUrl: 'https://www.booking.com/hotel/it/suite-san-niccolo.en-gb.html?chal_t=1764016931581&force_referer=&lang=en-gb&soz=1&lang_changed=1#RD214313901',
    showContact: true,
    distanceToCenter: 1
  },
  {
    id: 'torretta',
    image: torrettaApartment,
    imageAlt: 'Torretta sull’Arno apartment with river view',
    guests: 4,
    photos: 10,
    badgeKey: 'spacious' as const,
    airbnbUrl: 'https://www.airbnb.it/rooms/921653559025896082?source_impression_id=p3_1764840062_P39eCKO6JswNBMOH',
    showContact: true,
    distanceToCenter: 6
  },
  {
    id: 'rifredi',
    image: rifrediApartment,
    imageAlt: 'Casa Fabbri in Rifredi apartment',
    guests: 4,
    photos: 8,
    badgeKey: 'spacious' as const,
    airbnbUrl: 'https://www.airbnb.it/rooms/1049191365397245549?source_impression_id=p3_1764840861_P33Sn4g4CLXeNZAq',
    showContact: true,
    distanceToCenter: 5.5
  },
  {
    id: 'sanFrediano',
    image: sanFredianoApartment,
    imageAlt: 'Casa San Frediano 36 apartment',
    guests: 4,
    photos: 8,
    badgeKey: 'spacious' as const,
    airbnbUrl: 'https://www.airbnb.it/rooms/1287611476657593461?source_impression_id=p3_1764840861_P3_uazjxmtE0uXgG',
    showContact: true,
    distanceToCenter: 2.8
  },
  {
    id: 'sanNiccoloStudio',
    image: sanNiccoloStudio,
    imageAlt: 'Studio San Niccolò apartment',
    guests: 2,
    photos: 8,
    badgeKey: 'couples' as const,
    airbnbUrl: 'https://www.airbnb.it/rooms/1520808782764542465?source_impression_id=p3_1764840861_P3NcN_5HiorcOVIy',
    showContact: true,
    distanceToCenter: 0.6
  }
] as const;

const amenityPresets: Record<string, RoomAmenityKey[]> = {
  executive: ['sizeValue', 'doubleBed', 'freeWifi', 'airConditioning', 'privateKitchenette', 'kitchenware', 'bathOrShower', 'privateBathroom'],
  deluxe: ['entireApartment', 'sizeValue', 'flatScreenTv', 'freeWifi', 'airConditioning', 'privateKitchen', 'kitchenware', 'privateBathroom', 'bathOrShower'],
  penthouse: ['entireApartment', 'sizeValue', 'flatScreenTv', 'freeWifi', 'airConditioning', 'privateKitchenette', 'kitchenware', 'privateBathroom', 'bathOrShower'],
  torretta: ['riverView', 'kitchen', 'freeWifi', 'workspace', 'parking'],
  rifredi: ['entireApartment', 'sizeValue', 'freeWifi', 'airConditioning', 'kitchen', 'kitchenware', 'privateBathroom'],
  sanFrediano: ['entireApartment', 'sizeValue', 'freeWifi', 'airConditioning', 'kitchen', 'kitchenware', 'privateBathroom'],
  sanNiccoloStudio: ['entireApartment', 'sizeValue', 'freeWifi', 'airConditioning', 'privateKitchenette', 'kitchenware', 'privateBathroom']
};

const RoomsSection = () => {
  const { t } = useTranslation();
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const translatedRooms = useMemo(
    () => t('rooms.list', { returnObjects: true }) as RoomTranslation[],
    [t]
  );

  const rooms = baseRooms.map((room) => {
    const content = translatedRooms.find((item) => item.id === room.id);
    const presetAmenities = amenityPresets[room.id] ?? [];
    return {
      ...room,
      title: content?.title ?? '',
      description: content?.description ?? '',
      size: content?.size ?? '',
      amenityKeys: presetAmenities
    };
  });

  useEffect(() => {
    if (!api) return;

    const updateIndex = (carousel: CarouselApi) => {
      const snap = carousel.selectedScrollSnap();
      const normalized = ((snap % rooms.length) + rooms.length) % rooms.length;
      setCurrentIndex(normalized);
    };

    updateIndex(api);
    api.on('select', updateIndex);
    api.on('reInit', updateIndex);

    return () => {
      api.off('select', updateIndex);
      api.off('reInit', updateIndex);
    };
  }, [api, rooms.length]);

  const slideCount = rooms.length;

  const handleNext = () => {
    api?.scrollNext();
  };

  const handlePrev = () => {
    api?.scrollPrev();
  };

  return (
    <section id="rooms" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl mb-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="md:max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-2">
              {t('rooms.title')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t('rooms.description')}
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            {t('rooms.photosLabel', { count: rooms.reduce((sum, r) => sum + r.photos, 0) })}
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl w-full px-2 sm:px-4">
        <Carousel
          className="w-full"
          aria-label="Available rooms carousel"
          opts={{
            loop: true,
            align: 'center',
            slidesToScroll: 1,
            containScroll: 'trimSnaps',
            inViewThreshold: 0.6,
            duration: 24
          }}
          setApi={setApi}
        >
          <CarouselContent className="-ml-3 sm:-ml-4 items-stretch">
            {rooms.map((room, index) => {
              const isActive = currentIndex === index;
              return (
                <CarouselItem
                  key={room.id}
                  className={cn(
                    'pl-3 sm:pl-4 pb-8 basis-[95%] sm:basis-[80%] md:basis-[65%] lg:basis-[50%] flex items-stretch transition-all duration-300',
                    isActive ? 'scale-100 opacity-100' : 'scale-[0.94] opacity-80'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => api?.scrollTo(index)}
                    aria-label={t('rooms.photosLabel', { count: room.photos })}
                    className="h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60 rounded-xl"
                  >
                    <RoomCard {...room} />
                  </button>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 sm:px-6">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="pointer-events-auto h-9 w-9 md:h-11 md:w-11 rounded-full bg-background text-foreground border border-border shadow-lg hover:bg-background/80 -ml-2 sm:-ml-4"
              aria-label="Previous room"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="pointer-events-auto h-9 w-9 md:h-11 md:w-11 rounded-full bg-background text-foreground border border-border shadow-lg hover:bg-background/80 -mr-2 sm:-mr-4"
              aria-label="Next room"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </Carousel>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 px-2 sm:px-6">
          <span
            className="text-sm text-muted-foreground"
            role="status"
            aria-live="polite"
            aria-label={t('rooms.slideStatusAria', { current: currentIndex + 1, total: slideCount })}
          >
            {t('rooms.slideStatus', { current: currentIndex + 1, total: slideCount })}
          </span>
          <div className="flex items-center gap-2" role="tablist" aria-label="Select room slide">
            {rooms.map((room, index) => (
              <button
                key={room.id}
                type="button"
                role="tab"
                aria-label={`${room.title} slide`}
                aria-selected={currentIndex === index}
                tabIndex={currentIndex === index ? 0 : -1}
                className={cn(
                  'h-2.5 w-8 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal',
                  currentIndex === index ? 'bg-teal scale-110' : 'bg-muted-foreground/40 hover:bg-muted-foreground/70'
                )}
                onClick={() => api?.scrollTo(index)}
              >
                <span className="sr-only">{room.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
