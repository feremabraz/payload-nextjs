import { getPublications } from "@actions/publications";
import { Link } from "@i18n/navigation";
import type { Publication } from "@payload-types";
import { EmptyState } from "@shared/empty-state";
import { SectionContainer } from "@shared/section-container";
import { getTranslations } from "next-intl/server";

export default async function PublicationsSection() {
  const t = await getTranslations();
  const publications = await getPublications();
  return (
    <SectionContainer variant="default" width="container">
      <section className="flex flex-col items-center gap-8 md:gap-12 w-full">
        <h2 className="w-full text-center font-medium text-4xl md:text-6xl text-balance px-4 text-foreground">
          {t("studio.publications")}
        </h2>
        {publications.length === 0 ? (
          <EmptyState
            icon="📚"
            title="studio.noPublications"
            description="studio.noPublicationsDescription"
            action={
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                {t("common.contactUs")}
              </Link>
            }
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            {publications.map((publication: Publication) => (
              <div key={publication.id} className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-foreground uppercase">
                  {publication.title}
                </h3>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {publication.publication}
                </p>
                <p className="text-xs text-muted-foreground">{publication.date}</p>
                {publication.description && (
                  <p className="text-sm text-foreground leading-relaxed">
                    {publication.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </SectionContainer>
  );
}
