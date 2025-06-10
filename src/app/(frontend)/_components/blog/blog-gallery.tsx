import { BlogImageCard } from "@blog/blog-image-card";
import type { CardSize } from "@shared-layout/base-image-card";
import { Gallery, type GalleryColumns, type GalleryGap } from "@shared-layout/gallery";
import type { BlogNewsPost } from "@shared-types/blog-and-news";

interface BlogGalleryProps {
  columns?: GalleryColumns;
  gap?: GalleryGap;
  posts: BlogNewsPost[];
  className?: string;
}

const CARD_SIZE_MAP: Record<GalleryColumns, CardSize> = {
  2: "xl",
  3: "lg",
  4: "md",
  6: "sm",
};

export function BlogGallery({ columns = 4, gap = "md", posts, className }: BlogGalleryProps) {
  const cardSize = CARD_SIZE_MAP[columns];

  return (
    <Gallery
      items={posts}
      renderItem={(post: BlogNewsPost) => (
        <BlogImageCard key={post.id} post={post} size={cardSize} />
      )}
      columns={columns}
      gap={gap}
      className={className}
    />
  );
}
