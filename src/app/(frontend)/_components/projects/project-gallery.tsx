import { ProjectImageCard } from "@projects/project-image-card";
import type { CardSize } from "@shared-layout/base-image-card";
import { Gallery, type GalleryColumns, type GalleryGap } from "@shared-layout/gallery";
import type { Project, ProjectItem } from "@shared-types/projects";

interface ProjectGalleryProps {
  columns?: GalleryColumns;
  gap?: GalleryGap;
  projects: (ProjectItem | Project)[];
  className?: string;
}

const CARD_SIZE_MAP: Record<GalleryColumns, CardSize> = {
  2: "xl",
  3: "lg",
  4: "md",
  6: "sm",
};

export function ProjectGallery({
  columns = 4,
  gap = "md",
  projects,
  className,
}: ProjectGalleryProps) {
  const cardSize = CARD_SIZE_MAP[columns];

  return (
    <Gallery
      items={projects}
      renderItem={(project: ProjectItem | Project, index: number) => (
        <ProjectImageCard key={project.id || index} project={project} size={cardSize} />
      )}
      columns={columns}
      gap={gap}
      className={className}
    />
  );
}
