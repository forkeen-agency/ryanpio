import Image from 'next/image';

import { ProjectImage } from '@/lib/types';

interface ProjectGalleryProps {
  images: ProjectImage[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="section-padding bigger-container">
      <div className="grid grid-cols-1 gap-6 md:gap-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full overflow-hidden bg-muted/20"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1600}
              height={1200}
              className="h-auto w-full object-contain"
              sizes="100vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
