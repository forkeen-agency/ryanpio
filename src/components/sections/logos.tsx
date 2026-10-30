import Image from 'next/image';
import Link from 'next/link';

import { Marquee } from '@/components/ui/marquee';
import { getAllProjects } from '@/lib/projects';
import { cn } from '@/lib/utils';

export const Logos = async () => {
  const allProjects = await getAllProjects();
  const logoProjects = allProjects.filter((p) => p.logoSrc).slice(0, 8);

  return (
    <section className="section-padding mask-r-from-40% mask-r-to-100% mask-l-from-40% mask-l-to-100%">
      <Marquee pauseOnHover className="[--duration:20s] [--gap:14rem]">
        {logoProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            aria-label={project.name}
            className="flex items-center opacity-50 transition-opacity duration-300 hover:opacity-100"
          >
            <Image
              src={project.logoSrc!}
              alt={project.name}
              width={160}
              height={48}
              className={cn(
                'h-10 w-auto max-w-[160px] object-contain',
                'invert dark:invert-0',
              )}
            />
          </Link>
        ))}
      </Marquee>
    </section>
  );
};
