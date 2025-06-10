import { BaseImageCard, type CardSize } from "@shared-layout/base-image-card";
import type { BlogNewsPost } from "@shared-types/blog-and-news";
import Link from "next/link";

interface BlogImageCardProps {
  post: BlogNewsPost;
  size?: CardSize;
}

export function BlogImageCard({ post, size = "md" }: BlogImageCardProps) {
  return (
    <div className="flex-1 basis-0 p-0 bg-secondary">
      <Link href={`/blog/${post.id}`} className="block w-full">
        <BaseImageCard
          imageSrc={post.imagePath || "/placeholder.svg"}
          imageAlt={post.altText}
          size={size}
          imageClassName="hover:brightness-110 transition-all duration-300 ease-in-out"
          contentClassName="pb-2 sm:pb-3"
        >
          <h3 className="text-left font-semibold text-xs sm:text-sm leading-[1.4] self-stretch text-foreground">
            {post.title}
          </h3>
          <p className="text-primary/80 font-normal text-xs sm:text-sm leading-[1.4] self-stretch text-left">
            {post.description}
          </p>
          <p className="text-left font-normal text-xs leading-[1.4] self-stretch mt-auto pt-1 text-foreground">
            {post.date}
          </p>
        </BaseImageCard>
      </Link>
    </div>
  );
}
