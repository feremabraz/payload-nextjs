import DynamicLegalPage from "@components/legal/dynamic-legal-page";
import NavigationSection from "@navigation/navigation-section";
import FooterSection from "@shared/footer-section";

export default async function TermsPage() {
  return (
    <>
      <NavigationSection />
      <DynamicLegalPage slug="tos" />
      <FooterSection />
    </>
  );
}
