import type { BlogNewsPost } from "@shared-types/blog-and-news";
import { cn } from "@shared-utilities/utils";
import Image from "next/image";
import Link from "next/link";

interface BlogImageCardProps {
  post: BlogNewsPost;
  size?: "sm" | "md" | "lg" | "xl";
}

export function BlogImageCard({ post, size = "md" }: BlogImageCardProps) {
  const sizeClasses = {
    xl: "aspect-[4/3]", // 2 columns
    lg: "aspect-[4/3]", // 3 columns
    md: "aspect-[3/2]", // 4 columns - matches original BlogNewsCard
    sm: "aspect-[4/3]", // 6 columns
  };

  // Update sizes attribute based on column count
  const responsiveSizes = {
    xl: "(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw", // 2 columns
    lg: "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw", // 3 columns
    md: "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw", // 4 columns
    sm: "(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw", // 6 columns
  };

  return (
    <div className="flex flex-col items-start gap-2 sm:gap-3 flex-1 basis-0 p-0 bg-secondary">
      <Link href={`/blog/${post.id}`} className="block w-full">
        <div
          className={cn(
            "relative w-full flex justify-center items-center self-stretch overflow-hidden rounded-sm group cursor-pointer",
            sizeClasses[size],
          )}
        >
          <Image
            src={post.imagePath || "/placeholder.svg"}
            alt={post.altText}
            fill
            quality={100}
            className="object-cover hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out"
            sizes={responsiveSizes[size]}
          />
        </div>
      </Link>
      <div className="flex flex-col items-start gap-2 self-stretch px-1 pb-2 sm:pb-3">
        <h3 className="text-left font-semibold text-xs sm:text-sm leading-[1.4] self-stretch text-foreground">
          {post.title}
        </h3>
        <p className="text-primary/80 font-normal text-xs sm:text-sm leading-[1.4] self-stretch text-left">
          {post.description}
        </p>
        <p className="text-left font-normal text-xs leading-[1.4] self-stretch mt-auto pt-1 text-foreground">
          {post.date}
        </p>
      </div>
    </div>
  );
}
