import { StudioCard } from "@cards/studio-card";
import { studioData } from "@shared-data/studio-data";
import { SectionContainer } from "@shared-layout/section-container";

export default function StudioInfoSection() {
  return (
    <SectionContainer paddingY="lg" gap="xl" maxWidth="container">
      <section className="flex flex-col items-center gap-8 md:gap-12 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {studioData.map((item) => (
            <StudioCard
              key={item.title}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </SectionContainer>
  );
}
