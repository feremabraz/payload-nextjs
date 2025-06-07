import { ProjectGallery } from "@components/project-gallery";
import { projects } from "@lib/project-data";
import { SectionContainer, SectionHeader } from "@shared-components/section-container";

export default function ProjectsSection() {
  return (
    <SectionContainer>
      <SectionHeader title="PROJECTS" linkHref="/projects" linkText="GO TO PROJECTS" />
      <ProjectGallery columns={4} projects={projects} />
    </SectionContainer>
  );
}
