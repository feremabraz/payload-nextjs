import { ProjectImageCard } from "@components/project-image-card";
import { projects } from "@lib/project-data";

export function ProjectGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full items-center gap-2 px-12">
      {projects.map((project) => (
        <ProjectImageCard key={project.id} project={project} />
      ))}
    </div>
  );
}
