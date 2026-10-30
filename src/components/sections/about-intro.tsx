import Image from 'next/image';

import { ABOUT } from '@/lib/studio-pio';

export const AboutIntro = () => {
  return (
    <section className="section-padding bigger-container space-y-16 md:space-y-18">
      <div className="container grid items-start gap-10 md:grid-cols-2">
        <h2 className="text-4xl">{ABOUT.heading}</h2>

        <div className="text-muted-foreground space-y-6 md:text-lg lg:text-xl">
          {ABOUT.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Image
          width={1788}
          height={1788}
          src="/assets/ryanpio.jpg"
          alt="Ryan Pio — Studio Pio"
          className="size-full object-cover"
        />
        <Image
          width={924}
          height={664}
          src="/images/homepage/about-award.webp"
          alt="Identidade visual Studio Pio"
          className="size-full object-cover dark:invert"
        />
      </div>
    </section>
  );
};
