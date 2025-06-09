import { ProjectGallery } from "@projects/project-gallery";
import { projects } from "@shared-data/project-data";
import { SectionContainer, SectionHeader } from "@shared/section-container";

export default function ProjectsSection() {
  return (
    <div id="projects">
      <SectionContainer>
        <SectionHeader title="PROJECTS" linkHref="/projects" linkText="GO TO PROJECTS" />
        <ProjectGallery columns={4} projects={projects} />
      </SectionContainer>
    </div>
  );
}
