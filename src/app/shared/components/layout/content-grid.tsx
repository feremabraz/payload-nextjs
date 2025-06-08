import { ResponsiveGrid } from "@shared-layout/responsive-grid";
import { SectionContainer, SectionHeader } from "@shared-layout/section-container";
import type { ReactNode } from "react";

interface ContentGridProps<T> {
  title: string;
  linkHref: string;
  linkText: string;
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
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

export function ContentGrid<T>({
  title,
  linkHref,
  linkText,
  items,
  renderItem,
  columns = { default: 1, sm: 2, lg: 4 },
  gap = "md",
  className,
}: ContentGridProps<T>) {
  return (
    <SectionContainer>
      <SectionHeader title={title} linkHref={linkHref} linkText={linkText} />
      <ResponsiveGrid columns={columns} gap={gap} className={className}>
        {items.map((item: T, index: number) => renderItem(item, index))}
      </ResponsiveGrid>
    </SectionContainer>
  );
}
