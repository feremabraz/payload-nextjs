"use client";

import { useTranslations } from "next-intl";

import type { ProjectCategory } from "@shared-types/projects";
import { cn } from "@shared-utilities/utils";

interface ProjectFilterProps {
  selectedCategory: ProjectCategory | "all";
  onCategoryChange: (category: ProjectCategory | "all") => void;
  className?: string;
}

const filterCategories = [
  { key: "all" as const, labelKey: "projects.categories.all" },
  { key: "houses" as const, labelKey: "projects.categories.residential" },
  { key: "buildings" as const, labelKey: "projects.categories.buildings" },
  { key: "corporative" as const, labelKey: "projects.categories.commercial" },
  { key: "interior-design" as const, labelKey: "projects.categories.interiors" },
  { key: "product-design" as const, labelKey: "projects.categories.other" },
];

export function ProjectFilter({
  selectedCategory,
  onCategoryChange,
  className,
}: ProjectFilterProps) {
  const t = useTranslations();
  return (
    <div
      className={cn(
        "flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-10",
        className,
      )}
    >
      {filterCategories.map((category) => (
        <button
          type="button"
          key={category.key}
          onClick={() => onCategoryChange(category.key)}
          className={cn(
            "text-sm md:text-base font-medium tracking-wide transition-all duration-200 ease-in-out hover:text-muted-foreground",
            "relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-background after:transition-all after:duration-200",
            selectedCategory === category.key
              ? "text-foreground after:w-full"
              : "text-muted-foreground hover:after:w-full hover:after:bg-muted-foreground",
          )}
        >
          {t(category.labelKey)}
        </button>
      ))}
    </div>
  );
}
