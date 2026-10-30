import { ProjectCard } from '@/components/project-card';
import { AnimatedBackground } from '@/components/sections/animated-background';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { HOME_HERO_PROJECT_COUNT } from '@/lib/constants';
import { getAllProjectsWithLogos } from '@/lib/projects';
import { STUDIO } from '@/lib/studio-pio';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export async function Hero() {
  const allProjects = await getAllProjectsWithLogos();
  const heroProjects = allProjects.slice(0, HOME_HERO_PROJECT_COUNT);
  return (
    <div className="section-padding overflow-x-clip pt-0! px-5 md:px-6">
      <section
        className={cn(
          'relative isolate mb-0! flex w-full max-w-full flex-col justify-start overflow-x-clip p-5',
          'md:min-h-[min(100dvh,1032px)] md:justify-center md:p-6',
          'bg-background text-foreground',
        )}
      >
        <AnimatedBackground
          className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden object-cover opacity-100 invert dark:opacity-50 dark:invert-0"
          projectId="0LAbEmh570lz56FzSfFp"
        />

        <div className="relative z-10 flex w-full min-w-0 flex-col items-center text-center md:flex-1 md:justify-center md:py-10">
          <div className="flex w-full max-w-5xl flex-col items-center gap-4 pt-[5.75rem] md:max-w-6xl md:gap-7 md:pt-0 lg:max-w-7xl">
            <h1 className="w-full text-[clamp(2.125rem,9.2vw,5rem)] leading-[1.06] tracking-tight md:text-[clamp(2.35rem,5.5vw,5rem)]">
              {STUDIO.heroHeadline}{' '}
              <span className="text-foreground/72">
                {STUDIO.heroHeadlineAccent}
              </span>
            </h1>
            <p className="text-foreground/58 w-full max-w-3xl text-balance font-text text-base leading-relaxed font-normal md:max-w-4xl md:text-lg lg:max-w-5xl">
              {STUDIO.heroLead}
            </p>
          </div>
          <p className="text-foreground/42 mt-5 max-w-5xl text-balance font-azeret-mono text-[0.6875rem] tracking-[0.14em] uppercase md:mt-14 md:text-xs lg:max-w-6xl">
            {STUDIO.founder}
            <span aria-hidden="true"> · </span>
            <Link
              href={STUDIO.instagramFounder}
              className="animated-underline transition-colors hover:text-foreground/70"
              target="_blank"
              rel="noopener noreferrer"
            >
              {STUDIO.founderHandle}
            </Link>
          </p>
        </div>

        <div className="relative z-10 hidden gap-6 p-6 [@media(min-width:1920px)]:grid [@media(min-width:1920px)]:grid-cols-4">
          {heroProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              showName={false}
              className="h-[290px] w-[438px]"
            />
          ))}
        </div>

        <Carousel
          opts={{
            align: 'center',
            containScroll: 'trimSnaps',
          }}
          className="relative z-10 mt-5 w-full max-w-full min-w-0 shrink-0 cursor-grab pb-1 md:mt-auto md:pb-2 [@media(min-width:1920px)]:hidden"
        >
          <CarouselContent className="-ml-0 w-full max-w-full min-w-0 md:-ml-6">
            {heroProjects.map((project) => (
              <CarouselItem
                key={project.id}
                className="flex w-full min-w-0 basis-full justify-center pl-0 md:w-auto md:basis-auto md:pl-6"
              >
                <ProjectCard
                  project={project}
                  showName={false}
                  className="mx-auto h-[11.75rem] w-full max-w-full sm:h-[13.75rem] md:h-[290px] md:w-[438px] md:max-w-none"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </div>
  );
}
