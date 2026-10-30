import { ProjectCard } from '@/components/project-card';
import { getAllProjectsWithLogos } from '@/lib/projects';

export default async function ProjectsPage() {
  const allProjects = await getAllProjectsWithLogos();

  return (
    <div className="hero-padding container flex flex-col gap-10">
      <h1 className="text-4xl">Trabalhos</h1>

      <div className="grid gap-x-6 gap-y-12 lg:min-h-[966px] lg:grid-cols-3">
        {allProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            className="h-[290px]"
          />
        ))}
      </div>
    </div>
  );
}
