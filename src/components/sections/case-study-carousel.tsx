'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { HOME_CASE_STUDY_IMAGE_COUNT } from '@/lib/constants';
import { ProjectFrontmatter } from '@/lib/types';
import { cn } from '@/lib/utils';

export function CaseStudyCarousel({
  project,
  hidePrevItem,
}: {
  project: ProjectFrontmatter;
  hidePrevItem?: boolean;
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [isMoving, setIsMoving] = React.useState(false);

  const images = React.useMemo(
    () => project.images.slice(0, HOME_CASE_STUDY_IMAGE_COUNT),
    [project.images],
  );

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();
  const scrollTo = (index: number) => api?.scrollTo(index);

  // Update current slide when carousel changes
  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    const onScroll = () => {
      setIsMoving(true);
    };

    const onSettle = () => {
      setIsMoving(false);
    };

    onSelect(); // Set initial state
    api.on('select', onSelect);
    api.on('scroll', onScroll);
    api.on('settle', onSettle);

    return () => {
      api.off('select', onSelect);
      api.off('scroll', onScroll);
      api.off('settle', onSettle);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: 'center',
        loop: true,
      }}
      className="section-padding w-full select-none"
    >
      <CarouselContent
        className={cn('relative ml-0! cursor-grab', isMoving ? 'z-10' : '')}
      >
        {images.map((image, index) => {
          const nextIndex = (current + 1) % images.length;
          const prevIndex = (current - 1 + images.length) % images.length;
          const isReversed = index === nextIndex;

          return (
            <CarouselItem
              key={index}
              className="3xl:basis-[80%] 5xl:basis-[65%] 4xl:basis-[78%] justify-start pl-0! 2xl:basis-[86%]"
            >
              <div
                className={cn(
                  'container flex flex-col gap-10 transition-all duration-300 md:gap-8 lg:gap-10',
                  isReversed ? 'md:flex-row-reverse' : 'md:flex-row',
                  prevIndex === index && hidePrevItem ? '2xl:opacity-0' : '',
                )}
              >
                {/* Text — ~20% on desktop */}
                <div className="w-full shrink-0 md:w-[20%] md:min-w-[11rem] md:max-w-[16rem]">
                  <div className="space-y-6 md:space-y-8">
                    <h2 className="text-3xl leading-tight md:text-[1.75rem] lg:text-4xl">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
                {/* Image — ~80% on desktop, landscape frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/20 md:aspect-[16/10] md:w-[80%]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain object-center p-2 md:object-cover md:p-0"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority
                  />
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="relative container translate-y-6 md:-translate-y-full">
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:gap-8 md:w-[20%] md:min-w-[11rem] md:max-w-[16rem] md:flex-col md:items-start">
          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full"
              onClick={scrollPrev}
              aria-label="Slide anterior"
            >
              <ArrowLeft className="size-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full"
              onClick={scrollNext}
              aria-label="Próximo slide"
            >
              <ArrowRight className="size-4" />
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                aria-label={`Ir para o slide ${idx + 1}`}
                className={cn(
                  'relative cursor-pointer after:absolute after:-inset-2 after:content-[""]',
                  'h-[6px] w-8 rounded-full transition-all',
                  idx === current
                    ? 'bg-foreground'
                    : 'bg-muted hover:bg-muted-foreground/50',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </Carousel>
  );
}
