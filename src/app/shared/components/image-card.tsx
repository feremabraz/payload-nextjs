import { cn } from "@lib/utils";
import Image from "next/image";
import type { ReactNode } from "react";

interface ImageCardProps {
  imageSrc: string;
  imageAlt: string;
  aspectRatio?: "square" | "video" | "portrait" | "landscape" | "auto";
  sizes?: string;
  priority?: boolean;
  quality?: number;
  children?: ReactNode;
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
  hover?: boolean;
  overlayText?: string;
}

export function ImageCard({
  imageSrc,
  imageAlt,
  aspectRatio = "landscape",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  quality = 75,
  children,
  className,
  imageClassName,
  contentClassName,
  hover = true,
  overlayText,
}: ImageCardProps) {
  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[3/2]",
    auto: "",
  };

  return (
    <article className={cn("flex flex-col items-start gap-2 sm:gap-3 w-full", className)}>
      <div
        className={cn(
          "relative w-full flex flex-col items-center self-stretch overflow-hidden",
          aspectRatioClasses[aspectRatio],
          hover && "group",
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          quality={quality}
          priority={priority}
          sizes={sizes}
          className={cn(
            "object-cover",
            hover && "transition-transform duration-200 ease-in-out group-hover:scale-105",
            imageClassName,
          )}
        />
        {overlayText && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-sm sm:text-lg md:text-xl font-semibold text-center bg-black bg-opacity-30 px-2 sm:px-3 py-1 rounded">
              {overlayText}
            </span>
          </div>
        )}
      </div>
      {children && (
        <div
          className={cn(
            "flex flex-col items-start gap-1 sm:gap-2 self-stretch px-1",
            contentClassName,
          )}
        >
          {children}
        </div>
      )}
    </article>
  );
}
