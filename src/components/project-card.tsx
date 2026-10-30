import Image from 'next/image';
import Link from 'next/link';

import { ProjectLogoMark } from '@/components/project-logo-mark';
import { EnrichedProject } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: EnrichedProject;
  /**
   * Whether to show the project name below the image
   * @default true
   */
  showName?: boolean;
  className?: string;
}

export function ProjectCard({
  project,
  showName = true,
  className,
}: ProjectCardProps) {
  const {
    Logo,
    logoSrc,
    images,
    name,
    slug,
    logoClassName,
    imageClassName,
    hideLogoOverlay,
  } = project;
  const primaryImage = images[0];

  const showLogoLayer = !hideLogoOverlay && (logoSrc || Logo);

  return (
    <Link
      href={`/projects/${slug}`}
      className={cn(
        'group flex w-full max-w-full flex-col gap-4',
        showName ? 'items-start' : 'items-center',
      )}
    >
      <div className={cn('relative h-full w-full overflow-hidden', className)}>
        <Image
          src={primaryImage.src}
          alt={primaryImage.alt}
          fill
          className={cn(
            'object-cover transition-transform duration-500 ease-out group-hover:scale-105',
            imageClassName,
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />

        <div
          className={cn(
            'absolute inset-0 backdrop-blur-2xl transition-all duration-500 ease-out',
            'group-hover:opacity-0 group-hover:backdrop-blur-none',
          )}
          aria-hidden
        />

        {showLogoLayer && (
          <div
            className={cn(
              'absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-out',
              'group-hover:opacity-0',
            )}
          >
            <ProjectLogoMark
              logoSrc={logoSrc}
              Logo={Logo}
              name={name}
              logoClassName={logoClassName}
              wordmarkClassName="hidden"
            />
          </div>
        )}
      </div>
      {showName && <h3 className="text-lg">{name}</h3>}
    </Link>
  );
}
