import { getLegalPageBySlug } from "@actions/legal-pages";
import type { LegalPage } from "@payload-types";
import { EmptyState } from "@shared/empty-state";
import { SectionContainer, SectionHeader } from "@shared/section-container";
import Link from "next/link";

interface DynamicLegalPageProps {
  slug: string;
}

function LegalPageContent({ page }: { page: LegalPage }) {
  return (
    <div className="max-w-4xl mx-auto space-y-8 text-foreground">
      {/* Introduction */}
      <div className="space-y-4">
        {page.lastUpdated && (
          <p className="text-muted-foreground">
            Last updated:{" "}
            {new Date(page.lastUpdated).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}
        {page.introduction?.subtitle && (
          <p className="text-lg font-medium text-foreground">{page.introduction.subtitle}</p>
        )}
        {page.introduction?.content && (
          <p className="text-lg leading-relaxed">{page.introduction.content}</p>
        )}
      </div>

      {/* Sections */}
      {page.sections && page.sections.length > 0 && (
        <div className="space-y-6">
          {page.sections
            .sort((a, b) => (a.order || 0) - (b.order || 0))
            .map((section, index) => (
              <section key={`${section.heading}-${index}`} className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">{section.heading}</h2>

                {section.content && (
                  <p className="leading-relaxed text-muted-foreground">{section.content}</p>
                )}

                {/* Section list items */}
                {section.listItems && section.listItems.length > 0 && (
                  <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                    {section.listItems.map((listItem, listIndex) => (
                      <li key={`${section.heading}-item-${listIndex}`}>{listItem.item}</li>
                    ))}
                  </ul>
                )}

                {/* Subsections */}
                {section.subsections && section.subsections.length > 0 && (
                  <div className="space-y-3">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={`${section.heading}-sub-${subIndex}`} className="space-y-3">
                        <h3 className="text-xl font-medium text-foreground">
                          {subsection.subheading}
                        </h3>
                        {subsection.content && (
                          <p className="leading-relaxed text-muted-foreground">
                            {subsection.content}
                          </p>
                        )}
                        {subsection.listItems && subsection.listItems.length > 0 && (
                          <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                            {subsection.listItems.map((listItem, listIndex) => (
                              <li key={`${subsection.subheading}-item-${listIndex}`}>
                                {listItem.item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
        </div>
      )}

      {/* Contact Information */}
      {page.contactInfo?.includeContact && (
        <section className="space-y-4 pt-6 border-t border-muted">
          <h2 className="text-2xl font-semibold text-foreground">
            {page.contactInfo.heading || "Contact Us"}
          </h2>
          {page.contactInfo.content && (
            <p className="leading-relaxed text-muted-foreground">{page.contactInfo.content}</p>
          )}
        </section>
      )}
    </div>
  );
}

export default async function DynamicLegalPage({ slug }: DynamicLegalPageProps) {
  const page = await getLegalPageBySlug(slug);

  if (!page) {
    return (
      <SectionContainer width="container" variant="loose">
        <EmptyState
          icon="⚖️"
          title="Legal Page Not Found"
          description="The requested legal document could not be found."
          action={
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Go Home
            </Link>
          }
        />
      </SectionContainer>
    );
  }

  return (
    <SectionContainer width="container" variant="loose">
      <SectionHeader title={page.title} />
      <LegalPageContent page={page} />
    </SectionContainer>
  );
}
