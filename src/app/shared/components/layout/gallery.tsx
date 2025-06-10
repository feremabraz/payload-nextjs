import { ResponsiveGrid } from "@shared-layout/responsive-grid";
import type { ReactNode } from "react";

export type GalleryColumns = 2 | 3 | 4 | 6;
export type GalleryGap = "sm" | "md" | "lg";

interface GalleryProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  columns?: GalleryColumns;
  gap?: GalleryGap;
  className?: string;
}

const COLUMNS_CONFIG: Record<
  GalleryColumns,
  { default: number; sm?: number; md?: number; lg?: number }
> = {
  2: { default: 1, md: 2 },
  3: { default: 1, sm: 2, lg: 3 },
  4: { default: 1, sm: 2, md: 3, lg: 4 },
  6: { default: 2, sm: 3, md: 4, lg: 6 },
};

export function Gallery<T>({
  items,
  renderItem,
  columns = 4,
  gap = "md",
  className,
}: GalleryProps<T>) {
  return (
    <ResponsiveGrid columns={COLUMNS_CONFIG[columns]} gap={gap} className={className}>
      {items.map((item, index) => renderItem(item, index))}
    </ResponsiveGrid>
  );
}
