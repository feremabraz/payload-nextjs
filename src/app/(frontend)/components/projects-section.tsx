import { ProjectGallery } from "@components/project-gallery";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <div className="bg-[#ffffff] text-[#000000] flex flex-col items-center p-8 gap-10 w-full">
      <header className="flex flex-col items-center gap-3 text-center">
        <h1 className="font-apex max-w-[1162px] w-full text-[#000000] text-center text-[100px] font-medium leading-[1.2] tracking-[-4px]">
          PROJECTS
        </h1>
        <Link
          href="/projects"
          className="font-apex text-[#121212] text-center text-[18px] font-normal leading-[1.4] tracking-[-0.36px] uppercase hover:underline"
        >
          GO TO PROJECTS
        </Link>
      </header>
      <ProjectGallery />
    </div>
  );
}
