import { getStudioInfo } from "@actions/studio-info";
import type { Media } from "@payload-types";
import { EmptyState } from "@shared/empty-state";
import { SectionContainer } from "@shared/section-container";
import { StudioCard } from "@studio/studio-card";
import { Building2 } from "lucide-react";

export default async function StudioInfoSection() {
  const studioData = await getStudioInfo();

  if (studioData.length === 0) {
    return (
      <SectionContainer variant="default" width="container">
        <section className="flex flex-col items-center gap-8 md:gap-12 w-full">
          <EmptyState
            icon={<Building2 className="h-12 w-12" />}
            title="No studio information available"
            description="We're working on updating our studio information. Check back soon!"
          />
        </section>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer variant="default" width="container">
      <section className="flex flex-col items-center gap-8 md:gap-12 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {studioData.map((item) => {
            // Handle the case where image might be a Media object or just an ID
            const getImageSrc = (image: typeof item.image) => {
              if (typeof image === "object" && image !== null) {
                return (image as Media).url || "";
              }
              return "/studio/modern-white-dining-set.webp"; // Fallback image
            };

            const getImageAlt = (image: typeof item.image) => {
              if (typeof image === "object" && image !== null) {
                return (image as Media).alt || item.title;
              }
              return item.title;
            };

            return (
              <StudioCard
                key={item.title}
                imageSrc={getImageSrc(item.image)}
                imageAlt={getImageAlt(item.image)}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </section>
    </SectionContainer>
  );
}
