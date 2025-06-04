import type { BlogNewsPost } from "@shared-types/blog-and-news";
import Image from "next/image";

export interface BlogNewsPostCardProps extends Omit<BlogNewsPost, "id"> {}

export function BlogNewsPostCard({
  imagePath,
  altText,
  title,
  description,
  date,
}: BlogNewsPostCardProps) {
  return (
    <div className="bg-[#ffffff] flex flex-col items-start gap-2 sm:gap-3 flex-1 basis-0 p-0">
      <div className="relative w-full aspect-[3/2] flex justify-center items-center self-stretch">
        <Image
          src={imagePath}
          alt={altText}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="flex flex-col items-start gap-2 self-stretch px-2 sm:px-3 pb-2 sm:pb-3">
        <h3 className="text-[#000000] text-left font-medium text-xs sm:text-sm leading-[1.4] tracking-[-0.24px] sm:tracking-[-0.28px] self-stretch">
          {title}
        </h3>
        <p className="text-neutral-sub-title font-normal text-xs sm:text-sm leading-[1.4] tracking-[-0.24px] sm:tracking-[-0.28px] self-stretch text-left">
          {description}
        </p>
        <p className="text-[#000000] text-left font-normal text-xs leading-[1.4] tracking-[-0.20px] sm:tracking-[-0.24px] self-stretch mt-auto pt-1">
          {date}
        </p>
      </div>
    </div>
  );
}
