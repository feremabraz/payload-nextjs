import { cn } from "@shared-utilities/utils";
import Image from "next/image";
import type { ReactNode } from "react";

export type CardSize = "sm" | "md" | "lg" | "xl";
export type AspectRatio = "square" | "video" | "portrait" | "landscape" | "auto";

interface BaseImageCardProps {
  imageSrc: string;
  imageAlt: string;
  size?: CardSize;
  aspectRatio?: AspectRatio;
  priority?: boolean;
  quality?: number;
  children?: ReactNode;
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
  hover?: boolean;
  overlayContent?: ReactNode;
  onClick?: () => void;
}

const SIZE_TO_ASPECT_RATIO: Record<CardSize, AspectRatio> = {
  xl: "landscape", // 2 columns
  lg: "landscape", // 3 columns
  md: "landscape", // 4 columns
  sm: "square", // 6 columns
};

const ASPECT_RATIO_CLASSES: Record<AspectRatio, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[3/2]",
  auto: "",
};

const RESPONSIVE_SIZES: Record<CardSize, string> = {
  xl: "(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw", // 2 columns
  lg: "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw", // 3 columns
  md: "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw", // 4 columns
  sm: "(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw", // 6 columns
};

export function BaseImageCard({
  imageSrc,
  imageAlt,
  size = "md",
  aspectRatio,
  priority = false,
  quality = 100,
  children,
  className,
  imageClassName,
  contentClassName,
  hover = true,
  overlayContent,
  onClick,
}: BaseImageCardProps) {
  const finalAspectRatio = aspectRatio || SIZE_TO_ASPECT_RATIO[size];
  const Component = onClick ? "button" : "div";

  return (
    <Component
      className={cn("flex flex-col items-start gap-2 sm:gap-3 w-full", className)}
      onClick={onClick}
      type={onClick ? "button" : undefined}
    >
      <div
        className={cn(
          "relative w-full flex flex-col items-center self-stretch overflow-hidden rounded-sm",
          ASPECT_RATIO_CLASSES[finalAspectRatio],
          hover && "group",
          onClick && "cursor-pointer",
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          quality={quality}
          priority={priority}
          sizes={RESPONSIVE_SIZES[size]}
          className={cn(
            "object-cover",
            hover && "transition-transform duration-200 ease-in-out group-hover:scale-105",
            imageClassName,
          )}
        />
        {overlayContent && (
          <div className="absolute inset-0 flex items-center justify-center">{overlayContent}</div>
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
    </Component>
  );
}
