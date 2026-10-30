'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { STUDIO_LOGO } from '@/lib/studio-logo';
import { STUDIO } from '@/lib/studio-pio';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  variant?: 'wordmark' | 'mark';
  size?: 'nav' | 'footer';
  /** Light wordmark on dark backgrounds (home hero, menu, footer) */
  preferLight?: boolean;
};

const Logo = ({
  className,
  variant = 'wordmark',
  size = 'nav',
  preferLight,
}: LogoProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const useLightWordmark =
    preferLight === true ||
    (preferLight !== false && mounted && resolvedTheme === 'dark');

  const src =
    variant === 'mark'
      ? STUDIO_LOGO.mark
      : useLightWordmark
        ? STUDIO_LOGO.wordmarkLight
        : STUDIO_LOGO.wordmarkDark;

  const sizeClass =
    variant === 'mark'
      ? size === 'footer'
        ? 'h-14 w-14 md:h-16 md:w-16'
        : 'h-9 w-9'
      : size === 'footer'
        ? 'h-10 w-auto max-w-[min(90vw,420px)] md:h-14'
        : 'h-5 w-auto max-w-[min(42vw,220px)] md:h-6';

  return (
    <Link href="/" className={cn('inline-flex shrink-0', className)}>
      {/* SVG brand assets — served static from public/assets */}
      <img
        src={src}
        alt={STUDIO.name}
        className={sizeClass}
        width={variant === 'mark' ? 221 : 628}
        height={variant === 'mark' ? 221 : 98}
        decoding="async"
      />
    </Link>
  );
};

export default Logo;
