import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";

import { SectionContainer } from "@shared/section-container";

import NavigationSection from "@navigation/navigation-section";
import FooterSection from "@shared/footer-section";
import TestimonialsSection from "@shared/testimonial-section";
import AwardsSection from "@studio/awards-section";
import GuaranteesSection from "@studio/guarantees-section";
import PublicationsSection from "@studio/publications-section";
import TeamSection from "@studio/team-section";
import ValuesMissionSection from "@studio/values-mission-section";
import { getTranslations } from "next-intl/server";

import config from "@/payload.config";

export default async function StudioPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const { locale } = params;

  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user: _user } = await payload.auth({ headers });
  const t = await getTranslations({ locale });

  return (
    <>
      <NavigationSection />
      <SectionContainer width="container" variant="loose">
        <div className="text-center">
          <h2 className="text-3xl text-foreground">{t("studio.companyName")}</h2>
          <h1 className="font-semibold text-8xl text-foreground">{t("studio.pageTitle")}</h1>
        </div>
        <div id="values">
          <ValuesMissionSection locale={locale} />
        </div>
        <div id="profile">
          <GuaranteesSection locale={locale} />
        </div>
        <div id="team">
          <TeamSection locale={locale} />
        </div>
        <div id="studio">
          <AwardsSection locale={locale} />
        </div>
        <PublicationsSection locale={locale} />
        <TestimonialsSection locale={locale} />
      </SectionContainer>
      <FooterSection locale={locale} />
    </>
  );
}
