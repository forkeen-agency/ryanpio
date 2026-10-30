import { PONTO_METHOD } from '@/lib/studio-pio';

import { Process } from './process';

export const OurProcess = () => {
  return (
    <div className="space-y-8">
      <div className="section-padding container space-y-4 pb-0!">
        <h2 className="text-4xl">{PONTO_METHOD.title}</h2>
        <p className="text-muted-foreground max-w-2xl text-lg italic">
          {PONTO_METHOD.subtitle}
        </p>
      </div>
      <Process title="" steps={[...PONTO_METHOD.steps]} />
      <p className="text-muted-foreground container pb-8 text-center text-sm italic md:pb-12">
        {PONTO_METHOD.footnote}
      </p>
    </div>
  );
};
