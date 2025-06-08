import { TeamMemberImageCard } from "@cards/team-member-image-card";
import { cn } from "@shared-utilities/utils";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  imagePath: string;
  altText: string;
  bio: string;
  interests?: string;
}

interface TeamGalleryProps {
  columns?: 2 | 3 | 4 | 6;
  gap?: "sm" | "md" | "lg";
  members: TeamMember[];
  className?: string;
}

export function TeamGallery({ columns = 3, gap = "md", members, className }: TeamGalleryProps) {
  const gapClasses = {
    sm: "gap-1 sm:gap-2",
    md: "gap-2 sm:gap-3 md:gap-2",
    lg: "gap-3 sm:gap-4 md:gap-3",
  };

  const columnClasses = {
    2: "grid grid-cols-1 md:grid-cols-2",
    3: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    6: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
  };

  const cardSizeMap = {
    2: "xl" as const,
    3: "lg" as const,
    4: "md" as const,
    6: "sm" as const,
  };

  const cardSize = cardSizeMap[columns];

  return (
    <div className={cn("w-full items-start", columnClasses[columns], gapClasses[gap], className)}>
      {members.map((member: TeamMember) => (
        <TeamMemberImageCard key={member.id} member={member} size={cardSize} />
      ))}
    </div>
  );
}
