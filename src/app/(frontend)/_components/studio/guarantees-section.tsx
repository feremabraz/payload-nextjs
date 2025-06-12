import { SectionContainer } from "@shared/section-container";
import { getTranslations } from "next-intl/server";

export default async function GuaranteesSection() {
  const t = await getTranslations();
  return (
    <SectionContainer variant="default" width="container">
      <section className="flex flex-col items-center gap-8 md:gap-12 w-full">
        <h2 className="w-full text-center font-medium text-4xl md:text-6xl text-balance px-4 text-foreground">
          {t("studio.guarantees.title")}
        </h2>
        <div className="w-full max-w-4xl mx-auto text-center">
          <p className="font-normal text-lg text-foreground">
            {t("studio.guarantees.description")}
          </p>
        </div>
      </section>
    </SectionContainer>
  );
}
