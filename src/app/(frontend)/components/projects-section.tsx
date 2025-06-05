import { ProjectGallery } from "@components/project-gallery";
import { SectionContainer, SectionHeader } from "@components/section";
import { projects } from "@lib/project-data";

export default function ProjectsSection() {
  return (
    <SectionContainer>
      <SectionHeader title="PROJECTS" linkHref="/projects" linkText="GO TO PROJECTS" />
      <ProjectGallery columns={4} projects={projects} />
    </SectionContainer>
  );
}
