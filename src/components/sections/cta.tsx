import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { CONTACT_EMAIL } from '@/lib/constants';
import { CTA as CTA_COPY } from '@/lib/studio-pio';
import { cn } from '@/lib/utils';

export const Cta = () => {
  return (
    <section className={cn('section-padding container space-y-8')}>
      <h2 className="text-4xl md:max-w-3xl">{CTA_COPY.title}</h2>
      <p className="text-muted-foreground max-w-2xl text-lg">{CTA_COPY.description}</p>
      <p className="text-muted-foreground text-sm">
        Se preferir, escreva para{' '}
        <Link className="animated-underline" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </Link>
        .
      </p>

      <Button variant="outline" size="lg" asChild>
        <Link href="/contact">{CTA_COPY.button}</Link>
      </Button>
    </section>
  );
};
