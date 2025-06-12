import DynamicLegalPage from "@components/legal/dynamic-legal-page";
import NavigationSection from "@navigation/navigation-section";
import FooterSection from "@shared/footer-section";
import { setRequestLocale } from "next-intl/server";

export default async function TermsPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const { locale } = params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <NavigationSection />
      <DynamicLegalPage slug="tos" />
      <FooterSection locale={locale} />
    </>
  );
}
