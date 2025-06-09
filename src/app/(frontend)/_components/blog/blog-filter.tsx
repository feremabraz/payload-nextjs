"use client";

import type { BlogCategory } from "@shared-types/blog-and-news";
import { cn } from "@shared-utilities/utils";

interface BlogFilterProps {
  selectedCategory: BlogCategory | "all";
  onCategoryChange: (category: BlogCategory | "all") => void;
  className?: string;
}

const filterCategories = [
  { key: "all" as const, label: "SHOW ALL" },
  { key: "publications" as const, label: "PUBLICATIONS" },
  { key: "awards" as const, label: "AWARDS" },
  { key: "conferences" as const, label: "CONFERENCES" },
  { key: "exhibitions" as const, label: "EXHIBITIONS" },
  { key: "news" as const, label: "NEWS" },
];

export function BlogFilter({ selectedCategory, onCategoryChange, className }: BlogFilterProps) {
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
