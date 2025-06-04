import { ProjectGallery } from "@components/project-gallery";
import { SectionContainer, SectionHeader } from "@components/section";

export default function ProjectsSection() {
  return (
    <SectionContainer>
      <SectionHeader title="PROJECTS" linkHref="/projects" linkText="GO TO PROJECTS" />
      <ProjectGallery />
    </SectionContainer>
  );
}
