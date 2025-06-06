import { cn } from "@lib/utils";
import type { ProjectItem } from "@shared-types/projects";
import Image from "next/image";

interface ProjectImageCardProps {
  project: ProjectItem;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function ProjectImageCard({ project, size = "md", className }: ProjectImageCardProps) {
  const sizeClasses = {
    xl: "aspect-[4/3]", // 2 columns
    lg: "aspect-[4/3]", // 3 columns
    md: "aspect-[4/3]", // 4 columns
    sm: "aspect-[4/3]", // 6 columns
  };

  // Update sizes attribute based on column count
  const responsiveSizes = {
    xl: "(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw", // 2 columns
    lg: "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw", // 3 columns
    md: "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw", // 4 columns
    sm: "(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw", // 6 columns
  };

  return (
    <div className={cn("relative group overflow-hidden", sizeClasses[size], className)}>
      <Image
        src={project.imageUrl || "/placeholder.svg"}
        alt={project.altText}
        fill
        quality={100}
        className="object-cover hover-scale"
        sizes={responsiveSizes[size]}
      />
      {project.overlayText && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-overlay font-semibold text-center bg-black bg-opacity-30 px-overlay py-1 rounded">
            {project.overlayText}
          </span>
        </div>
      )}
    </div>
  );
}
