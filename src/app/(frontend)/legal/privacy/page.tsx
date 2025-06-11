import DynamicLegalPage from "@components/legal/dynamic-legal-page";
import NavigationSection from "@navigation/navigation-section";
import FooterSection from "@shared/footer-section";

export default async function PrivacyPage() {
  return (
    <>
      <NavigationSection />
      <DynamicLegalPage slug="privacy" />
      <FooterSection />
    </>
  );
}
