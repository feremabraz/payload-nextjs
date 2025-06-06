"use client";

import { NavigationBarWithLogo } from "@components/navigation-bar";
import { SideMenu } from "@components/side-menu";
import { projects } from "@lib/project-data";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import type { ProjectItem } from "@shared-types/projects";
import { isMenuOpenAtom } from "@store/atoms";
import { Sheet, SheetContent, SheetTitle } from "@ui/sheet";
import { useAtom } from "jotai";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

interface ProjectCustomNavigationProps {
  id: number;
}

function HeroImage({ project }: { project: ProjectItem }) {
  return (
    <Image src={project.imageUrl} alt={project.altText} fill className="object-cover" priority />
  );
}

export default function ProjectCustomNavigation({ id }: ProjectCustomNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useAtom(isMenuOpenAtom);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return null;
  }

  const mainLocation = project.location.split(",")[0].toUpperCase();

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <section className="relative self-stretch w-full h-[var(--height-hero-sm)] sm:h-[var(--height-hero-md)] md:h-[var(--height-hero-lg)] lg:h-[var(--height-hero-xl)] bg-cover bg-center bg-no-repeat">
        <HeroImage project={project} />
        <div className="absolute inset-0 z-0 bg-black/20" />
        <div className="relative z-10 flex flex-col w-full h-full px-[var(--spacing-sm)] sm:px-[var(--spacing-md)] md:px-[var(--spacing-xl)] py-[var(--spacing-sm)] sm:py-[var(--spacing-lg)]">
          <NavigationBarWithLogo background="dark" />
          <div className="flex flex-col items-center justify-center flex-grow w-full text-center text-white">
            <p className="text-hero-subtitle font-light mb-2">
              {project.category.replace("-", " ").toUpperCase()} IN
            </p>
            <h1 className="text-hero-title font-semibold mb-4">{mainLocation}</h1>
            <p className="text-hero-description font-light mb-8">{project.location}</p>
            <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-pulse" />
          </div>
        </div>
      </section>
      <SheetContent side="right" className="w-full max-w-md p-0 border-none bg-transparent">
        <VisuallyHidden>
          <SheetTitle>Navigation Menu</SheetTitle>
        </VisuallyHidden>
        <SideMenu />
      </SheetContent>
    </Sheet>
  );
}
