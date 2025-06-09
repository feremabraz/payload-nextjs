"use client";

import { ProjectFilter } from "@projects/project-filter";
import { ProjectGallery } from "@projects/project-gallery";
import { projects } from "@shared-data/project-data";
import type { ProjectCategory } from "@shared-types/projects";
import { SectionContainer } from "@shared/section-container";
import { useState } from "react";

export default function ProjectsClientWrapper() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all");

  const selectedProjects = projects.filter(
    (project) => selectedCategory === "all" || project.category === selectedCategory,
  );

  return (
    <SectionContainer maxWidth="container" paddingY="xl">
      <div className="mb-8 md:mb-10 text-center">
        <h2 className="text-3xl text-foreground">BRUNO CÂMERA ARQUITETOS</h2>
        <h1 className="font-semibold text-8xl text-foreground">PROJECTS</h1>
      </div>
      <ProjectFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      <ProjectGallery columns={2} projects={selectedProjects} />
    </SectionContainer>
  );
}
