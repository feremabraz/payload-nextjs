import { cn } from "@shared-utilities/utils";
import Image from "next/image";

interface TeamMemberImageCardProps {
  member: {
    id: string;
    name: string;
    role: string;
    imagePath: string;
    altText: string;
    bio: string;
    interests?: string;
  };
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function TeamMemberImageCard({ member, size = "md", className }: TeamMemberImageCardProps) {
  const sizeClasses = {
    xl: "aspect-[3/4]", // 2 columns
    lg: "aspect-[3/4]", // 3 columns
    md: "aspect-[3/4]", // 4 columns
    sm: "aspect-[3/4]", // 6 columns
  };

  // Update sizes attribute based on column count
  const responsiveSizes = {
    xl: "(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw", // 2 columns
    lg: "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw", // 3 columns
    md: "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw", // 4 columns
    sm: "(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw", // 6 columns
  };

  return (
    <div className={cn("flex flex-col gap-4 mb-8", className)}>
      <div className={cn("relative group overflow-hidden", sizeClasses[size])}>
        <Image
          src={member.imagePath}
          alt={member.altText}
          fill
          quality={100}
          className="object-cover rounded-sm overflow-hidden"
          sizes={responsiveSizes[size]}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {member.role}
        </p>
        <p className="text-sm text-foreground pr-4">{member.bio}</p>
        {member.interests && (
          <div className="mt-2">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Interests:
            </p>
            <p className="text-xs text-foreground">{member.interests}</p>
          </div>
        )}
      </div>
    </div>
  );
}
