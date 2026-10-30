'use client';

import Link from 'next/link';

import Logo from '@/components/layout/logo';
import { useCurrentTime } from '@/hooks/use-current-time';
import { CONTACT_EMAIL, NAV_ITEMS, SOCIAL_LINKS } from '@/lib/constants';
import { STUDIO } from '@/lib/studio-pio';
import { cn } from '@/lib/utils';

import { AnimatedBackground } from '../sections/animated-background';

const Footer = () => {
  const { currentTime, currentLocation } = useCurrentTime();

  return (
    <div className="section-padding pb-0!">
      <footer
        className={cn(
          'relative m-5 mt-0! overflow-hidden py-8 md:m-6',
          'bg-foreground text-background dark:bg-background dark:text-foreground dark:invert',
        )}
      >
        <AnimatedBackground
          className="absolute inset-0 h-full w-full object-cover opacity-50 dark:opacity-100 dark:invert"
          projectId="0LAbEmh570lz56FzSfFp"
        />

        <div className="bigger-container relative z-10 flex min-h-[min(90dvh,750px)] flex-col justify-between">
          <div className="flex items-center justify-center gap-6 md:justify-between">
            <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="animated-underline"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden flex-col items-end gap-2 md:flex">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animated-underline text-sm"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-3 py-10">
            <Logo size="footer" />
            <span className="text-background/70 text-base md:text-lg">
              {STUDIO.tagline}
            </span>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col items-center gap-3 md:hidden">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animated-underline text-sm"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 md:justify-between">
              <Link
                className="animated-underline"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </Link>
              <span className="text-center text-sm">{STUDIO.copyright}</span>
              <span className="">
                {currentTime} · {currentLocation}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
