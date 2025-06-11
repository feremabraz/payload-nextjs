import { BaseImageCard, type CardSize } from "@shared-layout/base-image-card";
import type { Project, ProjectItem } from "@shared-types/projects";
import { cn } from "@shared-utilities/utils";
import Link from "next/link";

interface ProjectImageCardProps {
  project: ProjectItem | Project;
  size?: CardSize;
  className?: string;
}

export function ProjectImageCard({ project, size = "md", className }: ProjectImageCardProps) {
  // Handle both legacy ProjectItem (with numeric id) and new Project (with slug)
  const href = "slug" in project ? `/projects/${project.slug}` : `/projects/${project.id}`;

  return (
    <Link href={href} className={cn("block", className)}>
      <BaseImageCard
        imageSrc={project.imageUrl || "/placeholder.svg"}
        imageAlt={project.altText}
        size={size}
        aspectRatio="square"
        overlayContent={
          <div className="absolute inset-0 flex items-center bg-primary opacity-0 group-hover:opacity-40 justify-center transition-opacity duration-200 ease-in-out">
            <span className="text-secondary dark:text-secondary text-sm sm:text-lg md:text-xl font-semibold text-center px-2 sm:px-3 py-1 rounded">
              {project.title}
            </span>
          </div>
        }
      />
    </Link>
  );
}
