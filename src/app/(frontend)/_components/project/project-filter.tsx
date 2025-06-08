"use client";

import type { ProjectCategory } from "@shared-types/projects";
import { cn } from "@shared-utilities/utils";

interface ProjectFilterProps {
  selectedCategory: ProjectCategory | "all";
  onCategoryChange: (category: ProjectCategory | "all") => void;
  className?: string;
}

const filterCategories = [
  { key: "all" as const, label: "SHOW ALL" },
  { key: "houses" as const, label: "HOUSES" },
  { key: "buildings" as const, label: "BUILDINGS" },
  { key: "corporative" as const, label: "CORPORATIVE" },
  { key: "interior-design" as const, label: "INTERIOR DESIGN" },
  { key: "product-design" as const, label: "PRODUCT DESIGN" },
];

export function ProjectFilter({
  selectedCategory,
  onCategoryChange,
  className,
}: ProjectFilterProps) {
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
            "text-sm md:text-base font-medium tracking-wide transition-all duration-200 ease-in-out hover:text-gray-600",
            "relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-background after:transition-all after:duration-200",
            selectedCategory === category.key
              ? "text-black after:w-full"
              : "text-gray-400 hover:after:w-full hover:after:bg-gray-600",
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
