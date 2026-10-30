import Image from 'next/image';
import Link from 'next/link';

import { Cta } from '@/components/sections/cta';
import { Deliverables } from '@/components/sections/deliverables';
import { OurProcess } from '@/components/sections/our-process';
import { Button } from '@/components/ui/button';
import { ABOUT, STUDIO } from '@/lib/studio-pio';

export default function AboutPage() {
  return (
    <>
      <section className="hero-padding space-y-18 md:space-y-20 lg:space-y-26">
        <h1 className="container max-w-4xl text-center text-4xl md:text-5xl lg:text-6xl">
          {ABOUT.heroHeadline}
        </h1>

        <div className="bigger-container">
          <div className="relative h-[335px] w-full overflow-hidden md:h-[450px] lg:h-[900px]">
            <Image
              src="/images/projects/silueta/34.jpg"
              alt={`Silueta — ${ABOUT.heroHeadline}`}
              fill
              className="object-cover object-center"
              sizes="100vw"
              quality={90}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-padding container grid gap-10 md:grid-cols-2">
        <h2 className="text-4xl">{ABOUT.heading}</h2>
        <div className="text-muted-foreground space-y-8 text-lg md:space-y-10">
          {ABOUT.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section-padding container space-y-16 md:space-y-18">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative h-[335px] w-full overflow-hidden sm:h-[392px] lg:h-[500px]">
            <Image
              src="/images/about/ryan-portrait.jpg"
              alt={STUDIO.founder}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6 text-lg">
            <h2 className="text-4xl">{STUDIO.founder}</h2>
            <p className="text-muted-foreground">
              Fundador do {STUDIO.name} Estratégia antes do design, decisão antes
              do desenho — para marcas que querem ser escolhidas antes de serem
              comparadas.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">Peça um diagnóstico</Link>
            </Button>
          </div>
        </div>
      </section>

      <OurProcess />
      <Deliverables />
      <Cta />
    </>
  );
}
