import { getStudioInfo } from "@actions/studio-info";
import NavigationSection from "@navigation/navigation-section";
import type { Media, StudioInfo } from "@payload-types";
import { ContentGrid } from "@shared/content-grid";
import { EmptyState } from "@shared/empty-state";
import { StudioCard } from "@studio/studio-card";
import { Building2 } from "lucide-react";
import { getTranslations } from "next-intl/server";

interface StudioSectionProps {
  locale: string;
}

export default async function StudioSection({ locale }: StudioSectionProps) {
  const t = await getTranslations({ locale });
  const studioData = await getStudioInfo();

  if (studioData.length === 0) {
    return (
      <div id="studio">
        <ContentGrid
          title={t("studio.title").toUpperCase()}
          linkHref="/studio"
          linkText={t("studio.goToStudio")}
          items={[]}
          renderItem={() => null}
          columns={4}
          gap="md"
        />
        <div className="px-4">
          <EmptyState
            icon={<Building2 className="h-12 w-12" />}
            title="studio.noStudioInfo"
            description="studio.noStudioInfoDescription"
          />
        </div>
      </div>
    );
  }

  return (
    <div id="studio">
      <ContentGrid
        title={t("studio.title").toUpperCase()}
        linkHref="/studio"
        linkText={t("studio.goToStudio")}
        items={studioData}
        renderItem={(item: StudioInfo) => {
          // Handle the case where image might be a Media object or just an ID
          const getImageSrc = (image: StudioInfo["image"]) => {
            if (typeof image === "object" && image !== null) {
              return (image as Media).url || "";
            }
            return "/studio/modern-white-dining-set.webp"; // Fallback image
          };

          const getImageAlt = (image: StudioInfo["image"]) => {
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
        }}
        columns={4}
        gap="md"
      />
    </div>
  );
}
