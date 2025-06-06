"use client";

import { ProjectFilter } from "@components/project-filter";
import { ProjectGallery } from "@components/project-gallery";
import { SectionContainer, SectionHeader } from "@components/section";
import { projects } from "@lib/project-data";
import type { ProjectCategory } from "@shared-types/projects";
import { useState } from "react";

export default function ProjectsStandalone() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all");

  const selectedProjects = projects.filter(
    (project) => selectedCategory === "all" || project.category === selectedCategory,
  );

  return (
    <SectionContainer maxWidth="container" paddingY="xl" className="bg-white">
      <div className="mb-section text-center">
        <h2 className="text-3xl text-brand-black">BRUNO CÂMERA ARQUITETOS</h2>
        <h1 className="font-semibold text-8xl text-brand-black">PROJECTS</h1>
      </div>
      <ProjectFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      <ProjectGallery columns={2} projects={selectedProjects} />
    </SectionContainer>
  );
}
