import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';

import { Cta } from '@/components/sections/cta';
import { Process } from '@/components/sections/process';
import { ProjectGallery } from '@/components/sections/project-gallery';
import { ProjectHero } from '@/components/sections/project-hero';
import { ProjectOverview } from '@/components/sections/project-overview';
import { getProjectImagesFromDisk } from '@/lib/project-images';
import {
  getProjectBySlug,
  getProjectSlugs,
} from '@/lib/projects';
import { ProjectFrontmatter } from '@/lib/types';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return notFound();
  }

  const { frontmatter } = await compileMDX<ProjectFrontmatter>({
    source: project.content,
    options: { parseFrontmatter: true },
  });

  const { hero, gallery } = await getProjectImagesFromDisk(
    slug,
    frontmatter.images,
  );

  return (
    <>
      <ProjectHero title={frontmatter.name} image={hero} />

      <ProjectOverview
        title="Visão geral"
        description={frontmatter.description}
        project={frontmatter}
      />

      {frontmatter.process && frontmatter.process.length > 0 && (
        <Process
          title={`Processo — ${frontmatter.name}`}
          steps={frontmatter.process}
        />
      )}

      {gallery.length > 0 && <ProjectGallery images={gallery} />}

      <Cta />
    </>
  );
}
