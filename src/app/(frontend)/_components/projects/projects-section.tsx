import { Link } from "@i18n/navigation";
import { ProjectImageCard } from "@projects/project-image-card";
import { getProjects } from "@shared-lib/payload-api";
import type { Project } from "@shared-types/projects";
import { Button } from "@shared-ui/button";
import { ContentGrid } from "@shared/content-grid";
import { EmptyState } from "@shared/empty-state";
import { SectionContainer, SectionHeader } from "@shared/section-container";
import { Building2 } from "lucide-react";

export default async function ProjectsSection() {
  const projects = await getProjects(8);

  if (projects.length === 0) {
    return (
      <div id="projects">
        <SectionContainer variant="default" width="wide">
          <SectionHeader title="PROJECTS" linkHref="/projects" linkText="GO TO PROJECTS" />
          <EmptyState
            icon={<Building2 size={64} />}
            title="No Projects Available"
            description="We're currently updating our project portfolio. Please check back soon for our latest work."
            action={
              <Button asChild variant="outline">
                <Link href="/budget">Request a Quote</Link>
              </Button>
            }
            variant="compact"
            width="wide"
          />
        </SectionContainer>
      </div>
    );
  }

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
