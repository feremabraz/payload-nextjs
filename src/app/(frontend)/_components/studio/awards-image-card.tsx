import type { Award, Media } from "@payload-types";
import { BaseImageCard, type CardSize } from "@shared-layout/base-image-card";
import { cn } from "@shared-utilities/utils";

interface AwardsImageCardProps {
  award: Award;
  size?: CardSize;
  className?: string;
}

export function AwardsImageCard({ award, size = "md", className }: AwardsImageCardProps) {
  // Handle the case where awardImage might be a Media object or just an ID
  const getImageSrc = (awardImage: Award["awardImage"]) => {
    if (typeof awardImage === "object" && awardImage !== null) {
      return (awardImage as Media).url || "";
    }
    return "/studio/award_1.webp"; // Fallback image
  };

  const getImageAlt = (awardImage: Award["awardImage"]) => {
    if (typeof awardImage === "object" && awardImage !== null) {
      return (awardImage as Media).alt || award.title;
    }
    return award.title;
  };

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <BaseImageCard
        imageSrc={getImageSrc(award.awardImage)}
        imageAlt={getImageAlt(award.awardImage)}
        size={size}
        aspectRatio="square"
        hover={false}
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-foreground">{award.title}</h3>
        <p className="text-sm font-medium text-muted-foreground">{award.project}</p>
        <p className="text-sm text-foreground">{award.description}</p>
        <p className="text-xs text-muted-foreground">
          {award.location} • {award.year}
        </p>
      </div>
    </div>
  );
}
