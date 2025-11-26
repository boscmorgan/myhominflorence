import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import RoomCard from './RoomCard';
import executiveRoom from '@/assets/dbl_room_ext_bath.jpg';
import deluxeRoom from '@/assets/deluxe_apartment.jpg';
import penthouseRoom from '@/assets/studio_apartment.jpg';
import { AIRBNB_URL, BOOKINGCOM_URL } from '@/lib/booking';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface RoomTranslation {
  id: string;
  title: string;
  description: string;
  size: string;
}

const baseRooms = [
  {
    id: 'executive',
    image: executiveRoom,
    imageAlt: 'Executive double room with external bathroom',
    guests: 2,
    priceFrom: 140,
    photos: 12,
    badgeKey: 'couples' as const,
    airbnbUrl: AIRBNB_URL,
    bookingUrl: BOOKINGCOM_URL,
    showContact: true,
    distanceToCenter: 0.8
  },
  {
    id: 'deluxe',
    image: deluxeRoom,
    imageAlt: 'Deluxe apartment with bright living area',
    guests: 2,
    priceFrom: 160,
    photos: 15,
    badgeKey: 'spacious' as const,
    airbnbUrl: AIRBNB_URL,
    bookingUrl: BOOKINGCOM_URL,
    showContact: true,
    distanceToCenter: 0.7
  },
  {
    id: 'penthouse',
    image: penthouseRoom,
    imageAlt: 'Penthouse studio apartment with terrace',
    guests: 4,
    priceFrom: 220,
    photos: 18,
    badgeKey: 'terrace' as const,
    airbnbUrl: AIRBNB_URL,
    bookingUrl: BOOKINGCOM_URL,
    showContact: true,
    distanceToCenter: 0.5
  }
] as const;

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
    return {
      ...room,
      title: content?.title ?? '',
      description: content?.description ?? '',
      size: content?.size ?? ''
    };
  });

  useEffect(() => {
    if (!api) return;

    const updateIndex = (carousel: CarouselApi) => {
      setCurrentIndex(carousel.selectedScrollSnap());
    };

    updateIndex(api);
    api.on('select', updateIndex);
    api.on('reInit', updateIndex);

    return () => {
      api.off('select', updateIndex);
      api.off('reInit', updateIndex);
    };
  }, [api]);

  const slideCount = rooms.length;

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
            align: 'center'
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
                    'pl-3 sm:pl-4 basis-[95%] sm:basis-[80%] md:basis-[65%] lg:basis-[50%] flex items-stretch transition-all duration-300',
                    isActive ? 'scale-100 opacity-100' : 'scale-[0.94] opacity-80'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => api?.scrollTo(index)}
                    aria-label={t('rooms.photosLabel', { count: room.photos })}
                    className="h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60 rounded-[28px]"
                  >
                    <RoomCard {...room} />
                  </button>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious
            className="absolute z-10 flex h-9 w-9 md:h-11 md:w-11 rounded-full bg-background text-foreground border border-border shadow-lg left-2 sm:left-4 top-1/2 -translate-y-1/2 hover:bg-background/80"
            aria-label="Previous room"
          />
          <CarouselNext
            className="absolute z-10 flex h-9 w-9 md:h-11 md:w-11 rounded-full bg-background text-foreground border border-border shadow-lg right-2 sm:right-4 top-1/2 -translate-y-1/2 hover:bg-background/80"
            aria-label="Next room"
          />
        </Carousel>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 px-2 sm:px-6">
          <span className="text-sm text-muted-foreground" role="status" aria-live="polite">
            Slide {currentIndex + 1} of {slideCount}
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
