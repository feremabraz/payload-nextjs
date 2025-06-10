import { BaseImageCard, type CardSize } from "@shared-layout/base-image-card";
import { cn } from "@shared-utilities/utils";

interface AwardsImageCardProps {
  award: {
    id: string;
    title: string;
    description: string;
    project: string;
    location: string;
    year: string;
    imagePath: string;
    altText: string;
  };
  size?: CardSize;
  className?: string;
}

export function AwardsImageCard({ award, size = "md", className }: AwardsImageCardProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <BaseImageCard
        imageSrc={award.imagePath}
        imageAlt={award.altText}
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
