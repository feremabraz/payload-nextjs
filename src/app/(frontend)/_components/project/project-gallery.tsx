import { ProjectImageCard } from "@project/project-image-card";
import type { ProjectItem } from "@shared-types/projects";
import { cn } from "@shared-utilities/utils";

interface ProjectGalleryProps {
  columns?: 2 | 3 | 4 | 6;
  gap?: "sm" | "md" | "lg";
  projects: ProjectItem[];
  className?: string;
}

export function ProjectGallery({
  columns = 4,
  gap = "md",
  projects,
  className,
}: ProjectGalleryProps) {
  const gapClasses = {
    sm: "gap-1 sm:gap-2",
    md: "gap-2 sm:gap-3 md:gap-2",
    lg: "gap-3 sm:gap-4 md:gap-3",
  };

  const columnClasses = {
    2: "grid grid-cols-1 md:grid-cols-2",
    3: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    6: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
  };

  const cardSizeMap = {
    2: "xl" as const,
    3: "lg" as const,
    4: "md" as const,
    6: "sm" as const,
  };

  const cardSize = cardSizeMap[columns];

  return (
    <div className={cn("w-full items-start", columnClasses[columns], gapClasses[gap], className)}>
      {projects.map((project: ProjectItem, index: number) => (
        <ProjectImageCard key={project.id || index} project={project} size={cardSize} />
      ))}
    </div>
  );
}
