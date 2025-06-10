import type { CardSize } from "@shared-layout/base-image-card";
import { Gallery, type GalleryColumns, type GalleryGap } from "@shared-layout/gallery";
import { AwardsImageCard } from "@studio/awards-image-card";

interface Award {
  id: string;
  title: string;
  description: string;
  project: string;
  location: string;
  year: string;
  imagePath: string;
  altText: string;
}

interface AwardsGalleryProps {
  columns?: GalleryColumns;
  gap?: GalleryGap;
  awards: Award[];
  className?: string;
}

const CARD_SIZE_MAP: Record<GalleryColumns, CardSize> = {
  2: "xl",
  3: "lg",
  4: "md",
  6: "sm",
};

export function AwardsGallery({ columns = 2, gap = "md", awards, className }: AwardsGalleryProps) {
  const cardSize = CARD_SIZE_MAP[columns];

  return (
    <Gallery
      items={awards}
      renderItem={(award: Award) => (
        <AwardsImageCard key={award.id} award={award} size={cardSize} />
      )}
      columns={columns}
      gap={gap}
      className={className}
    />
  );
}
