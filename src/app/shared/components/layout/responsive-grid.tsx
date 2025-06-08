import { cn } from "@shared-utilities/utils";
import type { ReactNode } from "react";

interface ResponsiveGridProps {
  children: ReactNode;
  columns?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: "sm" | "md" | "lg";
  className?: string;
}

export function ResponsiveGrid({
  children,
  columns = { default: 1, sm: 2, lg: 4 },
  gap = "md",
  className,
}: ResponsiveGridProps) {
  const gapClasses = {
    sm: "gap-2 sm:gap-3",
    md: "gap-3 sm:gap-4 md:gap-3",
    lg: "gap-4 sm:gap-5 md:gap-4",
  };

  const gridClasses = [];

  if (columns.default) gridClasses.push(`grid-cols-${columns.default}`);
  if (columns.sm) gridClasses.push(`sm:grid-cols-${columns.sm}`);
  if (columns.md) gridClasses.push(`md:grid-cols-${columns.md}`);
  if (columns.lg) gridClasses.push(`lg:grid-cols-${columns.lg}`);
  if (columns.xl) gridClasses.push(`xl:grid-cols-${columns.xl}`);

  return (
    <div className={cn("grid w-full", gapClasses[gap], gridClasses.join(" "), className)}>
      {children}
    </div>
  );
}
