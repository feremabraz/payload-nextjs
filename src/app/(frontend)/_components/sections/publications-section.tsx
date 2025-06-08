import { publications } from "@shared-data/publications-data";
import { SectionContainer } from "@shared-layout/section-container";

export default function PublicationsSection() {
  return (
    <SectionContainer paddingY="lg" gap="xl" maxWidth="container">
      <section className="flex flex-col items-center gap-8 md:gap-12 w-full">
        <h2 className="w-full text-center font-medium text-4xl md:text-6xl text-balance px-4 text-foreground">
          PUBLICATIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {publications.map((publication) => (
            <div key={publication.id} className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-foreground uppercase">
                {publication.title}
              </h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {publication.publication}
              </p>
              <p className="text-xs text-muted-foreground">{publication.date}</p>
              {publication.description && (
                <p className="text-sm text-foreground leading-relaxed">{publication.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </SectionContainer>
  );
}
