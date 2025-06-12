"use client";

import { NavigationBarWithLogo } from "@navigation/navigation-bar";
import { SideMenu } from "@navigation/side-menu";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { isMenuOpenAtom } from "@shared-store/atoms";
import type { Project } from "@shared-types/projects";
import { Sheet, SheetContent, SheetTitle } from "@shared-ui/sheet";
import { useAtom } from "jotai";
import { ArrowDown } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface ProjectCustomNavigationProps {
  project: Project;
}

function HeroImage({ project }: { project: Project }) {
  return (
    <Image src={project.imageUrl} alt={project.altText} fill className="object-cover" priority />
  );
}

export default function ProjectCustomNavigation({ project }: ProjectCustomNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useAtom(isMenuOpenAtom);
  const t = useTranslations();

  const mainLocation = project.location.split(",")[0].toUpperCase();

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <section className="relative self-stretch w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] bg-cover bg-center bg-no-repeat">
        <HeroImage project={project} />
        <div className="absolute inset-0 z-0 bg-black/20" />
        <div className="relative z-10 flex flex-col w-full h-full px-3 sm:px-4 md:px-6 py-3 sm:py-5">
          <NavigationBarWithLogo background="dark" />
          <div className="flex flex-col items-center justify-center flex-grow w-full text-center text-white">
            <p className="text-lg sm:text-xl md:text-2xl font-light mb-2">
              {t("projects.projectIn", {
                category: project.category.replace("-", " ").toUpperCase(),
              })}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold mb-4">
              {mainLocation}
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-light mb-8">{project.location}</p>
            <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-pulse" />
          </div>
        </div>
      </section>
      <SheetContent
        side="right"
        className="w-full max-w-md p-0 border-none bg-transparent"
        hideDefaultCloseButton
      >
        <VisuallyHidden>
          <SheetTitle>{t("navigation.navigationMenu")}</SheetTitle>
        </VisuallyHidden>
        <SideMenu />
      </SheetContent>
    </Sheet>
  );
}
