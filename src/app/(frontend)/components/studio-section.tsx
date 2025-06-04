import { studioData } from "@/app/shared/lib/studio-data";
import { SectionContainer, SectionHeader } from "@components/section";
import { StudioCard } from "@components/studio-card";

export default function StudioSection() {
  return (
    <SectionContainer>
      <SectionHeader title="STUDIO" linkHref="/studio" linkText="GO TO STUDIO" />
      <main className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-[12px]">
        {studioData.map((item) => (
          <StudioCard
            key={item.title}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            title={item.title}
            description={item.description}
          />
        ))}
      </main>
    </SectionContainer>
  );
}
