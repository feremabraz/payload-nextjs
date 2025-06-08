import { SectionContainer, SectionHeader } from "@layout/section-container";
import { ProjectGallery } from "@project/project-gallery";
import { projects } from "@shared-data/project-data";

export default function ProjectsSection() {
  return (
    <SectionContainer>
      <SectionHeader title="PROJECTS" linkHref="/projects" linkText="GO TO PROJECTS" />
      <ProjectGallery columns={4} projects={projects} />
    </SectionContainer>
  );
}
