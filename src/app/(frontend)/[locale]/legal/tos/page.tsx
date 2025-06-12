import DynamicLegalPage from "@components/legal/dynamic-legal-page";
import NavigationSection from "@navigation/navigation-section";
import FooterSection from "@shared/footer-section";

export default async function TermsPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const { locale } = params;

  return (
    <>
      <NavigationSection />
      <DynamicLegalPage slug="tos" />
      <FooterSection locale={locale} />
    </>
  );
}
