import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import RoomCard from './RoomCard';
import room1 from '@/assets/room-1.jpg';
import room2 from '@/assets/room-2.jpg';
import { AIRBNB_URL, BOOKINGCOM_URL } from '@/lib/booking';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const RoomsSection = () => {
  const { t } = useTranslation();
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const rooms = [
    {
      title: 'Executive Double',
      description:
        'A royal stay with our spacious Executive room featuring a comfy bed and modern bathroom.',
      image: room1,
      size: '20 m²',
      guests: 2,
      priceFrom: 140,
      photos: 12,
      badgeKey: 'couples',
      airbnbUrl: AIRBNB_URL,
      bookingUrl: BOOKINGCOM_URL,
      showContact: true,
      distanceToCenter: 0.8,
      features: []
    },
    {
      title: 'Deluxe Double',
      description:
        'You deserve a little extra pampering. Our Deluxe Double is an extra spacious, luxe room and comfy chair to chill.',
      image: room2,
      size: '22 m²',
      guests: 2,
      priceFrom: 160,
      photos: 15,
      badgeKey: 'spacious',
      airbnbUrl: AIRBNB_URL,
      bookingUrl: BOOKINGCOM_URL,
      showContact: true,
      distanceToCenter: 0.7,
      features: []
    },
    {
      title: 'Penthouse',
      description:
        'Looking for an extraordinary room where anything is possible? Our Penthouse is a unique room with a private terrace and kitchen.',
      image: room1,
      size: '3 bedrooms of 19 m²',
      guests: 4,
      priceFrom: 220,
      photos: 18,
      badgeKey: 'terrace',
      airbnbUrl: AIRBNB_URL,
      bookingUrl: BOOKINGCOM_URL,
      showContact: true,
      distanceToCenter: 0.5,
      features: []
    }
  ];

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

  return (
    <section id="rooms" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {t('rooms.title')}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {t('rooms.description')}
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl w-full px-2 sm:px-4">
        <Carousel
          className="w-full"
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
                  key={index}
                  className={`pl-3 sm:pl-4 basis-[95%] sm:basis-[80%] md:basis-[65%] lg:basis-[50%] flex items-stretch transition-all duration-300 ${
                    isActive ? 'scale-100 opacity-100' : 'scale-[0.92] opacity-75'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => api?.scrollTo(index)}
                    className="h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60"
                  >
                  <RoomCard {...room} />
                  </button>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute z-10 flex h-9 w-9 md:h-11 md:w-11 rounded-full bg-foreground text-background hover:bg-foreground/90 left-2 sm:left-4 top-1/2 -translate-y-1/2 shadow-lg" />
          <CarouselNext className="absolute z-10 flex h-9 w-9 md:h-11 md:w-11 rounded-full bg-foreground text-background hover:bg-foreground/90 right-2 sm:right-4 top-1/2 -translate-y-1/2 shadow-lg" />
        </Carousel>
      </div>
    </section>
  );
};

export default RoomsSection;
