import { ProjectGallery } from "@project/project-gallery";
import { projects } from "@shared-data/project-data";
import { SectionContainer, SectionHeader } from "@shared-layout/section-container";

export default function ProjectsSection() {
  return (
    <SectionContainer>
      <SectionHeader title="PROJECTS" linkHref="/projects" linkText="GO TO PROJECTS" />
      <ProjectGallery columns={4} projects={projects} />
    </SectionContainer>
  );
}
