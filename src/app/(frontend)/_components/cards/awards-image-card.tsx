import { cn } from "@shared-utilities/utils";
import Image from "next/image";

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
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function AwardsImageCard({ award, size = "md", className }: AwardsImageCardProps) {
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
    <div className={cn("flex flex-col gap-4", className)}>
      <div className={cn("relative group overflow-hidden", sizeClasses[size])}>
        <Image
          src={award.imagePath}
          alt={award.altText}
          fill
          quality={100}
          className="object-cover rounded-sm overflow-hidden"
          sizes={responsiveSizes[size]}
        />
      </div>
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
