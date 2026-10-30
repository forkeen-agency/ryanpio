import type { Metadata } from 'next';

import { Cta } from '@/components/sections/cta';
import { Deliverables } from '@/components/sections/deliverables';
import { OurProcess } from '@/components/sections/our-process';

export const metadata: Metadata = {
  title: 'Entregáveis',
  description:
    'Diagnóstico, estratégia, logotipo, identidade visual, prototipagem e manual de marca — Studio Pio.',
};

export default function ServicesPage() {
  return (
    <>
      <OurProcess />
      <Deliverables showCta />
      <Cta />
    </>
  );
}
