import { ProjectImageCard } from "@projects/project-image-card";
import { getProjects } from "@shared-lib/payload-api";
import type { Project } from "@shared-types/projects";
import { ContentGrid } from "@shared/content-grid";

export default async function ProjectsSection() {
  const projects = await getProjects(8);

  return (
    <div id="projects">
      <ContentGrid<Project>
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
