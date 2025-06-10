import { ProjectImageCard } from "@projects/project-image-card";
import { projects } from "@shared-data/project-data";
import type { ProjectItem } from "@shared-types/projects";
import { ContentGrid } from "@shared/content-grid";

export default function ProjectsSection() {
  return (
    <div id="projects">
      <ContentGrid<ProjectItem>
        title="PROJECTS"
        linkHref="/projects"
        linkText="GO TO PROJECTS"
        items={projects}
        renderItem={(project) => <ProjectImageCard key={project.id} project={project} size="md" />}
        columns={4}
        gap="md"
      />
    </div>
  );
}
