import type { ProjectItem } from "@shared-types/projects";
import { cn } from "@shared-utilities/utils";
import Image from "next/image";
import Link from "next/link";

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
    <Link
      href={`/projects/${project.id}`}
      className={cn(
        "relative group overflow-hidden rounded-sm block",
        sizeClasses[size],
        className,
      )}
    >
      <Image
        src={project.imageUrl || "/placeholder.svg"}
        alt={project.altText}
        fill
        quality={100}
        className="object-cover hover:scale-105 transition-transform duration-200 ease-in-out"
        sizes={responsiveSizes[size]}
      />
      <div className="absolute inset-0 flex items-center bg-primary opacity-0 group-hover:opacity-40 justify-center transition-opacity duration-200 ease-in-out">
        <span className="text-secondary dark:text-secondary text-sm sm:text-lg md:text-xl font-semibold text-center px-2 sm:px-3 py-1 rounded">
          {project.title}
        </span>
      </div>
    </Link>
  );
}
