"use client";

import { cn } from "@lib/utils";
import type { ProjectCategory } from "@shared-types/projects";

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
    <div className={cn("flex flex-wrap justify-center gap-filter mb-section", className)}>
      {filterCategories.map((category) => (
        <button
          type="button"
          key={category.key}
          onClick={() => onCategoryChange(category.key)}
          className={cn(
            "text-button font-medium tracking-wide transition-smooth hover:text-gray-600",
            "relative project-filter-item",
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
