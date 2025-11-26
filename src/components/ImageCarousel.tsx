import { useEffect, useState } from 'react';
import type { SyntheticEvent } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
}

const DEFAULT_ASPECT_RATIO = 16 / 9;

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [imageRatios, setImageRatios] = useState<Record<number, number>>({});
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageLoad = (index: number) => (event: SyntheticEvent<HTMLImageElement>) => {
    const target = event.currentTarget;
    if (!target.naturalWidth || !target.naturalHeight) {
      return;
    }

    setImageRatios((prev) => {
      if (prev[index]) {
        return prev;
      }
      return {
        ...prev,
        [index]: target.naturalWidth / target.naturalHeight,
      };
    });
  };

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateCurrentIndex = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap() ?? 0);
    };

    updateCurrentIndex();
    carouselApi.on('select', updateCurrentIndex);
    carouselApi.on('reInit', updateCurrentIndex);

    return () => {
      carouselApi.off('select', updateCurrentIndex);
      carouselApi.off('reInit', updateCurrentIndex);
    };
  }, [carouselApi]);

  const slideCount = images.length;

  return (
    <div className="w-full max-w-5xl mx-auto px-6">
      <Carousel
        className="w-full"
        setApi={setCarouselApi}
        opts={{
          align: 'start',
          loop: true,
        }}
        aria-label="Neighborhood photo gallery"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={image.src}>
              <div
                className="relative overflow-hidden rounded-lg bg-muted"
                style={{ aspectRatio: Math.max(imageRatios[index] ?? DEFAULT_ASPECT_RATIO, DEFAULT_ASPECT_RATIO) }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  onLoad={handleImageLoad(index)}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 bg-background/90 shadow-lg border border-border/80 text-foreground hover:bg-background" />
        <CarouselNext className="right-4 top-1/2 -translate-y-1/2 bg-background/90 shadow-lg border border-border/80 text-foreground hover:bg-background" />
      </Carousel>
      <div className="flex flex-wrap items-center justify-between gap-3 px-2 md:px-6 mt-4">
        <span className="text-sm text-muted-foreground" role="status" aria-live="polite">
          Slide {currentIndex + 1} of {slideCount}
        </span>
        <div className="flex items-center gap-2" role="tablist" aria-label="Select neighborhood photo">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              role="tab"
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={currentIndex === index}
              tabIndex={currentIndex === index ? 0 : -1}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal",
                currentIndex === index ? "bg-teal scale-110" : "bg-muted-foreground/40 hover:bg-muted-foreground/70",
              )}
              onClick={() => carouselApi?.scrollTo(index)}
            >
              <span className="sr-only">{image.alt}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
