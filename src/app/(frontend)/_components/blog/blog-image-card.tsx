import type { BlogNewsPost } from "@shared-types/blog-and-news";
import { cn } from "@shared-utilities/utils";
import Image from "next/image";

interface BlogImageCardProps {
  post: BlogNewsPost;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function BlogImageCard({ post, size = "md", className }: BlogImageCardProps) {
  const sizeClasses = {
    xl: "aspect-[4/3]", // 2 columns
    lg: "aspect-[4/3]", // 3 columns
    md: "aspect-[4/3]", // 4 columns
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
    <div className={cn("relative group overflow-hidden", sizeClasses[size], className)}>
      <Image
        src={post.imagePath || "/placeholder.svg"}
        alt={post.altText}
        fill
        quality={100}
        className="object-cover hover:scale-105 transition-transform duration-200 ease-in-out"
        sizes={responsiveSizes[size]}
      />
      <div className="absolute inset-0 flex items-end p-4">
        <div className="text-white bg-black bg-opacity-50 p-3 rounded">
          <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1">{post.title}</h3>
          <p className="text-xs sm:text-sm text-gray-200">{post.date}</p>
        </div>
      </div>
    </div>
  );
}
