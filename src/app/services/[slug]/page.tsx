import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';

import {
  BrandIdentityIcon,
  DiamondShapesIcon,
  DropletIcon,
  LogoDesignIcon,
} from '@/components/icons/service-icons';
import { Cta } from '@/components/sections/cta';
import { Process } from '@/components/sections/process';
import { ServiceFeaturedWork } from '@/components/sections/service-featured-work';
import { ServiceHero } from '@/components/sections/service-hero';
import { ServiceWhatYouGet } from '@/components/sections/service-what-you-get';
import { Testimonials } from '@/components/sections/testimonials';
import {
  getServiceBySlug,
  getServiceSlugs,
  resolveFeaturedWork,
} from '@/lib/services';
import { ServiceFrontmatter } from '@/lib/types';

// Icon mapping
const iconMap = {
  LogoDesignIcon,
  BrandIdentityIcon,
  DropletIcon,
  DiamondShapesIcon,
};

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getServiceSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return notFound();
  }

  const { frontmatter } = await compileMDX<ServiceFrontmatter>({
    source: service.content,
    options: { parseFrontmatter: true },
  });

  // Map icon names to actual icon components
  const mappedWhatYouGet = frontmatter.whatYouGet.map(
    (item: {
      icon: string;
      title: string;
      description: string;
      image?: string;
    }) => ({
      ...item,
      icon: iconMap[item.icon as keyof typeof iconMap] || LogoDesignIcon,
    }),
  );

  // Resolve featured work (auto-filter or custom selection)
  const featuredWorkItems = await resolveFeaturedWork(frontmatter);

  return (
    <>
      <ServiceHero
        title={frontmatter.pageTitle}
        image={frontmatter.heroImage}
      />

      <section className="section-padding container grid gap-10 md:grid-cols-2">
        <h2 className="text-4xl">{frontmatter.title}</h2>
        <p className="text-muted-foreground text-lg">
          {frontmatter.description}
        </p>
      </section>

      <ServiceWhatYouGet items={mappedWhatYouGet} />

      <Process
        title={`${frontmatter.title} process`}
        steps={frontmatter.process}
      />

      <ServiceFeaturedWork items={featuredWorkItems} />

      <Testimonials />

      <Cta />
    </>
  );
}
