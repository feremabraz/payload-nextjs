import { Gallery, type GalleryColumns, type GalleryGap } from "@shared-layout/gallery";
import { SectionContainer, SectionHeader } from "@shared/section-container";
import type { ReactNode } from "react";

interface ContentGridProps<T> {
  title: string;
  linkHref?: string;
  linkText?: string;
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  columns?: GalleryColumns;
  gap?: GalleryGap;
  className?: string;
  variant?: "default" | "compact" | "loose" | "full-height";
  width?: "container" | "wide" | "full";
}

export function ContentGrid<T>({
  title,
  linkHref,
  linkText,
  items,
  renderItem,
  columns = 4,
  gap = "md",
  className,
  variant = "default",
  width = "wide",
}: ContentGridProps<T>) {
  return (
    <SectionContainer variant={variant} width={width}>
      <SectionHeader title={title} linkHref={linkHref} linkText={linkText} />
      <Gallery
        items={items}
        renderItem={renderItem}
        columns={columns}
        gap={gap}
        className={className}
      />
    </SectionContainer>
  );
}
