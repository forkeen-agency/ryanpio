import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DELIVERABLES } from '@/lib/studio-pio';
import { cn } from '@/lib/utils';

type DeliverablesProps = {
  showCta?: boolean;
  className?: string;
};

export function Deliverables({ showCta = false, className }: DeliverablesProps) {
  return (
    <section className={cn('section-padding container space-y-16 md:space-y-18', className)}>
      <div className="grid gap-6 md:grid-cols-2 md:gap-10">
        <h2 className="text-4xl">{DELIVERABLES.title}</h2>
        <p className="text-muted-foreground text-lg">{DELIVERABLES.subtitle}</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-x-6 md:gap-y-9">
        {DELIVERABLES.items.map((item) => (
          <Card key={item.title} className="bg-muted border-none">
            <CardHeader>
              <CardTitle className="text-2xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                {item.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {showCta && (
        <Button variant="outline" size="lg" asChild>
          <Link href="/contact">Peça um diagnóstico</Link>
        </Button>
      )}
    </section>
  );
}
