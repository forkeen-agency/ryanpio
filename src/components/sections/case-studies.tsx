import { CaseStudyCarousel } from '@/components/sections/case-study-carousel';
import {
  HOME_CASE_STUDY_COUNT,
  HOME_HERO_PROJECT_COUNT,
} from '@/lib/constants';
import { getAllProjects } from '@/lib/projects';

export const CaseStudies = async () => {
  const allProjects = await getAllProjects();
  const caseStudyProjects = allProjects.slice(
    HOME_HERO_PROJECT_COUNT,
    HOME_HERO_PROJECT_COUNT + HOME_CASE_STUDY_COUNT,
  );

  if (caseStudyProjects.length === 0) {
    return null;
  }

  return (
    <section className="overflow-hidden">
      {caseStudyProjects.map((project, index) => (
        <CaseStudyCarousel
          key={project.slug}
          project={project}
          hidePrevItem={index > 0}
        />
      ))}
    </section>
  );
};
