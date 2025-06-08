import type { BlogNewsPost } from "@shared-types/blog-and-news";
import Image from "next/image";
import Link from "next/link";

export interface BlogNewsPostCardProps extends BlogNewsPost {}

export function BlogNewsPostCard({
  id,
  imagePath,
  altText,
  title,
  description,
  date,
}: BlogNewsPost) {
  return (
    <div className="flex flex-col items-start gap-2 sm:gap-3 flex-1 basis-0 p-0 bg-secondary">
      <Link href={`/blog/${id}`} className="block w-full">
        <div className="relative w-full aspect-[3/2] flex justify-center items-center self-stretch overflow-hidden rounded-sm group cursor-pointer">
          <Image
            src={imagePath}
            alt={altText}
            fill
            className="object-cover hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      </Link>
      <div className="flex flex-col items-start gap-2 self-stretch px-1 pb-2 sm:pb-3">
        <h3 className="text-left font-semibold text-xs sm:text-sm leading-[1.4] self-stretch text-foreground">
          {title}
        </h3>
        <p className="text-primary/80 font-normal text-xs sm:text-sm leading-[1.4] self-stretch text-left">
          {description}
        </p>
        <p className="text-left font-normal text-xs leading-[1.4] self-stretch mt-auto pt-1 text-foreground">
          {date}
        </p>
      </div>
    </div>
  );
}
