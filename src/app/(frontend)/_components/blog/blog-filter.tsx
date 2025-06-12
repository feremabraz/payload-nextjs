"use client";

import type { BlogCategory } from "@shared-types/blog-and-news";
import { cn } from "@shared-utilities/utils";
import { useTranslations } from "next-intl";

interface BlogFilterProps {
  selectedCategory: BlogCategory | "all";
  onCategoryChange: (category: BlogCategory | "all") => void;
  className?: string;
}

export function BlogFilter({ selectedCategory, onCategoryChange, className }: BlogFilterProps) {
  const t = useTranslations("blog.filter");

  const filterCategories = [
    { key: "all" as const, label: t("showAll") },
    { key: "publications" as const, label: t("publications") },
    { key: "awards" as const, label: t("awards") },
    { key: "conferences" as const, label: t("conferences") },
    { key: "exhibitions" as const, label: t("exhibitions") },
    { key: "news" as const, label: t("news") },
  ];
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
          {category.label}
        </button>
      ))}
    </div>
  );
}
