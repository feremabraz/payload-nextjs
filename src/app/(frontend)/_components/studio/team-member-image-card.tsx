import { BaseImageCard, type CardSize } from "@shared-layout/base-image-card";
import { cn } from "@shared-utilities/utils";

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
  size?: CardSize;
  className?: string;
}

export function TeamMemberImageCard({ member, size = "md", className }: TeamMemberImageCardProps) {
  return (
    <div className={cn("flex flex-col gap-4 mb-8", className)}>
      <BaseImageCard
        imageSrc={member.imagePath}
        imageAlt={member.altText}
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
