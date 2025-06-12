import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";

interface LocaleDebugProps {
  pageLocale?: string;
}

export default async function LocaleDebug({ pageLocale }: LocaleDebugProps) {
  const locale = await getLocale();
  // Use pageLocale if available, otherwise fall back to getLocale()
  const actualLocale = pageLocale || locale;
  const t = await getTranslations({ locale: actualLocale });

  const testTranslations = {
    heroTitle: t("hero.title"),
    projectsTitle: t("projects.title"),
    newsletterTitle: t("newsletter.title"),
    companyName: t("company.name"),
    studioTitle: t("studio.title"),
  };

  return (
    <div className="fixed top-4 left-4 bg-red-500 text-white p-3 rounded text-xs z-50 max-w-xs">
      <div className="font-bold mb-2">🔍 Locale Debug</div>
      <div className="mb-1">
        <strong>getLocale():</strong> {locale}
      </div>
      {pageLocale && (
        <div className="mb-1">
          <strong>Page Locale:</strong> {pageLocale}
        </div>
      )}
      <div className="mb-1">
        <strong>Using for translations:</strong> {actualLocale}
      </div>
      <div className="mb-1">
        <strong>URL Path:</strong>{" "}
        {typeof window !== "undefined" ? window.location.pathname : "SSR"}
      </div>
      <div className="space-y-1 text-xs">
        <div>
          <strong>Hero:</strong> {testTranslations.heroTitle}
        </div>
        <div>
          <strong>Projects:</strong> {testTranslations.projectsTitle}
        </div>
        <div>
          <strong>Newsletter:</strong> {testTranslations.newsletterTitle}
        </div>
        <div>
          <strong>Company:</strong> {testTranslations.companyName}
        </div>
        <div>
          <strong>Studio:</strong> {testTranslations.studioTitle}
        </div>
      </div>
    </div>
  );
}
