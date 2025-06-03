import type { ProjectItem } from "@shared-types/projects";
import Image from "next/image";

interface ProjectImageCardProps {
  project: ProjectItem;
}

export function ProjectImageCard({ project }: ProjectImageCardProps) {
  return (
    <div className="relative aspect-[4/3] group overflow-hidden">
      <Image
        src={project.imageUrl || "/placeholder.svg"}
        alt={project.altText}
        fill
        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      {project.overlayText && (
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <span className="text-white text-lg md:text-xl font-semibold text-center bg-black bg-opacity-30 px-3 py-1 rounded">
            {project.overlayText}
          </span>
        </div>
      )}
    </div>
  );
}
