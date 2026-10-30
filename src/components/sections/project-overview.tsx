import { ProjectFrontmatter } from '@/lib/types';

interface ProjectOverviewProps {
  title: string;
  description?: string;
  project: ProjectFrontmatter;
}

const getCategoryName = (category: string) => {
  const categoryMap: Record<string, string> = {
    'logo-design': 'Design de logo',
    'brand-identity': 'Identidade visual',
    'icon-design': 'Design de ícones',
  };
  return categoryMap[category] || category;
};

export function ProjectOverview({
  title,
  description,
  project,
}: ProjectOverviewProps) {
  return (
    <section className="section-padding container">
      <div className="grid gap-10 md:grid-cols-2">
        <h2 className="text-4xl">{title}</h2>
        {description && (
          <p className="text-muted-foreground text-lg">{description}</p>
        )}
      </div>

      <div className="mt-10 grid justify-between gap-6 sm:mt-20 sm:grid-cols-4 lg:mt-26 xl:mt-36">
        <div className="flex flex-col gap-2">
          <p className="text-muted-foreground text-lg">Cliente</p>
          <p className="text-lg">{project.name}</p>
        </div>

        {project.date && (
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-lg">Ano</p>
            <p className="text-lg">{project.date}</p>
          </div>
        )}

        {project.industry && (
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-lg">Segmento</p>
            <p className="text-lg">{project.industry}</p>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <p className="text-muted-foreground text-lg">Serviços</p>
          <p className="text-lg">{getCategoryName(project.category)}</p>
        </div>
      </div>
    </section>
  );
}
