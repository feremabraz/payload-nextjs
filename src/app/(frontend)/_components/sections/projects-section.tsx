import { SectionContainer, SectionHeader } from "@layout/section-container";
import { projects } from "@lib/project-data";
import { ProjectGallery } from "@project/project-gallery";

export default function ProjectsSection() {
  return (
    <SectionContainer>
      <SectionHeader title="PROJECTS" linkHref="/projects" linkText="GO TO PROJECTS" />
      <ProjectGallery columns={4} projects={projects} />
    </SectionContainer>
  );
}
