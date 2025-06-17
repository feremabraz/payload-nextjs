import type { Locale } from "@/types/locale";
import { getCompanyValues } from "@actions/values-and-mission";
import { EmptyState } from "@shared/empty-state";
import { SectionContainer } from "@shared/section-container";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

interface ValuesMissionSectionProps {
  locale: Locale;
}

export default async function ValuesMissionSection({ locale }: ValuesMissionSectionProps) {
  const t = await getTranslations({ locale });
  const values = await getCompanyValues(locale);
  return (
    <SectionContainer variant="default" width="container">
      <section className="flex flex-col items-center gap-8 md:gap-12 w-full">
        <h2 className="w-full text-center font-medium text-4xl md:text-6xl text-balance px-4 text-foreground">
          {t("studio.valuesMission.title")}
        </h2>
        <div className="flex flex-col gap-8 w-full max-w-4xl">
          {values.length === 0 ? (
            <EmptyState
              icon="💫"
              title={t("studio.valuesMission.noValuesTitle")}
              description={t("studio.valuesMission.noValuesDescription")}
            />
          ) : (
            values.map((value) => (
              <div key={value.id} className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="font-normal text-base text-foreground text-justify">
                  {value.content}
                </p>
              </div>
            ))
          )}
        </div>
        <div className="relative w-full h-64 md:h-96 max-w-4xl mt-8">
          <Image
            src="/studio/map-base.webp"
            alt={t("studio.valuesMission.worldMapAlt")}
            fill
            className="object-contain opacity-80"
          />
        </div>
      </section>
    </SectionContainer>
  );
}
