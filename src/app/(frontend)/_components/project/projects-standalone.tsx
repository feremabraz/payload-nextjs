"use client";

import { ProjectFilter } from "@project/project-filter";
import { ProjectGallery } from "@project/project-gallery";
import { projects } from "@shared-data/project-data";
import { SectionContainer, SectionHeader } from "@shared-layout/section-container";
import type { ProjectCategory } from "@shared-types/projects";
import { useState } from "react";

export default function ProjectsStandalone() {
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
