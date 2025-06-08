import { StudioCard } from "@cards/studio-card";
import { ContentGrid } from "@layout/content-grid";
import { studioData } from "@shared-data/studio-data";
import type { StudioCardProps } from "@shared-types/studio";

export default function StudioSection() {
  return (
    <ContentGrid<StudioCardProps>
      title="STUDIO"
      linkHref="/studio"
      linkText="GO TO STUDIO"
      items={studioData}
      renderItem={(item) => (
        <StudioCard
          key={item.title}
          imageSrc={item.imageSrc}
          imageAlt={item.imageAlt}
          title={item.title}
          description={item.description}
        />
      )}
      columns={{ default: 1, sm: 2, lg: 4 }}
      gap="md"
    />
  );
}
