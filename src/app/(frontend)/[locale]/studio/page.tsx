import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";

import { SectionContainer } from "@shared/section-container";

import type { Locale } from "@/types/locale";
import NavigationSection from "@navigation/navigation-section";
import FooterSection from "@shared/footer-section";
import TestimonialsSection from "@shared/testimonial-section";
import AwardsSection from "@studio/awards-section";
import GuaranteesSection from "@studio/guarantees-section";
import PublicationsSection from "@studio/publications-section";
import TeamSection from "@studio/team-section";
import ValuesMissionSection from "@studio/values-mission-section";
import { getTranslations, setRequestLocale } from "next-intl/server";

import config from "@/payload.config";

export default async function StudioPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const { locale } = params;

  // Type guard to ensure locale is valid
  const validLocale: Locale = locale === "en" || locale === "pt" ? (locale as Locale) : "en";

  // Enable static rendering
  setRequestLocale(validLocale);

  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user: _user } = await payload.auth({ headers });
  const t = await getTranslations({ locale: validLocale });

  return (
    <>
      <NavigationSection />
      <SectionContainer width="container" variant="loose">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-foreground">
            {t("studio.companyName")}
          </h2>
          <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground">
            {t("studio.pageTitle")}
          </h1>
        </div>
        <div id="values">
          <ValuesMissionSection locale={validLocale} />
        </div>
        <div id="profile">
          <GuaranteesSection locale={validLocale} />
        </div>
        <div id="team">
          <TeamSection locale={validLocale} />
        </div>
        <div id="studio">
          <AwardsSection locale={validLocale} />
        </div>
        <PublicationsSection locale={validLocale} />
        <TestimonialsSection locale={validLocale} />
      </SectionContainer>
      <FooterSection locale={validLocale} />
    </>
  );
}
