import Image from 'next/image';

import { ProjectImage } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ProjectHeroProps {
  title: string;
  image: ProjectImage;
}

export function ProjectHero({ title, image }: ProjectHeroProps) {
  return (
    <section
      className={cn('hero-padding space-y-18 md:space-y-20 lg:space-y-26')}
    >
      <h1 className="container text-center text-5xl md:text-6xl lg:text-7xl">
        {title}
      </h1>
      <div className="bigger-container">
        <div className="relative w-full overflow-hidden bg-muted/30">
          <Image
            src={image.src}
            alt={image.alt}
            width={1600}
            height={1200}
            className="mx-auto h-auto max-h-[min(85vh,900px)] w-full object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
