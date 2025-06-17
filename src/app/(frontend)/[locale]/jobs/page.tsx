import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";

import type { Locale } from "@/types/locale";
import JobsSection from "@jobs/jobs-section";
import NavigationSection from "@navigation/navigation-section";
import FooterSection from "@shared/footer-section";
import { SectionContainer, SectionHeader } from "@shared/section-container";

import config from "@/payload.config";

export default async function JobsPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const { locale } = params;

  // Type guard to ensure locale is valid
  const validLocale: Locale = locale === "en" || locale === "pt" ? (locale as Locale) : "en";

  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user: _user } = await payload.auth({ headers });

  return (
    <>
      <NavigationSection />
      <SectionContainer width="container" variant="loose">
        <SectionHeader title="OPEN JOBS" />
        <JobsSection locale={validLocale} />
      </SectionContainer>
      <FooterSection locale={validLocale} />
    </>
  );
}
