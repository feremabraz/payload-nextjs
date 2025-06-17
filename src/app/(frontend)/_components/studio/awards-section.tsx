import type { Locale } from "@/types/locale";
import { getAwards } from "@actions/awards";
import { EmptyState } from "@shared/empty-state";
import { SectionContainer } from "@shared/section-container";
import { AwardsGallery } from "@studio/awards-gallery";
import { Trophy } from "lucide-react";
import { getTranslations } from "next-intl/server";

interface AwardsSectionProps {
  locale: Locale;
}

export default async function AwardsSection({ locale }: AwardsSectionProps) {
  const t = await getTranslations({ locale });
  const awards = await getAwards(locale);

  if (awards.length === 0) {
    return (
      <SectionContainer variant="default" width="container">
        <section className="flex flex-col items-center gap-8 md:gap-12 w-full">
          <h2 className="w-full text-center font-medium text-4xl md:text-6xl text-balance px-4 text-foreground">
            {t("studio.awards")}
          </h2>
          <EmptyState
            icon={<Trophy className="h-12 w-12" />}
            title="studio.noAwards"
            description="studio.noAwardsDescription"
          />
        </section>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer variant="default" width="container">
      <section className="flex flex-col items-center gap-8 md:gap-12 w-full">
        <h2 className="w-full text-center font-medium text-4xl md:text-6xl text-balance px-4 text-foreground">
          {t("studio.awards")}
        </h2>
        <AwardsGallery columns={2} awards={awards} />
      </section>
    </SectionContainer>
  );
}
