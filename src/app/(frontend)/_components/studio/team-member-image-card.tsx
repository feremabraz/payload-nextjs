import type { Media, TeamMember } from "@payload-types";
import { BaseImageCard, type CardSize } from "@shared-layout/base-image-card";
import { cn } from "@shared-utilities/utils";

interface TeamMemberImageCardProps {
  member: TeamMember;
  size?: CardSize;
  className?: string;
}

export function TeamMemberImageCard({ member, size = "md", className }: TeamMemberImageCardProps) {
  // Handle the case where profileImage might be a Media object or just an ID
  const getImageSrc = (profileImage: TeamMember["profileImage"]) => {
    if (typeof profileImage === "object" && profileImage !== null) {
      return (profileImage as Media).url || "";
    }
    return "/studio/team_1.webp"; // Fallback image
  };

  const getImageAlt = (profileImage: TeamMember["profileImage"]) => {
    if (typeof profileImage === "object" && profileImage !== null) {
      return (profileImage as Media).alt || `${member.name}, ${member.role}`;
    }
    return `${member.name}, ${member.role}`;
  };

  return (
    <div className={cn("flex flex-col gap-4 mb-8", className)}>
      <BaseImageCard
        imageSrc={getImageSrc(member.profileImage)}
        imageAlt={getImageAlt(member.profileImage)}
        size={size}
        aspectRatio="portrait"
        hover={false}
      />
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
