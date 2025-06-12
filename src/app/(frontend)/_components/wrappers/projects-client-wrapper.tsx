"use client";

import { Link } from "@i18n/navigation";
import { ProjectFilter } from "@projects/project-filter";
import { ProjectGallery } from "@projects/project-gallery";
import type { Project, ProjectCategory } from "@shared-types/projects";
import { Button } from "@shared-ui/button";
import { EmptyState } from "@shared/empty-state";
import { SectionContainer } from "@shared/section-container";
import { Building2 } from "lucide-react";
import { useState } from "react";

interface ProjectsClientWrapperProps {
  initialProjects: Project[];
}

export default function ProjectsClientWrapper({ initialProjects }: ProjectsClientWrapperProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all");

  const selectedProjects = initialProjects.filter(
    (project) => selectedCategory === "all" || project.category === selectedCategory,
  );

  if (initialProjects.length === 0) {
    return (
      <SectionContainer width="container" variant="loose">
        <div className="mb-8 md:mb-10 text-center">
          <h2 className="text-3xl text-foreground">BRUNO CÂMERA ARQUITETOS</h2>
          <h1 className="font-semibold text-8xl text-foreground">PROJECTS</h1>
        </div>
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
          width="container"
        />
      </SectionContainer>
    );
  }

  return (
    <SectionContainer width="container" variant="loose">
      <div className="mb-8 md:mb-10 text-center">
        <h2 className="text-3xl text-foreground">BRUNO CÂMERA ARQUITETOS</h2>
        <h1 className="font-semibold text-8xl text-foreground">PROJECTS</h1>
      </div>
      <ProjectFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      {selectedProjects.length === 0 ? (
        <EmptyState
          icon={<Building2 size={48} />}
          title="No Projects Found"
          description={`No projects found in the "${selectedCategory === "all" ? "All" : selectedCategory.replace("-", " ")}" category.`}
          action={
            <Button onClick={() => setSelectedCategory("all")} variant="outline">
              Show All Projects
            </Button>
          }
          variant="compact"
          width="container"
        />
      ) : (
        <ProjectGallery columns={2} projects={selectedProjects} />
      )}
    </SectionContainer>
  );
}
