import { Link } from "@i18n/navigation";
import NavigationSection from "@navigation/navigation-section";
import FooterSection from "@shared/footer-section";
import { SectionContainer, SectionHeader } from "@shared/section-container";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations();

  return (
    <>
      <NavigationSection />
      <SectionContainer width="container" variant="loose">
        <SectionHeader title="404" />
        <div className="max-w-4xl mx-auto space-b-8 text-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-semibold text-foreground">{t("notFound.title")}</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t("notFound.description")}
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">{t("notFound.reasons.title")}</p>
              <ul className="text-muted-foreground space-y-2 max-w-md mx-auto">
                <li>• {t("notFound.reasons.incorrectUrl")}</li>
                <li>• {t("notFound.reasons.movedPage")}</li>
                <li>• {t("notFound.reasons.outdatedLink")}</li>
              </ul>
            </div>
            <div className="pt-8 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  {t("notFound.backToHome")}
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {t("notFound.viewProjects")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      <FooterSection />
    </>
  );
}
