import Image from 'next/image';

import type { LogoComponent } from '@/lib/types';
import { cn } from '@/lib/utils';

type ProjectLogoMarkProps = {
  logoSrc?: string;
  Logo?: LogoComponent;
  name: string;
  className?: string;
  logoClassName?: string;
  wordmarkClassName?: string;
};

export function ProjectLogoMark({
  logoSrc,
  Logo,
  name,
  className,
  logoClassName,
  wordmarkClassName,
}: ProjectLogoMarkProps) {
  if (logoSrc) {
    return (
      <Image
        src={logoSrc}
        alt={`Logo ${name}`}
        width={240}
        height={96}
        className={cn('h-24 w-auto max-w-[min(80%,240px)] object-contain', className, logoClassName)}
      />
    );
  }

  if (Logo) {
    return (
      <Logo
        className={cn('flex h-24 text-white', className, logoClassName)}
        wordmarkClassName={wordmarkClassName ?? 'hidden'}
      />
    );
  }

  return null;
}
