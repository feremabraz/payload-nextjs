import { setRequestLocale } from "next-intl/server";
import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";

import type { Locale } from "@/types/locale";
import BudgetRequestWithImageSection from "@budget/budget-request-with-image-section";
import NavigationSection from "@navigation/navigation-section";
import FooterSection from "@shared/footer-section";
import { SectionContainer } from "@shared/section-container";
import TestimonialsSection from "@shared/testimonial-section";

import config from "@/payload.config";

export default async function BudgetPage(props: { params: Promise<{ locale: string }> }) {
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

  return (
    <>
      <NavigationSection />
      <SectionContainer width="container" variant="loose">
        <BudgetRequestWithImageSection locale={validLocale} />
        <TestimonialsSection locale={validLocale} />
      </SectionContainer>
      <FooterSection locale={validLocale} />
    </>
  );
}
