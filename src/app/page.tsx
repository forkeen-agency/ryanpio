import { AboutIntro } from '@/components/sections/about-intro';
import { CaseStudies } from '@/components/sections/case-studies';
import { Cta } from '@/components/sections/cta';
import { Deliverables } from '@/components/sections/deliverables';
import { Hero } from '@/components/sections/hero';
import { Logos } from '@/components/sections/logos';
import { OurProcess } from '@/components/sections/our-process';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <CaseStudies />
      <OurProcess />
      <Deliverables />
      <Logos />
      <Cta />
    </>
  );
}
