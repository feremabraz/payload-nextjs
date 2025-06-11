import type { TeamMember } from "@payload-types";
import type { CardSize } from "@shared-layout/base-image-card";
import { Gallery, type GalleryColumns, type GalleryGap } from "@shared-layout/gallery";
import { TeamMemberImageCard } from "@studio/team-member-image-card";

interface TeamGalleryProps {
  columns?: GalleryColumns;
  gap?: GalleryGap;
  members: TeamMember[];
  className?: string;
}

const CARD_SIZE_MAP: Record<GalleryColumns, CardSize> = {
  2: "xl",
  3: "lg",
  4: "md",
  6: "sm",
};

export function TeamGallery({ columns = 3, gap = "md", members, className }: TeamGalleryProps) {
  const cardSize = CARD_SIZE_MAP[columns];

  return (
    <Gallery
      items={members}
      renderItem={(member: TeamMember) => (
        <TeamMemberImageCard key={member.id} member={member} size={cardSize} />
      )}
      columns={columns}
      gap={gap}
      className={className}
    />
  );
}
