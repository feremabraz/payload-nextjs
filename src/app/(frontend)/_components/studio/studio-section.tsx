import { studioData } from "@shared-data/studio-data";
import type { StudioCardProps } from "@shared-types/studio";
import { ContentGrid } from "@shared/content-grid";
import { StudioCard } from "@studio/studio-card";

export default function StudioSection() {
  return (
    <div id="studio">
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
        columns={4}
        gap="md"
      />
    </div>
  );
}
